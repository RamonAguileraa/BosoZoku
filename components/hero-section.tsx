"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden perspective-1000"
      ref={containerRef}
    >
      {/* Fondo con efecto 3D */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black z-10" />
        
        {/* Efecto de profundidad con capas */}
        <motion.div 
          className="absolute inset-0"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,19,0.4),rgba(0,0,0,0))] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(205,133,63,0.3),rgba(0,0,0,0))] animate-pulse delay-100" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(160,82,45,0.3),rgba(0,0,0,0))] animate-pulse delay-200" />
        </motion.div>

        {/* Patrones geométricos animados */}
        <div className="absolute inset-0">
          <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="none"
              stroke="rgba(139,69,19,0.3)"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              animate={{
                strokeDashoffset: [0, -4],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>
        </div>

        {/* Elementos flotantes 3D */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full border-2 border-amber-500/30 rounded-lg transform-gpu rotate-45" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48"
          animate={{
            rotateX: [360, 0],
            rotateY: [360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full border-2 border-amber-500/30 rounded-full transform-gpu" />
        </motion.div>

        {/* Imagen de fondo con efecto parallax */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        >
          <Image
            src="/tohui.jpg"
            alt="Background Pattern"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Contenido principal con efecto 3D */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
          style={{ opacity }}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              textShadow: "0 0 20px rgba(251, 191, 36, 0.3)",
            }}
          >
            TIBUCAMI
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl mb-12 text-amber-100/90 font-light tracking-wider"
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
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-amber-500 text-black hover:bg-amber-600 text-lg transform-gpu hover:scale-105 transition-transform"
            >
              <Link href="#download">
                <Download className="mr-2 h-5 w-5" />
                Descargar Demo
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-amber-500/50 text-amber-100 hover:bg-amber-500/10 text-lg transform-gpu hover:scale-105 transition-transform"
            >
              <Link href="#about">Conoce Más</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll mejorado */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-amber-400 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
