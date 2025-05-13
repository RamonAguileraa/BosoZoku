import Link from "next/link"
import Image from "next/image"
import { Twitter, Instagram, DiscIcon as Discord, Youtube, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-amber-900/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="BosoZoku Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-xl">BosoZoku</span>
            </Link>
            <p className="text-gray-400 text-sm">
              An indie game studio crafting unique, culturally rich gaming experiences.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-amber-400 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#download" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="#support" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-amber-400 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-amber-400 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Discord className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-900/30 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BosoZoku Studio. All rights reserved.
          </p>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-amber-500" />
            <span>in the clay world</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
