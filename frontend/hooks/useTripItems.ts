'use client';

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { TripItem, NewTripItem, fetchTripItems, updateTripItem, deleteTripItem, addTripItem } from '@/lib/api/tripItems';

export function useTripItems(tripId: number) {
  const qc = useQueryClient();
  
  const {
    data: items = [],
    isLoading,
    error,
  } = useQuery<TripItem[], Error>({
    queryKey: ["tripItems", tripId],
    queryFn: () => fetchTripItems(tripId),
  });

  const add = useMutation({
    mutationFn: (item: NewTripItem) => addTripItem(tripId, item),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["tripItems", tripId] }),
  });

  const update = useMutation({
    mutationFn: ({ id, item }: { id: number; item: NewTripItem }) => updateTripItem(tripId, id, item),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["tripItems", tripId] }),
  });

  const remove = useMutation({
    mutationFn: (id: number) => deleteTripItem(tripId, id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["tripItems", tripId] }),
  });

  return {
    items,
    isLoading,
    error,
    add: add.mutateAsync,
    update: update.mutateAsync,
    remove: remove.mutateAsync,
  };
}