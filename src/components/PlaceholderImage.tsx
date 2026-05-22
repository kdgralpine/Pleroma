interface PlaceholderImageProps {
  title: string;
  description: string;
  accent?: "gold" | "void";
  badge?: string;
}

export default function PlaceholderImage({
  title,
  description,
  accent = "gold",
  badge,
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder illustration for ${title}`}
      className="relative overflow-hidden rounded-[2rem] border border-[rgba(212,175,55,0.18)] bg-[#0b0817] shadow-[0_16px_60px_-35px_rgba(0,0,0,0.8)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(107,33,168,0.2),_transparent_35%)]" />
      <div className="relative aspect-[16/9] flex items-center justify-center px-6 text-center">
        <div className="rounded-[1.5rem] border border-dashed border-[rgba(212,175,55,0.2)] bg-[#0d0820]/80 w-full h-full flex flex-col items-center justify-center gap-4 py-10">
          <span className="text-xs tracking-[0.3em] uppercase text-[#94a3b8]">Placeholder Image</span>
          <h3 className="font-[family-name:var(--font-cinzel)] text-xl text-white">{title}</h3>
          <p className="max-w-sm text-sm leading-relaxed text-[#94a3b8]">{description}</p>
        </div>
      </div>
      {badge && (
        <span
          className={`absolute top-4 left-4 rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.3em] ${
            accent === "gold"
              ? "border-[rgba(212,175,55,0.18)] bg-[#d4af37]/10 text-[#d4af37]"
              : "border-[rgba(107,33,168,0.18)] bg-[#6b21a8]/10 text-[#a855f7]"
          }`}
        >
          {badge}
        </span>
      )}
    </div>
  );
}
