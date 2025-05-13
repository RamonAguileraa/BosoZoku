"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function TeamSection() {
  const team = [
    {
      name: "Maya Rodriguez",
      role: "Creative Director",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Kai Chen",
      role: "Lead Developer",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Aisha Patel",
      role: "3D Artist",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Leo Kowalski",
      role: "Sound Designer",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        instagram: "#",
      },
    },
  ]

  return (
    <section id="team" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,69,19,0.15),rgba(0,0,0,0))]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Meet the Studio</h2>
          <p className="text-lg text-gray-300 mb-8">
            BosoZoku is a passionate indie game studio dedicated to creating unique, culturally rich gaming experiences.
            Our small team brings diverse talents together to craft unforgettable worlds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-sm border border-amber-900/30 rounded-xl p-6 flex flex-col items-center hover:border-amber-500/50 transition-colors"
            >
              <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4 border-2 border-amber-500/50">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1 text-amber-300">{member.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{member.role}</p>

              <div className="flex space-x-3">
                {member.social.twitter && (
                  <Link href={member.social.twitter} className="text-gray-400 hover:text-amber-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                )}
                {member.social.instagram && (
                  <Link href={member.social.instagram} className="text-gray-400 hover:text-amber-400 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Link>
                )}
                {member.social.linkedin && (
                  <Link href={member.social.linkedin} className="text-gray-400 hover:text-amber-400 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                )}
                {member.social.github && (
                  <Link href={member.social.github} className="text-gray-400 hover:text-amber-400 transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
