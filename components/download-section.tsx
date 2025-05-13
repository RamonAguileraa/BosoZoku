"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Monitor, Apple, LaptopIcon as Linux } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function DownloadSection() {
  const [platform, setPlatform] = useState<string | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const [showInstructions, setShowInstructions] = useState(false)

  const handleDownload = (os: string) => {
    setPlatform(os)
    setIsDownloading(true)

    // Simular inicio de descarga
    setTimeout(() => {
      setIsDownloading(false)
      setShowInstructions(true)
    }, 2000)
  }

  return (
    <section id="download" className="relative py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,69,19,0.2),rgba(0,0,0,0))]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Descarga la Demo</h2>
          <p className="text-lg text-gray-300 mb-8">
            Experimenta Tibucami de primera mano con nuestra demo gratuita. Elige tu plataforma y comienza tu viaje
            hacia el místico mundo de arcilla.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="bg-black/40 backdrop-blur-sm border border-amber-900/30 rounded-xl p-6 flex flex-col items-center hover:border-amber-500/50 transition-colors group">
            <Monitor className="h-12 w-12 mb-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Windows</h3>
            <p className="text-gray-400 text-sm mb-4 text-center">Windows 10/11 64-bit</p>
            <Button
              onClick={() => handleDownload("windows")}
              disabled={isDownloading}
              className="w-full bg-amber-500 text-black hover:bg-amber-600"
            >
              {isDownloading && platform === "windows" ? (
                <div className="flex items-center">
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-black border-t-transparent rounded-full" />
                  Descargando...
                </div>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Descargar (2.1 GB)
                </>
              )}
            </Button>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-amber-900/30 rounded-xl p-6 flex flex-col items-center hover:border-amber-500/50 transition-colors group">
            <Apple className="h-12 w-12 mb-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">macOS</h3>
            <p className="text-gray-400 text-sm mb-4 text-center">macOS 11+ (Intel/Apple Silicon)</p>
            <Button
              onClick={() => handleDownload("mac")}
              disabled={isDownloading}
              className="w-full bg-amber-500 text-black hover:bg-amber-600"
            >
              {isDownloading && platform === "mac" ? (
                <div className="flex items-center">
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-black border-t-transparent rounded-full" />
                  Descargando...
                </div>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Descargar (2.3 GB)
                </>
              )}
            </Button>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-amber-900/30 rounded-xl p-6 flex flex-col items-center hover:border-amber-500/50 transition-colors group">
            <Linux className="h-12 w-12 mb-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Linux</h3>
            <p className="text-gray-400 text-sm mb-4 text-center">Ubuntu 20.04+ / SteamOS</p>
            <Button
              onClick={() => handleDownload("linux")}
              disabled={isDownloading}
              className="w-full bg-amber-500 text-black hover:bg-amber-600"
            >
              {isDownloading && platform === "linux" ? (
                <div className="flex items-center">
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-black border-t-transparent rounded-full" />
                  Descargando...
                </div>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Descargar (2.0 GB)
                </>
              )}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            Versión Demo 0.5.2 | Última actualización: 1 de mayo, 2025 |{" "}
            <span className="text-amber-400 hover:underline cursor-pointer">Ver requisitos del sistema</span>
          </p>
        </motion.div>
      </div>

      {/* Diálogo de instrucciones de instalación */}
      <Dialog open={showInstructions} onOpenChange={setShowInstructions}>
        <DialogContent className="bg-gray-900 border-amber-900/50 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-amber-400 text-xl">Instrucciones de Instalación</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-300">
            {platform === "windows" && (
              <>
                <p>1. Extrae el archivo ZIP descargado</p>
                <p>
                  2. Ejecuta <span className="bg-black/30 px-2 py-1 rounded font-mono">Tibucami_Demo.exe</span>
                </p>
                <p>3. Sigue las instrucciones en pantalla para completar la instalación</p>
              </>
            )}
            {platform === "mac" && (
              <>
                <p>1. Abre el archivo DMG descargado</p>
                <p>2. Arrastra Tibucami a tu carpeta de Aplicaciones</p>
                <p>3. Haz clic derecho y selecciona "Abrir" para evitar Gatekeeper</p>
              </>
            )}
            {platform === "linux" && (
              <>
                <p>1. Extrae el archivo TAR.GZ descargado</p>
                <p>2. Abre la terminal en la carpeta extraída</p>
                <p>
                  3. Ejecuta <span className="bg-black/30 px-2 py-1 rounded font-mono">./Tibucami_Demo.sh</span>
                </p>
              </>
            )}
            <div className="pt-4">
              <p className="text-sm text-amber-300">
                ¿Necesitas ayuda? Únete a nuestra <span className="underline">comunidad de Discord</span> para soporte.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
