"use client";

import { portfolioData } from "@/data/portfolio";
import BoxButton from "@/components/ui/BoxButton";
import Marquee from "@/components/sections/Marquee";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="min-h-screen relative dot-grid-black flex flex-col" id="hero">
      {/* Main content */}
      <div className="flex-grow flex flex-col justify-center px-4 md:px-12 max-w-[1440px] mx-auto w-full py-20">
        {/* Availability badge */}
        {personal.available && (
          <div className="inline-block border-[2px] border-black px-3 py-1 mb-8 self-start bg-white shadow-box">
            <span className="font-mono text-xs uppercase tracking-widest">
              [ AVAILABLE FOR INTERNSHIP ]
            </span>
          </div>
        )}

        {/* Name */}
        <h1 className="font-space text-[56px] sm:text-[80px] md:text-[120px] leading-none font-bold uppercase">
          <span className="block">VIVEK</span>
          <span className="block">PATEL</span>
        </h1>

        {/* Role */}
        <p className="font-mono text-lg sm:text-xl mt-4 uppercase tracking-wide">
          CSE STUDENT — WEB &amp; APP DEVELOPER
        </p>

        {/* Tagline */}
        <p className="font-inter text-lg mt-2">{personal.tagline}</p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <BoxButton variant="solid" href="/projects">
            VIEW PROJECTS
          </BoxButton>
          <BoxButton variant="outline" href="/resume.pdf" external>
            DOWNLOAD RESUME
          </BoxButton>
        </div>

        {/* Decorative terminal block */}
        <div className="hidden lg:block absolute top-24 right-12 border-[2px] border-black bg-white shadow-box w-64">
          <div className="border-b-[2px] border-black p-2 flex gap-2">
            <div className="w-3 h-3 bg-black border border-black" />
            <div className="w-3 h-3 bg-white border border-black" />
            <div className="w-3 h-3 bg-white border border-black" />
          </div>
          <div className="p-4 font-mono text-xs text-black">
            <span className="opacity-60">&gt;</span> system.init()
            <br />
            <span className="opacity-60">&gt;</span> loading modules...
            <br />
            <span className="opacity-60">&gt;</span> status:{" "}
            <span className="font-bold">READY</span>
          </div>
        </div>
      </div>

      {/* Marquee at bottom */}
      <Marquee />
    </section>
  );
}
