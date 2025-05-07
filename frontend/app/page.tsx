'use client';
import Navbar from "@/components/navbar";
import TripCard from "@/components/tripCard";
import { Button } from "@/components/ui/button";
import { useUserTrips } from "@/hooks/useTrips";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import Footer from "@/components/footer";
export default function Home() {
 const {trips, loading, error, refetch} = useUserTrips();
    const {user} = useAuth();
    console.log(trips);
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-3 mt-12 justify-center items-center">
        <div className="flex  gap-4 w-full items-center justify-center flex-wrap">
          {trips.map((trip) => (
            <Link href={`/trips/${trip.id}`}>
              <TripCard key={trip.id} {...trip} />
            </Link>
          ))}
        </div>
        {user && (
          <>
            <span className="text-sm text-gray-500">
          Ready for a new adventure?
        </span>
          <Link href="/new-trip">
            <Button size="lg">
              + Create a new trip
            </Button>
          </Link>
          </>
        )}
        {!user && (
          <span className="text-lg text-gray-500 h-64 mt-20 ">
            Login or signup to  view and create trips
          </span>
        )}
      </main>
      <div className="mb-22" />
      <Footer />
    </>
  );
}