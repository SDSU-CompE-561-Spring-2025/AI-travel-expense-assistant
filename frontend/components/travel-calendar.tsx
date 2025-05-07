"use client";

import { useState } from "react";
import { useUserTrips, Trip } from "@/hooks/useTrips";
import { MonthCalendar } from "./ui/month-calendar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Plane, Map, Compass } from "lucide-react";

// Sample travel events data
const travelEvents = [
  { id: 1, title: "Paris Weekend", date: new Date(2025, 4, 15), color: "bg-blue-500" },
  { id: 2, title: "Beach Vacation", date: new Date(2025, 4, 22), color: "bg-amber-500" },
  { id: 3, title: "Mountain Retreat", date: new Date(2025, 5, 5), color: "bg-emerald-500" },
  { id: 4, title: "City Tour", date: new Date(2025, 5, 18), color: "bg-purple-500" },
  { id: 5, title: "Island Hopping", date: new Date(2025, 6, 10), color: "bg-rose-500" },
  { id: 6, title: "Safari Adventure", date: new Date(2025, 6, 25), color: "bg-teal-500" },
];

// Colors for event categories
const eventColors = [
  "bg-blue-500",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-purple-500",
  "bg-rose-500",
  "bg-teal-500",
  "bg-pink-500",
  "bg-indigo-500",
];

export function TravelCalendar() {
  const today = new Date();
  const [startMonth, setStartMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [focusedMonth, setFocusedMonth] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const { trips, loading, error } = useUserTrips();

  const prevMonths = () => {
    setStartMonth(new Date(startMonth.getFullYear(), startMonth.getMonth() - 3, 1));
  };

  const nextMonths = () => {
    setStartMonth(new Date(startMonth.getFullYear(), startMonth.getMonth() + 3, 1));
  };

  const months = Array.from({ length: 6 }, (_, i) => {
    return new Date(startMonth.getFullYear(), startMonth.getMonth() + i, 1);
  });

  const getEventsForDate = (date: Date) => {
    return (trips ?? []).filter((trip: Trip) => {
      const start = new Date(trip.start_date);
      const end = new Date(trip.end_date);
      return date >= start && date <= end;
    }).map((trip) => ({
      ...trip,
      date: new Date(trip.start_date),
      color: eventColors[trip.id % eventColors.length],
    }));
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const toggleFocusMonth = (index: number) => {
    setFocusedMonth(focusedMonth === index ? null : index);
  };

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <div className="space-y-6 px-4 md:px-10 py-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Your travel timeline</h1>
          <p className="text-gray-500 mt-1">An overview of your next adventures!</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={prevMonths}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={nextMonths}>
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>

      {loading && <p className="text-gray-500">Loading trips...</p>}
      {error && <p className="text-red-500">Failed to load trips: {error}</p>}

      {selectedDate && (
        <Card className="p-4 mt-6">
          <div className="flex items-center mb-4">
            <Compass className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="text-lg font-medium">
              Selected:{" "}
              {selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h3>
          </div>

          {selectedDateEvents.length > 0 ? (
            <div className="space-y-3">
              <h4 className="font-medium text-slate-700">Travel Plans:</h4>
              {selectedDateEvents.map((event) => (
                <div key={event.id} className="flex items-center p-3 rounded-md bg-slate-50">
                  <div
                    className={`w-3 h-3 rounded-full ${eventColors[event.id % eventColors.length]} mr-3`}
                  />
                  <div className="flex items-center">
                    <Plane className="h-4 w-4 text-slate-500 mr-2" />
                    <span>{event.title}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-slate-500 flex items-center">
              <Map className="h-4 w-4 mr-2" />
              <span>No travel plans for this date. Add a new adventure?</span>
            </div>
          )}
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {months.map((month, index) => (
          <Card
            key={`${month.getFullYear()}-${month.getMonth()}`}
            className={`overflow-hidden transition-all duration-300 ${
              focusedMonth === index ? "col-span-1 md:col-span-2 lg:col-span-3 shadow-lg" : ""
            }`}
          >
            <MonthCalendar
              month={month}
              events={(trips ?? []).map((trip) => ({
                id: trip.id,
                title: trip.title,
                start: new Date(trip.start_date),
                end: new Date(trip.end_date),
                color: eventColors[trip.id % eventColors.length],
              }))}
              onDateSelect={handleDateSelect}
              selectedDate={selectedDate}
              expanded={focusedMonth === index}
              onToggleExpand={() => toggleFocusMonth(index)}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
