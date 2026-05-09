import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section className="w-full bg-white py-20 border-t-[3px] border-black" id="experience">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="mb-8 inline-block">
          <h2 className="font-mono font-bold text-heading uppercase text-black border-b-[3px] border-black pb-2 pr-4">
            EXPERIENCE
          </h2>
        </div>

        <div className="flex flex-col gap-6 max-w-3xl">
          {experience.map((exp) => (
            <div
              key={exp.role}
              className="border-[2px] border-black shadow-box-lg bg-white"
            >
              {/* Header bar */}
              <div className="border-b-[2px] border-black p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3 className="font-mono font-bold text-lg uppercase">
                    {exp.role}
                  </h3>
                  <p className="font-inter text-sm mt-1">{exp.org}</p>
                </div>
                <span className="font-mono text-xs bg-black text-white px-3 py-1 border-[2px] border-black whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Points */}
              <div className="p-4">
                <ul className="flex flex-col">
                  {exp.points.map((point, index) => (
                    <li
                      key={index}
                      className="font-inter text-sm py-2 border-b-[2px] border-black/10 last:border-b-0 flex items-start gap-2"
                    >
                      <span className="font-mono text-xs mt-0.5 shrink-0">
                        [{String(index + 1).padStart(2, "0")}]
                      </span>
                      {point}
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
