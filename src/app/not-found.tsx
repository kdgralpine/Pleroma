import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#07040d] text-[#e2e8f0]">
      <div className="max-w-2xl text-center px-6 py-12">
        <h1 className="font-[family-name:var(--font-cinzel)] text-6xl text-[#d4af37] mb-6">404</h1>
        <p className="text-lg text-[#94a3b8] mb-6">Page not found — the Kenoma hides more than it reveals.</p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 border border-[#d4af37] text-[#d4af37] px-6 py-2 text-xs uppercase tracking-[0.3em] hover:bg-[rgba(212,175,55,0.05)] transition-all">
            Return home
          </Link>
          <Link href="/overview" className="inline-flex items-center gap-2 bg-[#d4af37] text-black px-6 py-2 text-xs uppercase tracking-[0.3em] hover:bg-[#e8c96a] transition-colors">
            Read the overview
          </Link>
        </div>
      </div>
    </div>
  );
}
