import { portfolioData } from "@/data/portfolio";

export default function Marquee() {
  const items = portfolioData.marqueeItems;
  const content = items.join(" · ") + " · ";

  return (
    <div className="w-full bg-black py-3 overflow-hidden border-y-[2px] border-black">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="font-mono text-sm text-white uppercase mx-4">
          {content}
        </span>
        <span className="font-mono text-sm text-white uppercase mx-4">
          {content}
        </span>
        <span className="font-mono text-sm text-white uppercase mx-4">
          {content}
        </span>
        <span className="font-mono text-sm text-white uppercase mx-4">
          {content}
        </span>
      </div>
    </div>
  );
}
