"use client";

import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/navbar";
import EditTrip from "@/components/EditTrip";
import ManageTripItemModal from "@/components/manage-trip-item-modal";
import TripItemHeader from "@/components/trip-item-header";
import { Trip } from "@/hooks/useTrips";
import { TripItem } from "@/lib/api/tripItems";
import { useTripItems } from "@/hooks/useTripItems";
import { useParams } from "next/navigation";

// Placeholder trip data—swap out for real fetch or route-based data as needed
// const dummyTrip: Trip = {
//   id: 1,
//   title: "Sample Trip",
//   description: "This is a placeholder trip for UI testing.",
//   start_date: "2025-06-01",
//   end_date: "2025-06-10",
// };

export default function EditTripPage() {
  const params = useParams();
  const tripId = Number(params.id);
  console.log(tripId);
  const [token, setToken] = useState<string | null>("");
  const [trip,setTrip] = useState<Trip>({
    id: tripId,
    title: "",
    description: "",
    start_date: new Date().toString(),
    end_date: new Date().toString()
  });

  const { items, isLoading, error } = useTripItems(tripId);
  const [selectedItem, setSelectedItem] = useState<TripItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // Group items by day
  const groups = useMemo(() => {
    const acc: Record<string, TripItem[]> = {};
    items.forEach(item => {
      const start = new Date(item.start_date);
      const end   = new Date(item.end_date);
      for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
        // format YYYY-MM-DD in local time
        const y = dt.getFullYear();
        const m = String(dt.getMonth() + 1).padStart(2, "0");
        const d = String(dt.getDate()).padStart(2, "0");
        const key = `${y}-${m}-${d}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
      }
    });
    return acc;
  }, [items]);

  // Sort by start date time stamps
  const sortedDays = useMemo(() => {
    const keys = Object.keys(groups);
    if (!keys.length) return [];

    // sort the existing dates
    keys.sort((a, b) => {
      const [yA, mA, dA] = a.split("-").map(Number);
      const [yB, mB, dB] = b.split("-").map(Number);
      return new Date(yA, mA - 1, dA).getTime() - new Date(yB, mB - 1, dB).getTime();
    });

    const [startKey, endKey] = [keys[0], keys[keys.length - 1]];
    const [y1, m1, d1] = startKey.split("-").map(Number);
    const [y2, m2, d2] = endKey.split("-").map(Number);
    const start = new Date(y1, m1 - 1, d1);
    const end = new Date(y2, m2 - 1, d2);

    const all: string[] = [];
    for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
      // MANUAL LOCAL FORMAT: avoids timezone shift bugs
      const y = dt.getFullYear();
      const m = String(dt.getMonth() + 1).padStart(2, "0");
      const d = String(dt.getDate()).padStart(2, "0");
      all.push(`${y}-${m}-${d}`);
    }
    return all;
  }, [groups]);

  const categories = ['activity', 'transportation', 'accommodation'] as const;

  const closeModal = () => {
    setSelectedItem(null);
    setIsCreating(false);
    };

  useEffect(() => {
    setToken(localStorage.getItem('access_token'));
    const createTrip = async () => {
      try{
        const response = await fetch(`http://localhost:8000/trips/${tripId}/edit`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
        const oldTrip = await response.json();
        setTrip(oldTrip);
      }catch(err){
        console.error("Failed to create trip", err);
      }
    }
  },[]);



  useEffect(() => {
      setToken(localStorage.getItem('access_token'));
      const fetchTrip = async () => {
        try{
          const response = await fetch(`http://localhost:8000/trips/${trip.id}`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          })
          const oldTrip = await response.json();
          setTrip(oldTrip);
        }catch(err){
          console.error("Failed to create trip", err);
        }
      }
      fetchTrip();
    },[]);

  return (
    <>
      <Navbar />
      <main className="p-8 space-y-6 max-w-4xl mx-auto">
        {/* Trip form */}
        <h1 className="text-2xl font-bold">Edit Trip: {trip.title}</h1>
        <EditTrip />

        {/* Add Item Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setIsCreating(true)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            + Add Item
          </button>
        </div>

        <TripItemHeader/>

        {/* Loading/Error */}
        {isLoading && <p>Loading items...</p>}
        {error && <p className="text-red-600">Error: {error.message}</p>}

        {/* Items by day */}
        <section className="space-y-4">
        {sortedDays.map((day, index) => {
          // if a date had no items, fall back to an empty array
          const itemsForDay = groups[day] ?? [];            // split "YYYY-MM-DD" into numbers, then build a local Date
          const [year, month, dayOfMonth] = day.split('-').map(Number)
          const dateObj = new Date(year, month - 1, dayOfMonth)

            return (
              <div key={day} className="flex border rounded-lg overflow-hidden">
                <div className="w-32 bg-gray-100 p-4 border-r">
                  <div className="font-semibold">Day {index + 1}</div>
                  <div className="text-sm">
                  {dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </div>
                </div>
                {categories.map((cat) => (
                  <div key={cat} className="flex-1 p-4 border-r last:border-none">
                    {itemsForDay
                      .filter((it) => it.item_type === cat)
                      .map((it) => (
                        <div
                          key={it.id}
                          className="mb-1 cursor-pointer hover:underline"
                          onClick={() => setSelectedItem(it)}
                        >
                          {it.title}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            );
          })}
        </section>
      </main>

      {/* ManageTripItemModal for create/edit */}
      {(isCreating || selectedItem) && (
        <div className="fixed inset-0 z-40 bg-black/50 flex items-center justify-center">
          <div className="bg-white border-4 border-purple-500 rounded-lg shadow-2xl w-full max-w-md p-6">
            <ManageTripItemModal
              tripID={tripId}
              item={selectedItem ?? undefined}
              onClose={closeModal}
            />
          </div>
        </div>
      )}
    </>
  );
}
