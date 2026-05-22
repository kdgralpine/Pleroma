import PageHero from "@/components/PageHero";
import Link from "next/link";

const inspirations = [
  { name: "Bleach", role: "Divine Generals, power hierarchy, spiritual visibility" },
  { name: "Jujutsu Kaisen", role: "Curse energy, hidden societies, modern-world supernatural" },
  { name: "Dragon Ball Z", role: "Ki system, power ascension, transformations" },
  { name: "Inuyasha", role: "Feudal-spirit world blending, half-human protagonists" },
  { name: "FromSoftware", role: "World design, boss encounters, lore through environment" },
  { name: "Devil May Cry", role: "Combat fluidity, style, demon-power-as-weapon" },
  { name: "Ultrakill", role: "Speed, aggression, heaven-vs-hell framing" },
];

const acts = [
  {
    act: "Act I — The Kenoma",
    title: "The Material World",
    desc: "You are a spiritually inclined soldier working to eradicate demons under the banner of the Church. The Church is the law — and it is corrupt. Your character is marked for sacrifice. Before the ritual completes, you steal the Abyss power meant to consume you.",
  },
  {
    act: "Act II — The Awakening",
    title: "The Hidden War",
    desc: "With stolen Abyss power and growing Divine Light, you begin to perceive the true shape of the world. The Watchers become visible. The Pneumatics find you. You learn the Church's god is a face worn by something ancient and jealous.",
  },
  {
    act: "Act III — The Ascent",
    title: "Toward the Pleroma",
    desc: "You traverse the spirit realm, confront the Divine Generals, and face the fallen master who chose corruption over resistance. The path splits. Peter or Judas. Break the cycle — or perpetuate it for another age.",
  },
];

export default function OverviewPage() {
  return (
    <>
      <PageHero
        label="Game Overview"
        title="The Story of Pleroma"
        subtitle="A dark action RPG about awakening your divine spark in a world that wants it extinguished."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-24">

        {/* Acts */}
        <section>
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-12">The Story</p>
          <div className="space-y-px bg-[rgba(212,175,55,0.08)]">
            {acts.map(({ act, title, desc }) => (
              <div key={act} className="bg-[#07040d] p-8 sm:p-10 hover:bg-[#0d0820] transition-colors">
                <p className="text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-1">{act}</p>
                <h3 className="font-[family-name:var(--font-cinzel)] text-2xl font-semibold text-white mb-4">{title}</h3>
                <p className="text-[#94a3b8] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Choice system */}
        <section className="border border-[rgba(212,175,55,0.15)] p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#6b21a8] opacity-[0.04] blur-[80px] rounded-full" />
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">The Choice</p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-3xl font-bold text-white mb-6">Peter or Judas?</h2>
          <p className="text-[#94a3b8] leading-relaxed mb-8">
            At the crucible of the story, your character faces the same choice that has defined every spiritual age. Help break the cycle of cosmic suffering — or, knowingly or not, ensure it continues for another era. A secret third path exists for those who see beyond both.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[rgba(212,175,55,0.08)]">
            {[
              { path: "The Peter Path", desc: "Stand against the cycle. Fight to break the cosmic machinery. The hardest road." },
              { path: "The Judas Path", desc: "Serve the system knowingly. The cycle continues. A different kind of tragedy." },
              { path: "The Hidden Path", desc: "Perceive beyond both choices. Reserved for those who find what others miss." },
            ].map(({ path, desc }) => (
              <div key={path} className="bg-[#07040d] p-6">
                <h4 className="font-[family-name:var(--font-cinzel)] text-sm text-[#d4af37] mb-2">{path}</h4>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Inspirations */}
        <section>
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-8">Inspirations</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[rgba(212,175,55,0.08)]">
            {inspirations.map(({ name, role }) => (
              <div key={name} className="bg-[#07040d] px-6 py-4 hover:bg-[#0d0820] transition-colors flex items-start gap-4">
                <span className="text-[#d4af37] opacity-40 mt-0.5">✦</span>
                <div>
                  <span className="font-[family-name:var(--font-cinzel)] text-sm text-white">{name}</span>
                  <span className="text-[#475569] mx-2">—</span>
                  <span className="text-[#94a3b8] text-sm">{role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/universe" className="flex-1 text-center border border-[rgba(212,175,55,0.4)] text-[#d4af37] py-3 text-xs tracking-[0.3em] uppercase hover:bg-[rgba(212,175,55,0.05)] transition-all">
            Explore the Universe
          </Link>
          <Link href="/modes" className="flex-1 text-center border border-[rgba(212,175,55,0.4)] text-[#d4af37] py-3 text-xs tracking-[0.3em] uppercase hover:bg-[rgba(212,175,55,0.05)] transition-all">
            See Game Modes
          </Link>
        </div>
      </div>
    </>
  );
}
