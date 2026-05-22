import Link from "next/link";

const sections = [
  {
    title: "Game",
    links: [
      { href: "/overview", label: "Overview" },
      { href: "/universe", label: "Universe" },
      { href: "/details", label: "Details" },
      { href: "/modes", label: "Modes" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "/community", label: "Community Hub" },
      { href: "/store", label: "Store" },
      { href: "/donate", label: "Support Development" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/support", label: "FAQ & Help" },
      { href: "/patch-notes", label: "Patch Notes" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(212,175,55,0.15)] bg-[#07040d] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-[family-name:var(--font-cinzel)] text-2xl font-bold tracking-[0.2em] text-[#d4af37] mb-4">
              PLEROMA
            </p>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              A dark action RPG about awakening your divine spark and transcending a world ruled by false gods.
            </p>
          </div>

          {/* Link sections */}
          {sections.map(({ title, links }) => (
            <div key={title}>
              <p className="text-xs tracking-[0.2em] uppercase text-[#d4af37] mb-4">{title}</p>
              <ul className="space-y-2">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-[#94a3b8] hover:text-[#e2e8f0] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider-gold mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#475569]">
          <p>© {new Date().getFullYear()} Pleroma. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#94a3b8] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#94a3b8] transition-colors">
              Terms of Service
            </Link>
            <Link href="/press-kit" className="hover:text-[#94a3b8] transition-colors">
              Press Kit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
