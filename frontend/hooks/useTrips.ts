import React from 'react';
import { useState, useEffect } from 'react';

 export interface Trip {
  description: string;
  end_date: Date;
  id: number;
  start_date: Date;
  title: string;
}

export function useUserTrips() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTrips = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const token = localStorage.getItem('access_token');
      if (!token) {
        throw new Error('No authentication token found');
      }
      
      const response = await fetch('http://localhost:8000/trip/trips', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch trips');
      }

      const data = await response.json();
      setTrips(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return /*token ?*/ { trips, loading, error, refetch: fetchTrips }/* : {trips:[], loading: false, error: null, refetch : () => {}}*/;
} 