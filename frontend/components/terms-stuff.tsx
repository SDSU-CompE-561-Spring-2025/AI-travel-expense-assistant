import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog"
  
  export default function Policies() {
    return (
      <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
        
        {/* Terms of Service */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="hover:text-[#A279EA] transition-colors">
              Terms of Service
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto p-6">
            <DialogHeader>
              <DialogTitle><strong>Terms of Service</strong></DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-left">
                <p><strong>Last updated:</strong> [Insert Date When You Launch, Probably a Tuesday] </p>
                <br />

                <p className="mb-4 text-slate-700">
                Welcome to <strong>Travel Buddy</strong>, your digital suitcase for all things trip-planny. By accessing our site and clicking buttons like “Register,” “Login,” or “Sure, I’ll let you organize my life,” you agree to the following terms, whether or not you read them (we know, it’s fine).
                </p>

                <ol className="list-decimal list-inside space-y-4 text-sm text-slate-700">
                <li>
                    <strong>Acceptance of Terms</strong><br />
                    By using Travel Buddy, you agree to these Terms of Service. If you don’t agree, you’re legally required to stop using the site—no hard feelings, but please show yourself the door. We’ll wait.
                </li>

                <li>
                    <strong>User Accounts and Security</strong><br />
                    You must be a real human over the age of 13 to use Travel Buddy. No bots. No squirrels on keyboards. When registering, you agree to provide a legit email and keep your password secret—sharing your password with your pet parrot does not count as secure practice. We use JWT-based authentication, so your login is about as secure as a vault guarded by a particularly paranoid robot.
                </li>

                <li>
                    <strong>Our Intellectual Property</strong><br />
                    Everything from our gorgeous header fonts to the "Trip Countdown" feature is ours. You may not steal, borrow, copy, or tattoo it on your cousin’s back. All rights reserved. (Like, aggressively reserved.)
                </li>

                <li>
                    <strong>User Content</strong><br />
                    You own your travel plans. We won’t claim your Bali itinerary or your overly detailed list of “Best Toilets in Paris.” However, by using our service, you give us a non-exclusive, royalty-free, intergalactic license to store your travel data so we can show it back to you. Not creepy, just functional.
                </li>

                <li>
                    <strong>Service Availability</strong><br />
                    Sometimes, things break. The site might be down. Your countdown might be off by a few minutes. Please don’t sue us—we’re trying our best. We reserve the right to update or remove features without notice, because surprise is part of travel, right?
                </li>

                <li>
                    <strong>Termination</strong><br />
                    We reserve the right to terminate or suspend your account if you do something sketchy—like attempt to hack us or create a 400-day “trip” to your mom’s basement. Don’t be that person.
                </li>

                <li>
                    <strong>Limitation of Liability</strong><br />
                    To the maximum extent permitted by applicable law, Travel Buddy shall not be liable for:<br />
                    – Missed flights due to poor planning (that one’s on you),<br />
                    – Awkward family trips gone sideways,<br />
                    – Or lost luggage (we don't even know where your suitcase is, Brenda).
                </li>

                <li>
                    <strong>Governing Law</strong><br />
                    These Terms shall be governed by the laws of [Insert Jurisdiction That Sounds Fancy], and if things go really sideways, we’ll meet you in court (preferably with coffee).
                </li>
                </ol>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
  
        {/* Privacy Policy */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="hover:text-[#A279EA] transition-colors">
              Privacy Policy
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto p-6">
            <DialogHeader>
              <DialogTitle>Privacy Policy</DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-left">
                <p><strong>Last updated:</strong> [Insert Same Tuesday]</p>
                <br></br>
                
                <div className="mb-4 text-black">
                    <p> 
                        At <strong>Travel Buddy</strong>, we’re fans of privacy, even if our users 
                        sometimes plan entire honeymoons in all caps. Here’s how 
                        we collect, store, and (not) share your info:
                    </p>
                    <br />

                    <ol className="list-decimal list-inside space-y-4 text-sm text-black">
                        <li>
                            <strong>What We Collect</strong><br />
                            We collect:
                            <ul>
                                - Your name, email, and hashed password (no plaintext nonsense here),<br />
                                - The fabulous trips you plan,<br />
                                - Metadata like login times (because we’re nosy in a nerdy way),<br />
                                - Recommendation queries (so we can improve our suggestions and maybe chuckle at how many people want to see the Eiffel Tower again).<br />
                            </ul>
                        </li>

                        <li>
                            <strong>How We Use Your Data</strong><br />
                                - To let you log in and see your trips.<br />
                                - To show you countdowns, calendars, and itinerary bits.<br />
                                - To make suggestions that are hopefully not terrible.<br />
                                - To diagnose bugs and improve the site without being weird about it.<br />
                        </li>

                        <li>
                            <strong>What We Don’t Do</strong><br />
                            <ul>
                                - We do <strong>not</strong> sell your data to advertisers, third parties, or wandering data goblins.<br />
                                - We do <strong>not</strong> track your location or spy on you through your webcam. Ew.<br />
                            </ul>
                        </li>

                        <li>
                            <strong>Data Security</strong><br />
                            We use industry-standard security and hash your passwords so well even we can’t read them.
                            Data is stored in encrypted databases hosted on responsibly chosen cloud providers (we checked, they’re not sketchy).
                        </li>

                        <li>
                            <strong>Your Rights</strong><br />
                            You can:
                            <ul>
                                - View and edit your information anytime,<br />
                                - Delete your account (but we’ll be sad),<br />
                                - Email us at info@travelbuddy.com if something feels off (we probably won't respond).<br />
                                - accept that there is no way to opt out ;) <br />
                            </ul>
                        </li>     
                    </ol>
                </div>

              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
  
        {/* Cookie Policy */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="hover:text-[#A279EA] transition-colors">
              Cookie Policy
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto p-6">
            <DialogHeader>
              <DialogTitle>Cookie Policy</DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-left">
                <div className="text-black">
                    <strong>Or: “How We Don't Crumble”</strong><br />
                    <strong>Last updated: Still That Tuesday</strong><br />
                    <br />

                    We don’t use cookies. That’s right—zero, zilch, nada. <br />
                    <br />

                    We believe your travel data belongs in your hands, not scattered across third-party trackers like cookie crumbs across a toddler’s car seat. <br />
                    <br />

                    If this changes, we’ll let you know, and probably cry a little inside. Until then, consider this the cleanest cookie jar on the internet. <br />
                    <br />

                </div>


              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
  