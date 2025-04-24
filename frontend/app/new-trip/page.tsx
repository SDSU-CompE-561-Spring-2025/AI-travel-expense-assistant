import Navbar from "@/components/navbar";

export default function NewTrip() {
  return (
      <>
      <Navbar/>
      <main className="flex flex-col gap-[32px] row-start-  items-center sm:items-start">
        New trip
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
      </>
  );
}