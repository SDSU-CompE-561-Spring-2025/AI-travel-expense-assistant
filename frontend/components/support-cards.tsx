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
                Sundays: 10pm-10:15pm PST
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
                We typically respond within 365 days
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
                To create a Travel Buddy account, click on the "Sign In" button in the top right corner of our homepage.
                You will be taken to the Log in page, then at the bottom click the "No account yet? Sign up here" button at the bottom and
                input your information. You can register using your email address. Once registered, you'll be able to save trips, get 
                personalized recommendations, and access all of our planning tools. 
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How do I plan a new trip?</AccordionTrigger>
              <AccordionContent>
                After logging in, click on the "Create a new trip" button on your dashboard. Enter your destination,
                travel dates, and a brief description. Then, when you hit submit, you will be taken to a page where you can 
                add your trip's "items", which include accomodations, activities, and transportation. You can customize every
                aspect of your trip and collaborate with our recommendations chat bot on the planning.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can I book flights and hotels through Travel Buddy?</AccordionTrigger>
              <AccordionContent>
                Nope. Sorry, this is purely an application to assist you with planning your trip from an organizational 
                perspective, along with some personalized activity recommendations. For booking items, we recommend you check 
                out our partner Kayak, which can be accessed through the "Flights/Hotels" link in the "Explore" section of the footer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How can I get reccomendations for my trips?</AccordionTrigger>
              <AccordionContent>
                To get Travel Buddy's recommended places to visit for your desired trip location(s), navigate to the Recommendations 
                page by clicking on the "Recommendations" link in the navigation menu or in the footer at the botton of any page. Then, 
                type in your desired travel location (country, region, city, county, etc) into the chat window on the right and hit send. 
                Our wonderful AI will then provide you with the top 5 best places to go in the area of your choice!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>How can I incorporate the recommendations into my trips?</AccordionTrigger>
              <AccordionContent>
                Once you Travel Buddy's wonderful AI recommendations, you can then navigate to one of our partners' websites, such as 
                Kayak of Trip Advisor, to get more specifics on tours, tickets, and availability of these recommended places. You can find 
                links to these at the bottom of any page or through a quick Google search. Then, navigate back here and input your selected 
                item (tour, place, etc) through the "Add item" button that is at the top of the page after you click on you trip that you 
                wish to add the activity to from the home page.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <div className="bg-[#C6AFEE] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-white mb-6">
              For urgent matters related to current bookings, our priority support line is available 24/7.
            </p>
            <div className="text-xl font-semibold">+1 (555) 999-8888</div>
            <p className="text-sm text-white mt-2">For emergencies during travel only</p>
          </div>
        </section>
      </div>
    </main>
  )
}
