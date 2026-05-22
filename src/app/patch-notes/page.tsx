import PageHero from "@/components/PageHero";

const patches = [
  {
    version: "0.5.0",
    date: "May 20, 2026",
    notes: [
      "Early Access Launch — Story Act I, Survival mode, 1v1/2v2 PvP live",
      "Forge mode beta with community map voting system",
      "First cosmetic store launch with 8 initial items",
      "Bug fixes: fixed Abyss power collision detection, corrected Divine Light scaling",
    ],
  },
  {
    version: "0.4.2",
    date: "April 10, 2026",
    notes: [
      "Closed beta patch — Act I story refinement",
      "Balanced Pneumatic abilities — 15% cooldown increase",
      "New tutorial flow for Divine Light awakening",
    ],
  },
  {
    version: "0.4.0",
    date: "March 5, 2026",
    notes: [
      "Closed beta begins — full story Act I playable",
      "Procedural dungeon system implemented",
      "PvP ranked ladder foundation",
    ],
  },
];

export default function PatchNotesPage() {
  return (
    <>
      <PageHero label="Game Updates" title="Patch Notes" subtitle="Latest updates, balance changes, and what's coming next." />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        {patches.map(({ version, date, notes }) => (
          <div key={version} className="border border-[rgba(212,175,55,0.15)] p-8 hover:border-[rgba(212,175,55,0.3)] transition-colors">
            <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-[rgba(212,175,55,0.1)]">
              <h3 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-white">v{version}</h3>
              <span className="text-[#94a3b8] text-sm">{date}</span>
            </div>
            <ul className="space-y-2">
              {notes.map((note, i) => (
                <li key={i} className="text-[#94a3b8] leading-relaxed flex gap-3">
                  <span className="text-[#d4af37] shrink-0">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
