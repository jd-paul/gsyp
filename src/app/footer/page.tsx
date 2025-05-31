import React from "react"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-purple-800 text-zinc-100 px-4 pt-12 pb-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                {/* Left: Address Block with map placeholder */}
                <div className="md:w-1/2 space-y-3">
                    <h3 className="text-xl font-semibold uppercase tracking-wide">Head Office</h3>
                    <p className="text-sm">
                        GSYP<br />
                        64 Nile Street<br />
                        London, England, N1 7SR
                    </p>
                </div>

                {/* Right: Info blocks */}
                <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div>
                        <h4 className="font-semibold mb-2">Contact</h4>
                        <p>contact@gsyp.org</p>
                        <p>info@gsyp.org</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Follow Us</h4>
                        <ul className="space-y-1">
                            <li><Link href="https://linkedin.com/company/gsyphysics" className="hover:underline">LinkedIn</Link></li>
                            <li><Link href="https://instagram.com" className="hover:underline">Instagram</Link></li>
                            <li><Link href="https://x.com" className="hover:underline">Twitter/X</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="max-w-6xl mx-auto mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-100 gap-4">
                <p>© {new Date().getFullYear()} Global Society of Young Physicists</p>
                <div className="flex gap-4">
                    <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                    <Link href="/imprint" className="hover:underline">Imprint</Link>
                </div>
            </div>



        </footer>
    )
}

export default Footer
