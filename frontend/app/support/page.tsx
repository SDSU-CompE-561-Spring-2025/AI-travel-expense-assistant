import Navbar from "@/components/navbar";
import SupportPage from "@/components/support-cards";

export default function Home() {
  return (
      <>
      <Navbar/>
      
      <SupportPage />
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
      </>
  );
}