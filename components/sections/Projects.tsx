"use client";

import { portfolioData } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section className="w-full bg-white py-20" id="projects">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex flex-col gap-8">
        <SectionLabel number="03" title="PROJECTS" />

        <h2 className="font-space text-display md:text-[56px] font-bold uppercase leading-tight">
          Things I Have Built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* 5th project centered */}
        {projects[4] && (
          <div className="flex justify-center">
            <div className="w-full max-w-[800px]">
              <ProjectCard {...projects[4]} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
