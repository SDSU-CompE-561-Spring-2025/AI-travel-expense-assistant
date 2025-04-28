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
            <form className="bg-white p-8 justify-self-center align-self-center justify-center gap-8 items-center flex flex-col rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold">Sign Up!</h1>
                <span>Begin your trip planning today!</span>
                <div>

                    <label htmlFor="firstName">First name</label>
                    <input type="text" placeholder="John" />
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" placeholder="Doe" />
                </div>
                <label htmlFor="email">Email address</label>
                <input type="text" placeholder="email" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="password" />
                <Button>Sign up</Button>
                <Link href="/login">Already have an account? Log in here</Link>
            </form>
      </main>
  );
}