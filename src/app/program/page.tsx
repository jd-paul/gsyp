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
            Inside our online research mentorship lectures: live teaching,
            handwritten working, and discussion.
          </p>
        </div>

        <div className="relative w-full mb-8 border border-[#37352f] bg-white">
          <Image
            src="/image/cp-violation-lecture.png"
            alt="A GSYP lecture on CP violation with handwritten equations and mentors participating online"
            width={2879}
            height={1446}
            className="w-full h-auto"
            priority
          />
        </div>

        <figure className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(220px,1fr)] gap-6 items-end mb-12">
          <div className="border border-[#37352f] bg-white">
            <Image
              src="/image/many-worlds-lecture.png"
              alt="A GSYP online lecture exploring the many-worlds interpretation of quantum mechanics"
              width={2880}
              height={1800}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="text-sm leading-relaxed text-[#9b9a97] lg:pb-1">
            Exploring the many-worlds interpretation through live teaching and
            collaborative discussion.
          </figcaption>
        </figure>

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
