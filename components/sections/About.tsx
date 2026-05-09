import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import StatBox from "@/components/ui/StatBox";

export default function About() {
  const { personal } = portfolioData;

  const socialLinks: { icon: React.ReactNode; href: string; label: string }[] = [
    { icon: <Github size={20} />, href: personal.github, label: "GitHub" },
    { icon: <Linkedin size={20} />, href: personal.linkedin, label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: personal.twitter, label: "Twitter" },
    {
      icon: <Mail size={20} />,
      href: `mailto:${personal.email}`,
      label: "Email",
    },
  ];

  return (
    <section className="w-full bg-white" id="about">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="w-full md:w-1/2 p-4 md:p-12 md:border-r-[3px] border-black flex flex-col gap-8">
          <SectionLabel number="01" title="ABOUT ME" />

          <h2 className="font-space text-display md:text-[56px] font-bold uppercase leading-tight">
            Who Am I?
          </h2>

          <div className="font-inter text-lg leading-relaxed border-l-4 border-black pl-4 flex flex-col gap-4">
            <p>{personal.bio}</p>
          </div>

          {/* Stat boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-auto pt-8 border-t-[2px] border-dashed border-black">
            <StatBox value="1st Year" label="B.Tech CSE" />
            <StatBox value="90.6%" label="Class 10th" />
            <StatBox value="87%" label="Class 12th" />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 p-4 md:p-12 flex flex-col items-center justify-center gap-8 bg-white">
          {/* Portrait frame with dot grid */}
          <div className="relative w-full max-w-[400px] aspect-[3/4] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="w-full h-full border-[2px] border-black dot-grid-black relative flex items-center justify-center bg-white">
              {/* Diagonal watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 transform -rotate-45">
                <span className="font-space text-[80px] font-bold uppercase whitespace-nowrap">
                  VIVEK PATEL
                </span>
              </div>
              {/* Terminal overlays */}
              <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 font-mono text-[10px]">
                IMG_01.DAT
              </div>
              <div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 font-mono text-[10px]">
                REC_ACTIVE
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex flex-col items-center gap-4 w-full max-w-[400px]">
            <div className="font-mono text-xs text-black border-b-[2px] border-black w-full text-center pb-2 uppercase tracking-widest">
              [ CONNECTION_PROTOCOLS ]
            </div>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[48px] h-[48px] border-[2px] border-black text-black flex items-center justify-center shadow-box hover:bg-black hover:text-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-75"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
