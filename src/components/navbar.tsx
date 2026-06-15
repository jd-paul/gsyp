"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Community", href: "#community" },
  { name: "Program", href: "#program" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  return (
    <header className="w-full border-b border-[#f1f1ef] bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-baseline gap-2 group"
            aria-label="GSYP Homepage"
          >
            <span className="text-xl font-serif text-[#37352f]">GSYP</span>
            <span className="hidden lg:inline text-sm text-[#9b9a97]">
              Global Society of Young Physicists
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-[#9b9a97] hover:text-[#37352f] transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0b6e99] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://linktr.ee/gsyphysics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#9b9a97] hover:text-[#37352f] transition-colors"
            >
              Join Us
            </a>
            <Button
              size="sm"
              className="bg-[#0b6e99] hover:bg-[#084c6b] text-white px-6 rounded-none"
              asChild
            >
              <a
                href="https://linktr.ee/gsyphysics"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="rounded-none border-[#f1f1ef]" aria-label="Open menu">
                <Menu className="h-5 w-5 text-[#37352f]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-white border-l border-[#f1f1ef]">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <nav className="flex flex-col gap-6 mt-8" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-3xl font-serif text-[#37352f] hover:text-[#0b6e99] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 border-t border-[#f1f1ef]">
                  <Button
                    className="w-full bg-[#0b6e99] hover:bg-[#084c6b] text-white h-12 rounded-none"
                    asChild
                  >
                    <a
                      href="https://linktr.ee/gsyphysics"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Us
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
