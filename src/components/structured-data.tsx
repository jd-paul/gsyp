export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Global Society of Young Physicists",
    alternateName: "GSYP",
    url: "https://gsyp.org",
    logo: "https://gsyp.org/logo.png",
    description:
      "A student-led organisation that helps high-schoolers dive into university-level physics research through mentorship, publications, and community programmes.",
    sameAs: [
      "https://linkedin.com/company/gsyphysics",
      "https://www.instagram.com/gsyphysics/",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
