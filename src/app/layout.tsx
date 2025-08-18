import type { Metadata } from "next"
import {
  Nunito,
  Lora
} from "next/font/google"

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "700"], // adjust as needed
})

import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
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
      <body className={`${nunito.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
