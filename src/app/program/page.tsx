import React from "react"
import FeatureCard from "@/components/feature-card"

const Program = () => {
  return (
    <section className="relative py-32 bg-[#1a1d21] text-white overflow-hidden" id="program">
      {/* Header */}
      <div className="relative z-20 max-w-6xl mx-auto flex flex-col items-center justify-between w-full px-4 gap-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-block rounded-xl bg-neutral-200 text-black px-3 py-1 text-sm mb-4 font-bold">
            Check our program
          </div>
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-white mb-4 font-serif"
          >
            Research Mentorship Program
          </h2>

          <p className="max-w-[700px] text-neutral-300 md:text-lg">
            Here are some pictures of a previous research mentorship cycle.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 max-w-6xl mx-auto">
        {[
          {
            imageSrc: "/image/meeting-1.png",
            title: "Deep dives into equations",
            description: "We deeply learn about our equat.",
          },
          {
            imageSrc: "/image/meeting-2.png",
            title: "A big community",
            description: "Learn together with our community of pupils and lecturers.",
          },
          {
            imageSrc: "/image/meeting-3.png",
            title: "Accessibility and convenience",
            description: "Everything is online. In-person staff meetings are occassionally done across Europe!",
          },
          {
            imageSrc: "/image/meeting-4.png",
            title: "Recorded lectures",
            description: "We record our lectures and share our resources for your use.",
          },
        ].map((feature, i) => (
          <FeatureCard
            key={i}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
          />
        ))}
      </div>


    </section>
  )
}

export default Program
