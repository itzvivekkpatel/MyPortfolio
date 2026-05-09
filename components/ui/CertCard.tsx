interface CertCardProps {
  name: string;
  issuer: string;
  year: string;
  link: string;
}

export default function CertCard({ name, issuer, year, link }: CertCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-[2px] border-black p-4 mb-3 shadow-box hover:bg-black hover:text-white transition-all duration-200 cursor-pointer group"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <h3 className="font-space font-bold text-base">{name}</h3>
          <p className="font-mono italic text-sm mt-1 flex items-center gap-2">
            <span className="w-2 h-2 bg-black group-hover:bg-white inline-block" />
            {issuer}
          </p>
        </div>
        <div className="font-mono text-xs border-[2px] border-black group-hover:border-white px-3 py-1 shrink-0">
          {year}
        </div>
      </div>
    </a>
  );
}
