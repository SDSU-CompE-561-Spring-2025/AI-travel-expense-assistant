'use client';

import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="w-full">
      <div className="flex w-full px-8 py-4 justify-between items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl font-bold text-branded-600">Travel Buddy!</h1>
          <span className="text-lg text-branded-600">your simple travel assistant</span>
        </div>
        {isAuthenticated ? (
          <Button variant="outline" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Link href="/login">
            <Button className="text-white">Sign In</Button>
          </Link>
        )}
      </div>
      <div className="flex px-8 w-full justify-between items-center bg-branded-600">
        <div className="flex items-center gap-4 py-4">
          <Link href="/" className="text-white hover:text-gray-200">Home</Link>
          <Link href="/new-trip" className="text-white hover:text-gray-200">New Trip</Link>
          <Link href="/calendar" className="text-white hover:text-gray-200">Calendar view</Link>
          <Link href="/recommendations" className="text-white hover:text-gray-200">Recommendations</Link>
        </div>
        <span>
          <Link href="/support" className="text-white hover:text-gray-200">Support</Link>
        </span>
      </div>
    </nav>
  );
}
