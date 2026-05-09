"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
  year: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  tech,
  github,
  live,
  year,
}: ProjectCardProps) {
  return (
    <motion.article
      className="relative border-[2px] border-black p-6 shadow-box-lg bg-white flex flex-col group"
      whileHover={{
        x: -2,
        y: -2,
        boxShadow: "8px 8px 0px #000000",
      }}
      transition={{ duration: 0.15 }}
    >
      {/* Project number watermark */}
      <span className="absolute top-4 right-4 font-mono font-bold text-6xl opacity-10 select-none pointer-events-none">
        {id}
      </span>

      {/* Top bar with tech + year */}
      <div className="flex items-center justify-between border-b-[2px] border-black pb-2 mb-3">
        <span className="font-mono text-xs uppercase">PROJECT_{id}</span>
        <span className="font-mono text-xs border-l-[2px] border-black pl-2">
          [ {tech.join(" · ")} ]
        </span>
      </div>

      {/* Title */}
      <h3 className="font-space font-bold text-xl mt-1 uppercase">{title}</h3>

      {/* Description */}
      <p className="font-inter text-sm mt-2 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Year tag */}
      <div className="font-mono text-xs mt-3 opacity-60">{year}</div>

      {/* Action links */}
      <div className="flex items-center gap-4 mt-4 pt-3 border-t-[2px] border-black">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase hover:underline flex items-center gap-1 border-[2px] border-black px-3 py-1 hover:bg-black hover:text-white transition-colors shadow-box active:translate-x-1 active:translate-y-1 active:shadow-none"
          aria-label={`View source code for ${title}`}
        >
          <Github size={14} />
          VIEW CODE
        </a>
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase hover:underline flex items-center gap-1 border-[2px] border-black px-3 py-1 hover:bg-black hover:text-white transition-colors shadow-box active:translate-x-1 active:translate-y-1 active:shadow-none"
            aria-label={`View live demo of ${title}`}
          >
            <ExternalLink size={14} />
            LIVE
          </a>
        )}
      </div>
    </motion.article>
  );
}
