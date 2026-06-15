import React from "react"

const Footer = () => {
  return (
    <footer className="relative border-t border-[#f1f1ef] bg-white" id="contact">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-flex items-baseline gap-2 group">
              <span className="text-2xl font-serif text-[#37352f]">GSYP</span>
              <span className="text-xs text-[#9b9a97] font-mono">Global Society of Young Physicists</span>
            </a>

            <p className="text-sm text-[#9b9a97] leading-relaxed max-w-xs">
              A student-led organisation helping high-schoolers around the world dive into university-level physics research.
            </p>

            <address className="not-italic text-sm text-[#9b9a97] leading-relaxed">
              GSYP<br />
              64 Nile Street<br />
              London, England, N1 7SR
            </address>
          </div>

          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#37352f] mb-6">Contact</h3>
            <ul className="space-y-3 text-sm text-[#9b9a97]">
              <li>
                <a href="mailto:contact@gsyp.org" className="hover:text-[#d9730d] transition-colors">
                  contact@gsyp.org
                </a>
              </li>
              <li>
                <a href="mailto:info@gsyp.org" className="hover:text-[#d9730d] transition-colors">
                  info@gsyp.org
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#37352f] mb-6">Follow Us</h3>
            <ul className="space-y-3 text-sm text-[#9b9a97]">
              <li>
                <a
                  href="https://linkedin.com/company/gsyphysics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d9730d] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gsyphysics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d9730d] transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-[#f1f1ef] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#9b9a97]">
          <p>© {new Date().getFullYear()} Global Society of Young Physicists</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
