import Navbar from "@/components/navbar";
import {TravelCalendar} from "@/components/travel-calendar"

export default function Calendar() {
  return (
      <>
      <Navbar/>
      <main className="flex flex-col gap-[32px] row-start-  items-center sm:items-start">
        <TravelCalendar />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
      </>
  );
}