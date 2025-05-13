import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tibucami | BosoZoku Game Studio",
  description:
    "Awaken the Spirit. Embrace the Clay. Tibucami is a 3D action-adventure game inspired by Rarámuri mythology with a unique stop-motion clay aesthetic.",
  keywords: ["Tibucami", "BosoZoku", "indie game", "action-adventure", "clay aesthetic", "Rarámuri mythology"],
  openGraph: {
    title: "Tibucami | BosoZoku Game Studio",
    description: "Awaken the Spirit. Embrace the Clay. A 3D action-adventure game with a unique clay aesthetic.",
    images: [
      {
        url: "/logoredesbosozoku.png",
        width: 1200,
        height: 630,
        alt: "Tibucami Game",
      },
    ],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
