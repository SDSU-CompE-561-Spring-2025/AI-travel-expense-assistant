"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to backend forgot password endpoint
    console.log("Reset instructions sent to:", email);
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
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="text-gray-600">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email address
          </label>
          <Input
            type="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="w-full bg-branded-900 hover:bg-branded-700 text-white">
          Send reset instructions
        </Button>

        <div className="text-center">
          <Link href="/login" className="text-sm text-branded-600 hover:underline">
            Remember your password? Log in here
          </Link>
        </div>
      </form>
    </main>
  );
}
