import PageHero from "@/components/PageHero";

const modes = [
  {
    category: "Campaign",
    items: [
      {
        name: "Story",
        tag: "Solo / Co-op",
        desc: "The full narrative campaign. Begin in the Kenoma, uncover the corruption of the Church, die or awaken, and traverse the spirit realm toward the Pleroma. Supports full co-op throughout.",
      },
    ],
  },
  {
    category: "PvE",
    items: [
      {
        name: "Survival",
        tag: "1–4 Players",
        desc: "Wave-based combat against escalating demon ranks — D through S+. Each wave harder than the last. Last as long as possible. Leaderboards per player count.",
      },
      {
        name: "Procedural Dungeons",
        tag: "1–4 Players",
        desc: "Roguelike-style dungeons with unique layouts, enemy combinations, and loot every run. No two runs are the same. Unlock permanent upgrades across attempts.",
      },
    ],
  },
  {
    category: "PvP",
    items: [
      { name: "1v1", tag: "Duel", desc: "Pure skill expression. One opponent, no distractions." },
      { name: "2v2", tag: "Team", desc: "Tight coordination required. Two-man squads." },
      { name: "3v3", tag: "Team", desc: "Squad play begins here. Communication and roles matter." },
      { name: "4v4", tag: "Team", desc: "Larger team dynamics and map control." },
      { name: "5v5", tag: "Team", desc: "Full squad. Coordinated ultimates and strategies." },
    ],
  },
  {
    category: "Ranked & Casual",
    items: [
      {
        name: "Ranked",
        tag: "Competitive",
        desc: "Seasonal competitive ladder. Climb from Hylics to Pneumatic to Aeon tier.",
      },
      {
        name: "Casual",
        tag: "No Rank Impact",
        desc: "Same modes, no stakes. Experiment freely.",
      },
    ],
  },
  {
    category: "Creation",
    items: [
      {
        name: "Forge",
        tag: "Community",
        desc: "Build custom maps, design game modes, set rules, place enemies. Share with community. The Halo 3 Forge spirit.",
      },
    ],
  },
];

export default function ModesPage() {
  return (
    <>
      <PageHero label="Game Modes" title="Every Way to Play" subtitle="From story campaign to ranked 5v5, procedural dungeons to community Forge creations." />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {modes.map(({ category, items }) => (
          <section key={category}>
            <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6">{category}</p>
            <div className="space-y-px bg-[rgba(212,175,55,0.08)]">
              {items.map(({ name, tag, desc }) => (
                <div key={name} className="bg-[#07040d] p-6 sm:p-8 hover:bg-[#0d0820] transition-colors">
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <h3 className="font-[family-name:var(--font-cinzel)] text-xl font-semibold text-white">{name}</h3>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#475569] border border-[rgba(255,255,255,0.08)] px-2 py-0.5">{tag}</span>
                  </div>
                  <p className="text-[#94a3b8] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
