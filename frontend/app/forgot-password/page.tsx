import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center bg-gradient-to-b from-branded-900 to-white p-4">
      <div className="w-full flex p-4">
        <Link href="/login">
          <Button variant="outline">Back to login</Button>
        </Link>
      </div>
      <form className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="text-gray-600">Enter your email address and we&apos;ll send you instructions to reset your password.</p>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">Email address</label>
          <input 
            type="email" 
            id="email" 
            placeholder="you@example.com" 
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <Button className="w-full">Send reset instructions</Button>
        <div className="text-center">
          <Link href="/login" className="text-sm text-branded-600 hover:underline">
            Remember your password? Log in here
          </Link>
        </div>
      </form>
    </main>
  );
}