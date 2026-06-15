"use client"

import Image from "next/image"

interface NewsItem {
  image?: string
  title: string
  description: string
  href: string
}

interface NewsGridProps {
  items: NewsItem[]
}

export function NewsGrid({ items }: NewsGridProps) {
  const [featured, ...rest] = items

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Featured main card */}
      <a
        href={featured.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col h-full bg-white border border-[#37352f] overflow-hidden lg:w-1/2"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
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

      {/* Smaller supporting cards */}
      <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {rest.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col h-full bg-white border border-[#37352f] overflow-hidden"
          >
            {item.image && (
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
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
        ))}
      </div>
    </div>
  )
}
