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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Únete a la Comunidad</h2>
          <p className="text-lg text-gray-300 mb-8">
            Conéctate con otros jugadores, recibe actualizaciones del desarrollo y sé parte del viaje de Tibucami. 
            Únete a nuestra creciente comunidad a través de nuestras redes sociales.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/40 backdrop-blur-sm border border-amber-900/30 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-amber-300">Síguenos</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="https://discord.gg/bosozoku"
                target="_blank"
                className="flex items-center p-4 bg-black/30 rounded-lg hover:bg-amber-500/10 transition-colors group"
              >
                <Discord className="h-8 w-8 mr-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-bold text-white">Discord</p>
                  <p className="text-sm text-gray-400">Únete a nuestro servidor</p>
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/bosozoku.studio/"
                target="_blank"
                className="flex items-center p-4 bg-black/30 rounded-lg hover:bg-amber-500/10 transition-colors group"
              >
                <Instagram className="h-8 w-8 mr-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-bold text-white">Instagram</p>
                  <p className="text-sm text-gray-400">@bosozoku.studio</p>
                </div>
              </Link>
              <Link
                href="https://www.youtube.com/@BosoZokuStudio"
                target="_blank"
                className="flex items-center p-4 bg-black/30 rounded-lg hover:bg-amber-500/10 transition-colors group"
              >
                <Youtube className="h-8 w-8 mr-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-bold text-white">YouTube</p>
                  <p className="text-sm text-gray-400">@BosoZokuStudio</p>
                </div>
              </Link>
              <Link
                href="https://www.tiktok.com/@bosozoku.studio"
                target="_blank"
                className="flex items-center p-4 bg-black/30 rounded-lg hover:bg-amber-500/10 transition-colors group"
              >
                <svg className="h-8 w-8 mr-4 text-amber-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <div>
                  <p className="font-bold text-white">TikTok</p>
                  <p className="text-sm text-gray-400">@bosozoku.studio</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
<br />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-amber-300">Próximos Eventos</h3>
          <div className="bg-black/30 backdrop-blur-sm border border-amber-900/20 rounded-xl p-6 mb-6">
            <p className="text-amber-400 font-bold mb-2">Exhibición Ludic Jam 2025</p>
            <p className="text-gray-300">
              ¡Ven a probar la demo de Tibucami en nuestro stand!
            </p>
            <p className="text-sm text-gray-400 mt-2">Gimnasio - Tec de Monterrey - 15-17 de mayo, 2025</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
