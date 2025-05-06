import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"

export default function AboutPage() {
    return (
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight mb-4">Who are we?</h1>
            <p className="text-lg  max-w-2xl mx-auto">
              The engineers here are Travel Buddy want to help you make your travel experience as smooth as possible. Our goal 
              is to provide a secure, all-in-one travel itinerary planner platform where you can create, edit, and manage your 
              trips easily. We began as teammates in SDSU's COMPE 561 and now we are all super successful in our technology careers 
              (or at least manifestating this). Thank you for your interest in our application!
            </p> <br /><br />

            <h1 className="text-3xl font-bold tracking-tight mb-4">Check out the engineers behind Travel Buddy:</h1>
            <br />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
              <Card className="bg-[#C6AFEE] border-[#A279EA] border-3">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  Sam James
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.linkedin.com/in/samantha-james-cs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <br />
                <a
                    href="https://github.com/SamJames13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </CardContent>
              </Card>

              <Card className="bg-[#C6AFEE] border-[#A279EA] border-3">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  Erica Lee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.linkedin.com/in/ericalylee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <br />
                <a
                    href="https://github.com/irmtou"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </CardContent>
              </Card>

              <Card className="bg-[#C6AFEE] border-[#A279EA] border-3">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  Brianna Ly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.linkedin.com/in/briannaly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <br />
                <a
                    href="https://github.com/BriannavLy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </CardContent>
              </Card>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
              <Card className="bg-[#C6AFEE] border-[#A279EA] border-3">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  Joshua Constine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.linkedin.com/in/joshua-constine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <br />
                <a
                    href="https://github.com/joshconstine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </CardContent>
              </Card>

              <Card className="bg-[#C6AFEE] border-[#A279EA] border-3">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  Theo Bongolan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.linkedin.com/in/theo-bongolan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <br />
                <a
                    href="https://github.com/Theo-Bongolan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </CardContent>
              </Card>

              <Card className="bg-[#C6AFEE] border-[#A279EA] border-3">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  Sean Pitman
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.linkedin.com/in/sean-pitman-495023298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <br />
                <a
                    href="https://github.com/sjpitman22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </CardContent>
              </Card>
            </div>

            <p>We really appreciate your support ♡</p>
          </div>

          </div>
        </main>
    )
}