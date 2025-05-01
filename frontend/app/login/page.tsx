import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center bg-gradient-to-b from-branded-900 to-white p-4">
      <div className="w-full flex p-4">
        <Link href="/">
          <Button variant="outline">Back to home</Button>
        </Link>
      </div>
      <LoginForm />
    </main>
  );
}
