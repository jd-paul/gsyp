import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { CheckCircle } from "lucide-react"

export default function Home() {
    return (
        <section className="relative py-16 bg-zinc-50 flex items-center justify-center">
            <div className="relative z-20 max-w-6xl mx-auto flex flex-col items-center justify-center w-full py-4 px-4">
                {/* Title */}
                <h1 className="text-zinc-950 text-4xl font-bold text-center mb-8">Our Community</h1>

                {/* 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full font-work-sans">
                    {/* Left Column - GSYP Info */}
                    <div className="flex flex-col w-full">
                        <p className="text-slate-900 text-xl mb-4 font-black">
                            About the Global Society of Young Physicists (GSYP)
                        </p>
                        <p className="text-base text-slate-700 leading-relaxed">
                            The Global Society of Young Physicists (GSYP) is a non-profit community
                            dedicated to democratizing access to Physics research for high school students
                            across Europe.
                            <br /><br />
                            GSYP offers the Research Mentorship Program (RMP), which pairs students with
                            university mentors for remote research experiences in physics.
                        </p>
                    </div>

                    {/* Right Column - Custom Card */}
                    <div className="flex flex-col w-full">
                        <div className="rounded-xl overflow-hidden shadow border border-zinc-200 bg-white">

                            <div className="group overflow-hidden">
                                <Image
                                    src="/image/starry-messenger.png"
                                    alt="Starry Messenger Magazine Cover"
                                    width={800}
                                    height={500}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* Card content */}
                            <div className="p-6">
                                <h2 className="text-lg font-semibold mb-1">Read our magazine</h2>
                                <p className="text-sm text-slate-600 mb-4">
                                    <em>The Starry Messenger</em>, GSYP’s youth-led science magazine, is
                                    available online via Blurb.
                                </p>
                                <Link
                                    href="https://www.blurb.com/b/12298144-the-starry-messenger-issue-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-blue-600 font-medium hover:underline"
                                >
                                    View on Blurb
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hook Stats */}
                <div className="mt-16 w-full rounded-xl px-6 py-0">
                    <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-zinc-950 font-medium">
                        {[
                            "10+ students",
                            "Students published papers",
                            "Magazine contributions open",
                            "International reach",
                            "No prior experience needed"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-purple-800" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sample Profiles */}
                <div className="w-full mt-[3rem]">
                    <div className="flex flex-wrap justify-center gap-x-[10%] gap-y-12">
                        {[
                            {
                                name: "Amira S.",
                                role: "Student, UK",
                                icon: "🧠"
                            },
                            {
                                name: "Dr. Lin Q.",
                                role: "Mentor, Berkeley",
                                icon: "🎓"
                            },
                            {
                                name: "Miguel R.",
                                role: "Student, Spain",
                                icon: "📡"
                            }
                        ].map((person, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center text-center space-y-2 max-w-[10rem]"
                            >
                                <div className="w-20 h-20 rounded-full bg-purple-100 text-purple-900 flex items-center justify-center text-3xl shadow">
                                    {person.icon}
                                </div>
                                <div className="font-semibold text-zinc-900">{person.name}</div>
                                <div className="text-sm text-zinc-500 leading-snug">{person.role}</div>
                            </div>
                        ))}
                    </div>
                </div>



            </div>
        </section>
    )
}