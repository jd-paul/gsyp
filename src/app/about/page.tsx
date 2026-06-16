"use client";

import { ArrowUpRight } from "lucide-react";
import { NewsGrid } from "@/components/news-grid";
import FeatureCard from "@/components/feature-card";

export default function About() {
  const ctaLinks = [
    {
      href: "https://forms.gle/iYRir2qz3n9hZQLMA",
      label: "RMP 2026 Student Applications",
    },
    {
      href: "https://forms.gle/vaPwX6zpJNWMZFyK9",
      label: "RMP 2025 Early Student Application",
    },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeQ9giQL7a9kHb_y9LRsGNqLglrrvtNAqCnfxVTr4LghIxZPg/viewform",
      label: "Deputy Editor Form",
    },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeFXmPTU_1pp9Bb3H5SK2KpsoTBikeCRr3zfY8wvt6Ja5Qu0w/viewform",
      label: "Marketing Associate Application",
    },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSc1GgTcAXGex6_CkHooyo1uxiZxF-uuUczh2c24Ed7Z82xtLw/viewform",
      label: "Outreach Manager Form",
    },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSffZqSmqJIBKOTXKG_hdv5LIP3ef9nqhOx6nJ5r9YySv79QFA/viewform?usp=header",
      label: "New Mentor Form",
    },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLScxgmUZ-wRHCJcVzJF9wuw_5UAgMjPZftJd-SteyRtmYRvQ-Q/viewform?usp=header",
      label: "Returning Mentor Form",
    },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeB0I5vwjzYL9_A1kZARpwXViuMWYBBi86Vp38WnmRINq9-gQ/viewform",
      label: "Become a GSYP Member!",
    },
  ];

  return (
    <>
      <section
        id="about"
        className="relative bg-white border-b border-[#f1f1ef]"
      >
        <div className="relative flex flex-col md:flex-row min-h-[600px]">
          <div className="flex flex-col justify-center w-full md:w-1/2 md:max-w-[700px] md:ml-auto px-6 lg:px-12 py-20 lg:py-28">
            <span className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-[#0b6e99] mb-6">
              <span className="w-8 h-px bg-[#0b6e99]/30" />
              WE ARE
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.05] text-[#37352f] mb-6">
              Global Society of Young Physicists
            </h2>

            <p className="text-lg text-[#9b9a97] leading-relaxed max-w-md mb-8">
              We are a student-led organization that helps high-schoolers dive
              into university-level physics research.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="https://linkedin.com/company/gsyphysics"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[#37352f] hover:text-[#d9730d] underline underline-offset-4 transition-colors"
              >
                LinkedIn
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://www.instagram.com/gsyphysics/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[#37352f] hover:text-[#d9730d] underline underline-offset-4 transition-colors"
              >
                Instagram
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 min-h-[320px] md:min-h-full bg-[#0b6e99] flex items-center justify-center p-8 lg:p-12">
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 0h40v1H0zM0 0v40h1V0z' fill='%23ffffff'/%3E%3C/svg%3E\")",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            <div className="relative z-30 w-full max-w-[560px]">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    name: "Arya",
                    image: "/image/Arya.jpeg",
                    tooltip: (
                      <>
                        <strong>Arya Lal Gonullu</strong>
                        <br />
                        Chief Exec. of GSYP
                        <br />
                        Graduated from Theoretical Physics
                        <br />
                        King&apos;s College London
                      </>
                    ),
                  },
                  {
                    name: "Toby",
                    image: "/image/Toby.jpeg",
                    tooltip: (
                      <>
                        <strong>Toby Bhanji</strong>
                        <br />
                        Senior Research Mentor
                        <br />
                        4th Year Physics
                        <br />
                        King&apos;s College London
                      </>
                    ),
                  },
                  {
                    name: "Kajol",
                    image: "/image/Kajol.jpeg",
                    tooltip: (
                      <>
                        <strong>Kajol Mistry</strong>
                        <br />
                        Graduated from MSci Physics
                        <br />
                        King&apos;s College London
                      </>
                    ),
                  },
                  {
                    name: "Nikita",
                    image: "/image/Nikita.jpeg",
                    tooltip: (
                      <>
                        <strong>Nikita Azevedo</strong>
                        <br />
                        MSc Candidate in Quantum Algorithms on Quantum
                        <br />
                        & Photonic Computers at the University of the Witwatersrand
                      </>
                    ),
                  },
                ].map((member) => (
                  <FeatureCard
                    key={member.name}
                    title={`Mentor - ${member.name}`}
                    imageSrc={member.image}
                    tooltip={member.tooltip}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-24 bg-[#f1f1ef]" id="community">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-[#0b6e99] mb-4">
              <span className="w-8 h-px bg-[#0b6e99]/30" />
              Your role starts here
            </span>

            <h2
              id="about-heading"
              className="text-4xl sm:text-5xl font-serif tracking-tight leading-[1.05] text-[#37352f] mb-4"
            >
              Shape the Future of Physics With Us
            </h2>

            <p className="text-lg text-[#9b9a97]">
              Join as a mentor or as a student, working collaborating on
              original projects.
            </p>
          </div>

          <div className="flex flex-col gap-12 xl:gap-16">
            {/* Text column: intro and links side by side on xl+, stacked below */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8 items-start">
              <div>
                <p className="text-xl mb-4 font-medium text-[#37352f]">
                  Introducing the{" "}
                  <span className="font-black font-serif">
                    Research Mentorship Program
                  </span>
                </p>

                <p className="text-lg text-[#9b9a97] leading-relaxed">
                  We offer a the research mentorship program where we pair
                  highschool students with university mentors for a remote
                  research experience in physics.
                </p>
              </div>

              <div>
                <p className="text-lg text-[#37352f] leading-relaxed font-semibold mb-4">
                  Work with us! Click the links below to apply.
                </p>

                <ul className="space-y-3 border-l border-[#e5e5e5] pl-5">
                  {ctaLinks.map(({ href, label }) => (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-[#37352f] hover:text-[#d9730d] transition-colors"
                      >
                        <span className="underline underline-offset-4 decoration-[#9b9a97] group-hover:decoration-[#d9730d]">
                          {label}
                        </span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Issues grid */}
            <div>
              <p className="text-sm font-mono uppercase tracking-widest text-[#9b9a97] mb-4">
                Starry Messenger Issues
              </p>
              <NewsGrid
                items={[
                  {
                    image: "/image/issue-4.png",
                    title: "Read our August 2025 Issue!",
                    description:
                      "Presents the 2025 research mentorship programme (RMP) papers on advanced physics topics.",
                    href: "https://drive.google.com/file/d/1kTuvAXBbbspFzkv75FRiYtDcsypdEVlD/view?usp=sharing",
                  },
                  {
                    image: "/image/issue-3.png",
                    title: "Read our April 2025 Issue!",
                    description:
                      "Includes global student contributions on quantum ideas, astrophysics, and cross-field themes.",
                    href: "https://drive.google.com/file/d/1OpUB-QzRZHJPlvsuZC9vMSUTxzbjVArm/view?usp=sharing",
                  },
                  {
                    image: "/image/issue-2.png",
                    title: "Read our December 2024 Issue!",
                    description:
                      "Covers black holes, space missions, and creative approaches to experiments.",
                    href: "https://drive.google.com/file/d/1m4EtybazHj8aYMk2huTrJ0oq7XikgFd6/view?usp=sharing",
                  },
                  {
                    image: "/image/issue-1.png",
                    title: "Read our August 2024 Issue!",
                    description:
                      "The first issue, featuring student reports on topics like planets, particles, and space science.",
                    href: "https://drive.google.com/file/d/1TpDt1oiccsfUur13e3AvkjqXdaaInAR2/view?usp=sharing",
                  },
                ]}
                links={[
                  {
                    title: "Class list 2025",
                    description: "",
                    href: "https://drive.google.com/file/d/19as2YOwavprLoCHJIoQz7zyJxmJPnSvy/view?usp=sharing",
                  },
                  {
                    title: "Class list 2024",
                    description: "",
                    href: "https://drive.google.com/file/d/1PxGx8JF3hc_C2LSFHDRMXPlc2fAubWtw/view?usp=sharing",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
