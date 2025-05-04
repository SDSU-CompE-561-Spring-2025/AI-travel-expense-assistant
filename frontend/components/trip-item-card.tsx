"use client";
import React, { useEffect, useState } from "react";

// Defines the shape of a TripItem based on backend schema
export interface TripItem {
  id: number;
  trip_id: number;
  title: string;
  date: string;
  item_type: "accommodation" | "transportation" | "activity" | "other";
  description?: string;
  cost: number;
  web_link?: string;
}

interface TripItemCardProps {
  tripId: number;
  itemId: number;
  /**
   * Called when the card is clicked. Use this to open a details modal or navigate.
   */
  onClick?: () => void;
}

export default function TripItemCard({ tripId, itemId, onClick }: TripItemCardProps) {
  const [item, setItem] = useState<TripItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchItem() {
      try {
        const res = await fetch(
          `http://localhost:8000/item/${tripId}/${itemId}`
        );
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data: TripItem = await res.json();
        setItem(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchItem();
  }, [tripId, itemId]);

  if (loading) return <div>Loading item...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!item) return <div>No item found.</div>;

  return (
    <div
      onClick={onClick}
      className="border rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-lg transition-all"
    >
      <h2 className="text-lg font-semibold">{item.title}</h2>
      <p className="text-sm text-gray-600">Type: {item.item_type}</p>
      {item.description && <p className="mt-2">{item.description}</p>}
      <p className="mt-2">Cost: ${item.cost.toFixed(2)}</p>
      <p>Date: {new Date(item.date).toLocaleDateString()}</p>
      {item.web_link && (
        <p className="mt-2">
          <a
            href={item.web_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View More
          </a>
        </p>
      )}
    </div>
  );
}
