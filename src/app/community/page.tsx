import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function CommunityPage() {
  return (
    <>
      <PageHero label="Join the Community" title="Ascend Together" subtitle="Find players, share creations, and build the Pleroma community. The golden era of gaming lives here." />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* Find Players */}
        <section>
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">Find Players</p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-white mb-6">Raids. Duels. Co-op Runs.</h2>
          <div className="border border-[rgba(212,175,55,0.2)] p-8 sm:p-10 bg-[rgba(212,175,55,0.02)]">
            <p className="text-[#94a3b8] mb-6">Join our Discord and find players looking for story runs, ranked 1v1s, survival wave grinding, or Forge mod playtests. The community posts matchmaking calls daily.</p>
            <a href="#" className="inline-flex items-center gap-2 border border-[rgba(212,175,55,0.4)] text-[#d4af37] px-6 py-3 text-xs tracking-[0.3em] uppercase hover:bg-[rgba(212,175,55,0.05)] transition-all">
              Join Discord
            </a>
          </div>
        </section>

        {/* Forge Hub */}
        <section>
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">Forge Mode Community</p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-white mb-6">Build. Share. Play.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="border border-[rgba(212,175,55,0.15)] p-8 hover:bg-[rgba(212,175,55,0.02)] transition-colors">
              <h3 className="font-[family-name:var(--font-cinzel)] text-lg text-white mb-3">Featured Maps</h3>
              <p className="text-[#94a3b8] text-sm mb-4">Discover the best community-made maps and game modes. Upvote your favorites.</p>
            </div>
            <div className="border border-[rgba(212,175,55,0.15)] p-8 hover:bg-[rgba(212,175,55,0.02)] transition-colors">
              <h3 className="font-[family-name:var(--font-cinzel)] text-lg text-white mb-3">Create & Upload</h3>
              <p className="text-[#94a3b8] text-sm mb-4">Build your own maps and modes in Forge. Share them with millions of players instantly.</p>
            </div>
          </div>
          <a href="#" className="inline-flex items-center gap-2 border border-[rgba(212,175,55,0.4)] text-[#d4af37] px-6 py-3 text-xs tracking-[0.3em] uppercase hover:bg-[rgba(212,175,55,0.05)] transition-all">
            Browse Forge Hub
          </a>
        </section>

        {/* Blog */}
        <section>
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">Community Blog</p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-white mb-6">Stories & Highlights</h2>
          <div className="space-y-px bg-[rgba(212,175,55,0.08)]">
            {[
              { title: "Top 10 Most Played Forge Modes", author: "Community", date: "May 19" },
              { title: "Guide: Climbing to Aeon Rank in 5v5", author: "Pro Player", date: "May 15" },
              { title: "Speedrun World Record: Story in 47 Minutes", author: "Speedrunner", date: "May 12" },
            ].map(({ title, author, date }) => (
              <a key={title} href="#" className="block bg-[#07040d] px-6 py-5 hover:bg-[#0d0820] transition-colors">
                <p className="text-white font-medium mb-1">{title}</p>
                <p className="text-[#475569] text-xs">{author} — {date}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Social */}
        <section>
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-8">Stay Connected</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "Discord", handle: "@Pleroma" },
              { name: "Twitter", handle: "@Pleroma_RPG" },
              { name: "Reddit", handle: "r/PleromaRPG" },
              { name: "YouTube", handle: "@PleromaOfficial" },
            ].map(({ name, handle }) => (
              <a key={name} href="#" className="text-center border border-[rgba(212,175,55,0.15)] py-4 hover:bg-[rgba(212,175,55,0.05)] transition-colors">
                <p className="font-semibold text-white text-sm mb-1">{name}</p>
                <p className="text-[#94a3b8] text-xs">{handle}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
