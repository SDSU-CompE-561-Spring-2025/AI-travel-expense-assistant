import {Navbar} from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex flex-col   min-h-screen w-full items-center bg-gradient-to-b from-branded-900 to-white">
        <div className="w-full flex">
            <Link href="/">
                <Button>Back to home</Button>
            </Link>
        </div>
            <form className="bg-white p-8 gap-8 items-center flex flex-col rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold">Forgot password?</h1>
                <span>We'll send you a link to reset your password</span>
                <label htmlFor="email">Email address</label>
                <input type="text" placeholder="email" />
                <Button>Log in</Button>
                <Link href="/signup">No account yet? Sign up here</Link>
            </form>
      </main>
  );
}