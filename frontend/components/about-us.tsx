import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"

export default function AboutPage() {
    return (
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Who are we?</h1>
            <p className="text-lg  max-w-2xl mx-auto">
              The engineers here are Travel Buddy want to help you make your travel experience as smooth as possible. Our goal 
              is to provide a secure, all-in-one travel itinerary planner platform where you can create, edit, and manage your 
              trips easily. We began as teammates in SDSU's COMPE 561 and are now all super successful in our technology careers 
              (or at least manifestating this). Thank you for your interest in our application!
            </p> <br /><br />

            <h1 className="text-4xl font-bold tracking-tight mb-4">Meet the engineers behind Travel Buddy:</h1>
            <br />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
              <Card className="bg-[#C6AFEE]">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  Sam James
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  coolest kid
                  <br />
                  best ever
                </p>
              </CardContent>
              </Card>

              <Card className="bg-[#C6AFEE]">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  Erica Lee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Figma Queen
                  <br />
                  cool hair
                </p>
              </CardContent>
              </Card>

              <Card className="bg-[#C6AFEE]">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  Brianna Ly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  best gift giver
                  <br />
                  cool jacket
                </p>
              </CardContent>
              </Card>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
              <Card className="bg-[#C6AFEE]">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  Joshua Constine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  thickest glasses
                  <br />
                  big move soon!
                </p>
              </CardContent>
              </Card>

              <Card className="bg-[#C6AFEE]">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  Theo Bongolan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Nitro king
                  <br />
                  camper fr fr
                </p>
              </CardContent>
              </Card>

              <Card className="bg-[#C6AFEE]">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  Sean Pittman
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  no more broken computer
                  <br />
                  *gets roasted*
                </p>
              </CardContent>
              </Card>
            </div>

            <p>We really appreciate your support ♡</p>
          </div>

          </div>
        </main>
    )
}