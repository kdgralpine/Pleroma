import Link from "next/link";

const systems = [
  { number: "01", title: "Combat built in C++", text: "Pleroma is being developed in Unreal Engine 5 using the Gameplay Ability System for combat abilities, magic styles, and replicated character attributes. The technical work supports expressive, ability-based combat.", tools: "Unreal Engine 5 / C++ / Gameplay Ability System" },
  { number: "02", title: "A world driven by data", text: "Level systems use runtime asset discovery and format migration to separate content authoring from gameplay code. This gives the growing world a structure that can evolve alongside its environments and encounters.", tools: "Runtime asset discovery / Content formats" },
  { number: "03", title: "Protecting player progress", text: "Save-data work includes payload-length and checksum validation before deserialization, plus backup recovery for corrupted saves. Reliability is part of building the game, alongside its combat and world.", tools: "Data validation / Backup recovery" },
];

export default function DevelopmentStory() {
  return <section id="development" className="development-story">
    <div className="development-intro"><div><p className="development-label">Behind the game / Ongoing development</p><h2>The systems behind<br /><span>the divine spark.</span></h2></div><p>Pleroma is a personal game project by Sebastian Piwko, bringing together software engineering, original lore, 3D modeling, and world-building. Here is a closer look at the work shaping it.</p></div>
    <div className="development-grid">{systems.map(system => <article className="development-card" key={system.number}><span className="development-number">{system.number}</span><h3>{system.title}</h3><p>{system.text}</p><p className="development-tools">{system.tools}</p></article>)}</div>
    <div className="creative-grid">
      <article><p className="development-label">Art & environment creation</p><h3>From Blender to the Kenoma.</h3><p>Original models and environment assets are being created in Blender and brought into Unreal Engine. Modeling and engine integration connect the visual world with the spaces, encounters, and systems that make it playable.</p><div className="creation-flow" aria-label="Asset workflow"><span>Model in Blender</span><span aria-hidden="true">/</span><span>Integrate in Unreal</span><span aria-hidden="true">/</span><span>Build the world</span></div></article>
      <article><p className="development-label">Lore & narrative direction</p><h3>A world built around hidden truth.</h3><p>Pleroma&apos;s original dark fantasy lore explores false gods, suppressed history, and self-discovery. Characters, factions, monsters, and story paths shaped by player choices give the project a narrative direction alongside its technical development.</p><Link className="development-link" href="/universe">Explore the lore <span aria-hidden="true">&rarr;</span></Link></article>
    </div>
    <aside className="creator-note"><div><p className="development-label">The creator</p><h3>Engineering a world of my own.</h3></div><div><p>Building Pleroma lets me practice reusable systems design, defensive data handling, evolving content formats, and asset integration. It also connects my technical work with visual design, storytelling, and marketing across a large personal project.</p><a className="development-link" href="https://sebastianpiwko.vercel.app/" target="_blank" rel="noopener noreferrer">Meet Sebastian / Portfolio <span aria-hidden="true">&rarr;</span></a></div></aside>
  </section>;
}
