"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { layout, prepare } from "@chenglou/pretext";
import { useEffect, useRef, useState } from "react";

type Person = {
  name: string;
  role: string;
  bio?: string;
  subject?: string;
  image?: string;
};

type MentorYear = {
  year: string;
  note?: string;
  mentors: Person[];
};

const board: Person[] = [
  {
    name: "Arya Lal Gonullu",
    role: "Chief Executive Officer",
    bio: "Graduated from King’s College London Physics with Theoretical Physics BSc in 2026.",
    image: "/image/Arya.jpeg",
  },
  {
    name: "Leo Nagel",
    role: "Chairman of the Board, Senior Advisor",
    bio: "ETH Zürich Master’s student, Computer Science.",
  },
  {
    name: "Samuel Siojo",
    role: "Senior Advisor",
  },
];

const staff: Person[] = [
  {
    name: "Your Name",
    role: "Website Manager",
    bio: "Job/University",
  },
  {
    name: "Hayley Snelling",
    role: "Editor of The Starry Messenger",
  },
];

const tobias: Person = {
  name: "Tobias Bhanji",
  role: "Distinguished Fellow",
  bio: "4th Year Physics MSci student at King’s College London",
  subject: "Cosmology",
  image: "/image/Toby.jpeg",
};

const nikita: Person = {
  name: "Nikita Azevedo",
  role: "Senior Fellow",
  bio: "MSc Candidate in Quantum Algorithms on Quantum & Photonic Computers at the University of the Witwatersrand",
  subject: "General Relativity",
  image: "/image/Nikita.jpeg",
};

const kajol: Person = {
  name: "Kajol Mistry",
  role: "Senior Fellow",
  bio: "Graduated from King’s College London Physics MSci in 2026",
  subject: "Mathematics",
  image: "/image/Kajol.jpeg",
};

const arya: Person = {
  name: "Arya Lal Gonullu",
  role: "Chief Exec.",
  bio: "Graduated from King’s College London Physics with Theoretical Physics BSc in 2026",
  subject: "Quantum Mechanics",
  image: "/image/Arya.jpeg",
};

const piyamini: Person = {
  name: "Piyamini Mithsala",
  role: "Senior Fellow",
  bio: "4th Year Physics MSci student at King’s College London",
  subject: "Experimental Physics",
};

const mentorYears: MentorYear[] = [
  {
    year: "2027",
    note: "TBA, Keep in touch!",
    mentors: [],
  },
  {
    year: "2026",
    mentors: [tobias, nikita, kajol],
  },
  {
    year: "2025",
    mentors: [
      tobias,
      nikita,
      kajol,
      arya,
      piyamini,
      {
        name: "Ginevra Fulco",
        role: "Research Mentor",
        bio: "Master’s student in Applied Physics and Engineering at the Technical University of Munich (TUM)",
        subject: "Engineering Physics",
      },
      {
        name: "Aurora Pinto",
        role: "Legacy Mentor",
        bio: "Management Engineering student at Politecnico di Milano",
        subject: "Nuclear Physics",
      },
    ],
  },
  {
    year: "2024",
    mentors: [
      tobias,
      arya,
      {
        ...piyamini,
        subject: "Experimental & Engineering Physics",
      },
      {
        name: "Huu Duc Lu",
        role: "Research Mentor",
        bio: "4th Year Physics MSci student at King’s College London",
        subject: "Cosmology",
      },
      {
        name: "Ethan Lee",
        role: "Research Mentor",
        bio: "4th Year Physics MSci student at King’s College London",
        subject: "Mathematics",
      },
    ],
  },
];

