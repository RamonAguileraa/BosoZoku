"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function AboutGame() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const screenshots = [
    "/tohui.jpg",
    "/cate.png",
    "/scene1.jpg",
    "/chabochi.jpg",
  ]

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,69,19,0.2),rgba(0,0,0,0))]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-amber-400">Sobre el Juego</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
            <span className="text-amber-300 font-semibold">Tibucami</span> es un juego de acción y aventura en 3D inspirado en
            la mitología Rarámuri y creado con una estética única de arcilla en stop-motion. Viaja a través de paisajes místicos
            mientras descubres secretos ancestrales, dominas habilidades espirituales y restauras el equilibrio a un mundo al borde
            del caos.
          </p>
          <p className="text-base sm:text-lg text-gray-300">
            Con controles intuitivos, entornos impresionantes y una narrativa profundamente emotiva, Tibucami invita a los
            jugadores a experimentar un mundo artesanal como ningún otro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video bg-black/50 rounded-lg overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage("/iatibucami.png")}
          >
            <Image
              src="/iatibucami.png"
              alt="Tibucami Artwork"
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-amber-500/80 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-amber-300">Características del Juego</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-base sm:text-lg">Estética Única de Arcilla</h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Experimenta un mundo creado con visuales inspirados en stop-motion que dan vida a la arcilla.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-base sm:text-lg">Poderes Espirituales</h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Domina habilidades ancestrales para resolver acertijos, derrotar enemigos y atravesar el paisaje místico.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-base sm:text-lg">Rica Mitología</h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Sumérgete en una historia inspirada en auténticas leyendas y elementos culturales Rarámuri.
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
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-amber-300">Capturas de Pantalla</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {screenshots.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-video bg-black/50 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Captura de Tibucami ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-amber-500/80 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Visor de Imágenes */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl p-0 bg-black border-amber-900/50">
          <DialogTitle className="sr-only">Captura de Tibucami</DialogTitle>
          {selectedImage && (
            <div className="relative aspect-video">
              <Image
                src={selectedImage}
                alt="Captura de Tibucami"
                fill
                priority
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
