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
  description?: string
  /** banner image (optional) */
  imageSrc?: string
  /** optional icon */
  icon?: ReactNode
  /** optional accent used to tint bits of the card */
  accentColor?: string
  /** optional extra classes for the title */
  titleClassName?: string
  /** optional content shown in a boxy hover tooltip above the card */
  tooltip?: ReactNode
}

export default function FeatureCard({
  title,
  description,
  imageSrc,
  accentColor = "rgba(217, 115, 13, 0.4)",
  titleClassName = "",
  tooltip,
}: FeatureCardProps) {
  const style = {
    "--accent": accentColor,
  } as CSSProperties

  return (
    <article
      className="group relative rounded-none border border-[#37352f] bg-white"
      style={style}
    >
      {tooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover:block z-20 w-max max-w-[280px]">
          <div className="bg-white border border-[#37352f] text-[#37352f] text-sm p-3 text-center shadow-lg rounded-sm">
            {tooltip}
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-[#37352f]" />
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
        </div>
      )}

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
        <h3 className={`text-xl font-semibold text-[#37352f] leading-snug group-hover:underline underline-offset-4 decoration-[#9b9a97] ${titleClassName}`}>{title}</h3>
        {description && (
          <p className="text-sm text-[#9b9a97] leading-relaxed">{description}</p>
        )}
      </div>
    </article>
  )
}
