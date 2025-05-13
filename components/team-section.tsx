"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const team = [
    {
      name: "Ramon Aguilera",
      role: "Director del Proyecto",
      image: "/yo.png?height=200&width=200",
      social: {
        github: "https://github.com/ramonaguilera",
        linkedin: "https://www.linkedin.com/in/ramonaguilera",
        instagram: "https://www.instagram.com/ramonaguilera"
      },
    },
    {
      name: "Dorle Perez",
      role: "Líder de Desarrollo",
      image: "/dorle.jpg?height=200&width=200",
      social: {
        github: "https://github.com/DorHann?tab=overview&from=2025-04-01&to=2025-04-30",
        linkedin: "https://www.linkedin.com/in/dorleperez",
        instagram: "https://www.instagram.com/dorlehanniel/"
      },
    },
    {
      name: "David Salas",
      role: "Líder de Arte Conceptual",
      image: "/deivi.png?height=200&width=200",
      social: {
        github: "https://github.com/davidsalas",
        linkedin: "https://www.linkedin.com/in/davidsalas",
        instagram: "https://www.instagram.com/davidsalas"
      },
    },
    {
      name: "Gabriel Muñoz",
      role: "Líder de Arte Ambiental",
      image: "/gabo.jpg?height=200&width=200",
      social: {
        github: "https://github.com/gabrielmunoz",
        linkedin: "https://www.linkedin.com/in/gabrielmunoz",
        instagram: "https://www.instagram.com/gabrielmunoz"
      },
    },
    {
      name: "Jean Lozano",
      role: "Líder de Arte de Personajes",
      image: "/jean.jpg?height=200&width=200",
      social: {
        github: "https://github.com/jeanlozano",
        linkedin: "https://www.linkedin.com/in/jeanlozano",
        instagram: "https://www.instagram.com/jeanlozano"
      },
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + team.length) % team.length)
  }

  const getAdjacentIndex = (offset: number) => {
    return (currentIndex + offset + team.length) % team.length
  }

  const TeamCard = ({ member, isPreview = false, position = "center" }: { 
    member: typeof team[0], 
    isPreview?: boolean,
    position?: "left" | "center" | "right"
  }) => (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0.8,
        x: position === "left" ? -100 : position === "right" ? 100 : 0,
        filter: "blur(4px)"
      }}
      animate={{ 
        opacity: isPreview ? 0.5 : 1, 
        scale: isPreview ? 0.8 : 1,
        x: 0,
        filter: "blur(0px)"
      }}
      exit={{ 
        opacity: 0, 
        scale: 0.8,
        x: position === "left" ? -100 : position === "right" ? 100 : 0,
        filter: "blur(4px)"
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`relative bg-black/40 backdrop-blur-sm border border-amber-500/50 rounded-xl p-8 flex flex-col items-center hover:border-amber-500/70 transition-all duration-300 ${
        isPreview ? 'opacity-50' : 'shadow-2xl shadow-amber-500/20'
      }`}
    >
      <div className="relative h-48 w-48 rounded-full overflow-hidden mb-6 border-2 border-amber-500/50 group">
        <Image 
          src={member.image} 
          alt={member.name} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-amber-300">{member.name}</h3>
      <p className="text-amber-400 text-lg mb-6 text-center">{member.role}</p>
      <div className="flex space-x-4">
        {member.social.github && (
          <Link 
            href={member.social.github} 
            target="_blank" 
            className="text-gray-400 hover:text-amber-400 transition-colors transform hover:scale-110 duration-200"
          >
            <Github className="h-6 w-6" />
          </Link>
        )}
        {member.social.linkedin && (
          <Link 
            href={member.social.linkedin} 
            target="_blank" 
            className="text-gray-400 hover:text-amber-400 transition-colors transform hover:scale-110 duration-200"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
        )}
        {member.social.instagram && (
          <Link 
            href={member.social.instagram} 
            target="_blank" 
            className="text-gray-400 hover:text-amber-400 transition-colors transform hover:scale-110 duration-200"
          >
            <Instagram className="h-6 w-6" />
          </Link>
        )}
      </div>
    </motion.div>
  )

  return (
    <section id="equipo" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,69,19,0.15),rgba(0,0,0,0))]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Conoce al Estudio</h2>
          <p className="text-lg text-gray-300 mb-8">
            BosoZoku es un estudio indie apasionado por crear experiencias de juego únicas y culturalmente ricas.
            Nuestro pequeño equipo reúne diversos talentos para crear mundos inolvidables.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Team Members Carousel */}
          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-3 rounded-full text-amber-400 hover:bg-amber-500/20 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16 py-8">
              {/* Preview Card */}
              <div className="hidden md:block">
                <TeamCard member={team[getAdjacentIndex(-1)]} isPreview={true} position="left" />
              </div>
              
              {/* Main Card */}
              <div className="col-span-1 md:col-span-1">
                <AnimatePresence mode="wait">
                  <TeamCard key={currentIndex} member={team[currentIndex]} position="center" />
                </AnimatePresence>
              </div>
              
              {/* Preview Card */}
              <div className="hidden md:block">
                <TeamCard member={team[getAdjacentIndex(1)]} isPreview={true} position="right" />
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-3 rounded-full text-amber-400 hover:bg-amber-500/20 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-amber-400 scale-125' 
                      : 'bg-amber-400/30 hover:bg-amber-400/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
