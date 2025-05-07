"use client";

import Navbar from "@/components/navbar";
import EditTrip from "@/components/EditTrip";  
import ManageTripItemModal from "@/components/manage-trip-item-modal"
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { Trip } from "@/hooks/useTrips";
import { TripItem } from "@/lib/api/tripItems";
import { useTripItems } from "@/hooks/useTripItems";

export default function NewTrip() {
  const [token, setToken] = useState<string | null>("");
  const [newTrip, setNewTrip] = useState<Trip>({
    id: -1,
    title: "",
    description: "",
    start_date: new Date(),
    end_date: new Date()
  });


  const { items, isLoading, error } = useTripItems(newTrip.id);
  const [selectedItem, setSelectedItem] = useState<TripItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // Group items by day
  const groups = items.reduce((acc: Record<string, TripItem[]>, item) => {
    const dayKey = item.start_date.split('T')[0];
    acc[dayKey] = acc[dayKey] ?? [];
    acc[dayKey].push(item);
    return acc;
  }, {});

  const sortedDays = Object.keys(groups).sort();
  const categories = ['activity', 'transportation', 'accommodation'] as const;

  const closeModal = () => {
    setSelectedItem(null);
    setIsCreating(false);
  };



  return (
      <>
      <Navbar />
            <main className="p-8 space-y-6 max-w-4xl mx-auto">
              {/* Trip form */}
              <h1 className="text-2xl font-bold">New Trip:</h1>
              <EditTrip mode='create'/>
            </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
      </>
  );
}