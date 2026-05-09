import { portfolioData } from "@/data/portfolio";
import TimelineEntry from "@/components/ui/TimelineEntry";
import CertCard from "@/components/ui/CertCard";

export default function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section className="w-full bg-white py-20 border-t-[3px] border-black" id="education">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
          {/* Left: Education */}
          <div className="md:pr-12 md:border-r-[3px] border-black pb-12 md:pb-0">
            <div className="mb-8 inline-block">
              <h2 className="font-mono font-bold text-heading uppercase text-black border-b-[3px] border-black pb-2 pr-4">
                EDUCATION
              </h2>
            </div>

            <div className="mt-4 relative border-l-[3px] border-black ml-2">
              {education.map((entry) => (
                <TimelineEntry
                  key={entry.year}
                  degree={entry.degree}
                  institution={entry.institution}
                  affiliation={entry.affiliation}
                  year={entry.year}
                  score={entry.score}
                  current={entry.current}
                />
              ))}
            </div>
          </div>

          {/* Right: Certifications */}
          <div className="md:pl-12 pt-12 md:pt-0 border-t-[3px] border-black md:border-t-0">
            <div className="mb-8 inline-block">
              <h2 className="font-mono font-bold text-heading uppercase text-black border-b-[3px] border-black pb-2 pr-4">
                CERTIFICATIONS
              </h2>
            </div>

            <div className="mt-4 flex flex-col">
              {certifications.map((cert) => (
                <CertCard
                  key={cert.name}
                  name={cert.name}
                  issuer={cert.issuer}
                  year={cert.year}
                  link={cert.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
