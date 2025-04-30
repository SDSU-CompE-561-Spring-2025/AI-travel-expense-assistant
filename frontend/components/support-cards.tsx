import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function SupportPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">How Can We Help?</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to make your travel experience as smooth as possible. Find answers to common questions or reach
            out to our team.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <Card className="bg-[#C6AFEE]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Visit Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white">
                123 Travel Street
                <br />
                Adventure City, AC 12345
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#C6AFEE]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Call Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white">
                +1 (555) 123-4567
                <br />
                Monday-Friday: 8am-6pm PST
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#C6AFEE]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white">
                info@travelbuddy.com
                <br />
                We typically respond within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I create a Travel Buddy account?</AccordionTrigger>
              <AccordionContent>
                To create a Travel Buddy account, click on the "Sign Up" button in the top right corner of our homepage.
                You can register using your email address, or sign up with your Google or Facebook account for quicker
                access. Once registered, you'll be able to save trips, get personalized recommendations, and access all
                of our planning tools.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How do I plan a new trip?</AccordionTrigger>
              <AccordionContent>
                After logging in, click on the "Create New Trip" button on your dashboard. Enter your destination,
                travel dates, and any preferences you have. Our system will help you build an itinerary with recommended
                attractions, accommodations, and activities based on your interests and budget. You can customize every
                aspect of your trip and invite travel companions to collaborate on the planning.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can I book flights and hotels through Travel Buddy?</AccordionTrigger>
              <AccordionContent>
                Yes! Travel Buddy partners with major airlines, hotel chains, and local accommodations worldwide. Once
                you've planned your trip, you can book directly through our platform. We offer competitive rates and
                special deals exclusive to Travel Buddy users. All bookings come with our price match guarantee and 24/7
                support in case of any changes or emergencies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How do I access my travel documents?</AccordionTrigger>
              <AccordionContent>
                All your travel documents are securely stored in the "My Documents" section of your account. You can
                upload boarding passes, hotel confirmations, tour tickets, and more. Our mobile app allows you to access
                these documents offline, so you'll have everything you need even without internet connection. You can
                also share specific documents with travel companions or export them as PDFs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What is the Travel Buddy cancellation policy?</AccordionTrigger>
              <AccordionContent>
                Our cancellation policy varies depending on the service provider. For flights and hotels, we adhere to
                the policies of the airlines and accommodations. However, Travel Buddy Premium members receive
                additional flexibility with free cancellation on select bookings up to 24 hours before check-in. For our
                own services like custom itineraries and travel guides, we offer full refunds if canceled within 7 days
                of purchase.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Travel Buddy uses bank-level encryption to protect all your personal and payment
                information. We are PCI DSS compliant and never store your complete credit card details on our servers.
                You can also use secure payment options like PayPal, Apple Pay, or Google Pay for additional security.
                We conduct regular security audits to ensure your data remains protected.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <Separator className="my-8" />

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Support Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#C6AFEE]">
              <CardHeader>
                <CardTitle>Travel Guides</CardTitle>
                <CardDescription className="text-white">Access our comprehensive destination guides</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-white">
                  Explore detailed guides for popular destinations with insider tips, must-see attractions, and local
                  recommendations.
                </p>
                <Link href="/guides" className="text-primary hover:underline">
                  Browse Travel Guides →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-[#C6AFEE]">
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription className="text-white">Learn how to use Travel Buddy features</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-white">
                  Watch step-by-step tutorials on how to plan trips, book accommodations, and make the most of our
                  travel tools.
                </p>
                <Link href="/tutorials" className="text-primary hover:underline">
                  Watch Tutorials →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-[#C6AFEE]">
              <CardHeader>
                <CardTitle>Community Forum</CardTitle>
                <CardDescription className="text-white">Connect with other travelers and share tips</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-white">
                  Join discussions with fellow travelers, ask questions, and share your own experiences and
                  recommendations.
                </p>
                <Link href="/community" className="text-primary hover:underline">
                  Join the Community →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-[#C6AFEE]">
              <CardHeader>
                <CardTitle>Travel Tips</CardTitle>
                <CardDescription className="text-white">Expert advice for seamless travel</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-white">
                  Discover practical tips on packing, navigating airports, finding deals, and making your travel
                  experience stress-free.
                </p>
                <Link href="/tips" className="text-primary hover:underline">
                  Read Travel Tips →
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-muted-foreground mb-6">
              For urgent matters related to current bookings, our priority support line is available 24/7.
            </p>
            <div className="text-xl font-semibold">+1 (555) 999-8888</div>
            <p className="text-sm text-muted-foreground mt-2">For emergencies during travel only</p>
          </div>
        </section>
      </div>
    </main>
  )
}
