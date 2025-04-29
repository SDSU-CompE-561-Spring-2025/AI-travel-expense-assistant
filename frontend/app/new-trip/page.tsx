import Navbar from "@/components/navbar";
import ManageTripItemModal from "@/components/manage-trip-item-modal"
import { useState } from "react";

export default function NewTrip() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        Manage Trip Items
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 w-full max-w-md shadow-lg">
              <ManageTripItemModal/>
            </div>
          </div>
        )}

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
      </>
  );
}