import Navbar from "@/components/navbar";
import Footer from "@/components/footer"

export default function Home() {
  return (
      <>
      <Navbar/>
      <main className="flex flex-col gap-[32px] row-start-  items-center sm:items-start">
        Support
      </main>
      <Footer />
      </>
  );
}