import { portfolioData } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";
import { Terminal, Smartphone, Code2 } from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;

  const allSkills = [
    ...skills.web,
    ...skills.app,
    ...skills.programming,
    ...skills.databases,
    ...skills.tools,
    ...skills.concepts,
  ];

  const categories: {
    title: string;
    icon: React.ReactNode;
    items: string[];
  }[] = [
    { title: "WEB DEV", icon: <Terminal size={20} />, items: skills.web },
    { title: "APP DEV", icon: <Smartphone size={20} />, items: skills.app },
    {
      title: "PROGRAMMING",
      icon: <Code2 size={20} />,
      items: [...skills.programming, ...skills.databases],
    },
  ];

  return (
    <section className="w-full bg-black text-white dot-grid-white py-20" id="skills">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex flex-col gap-12">
        <SectionLabel number="02" title="SKILLS" inverted />

        <h2 className="font-space text-display md:text-[56px] font-bold uppercase text-white leading-tight max-w-3xl">
          What I Work With
        </h2>

        <div className="h-[2px] w-full max-w-2xl bg-white" />

        <p className="font-inter text-lg text-white opacity-90 max-w-2xl">
          A comprehensive overview of the languages, frameworks, and tools I use to build
          interfaces and solve problems.
        </p>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2 py-4">
          {allSkills.map((skill) => (
            <SkillTag key={skill} label={skill} inverted />
          ))}
        </div>

        {/* Category boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="border-[3px] border-white bg-black shadow-box-inv flex flex-col hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200"
            >
              {/* Header */}
              <div className="border-b-[3px] border-white px-4 py-2 bg-white text-black flex items-center justify-between">
                <h3 className="font-mono font-bold text-lg uppercase">
                  {cat.title}
                </h3>
                {cat.icon}
              </div>
              {/* Items */}
              <div className="p-4 flex-grow">
                <ul className="font-mono text-sm flex flex-col">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="py-2 border-b-[2px] border-white/30 hover:bg-white hover:text-black px-2 transition-colors flex justify-between"
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
