import Link from "next/link"
import { MapPin, Mail, Phone, FacebookIcon, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About & Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Travel Buddy</h3>
            <p className="text-slate-300 text-sm">
              Your ultimate companion for planning and organizing memorable travel experiences around the world.
            </p>
            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-[#A279EA]" />
                <span>123 Travel Street, Adventure City, AC 12345</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Phone className="h-4 w-4 text-[#A279EA]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Mail className="h-4 w-4 text-[#A279EA]" />
                <span>info@travelbuddy.com</span>
              </div>
            </div>
            {/*
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                  <FacebookIcon className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>*/}
          </div>

          {/* Column 2: Quick Links */}
          <div className="ml-30">
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinations" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/flights" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  Flights
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/car-rentals" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  Car Rentals
                </Link>
              </li>
              <li>
                <Link href="/vacation-packages" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  Vacation Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help-center" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/booking-policy" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  Booking Policy
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-slate-400 mb-4 md:mb-0">
              © {currentYear} Travel Buddy. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <Link href="/terms" className="hover:text-[#A279EA] transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-[#A279EA] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-[#A279EA] transition-colors">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="hover:text-[#A279EA] transition-colors">
                Accessibility
              </Link>
              <Link href="/sitemap" className="hover:text-[#A279EA] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
