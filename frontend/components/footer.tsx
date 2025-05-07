import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"
import Policies from "./terms-stuff"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/logoicon.png" 
                alt="Travel Buddy Footer Logo Icon"
                height={30}
                width={30}
                priority
              />
              <h3 className="text-xl font-bold">Travel Buddy</h3>
            </div>
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
          </div>

          <div className="ml-30">
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  Your Trips
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  Calendar View
                </Link>
              </li>
              <li>
                <Link href="/recommendations" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  Recommendations
                </Link>
              </li>
              <li>
                <a
                  href="https://www.kayak.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#A279EA] transition-colors"
                >
                  Flights/Hotels
                </a>
              </li>
              <li>
                <a
                  href="https://www.tripadvisor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#A279EA] transition-colors"
                >
                  Trip Advisor®
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/support" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/doesnotexist" className="text-slate-300 hover:text-[#A279EA] transition-colors">
                  Don't Contact Us
                </Link>
              </li>
              <li>
              <a
                  href="https://youtu.be/dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#A279EA] transition-colors"
                >
                  Important Updates
                </a>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-[#A279EA] transition-colors">
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
              <Policies />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
