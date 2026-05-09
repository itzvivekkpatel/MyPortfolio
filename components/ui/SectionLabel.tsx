interface SectionLabelProps {
  number: string;
  title: string;
  inverted?: boolean;
}

export default function SectionLabel({
  number,
  title,
  inverted = false,
}: SectionLabelProps) {
  return (
    <div
      className={`inline-block border-[2px] px-3 py-1 mb-2 ${
        inverted ? "border-white" : "border-black"
      }`}
    >
      <span
        className={`font-mono text-xs uppercase tracking-widest ${
          inverted ? "text-white" : "text-black"
        }`}
      >
        [ {number} — {title} ]
      </span>
    </div>
  );
}
