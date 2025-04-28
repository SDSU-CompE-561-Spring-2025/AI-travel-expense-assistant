'use client';
import Navbar from "@/components/navbar";
import { useUserTrips } from "@/hooks/useTrips";

export default function Home() {
 const {trips, loading, error, refetch} = useUserTrips();
    console.log(trips);
  return (
      <>
      <Navbar/>
      <main className="flex flex-col gap-8 items-center sm:items-start">
        {trips.map((trip) => (
          <div key={trip.id}>
            <h1>{trip.title}</h1>
            <p>{trip.description}</p>
            <p>{trip.start_date}</p>
            <p>{trip.end_date}</p>
           
          </div>
        ))}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
      </>
  );
}