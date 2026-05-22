import PageHero from "@/components/PageHero";

const items = [
  { name: "Seraph Armor Set", category: "Armor", rarity: "Rare", price: "$9.99" },
  { name: "Void Cloak", category: "Armor", rarity: "Epic", price: "$14.99" },
  { name: "Golden Radiance Glow", category: "Magic VFX", rarity: "Rare", price: "$4.99" },
  { name: "Abyss Vortex Spell", category: "Magic VFX", rarity: "Epic", price: "$7.99" },
  { name: "Bow of the Pneumatic", category: "Weapon Skin", rarity: "Rare", price: "$7.99" },
  { name: "Demiurge Fist Wraps", category: "Weapon Skin", rarity: "Legendary", price: "$19.99" },
];

const emotes = [
  { name: "Divine Ascent", desc: "Float upward in golden light" },
  { name: "Abyss Whisper", desc: "Dark energy spirals around you" },
  { name: "Pneumatic Meditation", desc: "Sit and meditate mid-battle" },
  { name: "Heresy Laugh", desc: "Laugh at the cosmos" },
];

export default function StorePage() {
  return (
    <>
      <PageHero label="In-Game Store" title="Cosmetics & Emotes" subtitle="Cosmetic-only store. No pay-to-win. Cosmetics, emotes, and bundles available now and on Steam." />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-24">
        {/* Steam Banner */}
        <section className="border border-[rgba(212,175,55,0.2)] p-8 sm:p-12 bg-[linear-gradient(135deg,rgba(212,175,55,0.05),rgba(107,33,168,0.05))] rounded-sm">
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-3">Now on Steam</p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-3xl font-bold text-white mb-4">Wishlist Pleroma</h2>
          <p className="text-[#94a3b8] mb-6">Add Pleroma to your Steam wishlist. When the game launches, purchasable cosmetics will be available directly in-game and on Steam.</p>
          <a href="#" className="inline-flex items-center gap-2 bg-[#d4af37] text-black px-6 py-3 text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#e8c96a] transition-colors">
            Wishlist on Steam
          </a>
        </section>

        {/* Items Grid */}
        <section>
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-8">Featured Items</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(212,175,55,0.08)]">
            {items.map(({ name, category, rarity, price }) => (
              <div key={name} className="bg-[#07040d] p-6 hover:bg-[#0d0820] transition-colors">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#475569] mb-2">{category}</p>
                <h3 className="font-[family-name:var(--font-cinzel)] text-base text-white mb-3">{name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#d4af37]">{rarity}</span>
                  <span className="font-bold text-white">{price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emotes */}
        <section>
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-8">Emotes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[rgba(212,175,55,0.08)]">
            {emotes.map(({ name, desc }) => (
              <div key={name} className="bg-[#07040d] p-6 hover:bg-[#0d0820] transition-colors">
                <h3 className="font-[family-name:var(--font-cinzel)] text-base text-white mb-2">{name}</h3>
                <p className="text-[#94a3b8] text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
