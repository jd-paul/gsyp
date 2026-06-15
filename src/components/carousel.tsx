"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AppCard } from "./carousel-card"

const noScrollbarCSS = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`

interface CarouselProps {
  items: Array<{
    image: string
    title: string
    description: string
    action: () => void
  }>
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", updateScrollButtons)
      return () => carousel.removeEventListener("scroll", updateScrollButtons)
    }
  }, [carouselRef.current])

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current
      const scrollTo =
        direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2

      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <>
      <style>{noScrollbarCSS}</style>
      <div className="relative w-full rounded-2xl border border-[#f1f1ef] bg-white overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto py-6 px-6 no-scrollbar"
          style={{ scrollSnapType: "x mandatory", msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <AppCard
                image={item.image}
                title={item.title}
                description={item.description}
                onClick={item.action}
              />
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border border-[#f1f1ef] rounded-none p-2 shadow-sm text-[#37352f] hover:bg-[#f1f1ef] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border border-[#f1f1ef] rounded-none p-2 shadow-sm text-[#37352f] hover:bg-[#f1f1ef] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
