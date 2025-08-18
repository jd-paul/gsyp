"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Zap } from "lucide-react"
import { SheetTitle } from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Community", href: "#community" },
    { label: "Program", href: "#program" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-background/100 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 h-16">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-6 min-w-0">
          <Link href="/" className="flex items-center gap-2" aria-label="GSYP Homepage">
            {/* <Image src="/logo.png" alt="GSYP Logo" width={32} height={32} priority /> */}
            <span className="text-base font-semibold truncate hidden lg:inline">
              Global Society of Young Physicists
            </span>
            <span className="text-base font-semibold truncate lg:hidden">
              GSYP
            </span>
          </Link>

          {/* Nav next to logo */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Request Demo + Mobile Menu */}
        <div className="flex items-center justify-end gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" aria-label="Open Menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#1a1d21] text-white border-l border-[#2a2d31] dark:bg-[#1a1d21] dark:text-white dark:border-[#2a2d31]"
            >
              <VisuallyHidden>
                <SheetTitle>Mobile Navigation</SheetTitle>
              </VisuallyHidden>
              <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile Navigation">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href="https://linktr.ee/gsyphysics?utm_source=linktree_admin_share&fbclid=PAZXh0bgNhZW0CMTEAAae2gNGYbMIqNxd6X83eItXaftiCsuqzwc2-qWvHqvKO7PcG4jbwx5295eS-eg_aem_3EFH1AcVCNe19KC0M8c7uw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-6 h-[60px] bg-[#1a1d21] hover:bg-[#2a2d31] text-white rounded-xl border-0 dark:bg-primary dark:hover:bg-primary/90 dark:shadow-[0_0_15px_rgba(36,101,237,0.5)] relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 dark:opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                    <Zap className="h-5 w-5 text-white relative z-10" />
                    <div className="flex flex-col items-start relative z-10">
                      <span className="text-sm font-medium">Join Us</span>
                      <span className="text-xs text-gray-400 dark:text-gray-300 -mt-0.5">Applications open</span>
                    </div>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}