import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";
import { Terminal, Smartphone, Code2, Database, Wrench, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills — Vivek Patel",
  description:
    "A comprehensive overview of Vivek Patel's technical skills in web development, app development, programming, and more.",
};

interface SkillCategoryConfig {
  key: keyof typeof portfolioData.skills;
  title: string;
  icon: React.ReactNode;
  proficiency: string;
}

export default function SkillsPage() {
  const { skills } = portfolioData;

  const categories: SkillCategoryConfig[] = [
    { key: "web", title: "WEB DEVELOPMENT", icon: <Terminal size={20} />, proficiency: "COMFORTABLE" },
    { key: "app", title: "APP DEVELOPMENT", icon: <Smartphone size={20} />, proficiency: "LEARNING" },
    { key: "programming", title: "PROGRAMMING", icon: <Code2 size={20} />, proficiency: "COMFORTABLE" },
    { key: "databases", title: "DATABASES", icon: <Database size={20} />, proficiency: "LEARNING" },
    { key: "tools", title: "TOOLS & PLATFORMS", icon: <Wrench size={20} />, proficiency: "CONFIDENT" },
    { key: "concepts", title: "CONCEPTS", icon: <Brain size={20} />, proficiency: "COMFORTABLE" },
  ];

  const allSkills = Object.values(skills).flat();

  return (
    <div className="w-full bg-black text-white dot-grid-white min-h-screen py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex flex-col gap-12">
        <SectionLabel number="02" title="SKILLS" inverted />

        <h1 className="font-space text-display md:text-[56px] font-bold uppercase text-white leading-tight max-w-3xl">
          What I Work With
        </h1>

        <div className="h-[2px] w-full max-w-2xl bg-white" />

        <p className="font-inter text-lg text-white opacity-90 max-w-2xl">
          A comprehensive overview of the languages, frameworks, and tools I use to build
          interfaces and solve real-world problems.
        </p>

        {/* All skill tags */}
        <div className="flex flex-wrap gap-2 py-4">
          {allSkills.map((skill) => (
            <SkillTag key={skill} label={skill} inverted />
          ))}
        </div>

        {/* Detailed category breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="border-[3px] border-white bg-black shadow-box-inv flex flex-col hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200"
            >
              {/* Header */}
              <div className="border-b-[3px] border-white px-4 py-3 bg-white text-black flex items-center justify-between">
                <h3 className="font-mono font-bold text-sm uppercase">
                  {cat.title}
                </h3>
                {cat.icon}
              </div>
              {/* Items */}
              <div className="p-4 flex-grow">
                <ul className="font-mono text-sm flex flex-col">
                  {skills[cat.key].map((item) => (
                    <li
                      key={item}
                      className="py-2 border-b-[2px] border-white/30 hover:bg-white hover:text-black px-2 transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Proficiency label */}
              <div className="border-t-[2px] border-white/30 px-4 py-2">
                <span className="font-mono text-[10px] border-[2px] border-white px-2 py-0.5 uppercase tracking-widest">
                  {cat.proficiency}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
