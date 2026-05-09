interface TimelineEntryProps {
  degree: string;
  institution: string;
  affiliation: string;
  year: string;
  score: string;
  current?: boolean;
}

export default function TimelineEntry({
  degree,
  institution,
  affiliation,
  year,
  score,
  current = false,
}: TimelineEntryProps) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-[14px] h-[14px] bg-black border-[2px] border-black" />
      {/* Timeline line */}
      <div className="absolute left-[6px] top-[18px] bottom-0 w-[3px] bg-black last:hidden" />
      {/* Content card */}
      <div className="border-[2px] border-black p-4 shadow-box hover:-translate-y-1 transition-transform bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b-[2px] border-black pb-2 mb-2">
          <h3 className="font-mono font-bold text-lg uppercase">{degree}</h3>
          <span className="font-mono text-xs bg-black text-white px-3 py-1 border-[2px] border-black whitespace-nowrap">
            {year}
          </span>
        </div>
        <p className="font-inter font-bold text-sm">{institution}</p>
        <div className="flex items-center gap-3 mt-2">
          <span className="font-mono text-xs text-black uppercase">
            {affiliation}
          </span>
          <span className="font-mono text-xs">—</span>
          <span className="font-mono text-xs font-bold">{score}</span>
          {current && (
            <span className="font-mono text-[10px] border-[2px] border-black px-2 py-0.5 bg-black text-white uppercase">
              CURRENT
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
