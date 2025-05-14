'use client';

import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { Button } from './ui/button';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation'
import { HandCoins } from 'lucide-react';
import Image from "next/image";

export default function Navbar() {
  const location = usePathname();
  const { isAuthenticated, logout, fetchUser, user } = useAuth();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent immediate navigation
    alert('Please login to create a trip');
  }

  useEffect(() => {
    if (isAuthenticated)
    fetchUser();
  }, []);

  return (
    <nav className="w-full">
      <div className="flex w-full px-8 py-4 justify-between items-center">
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png" 
              alt="Travel Buddy Header Logo"
              height={50}
              width={50}
              priority
            /> 
            <h1 className="text-4xl font-bold text-[#A279EA]">Travel Buddy</h1>
            <span className="text-lg text-[#A279EA]"> - your simple travel planning assistant is here to help!</span>
          </div>
          
        </div>
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
            <span>
              Welcome, {user?.username}!
            </span>
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>

            </>
          ) : (
            <>
            <span>
            </span>
            <Link href="/login">
              <Button className="text-white bg-slate-900">Sign In</Button>
            </Link>
          </>
        )}
        </div>
      </div>
      <div className="flex px-8 w-full justify-between items-center bg-[#A279EA]">
        <div className="flex items-center gap-4 py-4">
          <Link href="/" className={`${location === '/' ? 'bg-white text-[#A279EA] border border-white px-4 rounded' : 'text-white hover:text-gray-200'}`}>Home</Link>
          {isAuthenticated ? (<Link href="/new-trip" className={`${location === '/new-trip' ? 'bg-white text-[#A279EA] border border-white px-4 rounded' : 'text-white hover:text-gray-200'}`}>New Trip</Link>) :
          (<Link href="" onClick={handleClick} className="text-white hover:text-gray-200">New Trip</Link>)}
          <Link href="/calendar" className={`${location === '/calendar' ? 'bg-white text-[#A279EA] border border-white px-4 rounded' : 'text-white hover:text-gray-200'}`}>Calendar view</Link>
          <Link href="/recommendations" className={`${location === '/recommendations' ? 'bg-white text-[#A279EA] border border-white px-4 rounded' : 'text-white hover:text-gray-200'}`}>Recommendations</Link>
        </div>
        <span>
          <Link href="/support" className={`${location === '/support' ? 'bg-white text-[#A279EA] border border-white px-4 rounded' : 'text-white hover:text-gray-200'}`}>Support</Link>
        </span>
      </div>
    </nav>
  );
}
