import React from "react"
import FeatureCard from "@/components/feature-card"

const Program = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#f1f1ef] text-[#37352f] overflow-hidden" id="program">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
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
            Here are some pictures of a previous research mentorship cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              imageSrc: "/image/meeting-1.png",
              title: "Deep dives into equations",
              description:
                "We dive into equations that help you transition to university maths, such as Euler's identity, Bayes' theorem, and fundamental calculus limits.",
            },
            {
              imageSrc: "/image/meeting-2.png",
              title: "A big community",
              description: "Learn together with our community of pupils and lecturers.",
            },
            {
              imageSrc: "/image/meeting-3.png",
              title: "Accessibility and convenience",
              description:
                "Everything is online. In-person staff meetings are occassionally done across Europe!",
            },
            {
              imageSrc: "/image/meeting-4.png",
              title: "Recorded lectures",
              description: "We record and share our lectures for your use.",
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
      </div>
    </section>
  )
}

export default Program
