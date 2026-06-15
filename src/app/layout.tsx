import type { Metadata } from "next"
import {
  Roboto,
  Lora,
  JetBrains_Mono
} from "next/font/google"

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "700"], // adjust as needed
})

import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "700"],
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
