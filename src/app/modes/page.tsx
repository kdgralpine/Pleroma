import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Modes | Pleroma", description: "Explore the story, survival, dungeon, PvP, and Forge modes being developed for Pleroma." };
const groups = [
  { category: "Story & PvE", items: [
    { name: "Story", tag: "Prologue in development", desc: "Enter the Kenoma as a prince or princess trained to hunt demons within the Church's order. A vision fractures that certainty. The current story work begins with the prologue; the wider campaign follows awakening, hidden history, and choices that shape the journey." },
    { name: "Wave Survival", tag: "Combat prototype", desc: "Face escalating waves of enemies and elites. Survival puts combat variety, movement, and sustained pressure at the center of each session. The design treats each run as self-contained, without survival-specific progression carried between sessions." },
    { name: "Procedural Dungeon", tag: "Run-based prototype", desc: "Explore seeded dungeon layouts and clear encounters room by room. The current dungeon mode is a standalone run. Deeper floor progression, stacking modifiers, and the wider bonfire-linked roguelite loop remain longer-term design goals." },
  ] },
  { category: "Player versus player", items: [
    { name: "Duel", tag: "Round-based 1v1", desc: "Fight one opponent across rounds. Guard, parry, posture, and loadout choices bring the combat system into a direct contest of timing and pressure." },
    { name: "Team Deathmatch", tag: "Team combat", desc: "Two sides compete to reach the score limit. Coordinate pressure, protect teammates, and turn individual combat skill into a shared result." },
    { name: "Free-for-All", tag: "Individual combat", desc: "Every player competes independently to reach the score limit. Read the fight, choose your engagements, and manage threats from more than one direction." },
    { name: "Gun Game", tag: "Style ladder", desc: "Each elimination advances you through a ladder of combat styles. Finish the ladder to win. The mode tests adaptability across the roster rather than mastery of a single loadout." },
    { name: "Capture the Flag", tag: "Team objective", desc: "Take the opposing flag and carry it back to your side to score. Attack, defense, and movement matter as much as winning individual fights." },
    { name: "Domination", tag: "Control points", desc: "Capture and hold control points to earn score over time. Teams must balance combat pressure with positioning and control of the arena." },
  ] },
  { category: "Creation", items: [
    { name: "Forge", tag: "Local creation prototype", desc: "Build a level with blocks, props, enemies, and gameplay markers, then playtest it. Maps use the same level-data pipeline as the game. The current editor is standalone and saves locally; community publishing and Workshop integration are longer-term goals." },
  ] },
];

export default function ModesPage() {
  return <><PageHero label="Modes / In Development" title="Choose Your Battlefield" subtitle="Story, survival, dungeon runs, competitive encounters, and spaces of your own. A look at the modes taking shape in Pleroma." />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 space-y-14">
      <aside className="world-note"><p className="development-label">Development snapshot</p><p>These modes describe the current development build and its direction, not a released feature list. Multiplayer capacity and online behavior are still being tested. Ranked seasons, matchmaking, and community sharing are not presented as released services.</p></aside>
      {groups.map(({category,items}) => <section key={category}><h2 className="font-[family-name:var(--font-cinzel)] text-2xl text-white mb-6">{category}</h2><div className="grid sm:grid-cols-2 gap-4">{items.map(({name,tag,desc}) => <article key={name} className="development-card"><p className="development-label">{tag}</p><h3>{name}</h3><p>{desc}</p></article>)}</div></section>)}
      <aside className="world-note"><p className="development-label">Longer-term direction</p><h2 className="font-[family-name:var(--font-cinzel)] text-xl text-white mt-3 mb-4">Beyond the current build</h2><p>The wider design explores campaign co-op, larger competitive formats, ranked and casual play, a deeper roguelite loop, and community-created content. Scope and rules will evolve through development and playtesting.</p><Link className="development-link" href="/details#development">See how the game is being built &rarr;</Link></aside>
    </div></>;
}
