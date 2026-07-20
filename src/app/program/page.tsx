import React from "react"
import Image from "next/image"
import FeatureCard from "@/components/feature-card"

const Program = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-[#f1f1ef] text-[#37352f] overflow-hidden" id="program">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-[#9b9a97] mb-4">
            <span className="w-8 h-px bg-[#9b9a97]/30" />
            Check our program
          </span>

          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl font-serif tracking-tight leading-[1.05] text-[#37352f] mb-4"
          >
            Research Mentorship Program
          </h2>

          <p className="text-lg text-[#9b9a97] max-w-[700px]">
            A lecture slide from one of our research mentorship lectures.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mb-12 border border-[#37352f] bg-white">
          <Image
            src="/image/lecture-slide.png"
            alt="Lecture slide on quantum teleportation from a GSYP research mentorship lecture"
            width={2130}
            height={1256}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Deep dives into equations",
              description:
                "We dive into equations that help you transition to university maths, such as Euler's identity, Bayes' theorem, and fundamental calculus limits.",
            },
            {
              title: "A big community",
              description: "Learn together with our community of pupils and lecturers.",
            },
            {
              title: "Accessibility and convenience",
              description:
                "Everything is online. In-person staff meetings are occassionally done across Europe!",
            },
            {
              title: "Recorded lectures",
              description: "We record and share our lectures for your use.",
            },
          ].map((feature, i) => (
            <FeatureCard
              key={i}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Program
