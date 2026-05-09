"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full bg-white border-b-[3px] border-black"
        role="banner"
      >
        <nav
          className="flex justify-between items-center w-full px-4 md:px-12 py-4 max-w-[1440px] mx-auto"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-mono font-bold text-lg border-[2px] border-black w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            aria-label="Home"
          >
            VP
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 border-[2px] font-mono text-sm uppercase tracking-widest transition-all duration-150 ${
                  isActive(link.href)
                    ? "bg-black text-white border-black shadow-box"
                    : "border-transparent text-black bg-white hover:bg-black hover:text-white hover:border-black"
                } active:translate-x-1 active:translate-y-1 active:shadow-none`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden border-[2px] border-black p-2 hover:bg-black hover:text-white transition-colors shadow-box active:translate-x-1 active:translate-y-1 active:shadow-none"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col">
          <div className="flex justify-between items-center px-4 py-4 border-b-[2px] border-white">
            <Link
              href="/"
              className="font-mono font-bold text-lg text-white border-[2px] border-white w-10 h-10 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
              aria-label="Home"
            >
              VP
            </Link>
            <button
              className="border-[2px] border-white p-2 text-white hover:bg-white hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col flex-grow" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`w-full px-6 py-5 font-mono text-lg uppercase tracking-widest border-b-[2px] border-white/20 transition-colors ${
                  isActive(link.href)
                    ? "bg-white text-black"
                    : "text-white hover:bg-white hover:text-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
