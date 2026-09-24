import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { profile } from "@/lib/content";
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

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description:
    "AWS Certified Cloud Practitioner and AI Practitioner. I build backends and cloud infrastructure, and I have an IEEE publication. Nagpur, India.",
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description:
      "AWS certified. Backends, cloud infrastructure, and a Li-Fi rig that streams live video over visible light.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
