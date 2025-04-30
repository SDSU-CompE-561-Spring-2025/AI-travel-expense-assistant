'use client';
import Navbar from "@/components/navbar";
import TripCard from "@/components/tripCard";
import { Button } from "@/components/ui/button";
import { useUserTrips } from "@/hooks/useTrips";
import Link from "next/link";
export default function Home() {
 const {trips, loading, error, refetch} = useUserTrips();
    console.log(trips);
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-3 mt-12 justify-center items-center ">
        <div className="flex  gap-4 w-full items-center justify-center">
          {trips.map((trip) => (
            <TripCard key={trip.id} {...trip} />
          ))}
        </div>
        <span className="text-sm text-gray-500">
          Ready for a new adventure?
        </span>
          <Link href="/new-trip">
            <Button size="lg">
              + Create a new trip
            </Button>
          </Link>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </>
  );
}