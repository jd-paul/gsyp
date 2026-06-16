"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Squirrel, User } from "lucide-react";
import StructuredData from "@/components/structured-data";

const verbs = ["create", "discover", "research", "publish"];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % verbs.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const styleId = "gsyp-marquee-keyframes";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        @keyframes gsyp-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <>
      <StructuredData />
      <div className="flex flex-col">
        <section
          id="home"
          className="relative flex flex-col justify-center overflow-hidden bg-white border-b border-[#f1f1ef]"
          style={{ minHeight: "calc(100vh - 64px)" }}
        >
          {/* Subtle editorial grid lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
            {[...Array(8)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute h-px bg-[#f1f1ef]"
                style={{
                  top: `${12.5 * (i + 1)}%`,
                  left: 0,
                  right: 0,
                }}
              />
            ))}
            {[...Array(12)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute w-px bg-[#f1f1ef]"
                style={{
                  left: `${8.33 * (i + 1)}%`,
                  top: 0,
                  bottom: 0,
                }}
              />
            ))}
          </div>

          {/* Decorative physics accent */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[480px] md:h-[480px] lg:w-[640px] lg:h-[640px] pointer-events-none z-[1]">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              className="w-full h-full text-[#ddebf1]"
              style={{ animation: "spin 80s linear infinite" }}
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="100"
                cy="100"
                r="52"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <ellipse
                cx="100"
                cy="100"
                rx="80"
                ry="25"
                stroke="currentColor"
                strokeWidth="0.5"
                transform="rotate(60 100 100)"
              />
              <ellipse
                cx="100"
                cy="100"
                rx="80"
                ry="25"
                stroke="currentColor"
                strokeWidth="0.5"
                transform="rotate(-60 100 100)"
              />
              <circle cx="100" cy="20" r="3" fill="currentColor" />
              <circle cx="165" cy="128" r="2" fill="currentColor" />
              <circle cx="38" cy="132" r="2.5" fill="currentColor" />
            </svg>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32 w-full">
            {/* Eyebrow */}
            <div
              className={`mb-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-[#9b9a97]">
                <span className="w-8 h-px bg-[#f1f1ef]" />
                Global Society of Young Physicists
              </span>
            </div>

            {/* Main headline */}
            <div className="mb-6 max-w-4xl">
              <h1
                className={`text-[clamp(2.5rem,8vw,6rem)] font-serif leading-[1.05] tracking-tight text-[#37352f] transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <span className="block">Explore Physics Early.</span>
                <span className="block">Think Bigger Sooner.</span>
              </h1>
            </div>

            {/* Rotating verb */}
            <div
              className={`mb-12 h-10 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-2xl md:text-3xl font-serif italic text-[#9b9a97]">
                We help you{" "}
                <span className="relative inline-block text-[#d9730d]">
                  <span key={wordIndex} className="inline-flex">
                    {verbs[wordIndex].split("").map((char, i) => (
                      <span
                        key={`${wordIndex}-${i}`}
                        className="inline-block animate-char-in"
                        style={{
                          animationDelay: `${i * 50}ms`,
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                </span>
              </span>
            </div>

            {/* Description + CTAs */}
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-end transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-xl lg:text-2xl text-[#9b9a97] leading-relaxed max-w-xl">
                Democratising physics education, one mind at a time. Join a
                global community of young researchers, mentors, and curious
                minds.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 flex-wrap">
                <Button
                  size="lg"
                  asChild
                  className="bg-[#d9730d] hover:bg-[#c2690b] text-white px-6 h-14 text-base rounded-none group"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfq20HjBviEnL6eh-3ftrnoQxuLC6vm-JrI_frYKdwrQgh-Rw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Apply as Student
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>

                <Button
                  size="lg"
                  asChild
                  className="bg-[#d9730d] hover:bg-[#c2690b] text-white px-6 h-14 text-base rounded-none group"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSffZqSmqJIBKOTXKG_hdv5LIP3ef9nqhOx6nJ5r9YySv79QFA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Squirrel className="w-4 h-4" />
                    Apply as Mentor
                  </a>
                </Button>

                <Button
                  size="lg"
                  asChild
                  variant="outline"
                  className="h-14 px-6 text-base rounded-none border-[#37352f] bg-transparent hover:bg-[#f1f1ef] text-[#37352f]"
                >
                  <a href="#program" className="inline-flex items-center gap-2">
                    <Monitor className="w-4 h-4" />
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats marquee */}
          <div
            className={`absolute z-20 bottom-8 left-0 right-0 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-full overflow-hidden whitespace-nowrap">
              <div
                className="inline-flex whitespace-nowrap will-change-transform"
                style={{
                  animation: "gsyp-marquee 25s linear infinite",
                }}
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-16 pr-16 shrink-0">
                    {[
                      { value: "200+", label: "Students mentored" },
                      { value: "4", label: "Research issues" },
                      { value: "15+", label: "Mentors" },
                      { value: "15+", label: "Countries" },
                    ].map((stat) => (
                      <div
                        key={`${stat.label}-${i}`}
                        className="flex items-baseline gap-4"
                      >
                        <span className="text-3xl lg:text-4xl font-serif text-[#37352f]">
                          {stat.value}
                        </span>
                        <span className="text-sm text-[#9b9a97] font-mono uppercase tracking-wider">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
