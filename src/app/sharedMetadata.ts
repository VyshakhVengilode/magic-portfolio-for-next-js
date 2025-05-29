import type { Metadata } from "next";

// This file provides shared metadata fields for your Next.js app.
// You can import and spread this object in your generateMetadata functions for consistency.

export const sharedMetadata: Partial<Metadata> = {
  applicationName: "Vyshakh Vengilode Portfolio",
  generator: "Next.js",
  keywords: [
    "Vyshakh Vengilode",
    "Portfolio",
    "Graphic Designer",
    "Writer",
    "Developer",
    "Creative",
    "Projects",
    "Web Developer",
    "UI/UX",
    "Design",
    "Frontend",
    "Resume"
  ],
  authors: [
    { name: "Vyshakh Vengilode", url: "https://magic-portfolio-for-next-js-psi-sable.vercel.app" }
  ],
  creator: "Vyshakh Vengilode",
  publisher: "Vyshakh Vengilode",
  icons: {
    icon: "/favicon.ico",favicon.ico in /public
    shortcut: "/favicon.ico",
  },
  category: "portfolio",
  colorScheme: "light",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};