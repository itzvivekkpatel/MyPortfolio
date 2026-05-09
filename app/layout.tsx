import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vivek Patel — Portfolio",
  description:
    "Enthusiastic Computer Science Engineering student at GGITS Jabalpur with a strong passion for web and mobile app development. Skilled in HTML, CSS, JavaScript, and Python.",
  openGraph: {
    title: "Vivek Patel — Portfolio",
    description:
      "CSE Student — Web & App Developer. Building the web, one line at a time.",
    type: "website",
    url: "https://vivekpatel.dev",
    siteName: "Vivek Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Patel — Portfolio",
    description:
      "CSE Student — Web & App Developer. Building the web, one line at a time.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-black antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
