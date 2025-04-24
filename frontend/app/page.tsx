import Navbar from "@/components/navbar";

export default function Home() {
  return (
      <>
      <Navbar/>
      <main className="flex flex-col gap-8 items-center sm:items-start">
        Home
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
      </>
  );
}