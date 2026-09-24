import { credentials, education, profile, siteUrl } from "@/lib/content";

/*
 * schema.org Person markup. For a query like "Mohit Katre" this is what tells
 * Google the page is about a person rather than a company or a product, and
 * `sameAs` ties it to profiles Google already trusts (LinkedIn, GitHub), which
 * is what lets the three consolidate into one entity.
 *
 * Phone is deliberately left out. It is already on the page for humans; there
 * is no reason to hand it to scrapers in machine-readable form as well.
 */
export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#mohit-katre`,
    name: profile.name,
    givenName: "Mohit",
    familyName: "Katre",
    url: siteUrl,
    image: `${siteUrl}/profile.jpeg`,
    jobTitle: profile.role,
    description:
      "Backend and cloud engineer, AWS Certified Cloud Practitioner and AI Practitioner, studying Electronics & Communication Engineering at RCOEM Nagpur.",
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    nationality: { "@type": "Country", name: "India" },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.school,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nagpur",
        addressCountry: "IN",
      },
    },
    knowsAbout: [
      "Backend development",
      "Cloud infrastructure",
      "Amazon Web Services",
      "Terraform",
      "Distributed systems",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Li-Fi optical wireless communication",
    ],
    hasCredential: credentials
      .filter((item) => item.kind === "Certification")
      .map((item) => ({
        "@type": "EducationalOccupationalCredential",
        name: item.title,
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: "Amazon Web Services" },
        url: item.href,
      })),
    // The profiles Google can already resolve, pointed back at this page.
    sameAs: [profile.linkedin, profile.github, profile.credly],
  };

  return (
    <script
      type="application/ld+json"
      // Serialised server side; the object above is entirely static.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
