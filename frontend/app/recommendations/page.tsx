import {Navbar} from "@/components/navbar";
import {RecommendationsPage} from "@/components/recommendations"


export default function Home() {
  return (
      <>
      <Navbar/>
      <main className="flex flex-col gap-[32px] row-start-  items-center sm:items-start">
        Recommendations
      </main>

      <RecommendationsPage />
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
      </>
  );
}