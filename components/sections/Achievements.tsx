import { portfolioData } from "@/data/portfolio";

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section className="w-full bg-white py-20 border-t-[3px] border-black" id="achievements">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="mb-8 inline-block">
          <h2 className="font-mono font-bold text-heading uppercase text-black border-b-[3px] border-black pb-2 pr-4">
            ACHIEVEMENTS
          </h2>
        </div>

        <div className="flex flex-col max-w-3xl">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="border-[2px] border-black p-4 mb-[-2px] flex items-start gap-4 hover:bg-black hover:text-white transition-colors group cursor-default"
            >
              <span className="font-mono font-bold text-2xl opacity-20 group-hover:opacity-40 shrink-0 w-10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-inter text-sm leading-relaxed">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
