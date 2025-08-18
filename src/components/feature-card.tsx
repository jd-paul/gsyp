/* app/(wherever)/feature-card.tsx */
"use client"

import Image from "next/image"
import type { ReactNode } from "react"

interface FeatureCardProps {
  /** small label — e.g. “Research” */
  category?: string
  /** heading */
  title: string
  /** short paragraph */
  description: string
  /** banner image */
  imageSrc: string
  /** optional icon (kept from your original API) */
  icon?: ReactNode
}

export default function FeatureCard({
  title,
  description,
  imageSrc,
  icon,
}: FeatureCardProps) {
  return (
    <article className="bg-white rounded-[20px] shadow-md overflow-hidden transition hover:shadow-lg">
      {/* banner */}
      <div className="relative h-44 w-full overflow-hidden group">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {/* body */}
      <div className="p-6 space-y-1">
        {icon}

        <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>

        <p className="text-sm text-neutral-800 leading-relaxed">{description}</p>
      </div>
    </article>
  )
}
