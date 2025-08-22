import { Button } from "@/components/ui/button"
import { BookOpenCheck, Squirrel, User } from "lucide-react"
import CssGridBackground from "@/components/css-grid-background"
import StructuredData from "@/components/structured-data"
import Link from "next/link"
import { ReflectiveButton } from "@/components/reflective-buttons"

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="flex flex-col">
        <section
          id="home"
          className="relative flex items-center justify-center overflow-hidden text-white"
          style={{ minHeight: "calc(100vh - 64px)" }}
        >
          <CssGridBackground />
          <div className="relative z-20 max-w-6xl mx-auto flex flex-col items-center justify-center w-full py-4 px-4">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-serif drop-shadow-lg">
                Explore Physics Early. Think Bigger Sooner.
              </h1>

              <p className="text-xl mb-9 drop-shadow-lg">
                Democratising physics education, one mind at a time.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <ReflectiveButton
                  variant="outline"
                  className="h-8 px-3 rounded-full bg-white hover:bg-white text-gray-700 shadow-sm border border-gray-200 text-[13px] font-medium whitespace-nowrap inline-flex items-center gap-1.5"
                >
                  <a
                    href="#community"
                    className="inline-flex items-center gap-1.5"
                  >
                    <User className="w-3.5 h-3.5 stroke-[1.5px]" />
                    Become a Student
                  </a>

                </ReflectiveButton>

                <ReflectiveButton
                  variant="outline"
                  className="h-8 px-3 rounded-full bg-white hover:bg-white text-gray-700 shadow-sm border border-gray-200 text-[13px] font-medium whitespace-nowrap inline-flex items-center gap-1.5"
                >
                  <a
                    href="#community"
                    className="inline-flex items-center gap-1.5"
                  >
                    <Squirrel className="w-3.5 h-3.5 stroke-[1.5px]" />
                    Become a Research Mentor
                  </a>
                </ReflectiveButton>

                <Link href="#program">
                  <Button
                    variant="outline"
                    className="h-8 px-3 rounded-full bg-white hover:bg-white text-gray-700 shadow-sm border border-gray-200 text-[13px] font-medium whitespace-nowrap inline-flex items-center gap-1.5"
                  >
                    <BookOpenCheck className="w-3.5 h-3.5 stroke-[1.5px]" />
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
