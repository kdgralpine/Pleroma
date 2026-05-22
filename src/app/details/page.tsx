"use client";

import PageHero from "@/components/PageHero";
import { useState } from "react";

const weapons = [
  { name: "Seraph Blade", rarity: "S", type: "Sword", desc: "Forged from crystallised Divine Light. Cuts through Abyss energy and dispels minor illusions on contact." },
  { name: "Void Scythe", rarity: "A", type: "Scythe", desc: "Stolen Archon weapon. Channels Abyss energy through wide sweeping arcs. Heavy, punishing, slow." },
  { name: "Pneumatic Gauntlets", rarity: "A", type: "Fists", desc: "Augmented fists that amplify raw Divine Light into concussive blasts. Preferred by Pneumatic brawlers." },
  { name: "Archon Spear", rarity: "B", type: "Polearm", desc: "Standard Archon enforcement weapon. Reliable range, moderate Abyss infusion." },
  { name: "Light Bow", rarity: "B", type: "Ranged", desc: "Fires arrows of condensed Divine Light. Charge shots pierce through multiple enemies." },
  { name: "Demiurge Shard", rarity: "S+", type: "Catalyst", desc: "A fragment of Yaldabaoth's own power. Extremely dangerous — constant risk of corruption." },
];

const enemies = [
  { name: "Shade Crawler", rank: "D", desc: "Lowest-tier shadow creatures. Numerous, fragile. Entry-level threat used by the Archons for surveillance." },
  { name: "Hollow Soldier", rank: "C", desc: "Former human soldiers drained of Divine Light. Retain combat training, no soul. Used as foot soldiers." },
  { name: "Archon Warden", rank: "B", desc: "Dedicated enforcers of the Kenoma prison. Armored in Abyss-infused plate. Difficult to stagger." },
  { name: "Void Apostle", rank: "B+", desc: "Mages who willingly surrendered their light. Can channel raw Abyss void blasts and warp space locally." },
  { name: "Greater Archon", rank: "A", desc: "Upper-hierarchy Archon. Commands a domain of the spirit realm. Has a name. Has a grudge." },
  { name: "Fallen Pneumatic", rank: "A+", desc: "An awakened human who was broken and inverted. Divine Light corrupted into a self-consuming black radiance." },
  { name: "Divine General", rank: "S", desc: "One of the twelve. Each controls a spiritual domain. Boss encounters. Multiple phases. Remember their names." },
  { name: "Seraph of Yaldabaoth", rank: "S+", desc: "The Demiurge's highest servants. Near-Aeon level. Encounters with these are story events." },
];

const magicStyles = [
  { name: "Divine Light", affinity: "Light", rank: "Core", desc: "The fundamental inner power. Grows with spiritual discipline. At lower levels: enhanced speed and strength. At higher: spirit realm perception, Pleroma access, reality-affecting radiance." },
  { name: "Abyss Draw", affinity: "Void", rank: "Stolen", desc: "Abyss power seized from the sacrificial ritual. Raw, destructive, intoxicating. Grows via combat aggression. Risk: prolonged use dims Divine Light." },
  { name: "Pneuma Burst", affinity: "Light", rank: "Intermediate", desc: "Concentrated Divine Light expelled outward as concussive wave. Effective against Void-type enemies. Staggers Archons." },
  { name: "Void Step", affinity: "Void", rank: "Intermediate", desc: "Short-range teleport through the Abyss layer of reality. Can phase through walls and attacks briefly." },
  { name: "Pleroma Sight", affinity: "Light", rank: "Advanced", desc: "Temporarily shift perception into the Pleroma overlay. Reveals hidden enemies, traps, spirit-realm objects, and the true forms of disguised entities." },
  { name: "Kenoma Shatter", affinity: "Void", rank: "Advanced", desc: "Channel Abyss energy to violently destabilise local reality. Massive damage to everything nearby — including yourself." },
  { name: "Monad Spark", affinity: "Light", rank: "Rare", desc: "A brief, involuntary flare of the true God's light from within. Rare, unpredictable, catastrophic to Void-type entities." },
  { name: "Twin Resonance", affinity: "Both", rank: "Unique", desc: "Harmonise Divine Light and Abyss power simultaneously. High risk, devastating output. Unlocked only on specific story paths." },
];

const tabs = ["Weapons", "Enemies", "Magic Styles"] as const;
type Tab = typeof tabs[number];

const rankColors: Record<string, string> = {
  D: "text-[#94a3b8]",
  C: "text-green-400",
  B: "text-blue-400",
  "B+": "text-blue-300",
  A: "text-[#a855f7]",
  "A+": "text-[#c084fc]",
  S: "text-[#d4af37]",
  "S+": "text-red-400",
  Core: "text-[#bfdbfe]",
  Stolen: "text-[#a855f7]",
  Intermediate: "text-blue-400",
  Advanced: "text-[#d4af37]",
  Rare: "text-red-400",
  Unique: "text-[#e8c96a]",
};

const affinityColors: Record<string, string> = {
  Light: "text-[#bfdbfe] border-[rgba(191,219,254,0.2)]",
  Void: "text-[#a855f7] border-[rgba(168,85,247,0.2)]",
  Both: "text-[#e8c96a] border-[rgba(232,201,106,0.2)]",
};

export default function DetailsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Weapons");

  return (
    <>
      <PageHero
        label="Game Details"
        title="Arsenal & Codex"
        subtitle="Weapons, enemies, and the two power systems that define every encounter in Pleroma."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Tabs */}
        <div className="flex gap-px mb-12 bg-[rgba(212,175,55,0.1)]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-xs tracking-[0.3em] uppercase transition-colors ${
                activeTab === tab
                  ? "bg-[#d4af37] text-black font-bold"
                  : "bg-[#07040d] text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-[#0d0820]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Weapons */}
        {activeTab === "Weapons" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(212,175,55,0.08)]">
            {weapons.map(({ name, rarity, type, desc }) => (
              <div key={name} className="bg-[#07040d] p-6 hover:bg-[#0d0820] transition-colors">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-[family-name:var(--font-cinzel)] text-base text-white">{name}</h3>
                  <span className={`text-xs font-bold ${rankColors[rarity]}`}>{rarity}</span>
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#475569] mb-3">{type}</p>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Enemies */}
        {activeTab === "Enemies" && (
          <div className="space-y-px bg-[rgba(212,175,55,0.08)]">
            {enemies.map(({ name, rank, desc }) => (
              <div key={name} className="bg-[#07040d] px-6 py-5 hover:bg-[#0d0820] transition-colors flex items-start gap-6">
                <span className={`font-[family-name:var(--font-cinzel)] text-lg font-black w-10 shrink-0 ${rankColors[rank]}`}>{rank}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-cinzel)] text-base text-white mb-1">{name}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Magic Styles */}
        {activeTab === "Magic Styles" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[rgba(212,175,55,0.08)]">
            {magicStyles.map(({ name, affinity, rank, desc }) => (
              <div key={name} className="bg-[#07040d] p-6 hover:bg-[#0d0820] transition-colors">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-[family-name:var(--font-cinzel)] text-base text-white">{name}</h3>
                  <span className={`text-[10px] tracking-[0.2em] uppercase border px-2 py-0.5 ${affinityColors[affinity]}`}>{affinity}</span>
                </div>
                <p className={`text-[10px] tracking-[0.2em] uppercase mb-3 ${rankColors[rank]}`}>{rank}</p>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
