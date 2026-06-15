/* app/(wherever)/feature-card.tsx */
"use client"

import Image from "next/image"
import type { ReactNode, CSSProperties } from "react"

interface FeatureCardProps {
  /** small label — e.g. “Research” */
  category?: string
  /** heading */
  title: string
  /** short paragraph */
  description: string
  /** banner image (optional) */
  imageSrc?: string
  /** optional icon */
  icon?: ReactNode
  /** optional accent used to tint bits of the card */
  accentColor?: string
}

export default function FeatureCard({
  title,
  description,
  imageSrc,
  accentColor = "rgba(217, 115, 13, 0.4)",
}: FeatureCardProps) {
  const style = {
    "--accent": accentColor,
  } as CSSProperties

  return (
    <article
      className="group relative rounded-none overflow-hidden border border-[#37352f] bg-white"
      style={style}
    >
      {imageSrc && (
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#37352f]/40 to-transparent pointer-events-none" />
        </div>
      )}

      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold text-[#37352f] leading-snug group-hover:underline underline-offset-4 decoration-[#9b9a97]">{title}</h3>
        <p className="text-sm text-[#9b9a97] leading-relaxed">{description}</p>
      </div>
    </article>
  )
}
