import PageHero from "@/components/PageHero";
import Link from "next/link";

const tiers = [
  {
    name: "Spark",
    amount: "$5",
    perks: ["Early access to patch notes", "Spark supporter badge in Discord", "Name on monthly supporters list"],
    color: "border-[#bfdbfe] text-[#bfdbfe]",
  },
  {
    name: "Pneumatic",
    amount: "$15",
    perks: ["All Spark perks", "Exclusive in-game cosmetic (armor set)", "Direct voice chat with dev team monthly", "Pneumatic role in Discord"],
    color: "border-[#a855f7] text-[#a855f7]",
    featured: true,
  },
  {
    name: "Aeon",
    amount: "$50",
    perks: ["All Pneumatic perks", "Legendary cosmetic set (weapons + armor)", "Your name engraved in Pleroma Hall of Legends", "Quarterly 1:1 dev meetings", "Custom NPC bearing your name in Pleroma"],
    color: "border-[#d4af37] text-[#d4af37]",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero label="Support Development" title="Fund Pleroma" subtitle="Help bring Pleroma to life. Every contribution funds development, server infrastructure, and keeping our team focused on the game." />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* Mission statement */}
        <section className="text-center max-w-2xl mx-auto">
          <p className="text-[#94a3b8] leading-relaxed">
            Pleroma is built by a small, passionate team. We're not backed by venture capital. Every supporter directly funds development, art, servers, and keeps us independent. Your support isn't just a purchase — it's a partnership.
          </p>
        </section>

        {/* Tiers */}
        <section>
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-12 text-center">Support Tiers</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`border-2 ${tier.color} p-8 relative transition-transform hover:scale-105 ${
                  tier.featured ? "ring-2 ring-[#d4af37] ring-inset" : ""
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d4af37] text-black px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase">
                    Most Popular
                  </div>
                )}
                <h3 className={`font-[family-name:var(--font-cinzel)] text-2xl font-bold mb-2 ${tier.color.split(" ")[1]}`}>
                  {tier.name}
                </h3>
                <p className="text-3xl font-bold text-white mb-8">{tier.amount}</p>
                <ul className="space-y-3 mb-10">
                  {tier.perks.map((perk, i) => (
                    <li key={i} className="text-[#94a3b8] text-sm flex gap-3">
                      <span className={tier.color.split(" ")[1]}>✓</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`block w-full text-center py-3 border-2 font-semibold tracking-wider transition-colors ${
                    tier.featured ? `bg-[#d4af37] text-black border-[#d4af37] hover:bg-[#e8c96a]` : `border-[#d4af37] text-[#d4af37] hover:bg-[rgba(212,175,55,0.1)]`
                  }`}
                >
                  Support at {tier.amount}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border border-[rgba(212,175,55,0.15)] p-8">
          <p className="font-semibold text-white mb-4">What happens to my money?</p>
          <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
            100% goes directly to development. We publish a monthly transparency report showing exactly where funds are allocated — art, servers, salaries, tools, and infrastructure.
          </p>
          <p className="font-semibold text-white mb-4">Can I cancel anytime?</p>
          <p className="text-[#94a3b8] text-sm leading-relaxed">
            Yes. Subscriptions can be cancelled anytime. You'll keep access to your perks for the month already paid.
          </p>
        </section>

        {/* Other options */}
        <section className="text-center">
          <p className="text-[#94a3b8] mb-6">Prefer one-time purchases? Check out our in-game cosmetics or grab a limited edition physical collector's edition when it launches.</p>
          <Link href="/store" className="inline-flex items-center gap-2 border border-[rgba(212,175,55,0.4)] text-[#d4af37] px-6 py-3 text-xs tracking-[0.3em] uppercase hover:bg-[rgba(212,175,55,0.05)] transition-all">
            Browse Store
          </Link>
        </section>
      </div>
    </>
  );
}
