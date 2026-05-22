import PageHero from "@/components/PageHero";

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Service"
        subtitle="These terms describe how the Pleroma demo content may be used and what to expect from this preview site."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        <div className="bg-[#0d0820] border border-[rgba(212,175,55,0.08)] rounded-3xl p-8">
          <h2 className="font-[family-name:var(--font-cinzel)] text-2xl text-white mb-4">Use of the site</h2>
          <p className="text-[#94a3b8] leading-relaxed">
            This demonstration website is for informational and portfolio purposes. All narrative, visuals, and feature descriptions are placeholders until the game launches.
          </p>
        </div>

        <div className="bg-[#0d0820] border border-[rgba(212,175,55,0.08)] rounded-3xl p-8">
          <h2 className="font-[family-name:var(--font-cinzel)] text-2xl text-white mb-4">No warranties</h2>
          <p className="text-[#94a3b8] leading-relaxed">
            The site is provided as-is for preview and design validation. Content may change significantly before release, and availability is not guaranteed.
          </p>
        </div>
      </div>
    </>
  );
}
