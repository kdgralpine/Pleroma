interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  accent?: "gold" | "void";
}

export default function PageHero({ label, title, subtitle, accent = "gold" }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0820] via-[#07040d] to-[#07040d]" />
      {/* Glow */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-20 ${
          accent === "gold" ? "bg-[#d4af37]" : "bg-[#6b21a8]"
        }`}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {label && (
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">{label}</p>
        )}
        <h1 className="font-[family-name:var(--font-cinzel)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider text-white mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
        )}
        <div className="mt-8 divider-gold max-w-xs mx-auto" />
      </div>
    </section>
  );
}
