import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { TravelCalendar } from "@/components/travel-calendar";

export default function Calendar() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start- items-center sm:items-start">
        <TravelCalendar />
      </main>
      <Footer />
    </>
  );
}