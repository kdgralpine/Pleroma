import PageHero from "@/components/PageHero";

export default function PressKitPage() {
  return (
    <>
      <PageHero
        label="Press Kit"
        title="Media Assets & Brand Guidelines"
        subtitle="A placeholder press kit page for brand assets, logos, and the Pleroma creative direction."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        <div className="bg-[#0d0820] border border-[rgba(212,175,55,0.08)] rounded-3xl p-8">
          <h2 className="font-[family-name:var(--font-cinzel)] text-2xl text-white mb-4">What’s included</h2>
          <ul className="list-disc pl-5 space-y-3 text-[#94a3b8] text-sm leading-relaxed">
            <li>Brand name usage guidelines</li>
            <li>Placeholder logo concepts</li>
            <li>High-level press messaging and taglines</li>
          </ul>
        </div>

        <div className="bg-[#0d0820] border border-[rgba(212,175,55,0.08)] rounded-3xl p-8">
          <h2 className="font-[family-name:var(--font-cinzel)] text-2xl text-white mb-4">Download / use</h2>
          <p className="text-[#94a3b8] leading-relaxed">
            As the game and website move closer to launch, this section will contain official assets and usage policies for media coverage.
          </p>
        </div>
      </div>
    </>
  );
}
