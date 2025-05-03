import React, { useState } from "react";
import { Trip } from "@/hooks/useTrips";
import Link from "next/link";
import { Card } from "./ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function EditTrip(trip: Trip){
  const [newTitle, setNewTitle] = useState(trip.title);
  const [newDescription, setNewDescription] = useState(trip.description);
  const [newStart, setNewStart] = useState(trip.start_date);
  const [newEnd, setNewEnd] = useState(trip.end_date);

  const handleSave = () => {
    // Call API to update trip
    // try{
    //   const response = await fetch(`/api/trips/${trip.id}`, {
    //     method: "PUT",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(updatedTrip)
    //   });
    //   if(!response.ok){
    //       throw new Error("Failed to update trip");
    //   }
    //   const data = await response.json();
    //   setTrip(data);
    // }catch(error){
    //   console.error("Error while updating trip:", error);
    // }
  }


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

      <form className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="start_date">Start Date</Label>
          <Input
            id="start_date"
            type="date"
            value={newStart}
            onChange={(e) => setNewStart(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="end_date">End Date</Label>
          <Input
            id="end_date"
            type="date"
            value={newEnd}
            onChange={(e) => setNewEnd(e.target.value)}
          />
        </div>

        <Link href={`/trips/${trip.id}`}>
          <Button onClick={handleSave} type="submit">Save Changes</Button>
        </Link>
      </form>

      <div className="mt-4">
        <Link href={`/trips/${trip.id}`}>
          <Button variant="outline">Cancel</Button>
        </Link>
      </div>
    </Card>
  );
};