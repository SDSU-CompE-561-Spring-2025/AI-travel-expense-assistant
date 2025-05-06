import { Trip } from "@/hooks/useTrips";
import Link from "next/link";
import { Card } from "./ui/card";
import Image from "next/image";

const TripCard = (trip: Trip) => {
    const getDaysUntilTrip = () => {
        const today = new Date();
        const tripStart = new Date(trip.start_date);
        const diffTime = tripStart.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const daysUntilTrip = getDaysUntilTrip();

    return (
        <Link href={`/trips/${trip.id}`}>
        <Card className="overflow-hidden py-0 min-w-64">
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
                <span>Location</span>
                <h1 className="text-xl font-semibold">{trip.title}</h1>
                <p className="text-gray-800 mt-2">{trip.description}</p>
                <div className="flex flex-col gap-2 mt-8">
                    <span className="text-sm text-gray-800">Countdown</span>
                    <p className="text-xs text-gray-500">
                        {daysUntilTrip > 0 
                            ? `${daysUntilTrip} days away!` 
                            : daysUntilTrip === 0 
                                ? "Trip starts today!" 
                                : "Trip has ended"}
                    </p>
                </div>
            </div>
        </Card>
        </Link>
    )
}

export default TripCard;