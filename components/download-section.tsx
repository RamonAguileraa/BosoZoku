"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Monitor } from "lucide-react"
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
    <section id="download" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-4 sm:top-6 left-0 right-0 mx-auto w-fit bg-amber-500/90 text-black px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-md backdrop-blur-md z-20 text-center"
      >
        Próximamente | 17/05/2025
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,69,19,0.2),rgba(0,0,0,0))]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-amber-400">Descarga la Demo</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8">
            Experimenta Tibucami de primera mano con nuestra demo gratuita. Comienza tu viaje
            hacia el místico mundo de arcilla.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-black/40 backdrop-blur-sm border border-amber-900/30 rounded-xl p-6 sm:p-8 flex flex-col items-center hover:border-amber-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-amber-500/10">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl group-hover:bg-amber-500/30 transition-colors" />
              <Monitor className="h-12 w-12 sm:h-16 sm:w-16 text-amber-400 group-hover:scale-110 transition-transform duration-300 relative z-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">Windows</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-6 text-center">Windows 10/11 64-bit</p>
            <div className="w-full space-y-3">
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Requisitos mínimos
              </div>
              <Button
                onClick={() => handleDownload("windows")}
                disabled={isDownloading}
                className="w-full bg-amber-500 text-black hover:bg-amber-600 text-sm sm:text-base h-12 sm:h-14 text-lg font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300"
              >
                {isDownloading && platform === "windows" ? (
                  <div className="flex items-center">
                    <div className="animate-spin mr-2 h-4 w-4 sm:h-5 sm:w-5 border-2 border-black border-t-transparent rounded-full" />
                    Descargando...
                  </div>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                    Descargar (2.1 GB)
                  </>
                )}
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base">
            Versión Demo 0.5.2 | Última actualización: |{" "}
            <span className="text-amber-400 hover:underline cursor-pointer"> 13 de mayo, 2025</span>
          </p>
        </motion.div>
      </div>

      {/* Diálogo de instrucciones de instalación */}
      <Dialog open={showInstructions} onOpenChange={setShowInstructions}>
        <DialogContent className="bg-gray-900 border-amber-900/50 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-amber-400 text-lg sm:text-xl">Instrucciones de Instalación</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-300 text-sm sm:text-base">
            <p>1. Extrae el archivo ZIP descargado</p>
            <p>
              2. Ejecuta <span className="bg-black/30 px-2 py-1 rounded font-mono">Tibucami_Demo.exe</span>
            </p>
            <p>3. Sigue las instrucciones en pantalla para completar la instalación</p>
            <div className="pt-4">
              <p className="text-xs sm:text-sm text-amber-300">
                ¿Necesitas ayuda? Únete a nuestra <span className="underline">comunidad de Discord</span> para soporte.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
