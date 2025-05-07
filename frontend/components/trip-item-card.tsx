"use client";
import React, { useEffect, useState } from "react";
import { useTripItems } from "@/hooks/useTripItems";

// Defines the shape of a TripItem based on backend schema
export interface TripItem {
  id: number;
  trip_id: number;
  title: string;
  start_date: string;    
  end_date: string;
  item_type: "accommodation" | "transportation" | "activity" | "other";
  description?: string;
  cost: number;
  web_link?: string;
}

interface TripItemCardProps {
  tripId: number;
  itemId: number;

  onClick?: () => void;
}

export default function TripItemCard({ tripId, itemId, onClick }: TripItemCardProps) {
  const { items, isLoading, error } = useTripItems(tripId);
  const item = items.find((i) => i.id === itemId) ?? null;
  
  if (isLoading) return <div>Loading item...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;
  if (!item) return <div>No item found.</div>;

  return (
    <div
      onClick={onClick}
      className="border rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-lg transition-all"
    >
      <h2 className="text-lg font-semibold">{item.title}</h2>
      <p className="text-sm text-gray-600">Type: {item.item_type}</p>
      {item.description && <p className="mt-2">{item.description}</p>}
      <p className="mt-2">Cost: ${item.cost !== undefined ? item.cost.toFixed(2) : "0.00"}</p>
      <p className="mt-2 text-sm">
        {new Date(item.start_date).toLocaleDateString()} –{" "}
        {new Date(item.end_date).toLocaleDateString()}
      </p>
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
