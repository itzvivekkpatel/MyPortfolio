interface SkillTagProps {
  label: string;
  inverted?: boolean;
}

export default function SkillTag({ label, inverted = true }: SkillTagProps) {
  return (
    <span
      className={`border-[2px] px-3 py-1 font-mono text-sm uppercase cursor-default transition-colors ${
        inverted
          ? "border-white text-white hover:bg-white hover:text-black"
          : "border-black text-black hover:bg-black hover:text-white"
      }`}
    >
      {label}
    </span>
  );
}
