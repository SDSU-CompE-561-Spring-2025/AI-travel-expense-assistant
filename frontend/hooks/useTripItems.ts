// hooks/useTripItems.ts
import { useState, useEffect, useCallback } from 'react';
import {
  TripItem,
  NewTripItem,
  fetchTripItems,
  createTripItem,
  updateTripItem,
  deleteTripItem,
} from '@/lib/api/tripItems';

export function useTripItems(tripId: number) {
  const [items, setItems] = useState<TripItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchTripItems(tripId);
      setItems(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [tripId]);

  useEffect(() => {
    if (tripId != null) {
      refetch();
    }
  }, [tripId, refetch]);

  const add = useCallback(
    async (data: NewTripItem): Promise<TripItem> => {
      setLoading(true);
      setError(null);
      try {
        const newItem = await createTripItem(tripId, data);
        setItems((prev) => [...prev, newItem]);
        return newItem;
      } catch (err) {
        setError(err as Error);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [tripId]
  );

  const update = useCallback(
    async (
      itemId: number,
      data: Partial<NewTripItem>
    ): Promise<TripItem> => {
      setLoading(true);
      setError(null);
      try {
        const updated = await updateTripItem(tripId, itemId, data);
        setItems((prev) => prev.map((i) => (i.id === itemId ? updated : i)));
        return updated;
      } catch (err) {
        setError(err as Error);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [tripId]
  );

  const remove = useCallback(
    async (itemId: number): Promise<void> => {
      setLoading(true);
      setError(null);
      try {
        await deleteTripItem(tripId, itemId);
        setItems((prev) => prev.filter((i) => i.id !== itemId));
      } catch (err) {
        setError(err as Error);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [tripId]
  );

  return { items, loading, error, refetch, add, update, remove };
}
