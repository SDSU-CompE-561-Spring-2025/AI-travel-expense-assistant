import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignupForm } from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center bg-gradient-to-b from-branded-900 to-white p-4">
      <div className="w-full flex p-4">
        <Link href="/">
          <Button variant="outline">Back to home</Button>
        </Link>
      </div>
      <SignupForm />
    </main>
  );
}
