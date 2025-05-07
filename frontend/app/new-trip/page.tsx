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
    start_date: new Date().toString(),
    end_date: new Date().toString()
  });

  useEffect(() => {
    setToken(localStorage.getItem('access_token'));
    const createTrip = async () => {
      try{
        const response = await fetch('http://localhost:8000/trips', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: newTrip.title,
            description: newTrip.description,
            start_date: newTrip.start_date,
            end_date: newTrip.end_date
          })
        });
        const blankTrip = await response.json();
        setNewTrip(blankTrip);
      }catch(err){
        console.error("Failed to create trip", err);
      }
    }
    createTrip();
  },[])

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
              <h1 className="text-2xl font-bold">New Trip: {newTrip.title}</h1>
              <EditTrip/>
            </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
      </>
  );
}