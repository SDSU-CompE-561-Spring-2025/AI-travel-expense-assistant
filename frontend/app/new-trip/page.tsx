"use client";

import Navbar from "@/components/navbar";
import EditTrip from "@/components/EditTrip";  
import ManageTripItemModal from "@/components/manage-trip-item-modal"
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useParams } from "next/navigation";
import { Trip } from "@/hooks/useTrips";

export default function NewTrip() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const params = useParams();
  const tripID = Number(params.trip_id);

  return (
      <>
      <Navbar/>
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        New trip

        {/* Temp button for toggling modal*/}
        <button 
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-purple-500 text-white rounded-sm hover:bg-purple-600"    
        >
        Manage Trip Item
        </button>

        {/* BRUH */}
        <div className="p-8 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Edit Trip</h1>
          {/* 3️ Render your component and pass the `trip` props */}

        </div>
        {/* END BRUH */}

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-start pt-60 z-40">
            <div className="bg-white p-6 w-full max-w-md border-5 border-purple-500 overflow-y-auto mx-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.75)] ">
              <ManageTripItemModal onClose={() => setIsModalOpen(false)} tripID={tripID} />
            </div>
          </div>
        )}

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
      </>
  );
}