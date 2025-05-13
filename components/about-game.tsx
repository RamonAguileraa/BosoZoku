"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Play, X } from "lucide-react"

export default function AboutGame() {
  const [videoOpen, setVideoOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const screenshots = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,69,19,0.2),rgba(0,0,0,0))]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">About the Game</h2>
          <p className="text-lg text-gray-300 mb-8">
            <span className="text-amber-300 font-semibold">Tibucami</span> is a 3D action-adventure game inspired by
            Rarámuri mythology and crafted with a unique stop-motion clay aesthetic. Journey through mystical landscapes
            as you uncover ancient secrets, master spiritual abilities, and restore balance to a world on the edge of
            chaos.
          </p>
          <p className="text-lg text-gray-300">
            With intuitive controls, breathtaking environments, and a deeply emotional narrative, Tibucami invites
            players to experience a handcrafted world unlike any other.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video bg-black/50 rounded-lg overflow-hidden group cursor-pointer"
            onClick={() => setVideoOpen(true)}
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Tibucami Trailer Thumbnail"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <div className="h-16 w-16 rounded-full bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8 text-black" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-amber-300">Game Features</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Unique Clay Aesthetic</h4>
                  <p className="text-gray-300">
                    Experience a world crafted with stop-motion inspired visuals that bring the clay to life.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Spiritual Powers</h4>
                  <p className="text-gray-300">
                    Harness ancient abilities to solve puzzles, defeat enemies, and traverse the mystical landscape.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Rich Mythology</h4>
                  <p className="text-gray-300">
                    Immerse yourself in a story inspired by authentic Rarámuri legends and cultural elements.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-amber-300">Screenshots</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {screenshots.map((src, index) => (
              <div
                key={index}
                className="relative aspect-video bg-black/50 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Tibucami Screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black border-amber-900/50">
          <div className="relative aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="about:blank" // Replace with actual YouTube embed URL
              title="Tibucami Game Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-white hover:bg-black/50"
            onClick={() => setVideoOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
        </DialogContent>
      </Dialog>

      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black border-amber-900/50">
          {selectedImage && (
            <div className="relative aspect-video">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Tibucami Screenshot"
                fill
                className="object-contain"
              />
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-white hover:bg-black/50"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  )
}
