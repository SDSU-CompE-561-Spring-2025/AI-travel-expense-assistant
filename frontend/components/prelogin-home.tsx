"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Calendar, Hotel, Plane, Compass, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"



export default function HomePagePreLogin() {

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="mx-auto max-w-5xl">

                <section className="relative py-12 md:py-16 overflow-hidden">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Plan Your Perfect Trip with Travel Buddy!
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                        Your all-in-one travel companion for planning, organizing, and discovering amazing experiences around
                        the world.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button size="lg" asChild>
                        <Link href="/signup">
                            Sign Up Today <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                        <Link href="/login">Log In</Link>
                        </Button>
                    </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl">
                        <Image
                        src="/homepagetrips.png"
                        alt="Travel Buddy dashboard preview showing trip planning interface"
                        width={800}
                        height={500}
                        className="object-cover"
                        priority
                        />
                    </div>
                    </div>
                </div>
                </section>

                <section className="py-12 md:py-16 bg-[#C6AFEE] rounded-xl my-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center px-4">
                    <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Everything You Need for Perfect Trips
                    </h2>
                    <p className="max-w-[700px] text-white md:text-xl">
                        Travel Buddy helps you plan every aspect of your journey with powerful features designed for travelers
                    </p>
                    </div>
                </div>
                <div className="grid items-center gap-6 py-8 md:grid-cols-2 lg:grid-cols-6 px-4">
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-card md:col-span-3 lg:col-span-2">
                        <div className="rounded-full bg-primary/10 p-3">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Trip Planning</h3>
                        <p className="text-center text-muted-foreground">
                            Create and customize detailed itineraries for all your adventures
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-card md:col-span-3 lg:col-span-2">
                        <div className="rounded-full bg-primary/10 p-3">
                            <Hotel className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Accommodation Tracking</h3>
                        <p className="text-center text-muted-foreground">Keep all your hotel and lodging details in one place</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-card md:col-span-3 lg:col-span-2">
                        <div className="rounded-full bg-primary/10 p-3">
                            <Plane className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Transportation</h3>
                        <p className="text-center text-muted-foreground">
                            Input flights, trains, rentals and all your transportation needs
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-card md:col-span-6 lg:col-span-3">
                        <div className="rounded-full bg-primary/10 p-3">
                            <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Calendar View</h3>
                        <p className="text-center text-muted-foreground">
                            Visualize all of your trip schedules with our intuitive calendar interface to ensure your adventures are beautifully planned
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-5 shadow-sm bg-card md:col-span-6 lg:col-span-3">
                        <div className="rounded-full bg-primary/10 p-3">
                            <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">AI Recommendations</h3>
                        <p className="text-center text-muted-foreground">
                            Get personalized suggestions for the top 5 places to visit in any city, region, or country
                        </p>
                    </div>
                </div>
                </section>

                <section className="py-12 md:py-16">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Travel Buddy Works</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">
                        Start planning your dream trip in just a few simple steps
                    </p>
                    </div>
                </div>
                <div className="grid items-start gap-6 py-8 md:grid-cols-3">
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                        1
                    </div>
                    <h3 className="text-xl font-bold">Create Your Trip</h3>
                    <p className="text-center text-muted-foreground">Set your destination, dates, and travel companions</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                        2
                    </div>
                    <h3 className="text-xl font-bold text-center">Add Activities & Accommodations</h3>
                    <p className="text-center text-muted-foreground">
                        Use our AI recommendations or add your own places to visit
                    </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                        3
                    </div>
                    <h3 className="text-xl font-bold">Enjoy Your Journey</h3>
                    <p className="text-center text-muted-foreground">Access your itinerary anytime, anywhere, even offline</p>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <Button size="lg" asChild>
                    <Link href="/signup">
                        Sign Up or Login To Get Started! <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    </Button>
                </div>
                </section>
            </div>
        </main>
    )
} export{HomePagePreLogin}