import Link from "next/link";


const pillars = [
  {
    label: "Story",
    title: "A World of Fallen Light",
    desc: "Begin in the Kenoma — a material world enslaved by a false god. Fight demons, uncover the corruption of the church, and awaken your divine spark. Solo or co-op.",
    icon: "✦",
  },
  {
    label: "Combat",
    title: "Divine Light vs The Abyss",
    desc: "Wield stolen Abyss power against your oppressors while growing your inner Divine Light. Two power systems in tension — a God of War meets Sekiro experience.",
    icon: "⚔",
  },
  {
    label: "Multiplayer",
    title: "Fight. Build. Ascend.",
    desc: "Explore developing duel, deathmatch, and objective modes alongside survival, seeded dungeons, and local Forge creation. Ranked play and community sharing remain longer-term goals.",
    icon: "◈",
  },
];

const factionTeases = [
  { name: "The Monad", desc: "The unknowable true God. The source of all light." },
  { name: "Yaldabaoth", desc: "The Demiurge. Born from Sophia's fracture, certain of his own supremacy." },
  { name: "The Pneumatics", desc: "Spiritually awakened humans — they can see what others cannot." },
  { name: "The Archons", desc: "Enforcers of the material prison. Servants of the Demiurge." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#02010a] via-[#080414] to-[#07040d]" />
        <div className="light-rays absolute inset-0 opacity-60" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#d4af37] opacity-[0.04] blur-[100px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-[#6b21a8] opacity-[0.06] blur-[80px]" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#d4af37] text-xs tracking-[0.5em] uppercase mb-8 opacity-80">
            A Dark Action RPG / In Development
          </p>
          <h1 className="font-[family-name:var(--font-cinzel)] text-[clamp(2.5rem,10vw,9rem)] font-black leading-none tracking-[0.1em] text-gold-shimmer mb-6">
            PLEROMA
          </h1>
          <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Awaken your divine spark. Traverse the Kenoma.{" "}
            <span className="text-[#e2e8f0]">Ascend to the Pleroma.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/details#development" className="inline-flex items-center gap-3 bg-[#d4af37] text-black px-8 py-4 text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#e8c96a] transition-colors">
              Behind the Game
            </Link>
            <Link
              href="/overview"
              className="inline-flex items-center gap-2 border border-[rgba(212,175,55,0.4)] text-[#d4af37] px-8 py-4 text-xs tracking-[0.3em] uppercase hover:border-[#d4af37] hover:bg-[rgba(212,175,55,0.05)] transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#94a3b8]">Scroll</span>
          <svg className="w-4 h-4 text-[#d4af37] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      <section className="project-preview">
        <div className="max-w-6xl mx-auto">
          <div className="preview-heading"><div><p className="development-label">One world / Many disciplines</p><h2>Building Pleroma.</h2></div><p>A personal Unreal Engine 5 project by Sebastian Piwko, connecting C++ systems with original 3D assets and a dark fantasy world.</p></div>
          <div className="development-grid">
            <article className="development-card"><span className="development-number">01 / ENGINEERING</span><h3>The machinery of the world</h3><p>Ability-based combat, replicated character attributes, data-driven levels, and save validation form the technical work behind the game.</p><Link className="development-link" href="/details#development">Behind the systems &rarr;</Link></article>
            <article className="development-card"><span className="development-number">02 / ORIGINAL ART</span><h3>From model to environment</h3><p>Original Blender models and environment assets are brought into Unreal Engine to shape the spaces where Pleroma unfolds.</p><Link className="development-link" href="/details#development">The creative workflow &rarr;</Link></article>
            <article className="development-card"><span className="development-number">03 / WORLD-BUILDING</span><h3>Truth beneath the surface</h3><p>False gods, suppressed history, and an inner divine spark give the developing world its identity, characters, and story direction.</p><Link className="development-link" href="/universe">Enter the universe &rarr;</Link></article>
          </div>
          <p className="development-status">Pleroma is in ongoing development. This site introduces the project and its evolving creative direction.</p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-4 border-t border-[rgba(212,175,55,0.1)]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-16">The Pillars of Pleroma</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(212,175,55,0.1)]">
            {pillars.map(({ label, title, desc, icon }) => (
              <div key={label} className="bg-[#07040d] p-10 hover:bg-[#0d0820] transition-colors group">
                <div className="text-3xl text-[#d4af37] mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{icon}</div>
                <p className="text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-2">{label}</p>
                <h3 className="font-[family-name:var(--font-cinzel)] text-xl font-semibold text-white mb-4">{title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lore tease */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07040d] via-[#0d0820] to-[#07040d]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#6b21a8] opacity-[0.04] blur-[100px]" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-center text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">The World</p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl font-bold text-center text-white mb-6">A Cosmos Ruled by Lies</h2>
          <p className="text-center text-[#94a3b8] max-w-2xl mx-auto mb-16 leading-relaxed">
            The Monad withdrew, leaving divine sparks within humanity. Born from Sophia&apos;s fracture, Yaldabaoth built an order that claims to hold every answer. Awakening begins where that certainty breaks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(212,175,55,0.08)]">
            {factionTeases.map(({ name, desc }) => (
              <div key={name} className="bg-[#07040d] p-6 hover:bg-[#0d0820] transition-colors">
                <h4 className="font-[family-name:var(--font-cinzel)] text-sm font-semibold text-[#d4af37] mb-2">{name}</h4>
                <p className="text-[#94a3b8] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/universe" className="text-xs tracking-[0.3em] uppercase text-[#d4af37] hover:text-[#e8c96a] transition-colors border-b border-[rgba(212,175,55,0.4)] pb-0.5">
              Explore the Universe →
            </Link>
          </div>
        </div>
      </section>

      {/* Modes tease */}
      <section className="py-24 px-4 border-t border-[rgba(212,175,55,0.1)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">Game Modes</p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl font-bold text-white mb-6">Every Way to Play</h2>
          <p className="text-[#94a3b8] mb-12 leading-relaxed">
            A story prologue, wave survival, seeded dungeon runs, PvP prototypes, and a local Forge editor. Discover the current modes and the direction beyond them.
          </p>
          <Link href="/modes" className="inline-flex items-center gap-2 border border-[rgba(212,175,55,0.4)] text-[#d4af37] px-8 py-3 text-xs tracking-[0.3em] uppercase hover:border-[#d4af37] hover:bg-[rgba(212,175,55,0.05)] transition-all">
            See All Modes
          </Link>
        </div>
      </section>
    </>
  );
}
