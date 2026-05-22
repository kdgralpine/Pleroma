import PageHero from "@/components/PageHero";

const factions = [
  { name: "Monad", type: "Divine", desc: "The unknowable true God. Singular perfect light from which all reality emanates. Not a creator but a source — the Pleroma is light radiating outward from the Monad. Sacrificed himself, scattering divine sparks into every human soul." },
  { name: "Pleroma", type: "Realm", desc: "The divine fullness — the true home of light. A realm only accessible to those with sufficient Divine Light. Where the Aeons dwell and the true God's emanations persist." },
  { name: "Kenoma", type: "Realm", desc: "The material void-world. The corrupted reality ruled by Yaldabaoth. Citizens live their lives unaware of the spiritual war above and beneath them." },
  { name: "Sophia", type: "Aeon", desc: "The first Aeon born of the Monad. Her fall — acting alone to grasp the nature of the Monad without consent — accidentally produced the Demiurge. Her grief and guilt shape the spiritual undercurrent of the world." },
  { name: "Yaldabaoth (Demiurge)", type: "Antagonist", desc: "The evil twin who killed or imprisoned the true God and now wears his face. Rules every realm, every angel, every law of reality. Jealous not of human power but of the intimacy of being loved and chosen. The world is his cosmic comedy." },
  { name: "Aeons", type: "Divine", desc: "Divine emanations of the Monad — the higher beings of the Pleroma. Each Aeon embodies an aspect of the true God's nature. Some have fallen, some resist, some are lost." },
  { name: "Archons", type: "Enemy", desc: "Servants of Yaldabaoth. Enforcers of the material prison. They manage the machinery of the Kenoma and ensure humans remain unawakened and harvestable." },
  { name: "Divine Generals of Yaldabaoth", type: "Enemy", desc: "The Bleach-captain analogue. Twelve named figures of immense power who serve the Demiurge. Each controls a domain of the spirit world. Several may be sympathetic — or secretly apostates." },
  { name: "Apostles of Yaldabaoth", type: "Enemy", desc: "The religious cult posing as servants of the true God. They perform the sacrificial rituals that harvest human Divine Light and feed it to Yaldabaoth. The public believes them to be holy." },
  { name: "Apostates", type: "Faction", desc: "Former members of the Apostles who broke from the cult after learning the truth. Hunted. Some have found the Pneumatics. Others walk alone." },
  { name: "Pneumatics", type: "Human", desc: "Spiritually awakened humans — they can perceive and interact with the Pleroma and its inhabitants. Only Pneumatics can see the Watchers. The rarest kind of person." },
  { name: "Psychics", type: "Human", desc: "Partially awakened humans. Aware of the spiritual world but not fully initiated. Often drafted into the Apostles' structure or hunted as threats to the order." },
  { name: "Hylics", type: "Human", desc: "Unawakened humans. Fully material. Cannot perceive the spirit world in any form. The vast majority of the population. Not lesser — simply asleep." },
  { name: "The Watchers", type: "Entity", desc: "Ancient observers that exist between the Kenoma and the Pleroma. Only the spiritually inclined can see them. Their reactions to being noticed vary wildly — some are curious, some are hostile, some are bound by old laws." },
  { name: "Blue People of the Desert", type: "Faction", desc: "A people group living on the edge of the known world. They retained fragments of the true God's knowledge across generations, preserving it in ritual and oral tradition the Apostles have tried to erase." },
  { name: "Demons", type: "Enemy", desc: "Ranked D through S+. Creatures born from corrupted Abyss energy. Some serve the Archons. Others are escaped fragments of broken souls. The S+ class approach the power of the lesser Divine Generals." },
  { name: "Divine Light", type: "Power", desc: "The inner magic system. Ki and Haki analogue — spiritual energy from the divine spark present in every human. Can manifest as aura, heightened ability, perception of the spirit world, and at high levels, entry into the Pleroma itself. The Apostles work to dull and harvest it." },
];

const typeColors: Record<string, string> = {
  Divine: "text-[#bfdbfe]",
  Realm: "text-[#a855f7]",
  Aeon: "text-[#d4af37]",
  Antagonist: "text-red-400",
  Enemy: "text-red-400",
  Faction: "text-[#34d399]",
  Human: "text-[#94a3b8]",
  Entity: "text-[#a855f7]",
  Power: "text-[#d4af37]",
};

const cosmology = [
  { from: "The Monad", arrow: "emanates", to: "The Pleroma" },
  { from: "The Pleroma", arrow: "births", to: "The Aeons" },
  { from: "Sophia (fallen Aeon)", arrow: "accidentally creates", to: "Yaldabaoth" },
  { from: "Yaldabaoth", arrow: "imprisons / wears face of", to: "The Monad" },
  { from: "Yaldabaoth", arrow: "creates and rules", to: "The Kenoma" },
  { from: "The Monad (sacrifice)", arrow: "scatters sparks into", to: "Human Souls" },
  { from: "Human Souls", arrow: "can awaken to", to: "Divine Light → Pleroma" },
];

export default function UniversePage() {
  return (
    <>
      <PageHero
        label="Lore & Cosmology"
        title="The Universe of Pleroma"
        subtitle="A world built on Gnostic cosmology, corporate religion, and the suppressed memory of a God who loved you enough to become you."
        accent="void"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-24">

        {/* Cosmology chain */}
        <section>
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-8">The Cosmological Chain</p>
          <div className="space-y-px">
            {cosmology.map(({ from, arrow, to }, i) => (
              <div key={i} className="bg-[#0d0820] border border-[rgba(212,175,55,0.08)] px-6 py-4 flex flex-wrap items-center gap-3">
                <span className="font-[family-name:var(--font-cinzel)] text-sm text-[#d4af37]">{from}</span>
                <span className="text-xs text-[#475569] italic">{arrow}</span>
                <span className="font-[family-name:var(--font-cinzel)] text-sm text-[#e2e8f0]">{to}</span>
              </div>
            ))}
          </div>
        </section>

        {/* World lore summary */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">The World</p>
            <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-white mb-6">A Religious Empire</h2>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              The Apostles of Yaldabaoth control the known world under the banner of a benevolent God — a face they have carefully maintained for centuries. Their mages use Void and Abyss power, though this is hidden from the public at the start of the story.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Citizens are taught to surrender their inner Divine Light to the "oneness of the void" — framed as holy devotion. In reality, it feeds Yaldabaoth. A spiritual surveillance machine, a Golem harvesting the one thing he was never given: the intimacy of being chosen.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">The Two Gods</p>
            <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-white mb-6">The Twins</h2>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              They were twins. One — the Monad — loved humanity enough to sacrifice himself and hide inside them. The other — Yaldabaoth — took his throne, his name, and his face. He rules out of cosmic apathy mixed with jealousy.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              He is not purely malicious. An omnipotent being cannot evolve. Humanity — finite, flawed, surprising — is the only thing in existence that can. He watches them suffer because their suffering is the only thing that is still interesting to him.
            </p>
          </div>
        </section>

        {/* Factions */}
        <section>
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-8">Factions & Terms</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[rgba(212,175,55,0.08)]">
            {factions.map(({ name, type, desc }) => (
              <div key={name} className="bg-[#07040d] p-6 hover:bg-[#0d0820] transition-colors">
                <div className="flex items-baseline gap-3 mb-3">
                  <h3 className="font-[family-name:var(--font-cinzel)] text-base font-semibold text-white">{name}</h3>
                  <span className={`text-[10px] tracking-[0.2em] uppercase ${typeColors[type] ?? "text-[#94a3b8]"}`}>{type}</span>
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
