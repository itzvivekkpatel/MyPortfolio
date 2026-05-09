import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

const footerLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="bg-black border-t-[3px] border-white py-8" role="contentinfo">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left */}
          <div className="flex flex-col gap-2">
            <span className="font-space font-bold text-2xl text-white uppercase">
              {personal.name}
            </span>
            <p className="font-inter text-sm text-white opacity-80">
              {personal.tagline}
            </p>
          </div>

          {/* Right */}
          <nav
            className="flex flex-wrap gap-4 md:gap-6 md:justify-end items-start md:items-center"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-sm text-white uppercase opacity-80 hover:opacity-100 hover:underline transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/20 mt-6 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span className="font-mono text-xs text-white">
            © 2025 {personal.name}
          </span>
          <span className="font-mono text-xs text-white opacity-60">
            Built with Next.js &amp; Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}
