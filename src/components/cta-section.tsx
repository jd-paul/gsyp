"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const STUDENT_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSfq20HjBviEnL6eh-3ftrnoQxuLC6vm-JrI_frYKdwrQgh-Rw/viewform";
const MENTOR_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSffZqSmqJIBKOTXKG_hdv5LIP3ef9nqhOx6nJ5r9YySv79QFA/viewform";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-[#f1f1ef] bg-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <h2 className="text-4xl lg:text-6xl font-serif tracking-tight mb-6 leading-[1.05] text-[#37352f]">
                  Ready to start your research journey?
                </h2>

                <p className="text-lg text-[#9b9a97] mb-10 leading-relaxed max-w-xl">
                  Apply to our Research Mentorship Program as a student or
                  mentor and begin shaping the future of physics.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="bg-[#d9730d] hover:bg-[#c2690b] text-white px-8 h-14 text-base rounded-none group"
                  >
                    <a
                      href={STUDENT_FORM}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Apply as Student
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    asChild
                    variant="outline"
                    className="h-14 px-8 text-base rounded-none border-[#37352f] hover:bg-[#f1f1ef] text-[#37352f]"
                  >
                    <a
                      href={MENTOR_FORM}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Apply as Mentor
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-[#9b9a97] mt-8 font-mono">
                  No fees involved · Rolling review
                </p>
              </div>

              {/* Decorative orbital */}
              <div className="hidden lg:flex items-center justify-center w-[300px] h-[300px]">
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  className="w-full h-full text-[#d3e5ef]"
                  style={{ animation: "spin 40s linear infinite" }}
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="80"
                    ry="25"
                    stroke="currentColor"
                    strokeWidth="1"
                    transform="rotate(60 100 100)"
                  />
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="80"
                    ry="25"
                    stroke="currentColor"
                    strokeWidth="1"
                    transform="rotate(-60 100 100)"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Decorative corner brackets */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-[#f1f1ef]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-[#f1f1ef]" />
        </div>
      </div>
    </section>
  );
}
