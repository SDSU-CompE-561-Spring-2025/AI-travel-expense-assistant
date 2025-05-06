'use client';

import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { Button } from './ui/button';
import { useEffect } from 'react';
import Image from "next/image";
export default function Navbar() {
  const { isAuthenticated, logout, fetchUser, user } = useAuth();
  useEffect(() => {
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
        {isAuthenticated ? (
          <>
          <span>
            {user?.username}
          </span>
          <Button variant="outline" onClick={logout}>
            Logout
          </Button>

          </>
        ) : (
          <Link href="/login">
            <Button className="text-white bg-slate-900">Sign In</Button>
          </Link>
        )}
      </div>
      <div className="flex px-8 w-full justify-between items-center bg-[#A279EA]">
        <div className="flex items-center gap-4 py-4">
          <Link href="/" className="text-white hover:text-gray-200">Home</Link>
          {isAuthenticated && (
            <>
            <Link href="/new-trip" className="text-white hover:text-gray-200">New Trip</Link>
            <Link href="/calendar" className="text-white hover:text-gray-200">Calendar view</Link>
            <Link href="/recommendations" className="text-white hover:text-gray-200">Recommendations</Link>
            </>
          )}
        </div>
        <span>
          <Link href="/support" className="text-white hover:text-gray-200">Support</Link>
        </span>
      </div>
    </nav>
  );
}
