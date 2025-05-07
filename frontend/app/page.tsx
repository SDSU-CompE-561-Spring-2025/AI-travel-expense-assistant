'use client';
import Navbar from "@/components/navbar";
import TripCard from "@/components/tripCard";
import { Button } from "@/components/ui/button";
import { useUserTrips } from "@/hooks/useTrips";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Home() {
  const [token,setToken] = useState<string | null>("");
  const {trips, loading, error, refetch} = useUserTrips();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent immediate navigation
    alert('Please login to create a trip');
  }

  useEffect(() => {
    setToken(localStorage.getItem('access_token'));
  },[]);

  console.log(trips);
    const {user} = useAuth();
    console.log(trips);
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-3 mt-12 justify-center items-center">
        <div className="flex gap-4 w-full items-center justify-center flex-wrap">
          {trips.map((trip) => (
            <TripCard key={trip.id} {...trip} />
          ))}
        </div>
  
        {user ? (
          <>
            <span className="text-sm text-gray-500">
              Ready for a new adventure?
            </span>
  
            {token ? (
              <Link href="/new-trip">
                <Button size="lg">+ Create a new trip</Button>
              </Link>
            ) : (
              <span className="text-sm text-red-500">
                You need a valid token to create a trip.
              </span>
            )}
          </>
        ) : (
          <span className="text-lg text-gray-500 h-64 mt-20">
            Login or signup to view and create trips
          </span>
        )}
      </main>
  
      <div className="mb-22" />
      <Footer />
    </>
  )
}