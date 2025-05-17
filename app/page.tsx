import { Download, Heart, ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import AboutGame from "@/components/about-game"
import DownloadSection from "@/components/download-section"
import SupportSection from "@/components/support-section"
import TeamSection from "@/components/team-section"
import CommunitySection from "@/components/community-section"
import Footer from "@/components/footer"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logoredesbosozoku.png"
              alt="BosoZoku Logo"
              width={40}
              height={40}
              priority
              className="rounded-full object-cover"
            />
            <span className="font-bold text-xl">BosoZoku</span>
          </Link>

          {/* Menú hamburguesa para móvil */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Menú de navegación */}
          <nav className={`md:flex items-center gap-8 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md p-4' : 'hidden'}`}>
            <Link href="#about" className="hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#download" className="hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Download</Link>
            <Link href="#support" className="hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Support</Link>
            <Link href="#team" className="hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Team</Link>
            <Link href="#community" className="hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Community</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden sm:flex border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
            >
              <Heart className="mr-2 h-4 w-4" />
              Support
            </Button>
            <Button className="bg-amber-500 text-black hover:bg-amber-600">
              <Download className="mr-2 h-4 w-4" />
              Download Demo
            </Button>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <AboutGame />
        <DownloadSection />
        <SupportSection />
        <TeamSection />
        <CommunitySection />
      </main>

      <Footer />

      <div className="fixed bottom-8 right-8 z-40">
        <Link href="#top">
          <Button size="icon" className="rounded-full bg-amber-500 text-black hover:bg-amber-600 h-12 w-12">
            <ChevronDown className="h-6 w-6 rotate-180" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
