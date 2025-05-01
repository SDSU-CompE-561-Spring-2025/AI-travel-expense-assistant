"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFoundContent() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 px-4 py-20 text-center">
      <h2 className="text-4xl font-bold mb-2 text-gray-800">404</h2>
      <h3 className="text-2xl font-semibold mb-4 text-gray-700">Page Not Found</h3>
      <p className="text-gray-600 max-w-md mb-8">
        Oops! Looks like this trip got lost in transit. Try refreshing or head back before we plan you a one-way trip to nowhere!
      </p>
      <Button className="bg-branded-900 hover:bg-branded-800 text-white px-6 py-2 rounded-md">
        <Link href="/">Return to Home</Link>
      </Button>
    </section>
  )
}
