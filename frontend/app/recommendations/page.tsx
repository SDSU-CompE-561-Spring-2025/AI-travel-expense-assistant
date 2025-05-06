import Navbar from "@/components/navbar";
import {RecommendationsPage} from "@/components/recommendations"
import Footer from "@/components/footer";

export default function Home() {
  return (
      <>
      <Navbar/>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      </main>

      <RecommendationsPage />
      
      <Footer />

      </>
  );
}