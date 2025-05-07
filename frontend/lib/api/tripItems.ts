export interface TripItem {
    id: number;
    trip_id: number;
    title: string;
    start_date: string;
    end_date: string;
    item_type: 'accommodation' | 'transportation' | 'activity' | 'other';
    cost?: number;
    description?: string;
    web_link?: string;
  }
  
  export type NewTripItem = Omit<TripItem, "id" | "trip_id">;
  
  const BASE = '/api/item';
    
  async function handleResponse<T>(res: Response): Promise<T> {
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText);
    }
    const body = await res.json();
    return body as T;
  }
  
  function getAuthToken(): string {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('Authentication token not found');
    }
    return token;
  }

  export async function fetchTripItems(tripId: number): Promise<TripItem[]> {
    const token = getAuthToken();
    const res = await fetch(`${BASE}/${tripId}/items`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse<TripItem[]>(res);
  }
  
  export async function addTripItem(
    tripId: number,
    item: NewTripItem
  ): Promise<TripItem> {
    const token = getAuthToken();
    const res = await fetch(`${BASE}/${tripId}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });
    return handleResponse<TripItem>(res);
  }
  
  export async function updateTripItem(
    tripId: number,
    itemId: number,
    item: Partial<NewTripItem>
  ): Promise<TripItem> {
    const token = getAuthToken();
    const res = await fetch(`${BASE}/${tripId}/items/${itemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });
    return handleResponse<TripItem>(res);
  }
  
  export async function deleteTripItem(
    tripId: number,
    itemId: number,
  ): Promise<void> {
    const token = getAuthToken();
    const res = await fetch(`${BASE}/${tripId}/items/${itemId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText);
    }
    if (!res.ok) {
      const errorText = await res.text();
        throw new Error(errorText);
      }
      return;
  }