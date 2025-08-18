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
  icon,
  accentColor = "rgba(36, 101, 237, 0.5)",
}: FeatureCardProps) {
  const style = {
    // expose as CSS var so you can use it in multiple places
    // without more inline styles
    "--accent": accentColor,
  } as CSSProperties

  return (
    <article
      className="bg-white rounded-[20px] overflow-hidden shadow-md transition hover:shadow-lg"
      style={style}
    >
      {/* Accent bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, var(--accent), transparent)` }}
      />

      {/* banner (optional) */}
      {imageSrc && (
        <div className="relative h-44 w-full overflow-hidden group">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
      )}

      {/* body */}
      <div className="p-6 space-y-2">
        {icon && (
          <div
            className="inline-flex items-center justify-center rounded-md p-2 mb-2"
            style={{ background: `color-mix(in srgb, var(--accent) 20%, transparent)` }}
          >
            {/* let icon inherit accent color */}
            <div style={{ color: `var(--accent)` }}>{icon}</div>
          </div>
        )}

        <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
        <p className="text-sm text-neutral-700 leading-relaxed">{description}</p>
      </div>
    </article>
  )
}
