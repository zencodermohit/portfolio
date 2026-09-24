import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { PersonSchema } from "@/components/person-schema";
import { profile, siteUrl } from "@/lib/content";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "Mohit Katre is a backend and cloud engineer in Nagpur, India. AWS Certified Cloud Practitioner and AI Practitioner, with an IEEE publication and two platforms running in production.";

export const metadata: Metadata = {
  // Makes every relative URL below resolve absolutely, which social crawlers require.
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description,
  // Tells Google which URL is authoritative, so the vercel.app aliases don't compete.
  alternates: { canonical: "/" },
  applicationName: `${profile.name} portfolio`,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [
    "Mohit Katre",
    "Mohit Katre portfolio",
    "Mohit Katre Nagpur",
    "Mohit Katre RCOEM",
    "backend engineer Nagpur",
    "cloud engineer India",
    "AWS Certified Cloud Practitioner",
    "AWS Certified AI Practitioner",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    siteName: `${profile.name} portfolio`,
    title: `${profile.name} | ${profile.role}`,
    description,
    url: siteUrl,
    locale: "en_IN",
    firstName: "Mohit",
    lastName: "Katre",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <PersonSchema />
        {children}
      </body>
    </html>
  );
}
