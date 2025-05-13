import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tibucami - Juego de Acción y Aventura en 3D",
  description: "Un juego de acción y aventura en 3D inspirado en la mitología Rarámuri y creado con una estética única de arcilla en stop-motion.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://tibucami.com"),
  keywords: ["Tibucami", "BosoZoku", "indie game", "action-adventure", "clay aesthetic", "Rarámuri mythology"],
  openGraph: {
    title: "Tibucami - Juego de Acción y Aventura en 3D",
    description: "Un juego de acción y aventura en 3D inspirado en la mitología Rarámuri y creado con una estética única de arcilla en stop-motion.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tibucami - Juego de Acción y Aventura en 3D"
      }
    ]
  },
  generator: "v0.dev",
  twitter: {
    card: "summary_large_image",
    title: "Tibucami - Juego de Acción y Aventura en 3D",
    description: "Un juego de acción y aventura en 3D inspirado en la mitología Rarámuri y creado con una estética única de arcilla en stop-motion.",
    images: ["/og-image.jpg"]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} scroll-smooth`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
