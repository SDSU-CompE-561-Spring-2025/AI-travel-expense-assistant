import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="bg-branded-600">
        <div className="flex w-full justify-between items-center">
              <div className="flex flex-col items-center gap-4 branded-600">
                <h1>Travel Buddy!</h1>
                <span>your simple travel assistant</span>
              </div>
              <Button className=" text-white">Sign In</Button>
          </div> 
      </nav>
      <main className="flex flex-col gap-[32px] row-start-  items-center sm:items-start">
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
