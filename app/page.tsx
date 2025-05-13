import { Download, Heart, ChevronDown } from "lucide-react"
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

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logoredesbosozoku.png?height=40&width=40"
              alt="BosoZoku Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl">BosoZoku</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="hover:text-amber-400 transition-colors">
              About
            </Link>
            <Link href="#download" className="hover:text-amber-400 transition-colors">
              Download
            </Link>
            <Link href="#support" className="hover:text-amber-400 transition-colors">
              Support
            </Link>
            <Link href="#team" className="hover:text-amber-400 transition-colors">
              Team
            </Link>
            <Link href="#community" className="hover:text-amber-400 transition-colors">
              Community
            </Link>
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
