import type { Metadata } from "next";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";

export const metadata: Metadata = {
  title: "About — Vivek Patel",
  description:
    "Learn about Vivek Patel — CSE student, web & app developer, freelance designer based in Jabalpur, India.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Experience />
      <Achievements />
    </>
  );
}
