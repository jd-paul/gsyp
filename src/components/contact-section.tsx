import { ArrowRight, FileText, Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site-links";

const researchEmailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Research discussion piece submission",
)}&body=${encodeURIComponent("Hello GSYP,\n\nPlease find my research discussion piece attached.\n\nBest,\n")}`;
const generalEmailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Website inquiry")}`;
const alumniEmailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Alumni update",
)}&body=${encodeURIComponent("Hello GSYP,\n\nI’d like to share my latest update for consideration on the website.\n\n")}`;

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-6 border-t border-[#f1f1ef] bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-[#0b6e99]">
            <span className="h-px w-8 bg-[#0b6e99]/30" />
            Share your ideas. Stay connected.
          </span>
          <h2 className="mb-4 font-serif text-4xl leading-[1.05] tracking-tight text-[#37352f] sm:text-5xl">
            Connect with GSYP
          </h2>
          <p className="text-lg leading-relaxed text-[#9b9a97]">
            Research, questions, ideas, or alumni news? We would love to hear from you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article id="research-submission" className="flex scroll-mt-6 flex-col items-start border border-[#e5e5e5] bg-[#f1f1ef] p-6 lg:p-8">
            <FileText className="mb-5 h-8 w-8 text-[#0b6e99]" />
            <p className="mb-3 font-mono text-sm uppercase tracking-widest text-[#0b6e99]">
              Share your research
            </p>
            <h3 className="mb-3 font-serif text-2xl text-[#37352f]">Submit your research discussion piece!</h3>
            <p className="mb-3 leading-relaxed text-[#9b9a97]">
              Contribute to the conversation and share your perspective with the GSYP community.
            </p>
            <p className="mb-6 leading-relaxed text-[#9b9a97]">
              Open your email app with our address and a subject ready to go. Remember to attach your Word document (.doc or .docx) before sending.
            </p>
            <a
              href={researchEmailHref}
              className="group mt-auto inline-flex h-12 items-center gap-2 bg-[#d9730d] px-6 text-sm font-medium text-white transition-colors hover:bg-[#c2690b]"
            >
              Email your discussion piece
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </article>

          <article className="flex flex-col items-start border border-[#e5e5e5] bg-[#f1f1ef] p-6 lg:p-8">
            <Mail className="mb-5 h-8 w-8 text-[#0b6e99]" />
            <p className="mb-3 font-mono text-sm uppercase tracking-widest text-[#0b6e99]">
              General inquiries
            </p>
            <h3 className="mb-3 font-serif text-2xl text-[#37352f]">Get in touch</h3>
            <p className="mb-6 leading-relaxed text-[#9b9a97]">
              Open your email app with Arya’s address and a subject ready to go, or email us directly at {CONTACT_EMAIL}.
            </p>
            <a
              href={generalEmailHref}
              className="group mt-auto inline-flex h-12 items-center gap-2 bg-[#d9730d] px-6 text-sm font-medium text-white transition-colors hover:bg-[#c2690b]"
            >
              Email Arya
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </article>

          <article className="border border-[#e5e5e5] bg-[#f1f1ef] p-6 lg:p-8">
            <p className="mb-3 font-mono text-sm uppercase tracking-widest text-[#0b6e99]">
              Alumni admissions support
            </p>
            <p className="leading-relaxed text-[#37352f]">
              RMP alumni, feeling stuck in the university admissions process? Reach out to your former mentor or ask for advice in the alumni group chat! Just remember to take any advice with a grain of salt - and use your own judgment, too.
            </p>
          </article>

          <article className="flex flex-col items-start border border-[#e5e5e5] bg-[#f1f1ef] p-6 lg:p-8">
            <p className="mb-3 font-mono text-sm uppercase tracking-widest text-[#0b6e99]">
              Share your alumni news
            </p>
            <p className="mb-5 leading-relaxed text-[#37352f]">
              RMP alumni, we’d love to hear what you’ve been up to! Send us your latest updates, achievements, or adventures for a chance to be featured on our website.
            </p>
            <a
              href={alumniEmailHref}
              className="group mt-auto inline-flex items-center gap-2 text-[#37352f] underline underline-offset-4 transition-colors hover:text-[#d9730d]"
            >
              Email an alumni update
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
