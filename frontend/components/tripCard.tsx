import { Trip } from "@/hooks/useTrips";
import { Card } from "./ui/card";
import Image from "next/image";

const TripCard = (trip: Trip) => {
    return (
        <Card className="overflow-hidden py-0">
            <div className="relative h-32 w-full rounded-t-lg overflow-hidden">
                <Image 
                    src="/pattern.png" 
                    alt="Decorative pattern"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="p-4">
                <h1 className="text-xl font-semibold">{trip.title}</h1>
                <p className="text-gray-600 mt-2">{trip.description}</p>
                <div className="mt-4 text-sm text-gray-500">
                    <p>Start: {new Date(trip.start_date).toLocaleDateString()}</p>
                    <p>End: {new Date(trip.end_date).toLocaleDateString()}</p>
                </div>
            </div>
        </Card>
    )
}

export default TripCard;