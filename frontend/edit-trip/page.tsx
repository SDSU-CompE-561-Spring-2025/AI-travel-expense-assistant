import EditTrip from "@/components/EditTripCard";
import { Trip } from "@/hooks/useTrips";
import { useEffect, useState } from "react";

const Page = () => {
  const [trip,setTrip] = useState<Trip|null>(null);

  const handleSave = async (updatedTrip: Trip) => {
    // Call API to update trip
    try{
        const response = await fetch(`/api/trips/${updatedTrip.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedTrip)
        });
        if(!response.ok){
            throw new Error("Failed to update trip");
        }else{
            console.log("Trip updated successfully");
        }
    }catch(error){
        console.error("Error while updating trip:", error);
    }
    // Navigate back or show success message
  };

  return <EditTrip trip={trip} onSave={handleSave} />;
};

export default Page;