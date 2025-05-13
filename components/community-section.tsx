"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Twitter, Instagram, DiscIcon as Discord, Youtube } from "lucide-react"

export default function CommunitySection() {
  return (
    <section id="community" className="relative py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,69,19,0.2),rgba(0,0,0,0))]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Join the Community</h2>
          <p className="text-lg text-gray-300 mb-8">
            Connect with other players, get development updates, and be part of the Tibucami journey. Join our growing
            community across social platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/40 backdrop-blur-sm border border-amber-900/30 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-amber-300">Follow Us</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="#"
                className="flex items-center p-4 bg-black/30 rounded-lg hover:bg-amber-500/10 transition-colors"
              >
                <Discord className="h-8 w-8 mr-4 text-amber-400" />
                <div>
                  <p className="font-bold text-white">Discord</p>
                  <p className="text-sm text-gray-400">Join our server</p>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center p-4 bg-black/30 rounded-lg hover:bg-amber-500/10 transition-colors"
              >
                <Twitter className="h-8 w-8 mr-4 text-amber-400" />
                <div>
                  <p className="font-bold text-white">Twitter</p>
                  <p className="text-sm text-gray-400">@TibucamiGame</p>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center p-4 bg-black/30 rounded-lg hover:bg-amber-500/10 transition-colors"
              >
                <Instagram className="h-8 w-8 mr-4 text-amber-400" />
                <div>
                  <p className="font-bold text-white">Instagram</p>
                  <p className="text-sm text-gray-400">@TibucamiGame</p>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center p-4 bg-black/30 rounded-lg hover:bg-amber-500/10 transition-colors"
              >
                <Youtube className="h-8 w-8 mr-4 text-amber-400" />
                <div>
                  <p className="font-bold text-white">YouTube</p>
                  <p className="text-sm text-gray-400">BosoZoku Studio</p>
                </div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/40 backdrop-blur-sm border border-amber-900/30 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-amber-300">Newsletter</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for exclusive development updates, behind-the-scenes content, and early access
              opportunities.
            </p>
            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your name"
                  className="bg-black/30 border-amber-900/50 focus:border-amber-500/50 text-white"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-black/30 border-amber-900/50 focus:border-amber-500/50 text-white"
                />
              </div>
              <Button type="submit" className="w-full bg-amber-500 text-black hover:bg-amber-600">
                Subscribe
              </Button>
              <p className="text-xs text-gray-400 text-center">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-amber-300">Upcoming Events</h3>
          <div className="bg-black/30 backdrop-blur-sm border border-amber-900/20 rounded-xl p-6 mb-6">
            <p className="text-amber-400 font-bold mb-2">PAX East 2025</p>
            <p className="text-gray-300">
              Come play the Tibucami demo at our booth! Meet the team and get exclusive merch.
            </p>
            <p className="text-sm text-gray-400 mt-2">Boston, MA - June 12-15, 2025</p>
          </div>
          <p className="text-gray-400">
            Want to see Tibucami at an event near you?{" "}
            <span className="text-amber-400 hover:underline cursor-pointer">Let us know!</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
