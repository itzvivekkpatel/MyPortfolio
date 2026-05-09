"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";

type FilterCategory = "ALL" | "WEB" | "APP" | "CLI";

const filterMap: Record<FilterCategory, string[]> = {
  ALL: [],
  WEB: ["HTML5", "CSS3", "HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"],
  APP: ["Android Studio", "Java", "XML", "React Native"],
  CLI: ["Python", "C++", "C"],
};

export default function ProjectsPage() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<FilterCategory>("ALL");

  const filtered =
    filter === "ALL"
      ? projects
      : projects.filter((p) =>
          p.tech.some((t) => filterMap[filter].includes(t))
        );

  const categories: FilterCategory[] = ["ALL", "WEB", "APP", "CLI"];

  return (
    <div className="w-full bg-white dot-grid-black min-h-screen py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex flex-col gap-8">
        <SectionLabel number="03" title="PROJECTS" />

        <h1 className="font-space text-display md:text-[56px] font-bold uppercase leading-tight">
          {String(projects.length).padStart(2, "0")} PROJECTS
        </h1>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-xs uppercase tracking-widest px-4 py-2 border-[2px] border-black transition-all duration-150 active:translate-x-1 active:translate-y-1 active:shadow-none ${
                filter === cat
                  ? "bg-black text-white shadow-box"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              [{cat}]
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="border-[2px] border-black p-8 text-center font-mono text-sm uppercase">
            No projects found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
