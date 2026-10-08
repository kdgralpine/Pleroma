import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Universe | Pleroma", description: "The Kenoma, the Monad, Sophia, and Yaldabaoth: explore Pleroma's developing dark fantasy world." };
const pillars = [
  { name: "The Monad", type: "The hidden source", desc: "When the Monad withdrew, its essence scattered into human souls as divine sparks. Its presence is internal rather than granted by the world's hierarchy. The protagonist's mark connects their awakening to the Pleroma." },
  { name: "Sophia", type: "The fracture", desc: "Sophia's fracture gave rise to Yaldabaoth and the material world. Her role is tragic rather than evil: she seeks to correct what was broken. The journey toward the Pleroma is also drawn toward her." },
  { name: "Yaldabaoth", type: "The Demiurge", desc: "Born from Sophia's fracture, Yaldabaoth built the world's hierarchies and believes himself supreme because he has not seen what lies above him. He can command obedience, but cannot manufacture the bond between humanity and the Monad." },
];
const groups = [
  { title: "Realms & perception", entries: [
    { name: "The Kenoma", desc: "The material world under Yaldabaoth's order. Its people inherit an official account of reality, while the spiritual layer and suppressed history remain beyond ordinary perception." },
    { name: "The Pleroma", desc: "The realm of the true source. Awakening changes what a person can perceive and how they can cross the boundaries of the world. Death is one possible threshold, rather than the only route." },
    { name: "Dreams", desc: "A threshold where the hidden order can reach the protagonist and the Monad's mark may first speak. Dreams belong to the world's unease, rather than offering a safe escape from it." },
  ] },
  { title: "Authority & resistance", entries: [
    { name: "The Church", desc: "The dominant religious order serves Yaldabaoth without revealing the true nature of its god. Its authority shapes public belief and the protagonist's early place in the world." },
    { name: "The Archons", desc: "Yaldabaoth's generals: a corrupted mirror of divine hierarchy. They embody the power of the order that awakening calls into question." },
    { name: "The Aeons", desc: "The Monad's true emanations, largely absent or imprisoned. Their absence is part of the distance between the world's official order and its hidden source." },
    { name: "Those who remember", desc: "A persecuted minority understands that the true source is within humanity. Their knowledge challenges the Church's account of where power and meaning come from." },
  ] },
  { title: "Lives caught between worlds", entries: [
    { name: "The Protagonist", desc: "A prince or princess and trained demon hunter, raised inside the Church's system. A vision introduces a crack in that worldview. Their journey asks whether they are an instrument of fate or someone who can break its pattern." },
    { name: "The Enigmatic Guide", desc: "An emissary of the Monad who appears at threshold moments. The Guide walks with the protagonist through suffering rather than rescuing them, pointing toward self-reliance, Sophia, and the Pleroma." },
    { name: "The Companions", desc: "The central trio explores different answers to a shared wound: inner liberation, obedience to external authority, and a third perspective still taking shape. Their relationships and fates are part of the developing narrative." },
    { name: "The Frog Knights", desc: "Beings who exist in both physical and astral layers. The Church calls them demons, yet their dual nature places them closer to truths their persecutors cannot see." },
  ] },
];
const awakening = [
  { name: "Unawakened", desc: "The spiritual layer remains unseen." },
  { name: "First Awakening", desc: "Inner light surfaces; perception begins to change." },
  { name: "Deepening", desc: "The inner world begins to reflect outward, drawing spiritual attention." },
  { name: "Full Awakening", desc: "Self-confrontation deepens, and stronger threats take notice." },
  { name: "Gnosis", desc: "A philosophical and narrative state, rather than simply another combat rank." },
];

export default function UniversePage() {
  return <><PageHero label="Universe / Developing Lore" title="Truth Beneath the Kenoma" subtitle="An original dark fantasy world of hidden history, divine sparks, and the struggle between inner freedom and imposed authority." accent="void" />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 space-y-16">
      <section className="world-opening"><p className="development-label">The world you inherit</p><h2>A sacred order.<br /><span>A hidden fracture.</span></h2><p>The Church gives the world its laws, its enemies, and its account of the divine. The protagonist begins inside that certainty. As their inner light awakens, familiar truths become less certain and the boundary between material and spiritual life begins to change.</p><p>The story unfolds through revelations across the main journey and side content. Its central question stays open: are you following a fate written for you, or learning how to break the pattern?</p></section>
      <section><p className="development-label mb-5">The three pillars</p><div className="development-grid">{pillars.map(item => <article className="development-card" key={item.name}><p className="development-label">{item.type}</p><h3>{item.name}</h3><p>{item.desc}</p></article>)}</div></section>
      <section className="world-note"><p className="development-label">Two sources of power</p><div className="creative-grid"><article><h3>The gift of hierarchy</h3><p>Yaldabaoth offers power through obedience: believe, belong, and submit to the order that grants it.</p></article><article><h3>The spark within</h3><p>The Monad&apos;s spark is already inside the protagonist. Awakening is self-confrontation, not an inheritance or a gift the hierarchy can revoke.</p></article></div></section>
      {groups.map(group => <section key={group.title}><h2 className="font-[family-name:var(--font-cinzel)] text-2xl text-white mb-6">{group.title}</h2><div className="grid sm:grid-cols-2 gap-4">{group.entries.map(item => <article key={item.name} className="development-card"><h3>{item.name}</h3><p>{item.desc}</p></article>)}</div></section>)}
      <section><p className="development-label">Awakening / Design direction</p><h2 className="font-[family-name:var(--font-cinzel)] text-2xl text-white mt-3 mb-5">More than a measure of strength.</h2><p className="text-[#94a3b8] text-sm leading-relaxed max-w-2xl mb-6">Awakening changes how a character exists in the world, not just what they can do. Greater awareness also brings greater exposure to the forces that police it.</p><ol className="awakening-list">{awakening.map((item,i) => <li key={item.name}><span className="development-number">0{i}</span><div><h3>{item.name}</h3><p>{item.desc}</p></div></li>)}</ol></section>
      <aside className="world-note"><p className="development-label">A world still taking shape</p><p>This page reflects the current narrative direction. Character details, the cost of awakening, and the paths through the story continue to develop. Pleroma draws from Gnostic ideas as the foundation for an original myth.</p><Link className="development-link" href="/details#development">Explore the art and systems behind the world &rarr;</Link></aside>
    </div></>;
}
