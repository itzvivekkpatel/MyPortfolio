"use client";

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.4 },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <motion.div {...fadeInUp}>
        <About />
      </motion.div>

      <motion.div {...fadeInUp}>
        <Skills />
      </motion.div>

      <motion.div {...fadeInUp}>
        <Projects />
      </motion.div>

      <motion.div {...fadeInUp}>
        <Education />
      </motion.div>

      <motion.div {...fadeInUp}>
        <Contact />
      </motion.div>
    </>
  );
}
