import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Program = () => {
  return (
    <section className="relative py-32 bg-zinc-950 text-white overflow-hidden">
      <div className="relative z-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full px-4 gap-12">
        {/* Left side: The cool gradient circle */}
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 blur-3xl opacity-60" />

        {/* Right side: Text */}
        <div className="text-center md:text-left max-w-xl space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            The GSYP Research Program
          </h1>

          <p className="text-zinc-300 text-base md:text-lg">
            Work directly with university mentors from King&apos;s College London, UC Berkeley, and many more top universities to complete original physics research — no prior
            experience required.
          </p>

          <p className="text-zinc-400 text-sm">
            Our mentors guide students from ideation to execution, helping them produce
            professional-grade research.
          </p>

          <Link href="/join">
            <Button variant="secondary" className="text-black">
              Join Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center w-full px-4 gap-12">
        {/* Hexagon Image Grid */}
        <div className="mt-24 flex flex-wrap justify-center gap-8 px-4">
          {["/image/meeting-1.png", "/image/meeting-2.png", "/image/meeting-3.png", "/image/meeting-4.png"].map((src, i) => (
            <div
              key={i}
              className="hexagon relative w-32 h-32 md:w-40 md:h-40 overflow-hidden shadow-md bg-white hover:scale-105 transition-transform"
            >
              <Image
                src={src}
                alt={`Hex Image ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 128px, 160px"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Program
