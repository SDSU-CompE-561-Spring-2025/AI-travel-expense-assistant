import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


const Navbar = () => {
    return (
 <nav className=" w-full">
        <div className="flex w-full px-8 py-4 justify-between items-center">
              <div className="flex  flex-col items-center gap-4 branded-600">
                <h1 className="text-xl font-bold branded-600">Travel Buddy!</h1>
                <span className="text-lg branded-600">your simple travel assistant</span>
              </div>
              <Link href="/login">
                    <Button className=" text-white">Sign In</Button>
                </Link>
          </div> 
          <div className="flex px-8 w-full justify-between items-center bg-branded-600">
              <div className="flex  items-center gap-4 py-4 ">
                  <Link href="/">Home</Link>
                  <Link href="/new-trip">New Trip</Link>
                  <Link href="/calendar">Calendar view</Link>
                  <Link href="/recommendations">recommendations</Link>

              </div>
              <span>support</span>
          </div> 
      </nav>
    )
}

export {Navbar};