const mentorTitles = [
  {
    title: "Research Mentor",
    description:
      "Awarded to mentors contributing their expertise and guidance to support student research through the programme.",
  },
  {
    title: "Legacy Mentor",
    description:
      "A former programme student who returns to GSYP as a Research Mentor, bringing their experience full circle and continuing to contribute to the next generation.",
  },
  {
    title: "Senior Fellow / Research Mentor",
    description:
      "Awarded to mentors who have contributed for two consecutive years, recognising their continued commitment and sustained contribution to the programme.",
  },
  {
    title: "Distinguished Fellow",
    description:
      "Awarded to long-standing mentors with two or more years of service who have made substantial contributions beyond mentoring, including taking on leadership, managerial, or wider programme responsibilities.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

function PersonCard({ person }: { person: Person }) {
  return (
    <article className="border border-[#d8d8d3] bg-white">
      <div className="relative h-56 overflow-hidden bg-[#f1f1ef]">
        {person.image ? (
          <Image
            src={person.image}
            alt={`Portrait of ${person.name}`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover"
            priority={person.role === "Chief Executive Officer"}
          />
        ) : (
          <div
            className="flex h-full items-center justify-center font-serif text-6xl text-[#9b9a97]"
            aria-hidden="true"
          >
            {initials(person.name)}
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="mb-3 min-h-11 text-xs font-mono uppercase leading-5 tracking-wider text-[#0b6e99]">
          {person.role}
        </p>
        <h3 className="text-2xl font-serif leading-8 text-[#37352f] [text-wrap:balance]">
          {person.name}
        </h3>
        {person.bio && (
          <p
            data-pretext
            className="mt-3 text-base leading-relaxed text-[#77756f] [text-wrap:pretty]"
          >
            {person.bio}
          </p>
        )}
        {person.subject && (
          <p className="mt-5 border-t border-[#f1f1ef] pt-4 font-medium text-[#37352f]">
            {person.subject}
          </p>
        )}
      </div>
    </article>
  );
}

function SectionHeading({
  title,
  label,
}: {
  title: string;
  label: string;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b-2 border-[#37352f]">
      <h2 className="pb-3 text-3xl font-serif tracking-tight text-[#37352f] sm:text-4xl">
        {title}
      </h2>
      <p className="pb-4 text-xs font-mono uppercase tracking-widest text-[#9b9a97]">
        {label}
      </p>
    </div>
  );
}

export default function StaffMentors() {
  const contentRef = useRef<HTMLElement>(null);
  const [selectedYear, setSelectedYear] = useState("2026");
  const selectedCohort =
    mentorYears.find(({ year }) => year === selectedYear) ?? mentorYears[1];

  useEffect(() => {
    let cancelled = false;
    let resizeObserver: ResizeObserver | undefined;

    async function initialisePretext() {
      await document.fonts.ready;
      const root = contentRef.current;
      if (cancelled || !root) return;

      const elements = Array.from(
        root.querySelectorAll<HTMLElement>("[data-pretext]"),
      );
      const prepared = new Map<HTMLElement, ReturnType<typeof prepare>>();

      for (const element of elements) {
        prepared.set(
          element,
          prepare(element.textContent ?? "", getComputedStyle(element).font),
        );
      }

      function relayout() {
        for (const [element, handle] of prepared) {
          const { height } = layout(
            handle,
            element.clientWidth,
            parseFloat(getComputedStyle(element).lineHeight),
          );
          element.style.height = `${height}px`;
        }
      }

      resizeObserver = new ResizeObserver(relayout);
      resizeObserver.observe(root);
      relayout();
    }

    initialisePretext();

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
    };
  }, [selectedYear]);

  return (
    <>
      <div className="bg-[#0b6e99] text-white">
        <div className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute -right-40 -top-64 h-[560px] w-[560px] rounded-full border border-white/20"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-24 -top-48 h-[450px] w-[450px] rounded-full border border-white/20"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-24">
            <p className="text-xs font-mono uppercase tracking-widest text-white/70">
              Our community / Our volunteers
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-serif leading-[1.05] tracking-tight [text-wrap:balance] sm:text-6xl lg:text-7xl">
              Staff and Mentors
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 [text-wrap:pretty]">
              The people behind research mentorship, The Starry Messenger, and a
              global community of young physicists.
            </p>
          </div>
        </div>
      </div>

      <main
        id="staff-content"
        ref={contentRef}
        className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-20"
      >
        <section aria-labelledby="board-heading">
          <div id="board-heading">
            <SectionHeading title="Board" label="Leadership & governance" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {board.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="staff-heading">
          <div id="staff-heading">
            <SectionHeading title="Staff" label="Editorial & digital" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {staff.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </section>

        <nav
          className="sticky top-0 z-30 mt-16 flex overflow-x-auto border-b-2 border-[#37352f] bg-white"
          aria-label="Select research mentor year"
        >
          {mentorYears.map(({ year }) => (
            <button
              key={year}
              type="button"
              aria-pressed={selectedYear === year}
              onClick={() => setSelectedYear(year)}
              className={`flex min-h-11 min-w-24 items-center justify-center border border-b-0 px-6 py-3 text-sm font-mono transition-colors ${
                selectedYear === year
                  ? "border-[#37352f] bg-[#37352f] text-white"
                  : "border-[#d8d8d3] text-[#37352f] hover:bg-[#f1f1ef]"
              }`}
            >
              {year}
            </button>
          ))}
        </nav>

        <div className="mt-12">
          <SectionHeading title="Research Mentors" label="2024–2027 cohorts" />
        </div>

        <section
          id={`mentors-${selectedCohort.year}`}
          aria-labelledby={`mentors-${selectedCohort.year}-heading`}
          className="mb-16 scroll-mt-20"
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h3
              id={`mentors-${selectedCohort.year}-heading`}
              className="text-4xl font-serif text-[#37352f]"
            >
              {selectedCohort.year}
            </h3>
            <p className="text-xs font-mono uppercase tracking-widest text-[#9b9a97]">
              Research Mentors
            </p>
          </div>
          {selectedCohort.note ? (
            <div className="border border-dashed border-[#9b9a97] bg-[#f1f1ef] px-6 py-12 text-center">
              <p className="text-2xl font-serif text-[#37352f]">
                {selectedCohort.note}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {selectedCohort.mentors.map((person) => (
                <PersonCard
                  key={`${selectedCohort.year}-${person.name}`}
                  person={person}
                />
              ))}
            </div>
          )}
        </section>

        <section aria-labelledby="titles-heading">
          <div id="titles-heading">
            <SectionHeading title="Research Mentor Titles" label="Recognition" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mentorTitles.map(({ title, description }) => (
              <article
                key={title}
                className="border-t-2 border-[#37352f] bg-[#f1f1ef] p-5"
              >
                <h3 className="text-xl font-serif leading-7 text-[#37352f] [text-wrap:balance]">
                  {title}
                </h3>
                <p
                  data-pretext
                  className="mt-3 text-base leading-relaxed text-[#77756f] [text-wrap:pretty]"
                >
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-[#0b6e99] p-8 text-white lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-4xl text-2xl font-serif leading-relaxed [text-wrap:pretty]">
              We extend our sincere gratitude to all our staff and mentors who
              generously volunteer their time and expertise to help foster a
              global community, share their knowledge, and collaborate in the
              development of this research report.
            </p>
            <a
              href="https://forms.gle/EgjNFHRNdMtLEiVGA"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 bg-[#d9730d] px-6 py-4 font-medium text-white transition-colors hover:bg-[#c2690b]"
            >
              Apply to become a mentor in 2027!
              <ArrowUpRight
                className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
