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
        Próximamente
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Apoya el Viaje de Tibucami</h2>
          <p className="text-lg text-gray-300 mb-8">
            Como estudio independiente, tu apoyo nos ayuda directamente a dar vida a Tibucami. Cada contribución se destina a
            mejorar el juego con mejor audio, más niveles, actuación de voz y publicación.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-black/40 backdrop-blur-sm border border-amber-900/30 rounded-xl p-6 flex flex-col items-center hover:border-amber-500/50 transition-colors group"
          >
            <div className="h-16 w-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-amber-300">Aportador</h3>
            <p className="text-gray-400 text-sm mb-4 text-center">
              Ayúdanos a continuar el desarrollo con una pequeña contribución.
            </p>
            <p className="text-2xl font-bold mb-6 text-white">$5</p>
            <Button asChild className="w-full bg-amber-500 text-black hover:bg-amber-600">
              <Link href="https://www.paypal.com/donate?hosted_button_id=YOUR_ID" target="_blank">
                <Heart className="mr-2 h-4 w-4" />
                Donar
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6 flex flex-col items-center relative transform md:scale-110 z-10 group"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-bold">
              Popular
            </div>
            <div className="h-16 w-16 rounded-full bg-amber-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-amber-300">Aliado</h3>
            <p className="text-gray-400 text-sm mb-4 text-center">
              Apoya el desarrollo principal y obtén tu nombre en los créditos.
            </p>
            <p className="text-2xl font-bold mb-6 text-white">$15</p>
            <Button asChild className="w-full bg-amber-500 text-black hover:bg-amber-600">
              <Link href="https://www.paypal.com/donate?hosted_button_id=YOUR_ID" target="_blank">
                <Heart className="mr-2 h-4 w-4" />
                Donar
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/40 backdrop-blur-sm border border-amber-900/30 rounded-xl p-6 flex flex-col items-center hover:border-amber-500/50 transition-colors group"
          >
            <div className="h-16 w-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-amber-300">Fundador</h3>
            <p className="text-gray-400 text-sm mb-4 text-center">
              Conviértete en un patrocinador fundador con reconocimiento especial en el juego.
            </p>
            <p className="text-2xl font-bold mb-6 text-white">$30</p>
            <Button asChild className="w-full bg-amber-500 text-black hover:bg-amber-600">
              <Link href="https://www.paypal.com/donate?hosted_button_id=YOUR_ID" target="_blank">
                <Heart className="mr-2 h-4 w-4" />
                Donar
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
          <h3 className="text-2xl font-bold mb-4 text-amber-300 text-center">Cómo Ayuda tu Apoyo</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-amber-500/30 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white">Audio Mejorado</h4>
                <p className="text-gray-400">Actuación de voz profesional y diseño de sonido inmersivo</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-amber-500/30 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white">Más Contenido</h4>
                <p className="text-gray-400">Niveles adicionales, personajes y elementos de la historia</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-amber-500/30 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white">Fidelidad Visual</h4>
                <p className="text-gray-400">Animaciones de arcilla mejoradas y efectos visuales</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-amber-500/30 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white">Versiones para Consolas</h4>
                <p className="text-gray-400">Ayúdanos a llevar Tibucami a más plataformas</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
