// src/app/page.tsx
import Navbar from "@/components/navbar"
import Home from "@/app/home/page"
import About from "@/app/about/page"
import Program from "@/app/program/page"
import { CtaSection } from "@/components/cta-section"
import Footer from "@/app/footer/page"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Program />
      <CtaSection />
      <Footer />
    </main>
  )
}
