"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/overview", label: "Overview" },
  { href: "/universe", label: "Universe" },
  { href: "/details", label: "Details" },
  { href: "/modes", label: "Modes" },
  { href: "/store", label: "Store" },
  { href: "/community", label: "Community" },
  { href: "/patch-notes", label: "Patch Notes" },
  { href: "/support", label: "Support" },
  { href: "/donate", label: "Donate" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(212,175,55,0.15)] bg-[rgba(7,4,13,0.85)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-cinzel)] text-xl font-bold tracking-[0.2em] text-[#d4af37] hover:text-[#e8c96a] transition-colors shrink-0"
        >
          PLEROMA
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-1.5 text-xs tracking-widest uppercase transition-colors rounded ${
                pathname === href
                  ? "text-[#d4af37]"
                  : "text-[#94a3b8] hover:text-[#e2e8f0]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Steam CTA */}
        <a
          href="/details#development"
          className="hidden xl:inline-flex items-center gap-2 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black px-4 py-1.5 text-xs tracking-widest uppercase transition-all shrink-0"
        >
          Behind the Game
        </a>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden text-[#94a3b8] hover:text-[#e2e8f0] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden border-t border-[rgba(212,175,55,0.15)] bg-[#07040d] px-4 py-4">
          <div className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 text-sm tracking-widest uppercase transition-colors ${
                  pathname === href
                    ? "text-[#d4af37]"
                    : "text-[#94a3b8] hover:text-[#e2e8f0]"
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="/details#development"
              className="mt-2 text-center border border-[#d4af37] text-[#d4af37] py-2.5 text-sm tracking-widest uppercase"
            >
              Behind the Game
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
