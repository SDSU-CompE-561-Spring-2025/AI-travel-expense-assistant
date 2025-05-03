import React, { useState } from "react";
import { Trip } from "@/hooks/useTrips";
import Link from "next/link";
import { Card } from "./ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface EditTripProps {
  trip: Trip;
  onSave: (updatedTrip: Trip) => void;
}

const EditTrip: React.FC<EditTripProps> = ({ trip, onSave }) => {
  const [title, setTitle] = useState(trip.title);
  const [description, setDescription] = useState(trip.description);
  const [startDate, setStartDate] = useState(trip.start_date);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedTrip: Trip = {
      ...trip,
      title,
      description,
      start_date: startDate,
    };
    onSave(updatedTrip); // e.g., send to API or update state
  };

  return (
    <Card className="p-6 max-w-md mx-auto">
      <div className="relative h-32 w-full mb-4 rounded-lg overflow-hidden">
        <Image
          src="/pattern.png"
          alt="Decorative pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="start_date">Start Date</Label>
          <Input
            id="start_date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <Button type="submit">Save Changes</Button>
      </form>

      <div className="mt-4">
        <Link href={`/trips/${trip.id}`}>
          <Button variant="outline">Cancel</Button>
        </Link>
      </div>
    </Card>
  );
};

export default EditTrip;
