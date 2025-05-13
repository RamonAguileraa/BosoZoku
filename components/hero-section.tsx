"use client"

import type React from "react"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      ref={containerRef}
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10" />

        {/* Patrones tribales SVG */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="none"
              stroke="rgba(139,69,19,0.3)"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            <path
              d="M10,10 L90,10 L90,90 L10,90 Z"
              fill="none"
              stroke="rgba(139,69,19,0.2)"
              strokeWidth="0.5"
              strokeDasharray="1 1"
            />
          </svg>
        </div>

        {/* Elementos decorativos SVG */}
        <div className="absolute inset-0">
          <svg className="absolute top-1/4 left-1/4 w-32 h-32 opacity-20" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(139,69,19,0.3)" strokeWidth="2" />
            <path
              d="M50,5 A45,45 0 0,1 95,50"
              fill="none"
              stroke="rgba(139,69,19,0.3)"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
          </svg>
          <svg className="absolute bottom-1/4 right-1/4 w-40 h-40 opacity-20" viewBox="0 0 100 100">
            <rect x="10" y="10" width="80" height="80" fill="none" stroke="rgba(139,69,19,0.3)" strokeWidth="2" />
            <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(139,69,19,0.3)" strokeWidth="2" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(139,69,19,0.3)" strokeWidth="2" />
          </svg>
        </div>

        {/* Imagen de fondo decorativa */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/tohui.jpg"
            alt="Background Pattern"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradientes y efectos */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,19,0.3),rgba(0,0,0,0))]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(205,133,63,0.4),rgba(0,0,0,0))]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(160,82,45,0.4),rgba(0,0,0,0))]" />
        </div>

        {/* Elementos flotantes mejorados */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-amber-500/30"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full border border-amber-500/30"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full border border-amber-500/30"
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Contenido del hero */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            TIBUCAMI
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-amber-100/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Despierta el Espíritu. Abraza la Arcilla.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-amber-500 text-black hover:bg-amber-600 text-lg">
              <Link href="#download">
                <Download className="mr-2 h-5 w-5" />
                Descargar Demo
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-amber-500/50 text-amber-100 hover:bg-amber-500/10 text-lg"
            >
              <Link href="#about">Conoce Más</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="h-8 w-8 text-amber-400" />
      </motion.div>
    </section>
  )
}

function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
