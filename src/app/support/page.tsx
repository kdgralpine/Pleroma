"use client";
import PageHero from "@/components/PageHero";
import { useState } from "react";

const faqs = [
  {
    q: "When is Pleroma releasing?",
    a: "Pleroma is currently in development. Wishlist on Steam to be notified when a release date is announced.",
  },
  {
    q: "What platforms will Pleroma be on?",
    a: "Pleroma will launch on PC. Console versions are planned for post-launch.",
  },
  {
    q: "Is Pleroma free-to-play?",
    a: "No. Pleroma is a premium game with cosmetic-only monetization. Buy once, play forever.",
  },
  {
    q: "Can I play story solo or must I do co-op?",
    a: "Story is designed for both solo and co-op. Play however you prefer.",
  },
  {
    q: "Will there be PvP matchmaking by skill level?",
    a: "Yes. Ranked ladder with seasonal resets. Casual queue for practicing without rank impact.",
  },
  {
    q: "Is Forge mode included at launch?",
    a: "Yes. Full Forge suite ships with the game at launch.",
  },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero label="Support" title="FAQ & Help" subtitle="Find answers to common questions. For additional support, reach out to our team." />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        {/* FAQs */}
        <section className="mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-8">Frequently Asked Questions</p>
          <div className="space-y-px bg-[rgba(212,175,55,0.08)]">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#07040d]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left hover:bg-[#0d0820] transition-colors flex items-center justify-between group"
                >
                  <p className="font-medium text-white group-hover:text-[#d4af37] transition-colors">{faq.q}</p>
                  <svg
                    className={`w-4 h-4 text-[#d4af37] transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 border-t border-[rgba(212,175,55,0.1)] text-[#94a3b8] text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">Get in Touch</p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-white mb-6">Contact Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a href="mailto:support@pleroma.dev" className="border border-[rgba(212,175,55,0.2)] p-6 hover:bg-[rgba(212,175,55,0.02)] transition-colors">
              <p className="text-[#d4af37] font-semibold mb-2">Email Support</p>
              <p className="text-[#94a3b8] text-sm">support@pleroma.dev</p>
            </a>
            <a href="#" className="border border-[rgba(212,175,55,0.2)] p-6 hover:bg-[rgba(212,175,55,0.02)] transition-colors">
              <p className="text-[#d4af37] font-semibold mb-2">Discord</p>
              <p className="text-[#94a3b8] text-sm">24/7 community support</p>
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
