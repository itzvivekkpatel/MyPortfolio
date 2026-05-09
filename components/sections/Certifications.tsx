import { portfolioData } from "@/data/portfolio";
import CertCard from "@/components/ui/CertCard";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section className="w-full bg-white py-20" id="certifications">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="mb-8 inline-block">
          <h2 className="font-mono font-bold text-heading uppercase text-black border-b-[3px] border-black pb-2 pr-4">
            CERTIFICATIONS
          </h2>
        </div>

        <div className="flex flex-col max-w-2xl">
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
    </section>
  );
}
