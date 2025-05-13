"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Link from "next/link"

export default function SupportSection() {
  return (
    <section id="support" className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
        <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 left-0 right-0 mx-auto w-fit bg-amber-500/90 text-black px-6 py-2 rounded-full text-sm font-bold shadow-md backdrop-blur-md z-20 text-center"
      >
        Coming Soon
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,69,19,0.2),rgba(0,0,0,0))]" />
     
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Support Tibucami's Journey</h2>
          <p className="text-lg text-gray-300 mb-8">
            As an indie studio, your support directly helps us bring Tibucami to life. Every contribution goes toward
            enhancing the game with better audio, more levels, voice acting, and publishing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-black/40 backdrop-blur-sm border border-amber-900/30 rounded-xl p-6 flex flex-col items-center hover:border-amber-500/50 transition-colors"
          >
            <div className="h-16 w-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-amber-300">Supporter</h3>
            <p className="text-gray-400 text-sm mb-4 text-center">
              Help us continue development with a small contribution.
            </p>
            <p className="text-2xl font-bold mb-6 text-white">$5</p>
            <Button asChild className="w-full bg-amber-500 text-black hover:bg-amber-600">
              <Link href="https://www.paypal.com/donate?hosted_button_id=YOUR_ID" target="_blank">
                <Heart className="mr-2 h-4 w-4" />
                Donate
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6 flex flex-col items-center relative transform md:scale-110 z-10"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-bold">
              Popular
            </div>
            <div className="h-16 w-16 rounded-full bg-amber-500/30 flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-amber-300">Ally</h3>
            <p className="text-gray-400 text-sm mb-4 text-center">
              Support core development and get your name in the credits.
            </p>
            <p className="text-2xl font-bold mb-6 text-white">$15</p>
            <Button asChild className="w-full bg-amber-500 text-black hover:bg-amber-600">
              <Link href="https://www.paypal.com/donate?hosted_button_id=YOUR_ID" target="_blank">
                <Heart className="mr-2 h-4 w-4" />
                Donate
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/40 backdrop-blur-sm border border-amber-900/30 rounded-xl p-6 flex flex-col items-center hover:border-amber-500/50 transition-colors"
          >
            <div className="h-16 w-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-amber-300">Founder</h3>
            <p className="text-gray-400 text-sm mb-4 text-center">
              Become a founding supporter with special in-game recognition.
            </p>
            <p className="text-2xl font-bold mb-6 text-white">$30</p>
            <Button asChild className="w-full bg-amber-500 text-black hover:bg-amber-600">
              <Link href="https://www.paypal.com/donate?hosted_button_id=YOUR_ID" target="_blank">
                <Heart className="mr-2 h-4 w-4" />
                Donate
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm border border-amber-900/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4 text-amber-300 text-center">How Your Support Helps</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-amber-500/30 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white">Enhanced Audio</h4>
                <p className="text-gray-400">Professional voice acting and immersive sound design</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-amber-500/30 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white">More Content</h4>
                <p className="text-gray-400">Additional levels, characters, and story elements</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-amber-500/30 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white">Visual Fidelity</h4>
                <p className="text-gray-400">Enhanced clay animations and visual effects</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-amber-500/30 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white">Console Ports</h4>
                <p className="text-gray-400">Help us bring Tibucami to more platforms</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
