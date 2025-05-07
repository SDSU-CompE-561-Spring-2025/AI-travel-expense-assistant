"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LogoutPage() {
  const { logout } = useAuth();
  const router = useRouter();
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Trigger logout logic
    logout();

    // Show checkmark animation after brief delay
    const animationTimer = setTimeout(() => setShowAnimation(true), 500);

    // Redirect to login page after delay
    const redirectTimer = setTimeout(() => {
      router.push("/login");
    }, 10000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(redirectTimer);
    };
  }, [logout, router]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            {showAnimation ? (
              <CheckCircle className="h-16 w-16 text-green-500" />
            ) : (
              <div className="h-16 w-16 rounded-full border-4 border-t-purple-500 border-r-purple-300 border-b-purple-300 border-l-purple-300 animate-spin" />
            )}
          </div>
          <h2 className="text-2xl font-semibold mb-1">You've been logged out</h2>
          <p className="text-gray-600 text-sm">
            {showAnimation
              ? "Your session has ended successfully."
              : "Ending your session..."}
          </p>
        </div>

        <div className="space-y-4">
          <Button
            asChild
            className="w-full bg-purple-500 hover:bg-purple-600"
            disabled={!showAnimation}
          >
            <Link href="/login">Log in again</Link>
          </Button>

          <div className="text-center text-sm">
            <Link href="/" className="text-purple-600 hover:underline">
              Return to home page
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
