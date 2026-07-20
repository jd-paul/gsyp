import React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import Footer from "@/app/footer/page"

export const metadata: Metadata = {
  title: "Privacy Notice | Global Society of Young Physicists",
  description:
    "Privacy Notice for the RMP 2026 programme organised by The Global Society of Young Physicists C.I.C.",
}

export default function PrivacyNotice() {
  return (
    <main className="relative min-h-screen bg-white text-[#37352f]">
      <header className="w-full border-b border-[#f1f1ef] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center h-16">
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
          </div>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-20 lg:py-24">
        <span className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-[#9b9a97] mb-4">
          <span className="w-8 h-px bg-[#9b9a97]/30" />
          Legal
        </span>

        <h1 className="text-4xl sm:text-5xl font-serif tracking-tight leading-[1.05] mb-2">
          Privacy Notice
        </h1>
        <p className="text-sm text-[#9b9a97] font-mono mb-12">
          Last updated: July 2026
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-serif tracking-tight mb-3">Who we are</h2>
          <p className="leading-relaxed mb-3">
            The Global Society of Young Physicists C.I.C. (&quot;we&quot;,
            &quot;our&quot;, or &quot;us&quot;) is the organiser of the RMP 2026
            programme.
          </p>
          <p className="leading-relaxed">
            If you have any questions about this Privacy Notice or how we use
            your personal data, please contact us via the contact details
            published on gsyp.vercel.app.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif tracking-tight mb-3">
            What information we collect
          </h2>
          <p className="leading-relaxed mb-3">
            When you apply to or participate in RMP 2026, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Your name.</li>
            <li>Your email address.</li>
            <li>Information you provide in your application.</li>
            <li>
              Communications between you and The Global Society of Young
              Physicists C.I.C.
            </li>
            <li>Any other information you choose to provide to us.</li>
          </ul>
          <p className="leading-relaxed">
            We only collect the information necessary to administer the
            programme.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif tracking-tight mb-3">
            Why we use your information
          </h2>
          <p className="leading-relaxed mb-3">
            We use your personal data to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Process your application.</li>
            <li>Administer and deliver the programme.</li>
            <li>Contact you about your participation.</li>
            <li>Allocate mentors and organise programme activities.</li>
            <li>Ensure the safe and effective running of the programme.</li>
            <li>Meet any legal or safeguarding obligations that apply to us.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif tracking-tight mb-3">
            Our legal basis
          </h2>
          <p className="leading-relaxed mb-3">
            We process your personal data under the UK General Data Protection
            Regulation (UK GDPR) on the basis of our legitimate interests in
            administering and delivering the RMP 2026 programme.
          </p>
          <p className="leading-relaxed">
            Where we ask for information that requires your consent, we will
            request that consent separately.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif tracking-tight mb-3">
            Who we share your information with
          </h2>
          <p className="leading-relaxed mb-3">
            We only share your personal data where necessary, including with:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Authorised mentors involved in delivering the programme.</li>
            <li>
              Individuals within The Global Society of Young Physicists C.I.C.
              who need access to administer the programme.
            </li>
            <li>
              Organisations or authorities where required by law or where
              necessary for safeguarding purposes.
            </li>
          </ul>
          <p className="leading-relaxed">
            We do not sell your personal information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif tracking-tight mb-3">
            How long we keep your information
          </h2>
          <p className="leading-relaxed mb-3">
            We retain your personal data only for as long as necessary for the
            purposes for which it was collected, including to administer the
            programme and comply with any legal or safeguarding obligations.
          </p>
          <p className="leading-relaxed">
            When your information is no longer required, it will be securely
            deleted or anonymised.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif tracking-tight mb-3">Your rights</h2>
          <p className="leading-relaxed mb-3">
            Under UK data protection law, you have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Request access to your personal data.</li>
            <li>Request that inaccurate information is corrected.</li>
            <li>Request deletion of your personal data where applicable.</li>
            <li>
              Request that processing is restricted in certain circumstances.
            </li>
            <li>
              Object to processing based on legitimate interests where
              applicable.
            </li>
            <li>
              Request a copy of your personal data in a portable format where
              applicable.
            </li>
          </ul>
          <p className="leading-relaxed">
            To exercise any of these rights, please contact us using the
            contact details on our website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif tracking-tight mb-3">
            Photographs and Recordings
          </h2>
          <p className="leading-relaxed mb-3">
            During the programme, The Global Society of Young Physicists C.I.C.
            may take photographs and make audio or video recordings of
            lectures, problem classes, activities, and final-day presentations.
          </p>
          <p className="leading-relaxed mb-3">
            Photographs and recordings may include participants&apos; names,
            images, voices, questions, and presentations.
          </p>
          <p className="leading-relaxed mb-3">
            We may use photographs and recordings:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>to support the delivery of the programme;</li>
            <li>
              to provide recordings to participants for educational purposes;
              and
            </li>
            <li>
              for promotional purposes, including on our website, social media,
              and our YouTube channel, where we have the appropriate consent.
            </li>
          </ul>
          <p className="leading-relaxed mb-3">
            Providing consent for photographs or recordings is voluntary.
            Choosing not to give consent will not affect your participation in
            the programme.
          </p>
          <p className="leading-relaxed mb-3">
            If you have given consent, you may withdraw it at any time by
            contacting The Global Society of Young Physicists C.I.C.
          </p>
          <p className="leading-relaxed">
            Withdrawal of consent will not affect photographs or recordings
            that have already been published or distributed before your request
            was received.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif tracking-tight mb-3">Complaints</h2>
          <p className="leading-relaxed mb-3">
            If you are unhappy with how we handle your personal data, we would
            appreciate the opportunity to address your concerns first.
          </p>
          <p className="leading-relaxed">
            You also have the right to complain to the Information
            Commissioner&apos;s Office (ICO), the UK&apos;s data protection
            regulator.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif tracking-tight mb-3">
            Changes to this Privacy Notice
          </h2>
          <p className="leading-relaxed">
            We may update this Privacy Notice from time to time. The latest
            version will always be available on our website.
          </p>
        </section>
      </article>

      <Footer />
    </main>
  )
}
