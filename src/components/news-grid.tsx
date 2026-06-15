"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface NewsItem {
  image?: string
  title: string
  description: string
  href: string
}

interface NewsGridProps {
  items: NewsItem[]
  links?: NewsItem[]
}

export function NewsGrid({ items, links }: NewsGridProps) {
  const [featured, ...rest] = items

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {/* Featured main card */}
        <a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col h-full bg-white border border-[#37352f] overflow-hidden md:col-span-1 md:row-span-3 lg:col-span-2 lg:row-span-2"
        >
          <div className="relative aspect-[3/4] lg:aspect-[4/3] overflow-hidden">
            {featured.image ? (
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full bg-[#f1f1ef]" />
            )}
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-2xl font-semibold text-[#37352f] mb-3 leading-snug group-hover:underline underline-offset-4 decoration-[#9b9a97]">
              {featured.title}
            </h3>
            <p className="text-[#9b9a97] leading-relaxed">{featured.description}</p>
          </div>
        </a>

        {/* Supporting cards */}
        {rest.map((item, index) => {
          const isLast = index === rest.length - 1
          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col h-full bg-white border border-[#37352f] overflow-hidden ${
                isLast ? "lg:col-span-2" : ""
              }`}
            >
              {item.image && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-[#37352f] mb-2 leading-snug group-hover:underline underline-offset-4 decoration-[#9b9a97]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9b9a97] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </a>
          )
        })}
      </div>

      {/* Optional plain-text links for less important items */}
      {links && links.length > 0 && (
        <div className="border-t border-[#e5e5e5] pt-6">
          <p className="text-sm font-mono uppercase tracking-widest text-[#9b9a97] mb-3">
            Class lists
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[#37352f] hover:text-[#d9730d] underline underline-offset-4 transition-colors"
                >
                  {link.title}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
