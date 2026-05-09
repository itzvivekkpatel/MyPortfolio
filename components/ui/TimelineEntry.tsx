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
      {/* Timeline dot (centered on parent's 3px left border) */}
      <div className="absolute -left-[9.5px] top-1.5 w-4 h-4 bg-black border-[2px] border-white" />
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
