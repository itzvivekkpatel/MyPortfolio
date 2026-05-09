interface StatBoxProps {
  value: string;
  label: string;
}

export default function StatBox({ value, label }: StatBoxProps) {
  return (
    <div className="border-[2px] border-black p-4 shadow-box hover:bg-black hover:text-white transition-colors group cursor-default">
      <div className="font-mono font-bold text-2xl group-hover:text-white">
        {value}
      </div>
      <div className="font-inter text-xs uppercase tracking-widest mt-1 border-t-[2px] border-black group-hover:border-white pt-2">
        {label}
      </div>
    </div>
  );
}
