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
                <h1 className="text-3xl font-bold">Welcome back!</h1>
                <span>please log in to continue</span>
                <label htmlFor="email">Email address</label>
                <input type="text" placeholder="email" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="password" />
                <div className="flex w-full justify-between items-center">
                    <div className="flex w-full gap-4  items-center">
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </div>
                    <Link href="/forgot-password" className="branded-600">Forgot password?</Link>
                </div>
                <Button>Log in</Button>
                <Link href="/signup">No account yet? Sign up here</Link>
            </form>
      </main>
  );
}