import type { Metadata } from "next"
import localFont from "next/font/local"

const lora = localFont({
  src: [{ path: "../fonts/lora-latin.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-lora",
  display: "swap",
})

import "./globals.css"

const roboto = localFont({
  src: [{ path: "../fonts/roboto-latin.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-roboto",
  display: "swap",
})

const jetbrainsMono = localFont({
  src: [{ path: "../fonts/jetbrains-mono-latin.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Global Society of Young Physicists",
  description: "A community for high school students interested in physics research",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${lora.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
