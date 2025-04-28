'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function LoginPage() {
  const { login, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(formData.username, formData.password);
  };

  return (
    <main className="flex flex-col min-h-screen w-full items-center bg-gradient-to-b from-branded-900 to-white p-4">
      <div className="w-full flex p-4">
        <Link href="/">
          <Button variant="outline">Back to home</Button>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <p className="text-gray-600">Please log in to continue</p>
        </div>
        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
            {error}
          </div>
        )}
        <div className="space-y-2">
          <label htmlFor="username" className="block text-sm font-medium">Username</label>
          <input 
            type="text" 
            id="username" 
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            placeholder="Enter your username" 
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input 
            type="password" 
            id="password" 
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            placeholder="••••••••" 
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              id="remember" 
              className="rounded border-gray-300"
            />
            <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
          </div>
          <Link href="/forgot-password" className="text-sm text-branded-600 hover:underline">
            Forgot password?
          </Link>
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Logging in...' : 'Log in'}
        </Button>
        <div className="text-center">
          <Link href="/signup" className="text-sm text-branded-600 hover:underline">
            No account yet? Sign up here
          </Link>
        </div>
      </form>
    </main>
  );
}