"use client"

import { ArrowUpRight } from "lucide-react"

export function AnnouncementBanner() {
  return (
    <div className="w-full bg-[#0b6e99] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-3">
        <a
          href="https://forms.gle/EgjNFHRNdMtLEiVGA"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
        >
          <span className="inline-flex items-start sm:items-center gap-2 text-sm font-medium">
            <span className="inline-flex items-center rounded-none bg-white/10 px-2 py-0.5 text-xs font-mono uppercase tracking-wider shrink-0 mt-0.5 sm:mt-0">
              Now Open
            </span>
            Research Mentor applications for RMP 2027 are now open!
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 group-hover:text-[#d3e5ef] transition-colors shrink-0">
            Apply by December 1, 2026
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>
      </div>
    </div>
  )
}
