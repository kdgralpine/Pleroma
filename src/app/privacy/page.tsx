import PageHero from "@/components/PageHero";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle="We respect user privacy and only collect essential information for experience and development updates."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        <div className="bg-[#0d0820] border border-[rgba(212,175,55,0.08)] rounded-3xl p-8">
          <h2 className="font-[family-name:var(--font-cinzel)] text-2xl text-white mb-4">What we collect</h2>
          <p className="text-[#94a3b8] leading-relaxed">
            This site is a concept reveal and does not collect personal data in the current preview state. Any future data collection will be minimal, transparent, and designed to protect your privacy.
          </p>
        </div>

        <div className="bg-[#0d0820] border border-[rgba(212,175,55,0.08)] rounded-3xl p-8">
          <h2 className="font-[family-name:var(--font-cinzel)] text-2xl text-white mb-4">How we use data</h2>
          <p className="text-[#94a3b8] leading-relaxed">
            Placeholder pages like this are designed to be launch-ready. When features ship, data will only be used for bug fixes, product updates, and support communication with explicit consent.
          </p>
        </div>
      </div>
    </>
  );
}
