import Link from "next/link"
import Image from "next/image"
import { Twitter, Instagram, DiscIcon as Discord, Youtube, Heart, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-amber-900/30 py-16">
      {/* Efecto de gradiente en el fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,69,19,0.15),rgba(0,0,0,0))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Sección superior */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo y descripción */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500/50 group-hover:border-amber-500 transition-colors">
                <Image
                  src="/placeholder.svg?height=56&width=56"
                  alt="BosoZoku Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-bold text-3xl bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">BosoZoku</span>
                <p className="text-amber-400/80 text-sm">Estudio de Juegos Indie</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creamos experiencias de juego únicas y culturalmente enriquecidas, inspirándonos en las tradiciones y mitologías de diferentes culturas.
            </p>
            <div className="flex space-x-4">
              <Link href="https://discord.gg/bosozoku" target="_blank" className="text-gray-400 hover:text-amber-400 transition-colors transform hover:scale-110">
                <Discord className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com/bosozoku" target="_blank" className="text-gray-400 hover:text-amber-400 transition-colors transform hover:scale-110">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com/bosozoku.studio" target="_blank" className="text-gray-400 hover:text-amber-400 transition-colors transform hover:scale-110">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://youtube.com/@BosoZokuStudio" target="_blank" className="text-gray-400 hover:text-amber-400 transition-colors transform hover:scale-110">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-bold text-amber-400 mb-6 text-lg">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-amber-500 rounded-full group-hover:w-2 transition-all" />
                  Sobre el Juego
                </Link>
              </li>
              <li>
                <Link href="#download" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-amber-500 rounded-full group-hover:w-2 transition-all" />
                  Descargar Demo
                </Link>
              </li>
              <li>
                <Link href="#support" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-amber-500 rounded-full group-hover:w-2 transition-all" />
                  Soporte
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-amber-500 rounded-full group-hover:w-2 transition-all" />
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-amber-500 rounded-full group-hover:w-2 transition-all" />
                  Comunidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-amber-400 mb-6 text-lg">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail className="h-5 w-5 text-amber-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300">contact.bosozoku@gmail.com</p>
                  <p className="text-gray-400 text-sm">Respuesta en 24h</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-amber-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300">Monterrey, México</p>
                  <p className="text-gray-400 text-sm">Estudio Principal</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="h-5 w-5 text-amber-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300">+52 (81) 1234 5678</p>
                  <p className="text-gray-400 text-sm">Lun-Vie 9:00-18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent mb-8" />

        {/* Sección inferior */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} BosoZoku Studio. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Términos de Servicio
            </Link>
            <Link href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Política de Cookies
            </Link>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 mx-1 text-amber-500 animate-pulse" />
            <span>en el mundo de arcilla</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
