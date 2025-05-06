'use client';
import Navbar from "@/components/navbar";
import TripCard from "@/components/tripCard";
import { Button } from "@/components/ui/button";
import { useUserTrips } from "@/hooks/useTrips";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Home() {
  const [token,setToken] = useState<string | null>("");
  const {trips, loading, error, refetch} = useUserTrips(/*token*/);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent immediate navigation
    alert('Please login to create a trip');
  }

  useEffect(() => {
    setToken(localStorage.getItem('access_token'));
  },[]);

  console.log(trips);
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-3 mt-12 justify-center items-center">
        <div className="flex  gap-4 w-full items-center justify-center">
          {trips.map((trip) => (
            <TripCard key = {trip.id} {...trip} />
          ))}
        </div>
        <span className="text-sm text-gray-500">
          Ready for a new adventure?
        </span>
          {token ? (<Link href="/new-trip">
              <Button size="lg">
                + Create a new trip
            </Button>
          </Link>) : (<Link onClick={handleClick} href="">
              <Button size="lg">
                + Create a new trip
            </Button>
          </Link>)}
      </main>
      <div className="mb-22" />
      <Footer />
    </>
  );
}