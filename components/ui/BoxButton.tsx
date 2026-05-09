"use client";

import Link from "next/link";

interface BoxButtonProps {
  variant: "solid" | "outline";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function BoxButton({
  variant,
  children,
  href,
  onClick,
  type = "button",
}: BoxButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-mono text-sm uppercase tracking-widest px-6 py-3 border-[2px] shadow-box hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 cursor-pointer";

  const variantClasses =
    variant === "solid"
      ? "bg-black text-white border-black"
      : "bg-white text-black border-black";

  const className = `${baseClasses} ${variantClasses}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
