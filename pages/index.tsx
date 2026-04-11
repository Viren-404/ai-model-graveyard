import Navbar from "../components/Navbar";
import TombstoneCard from "../components/TombstoneCard";
import { deadAITools } from "../data/deadAITools";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const recentDeaths = deadAITools.slice(0, 6);

  return (
    <>
      <Head>
        <title>AI Model Graveyard — Discontinued & Dead AI Tools</title>
        <meta name="description" content="A cemetery for discontinued, shut down, and abandoned AI tools and models. R.I.P. to the AI that didn't make it." />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=IBM+Plex+Mono:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-grave-bg text-grave-white">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" />
          <div className="text-8xl mb-6 animate-float">🪦</div>
          
          <h1 className="font-heading text-5xl md:text-7xl text-grave-white mb-4 leading-tight">
            AI Model<br />
            <span className="text-grave-green animate-flicker">Graveyard</span>
          </h1>
          
          <p className="font-body text-grave-gray text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            A digital cemetery for AI tools, models, and products that were 
            <span className="text-red-400"> discontinued</span>, 
            <span className="text-yellow-500"> abandoned</span>, or 
            <span className="text-grave-purple"> quietly killed</span>.
            They built. They failed. We remember.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/graveyard" className="bg-grave-green text-black font-body font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              Browse the Graveyard →
            </Link>
            <Link href="/submit" className="border border-grave-border text-grave-white font-body px-8 py-3 rounded-full hover:border-grave-green transition-colors">
              Submit a Death
            </Link>
          </div>

          {/* Stats Counter */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { number: deadAITools.length + "+", label: "Tools Buried" },
              { number: "2010", label: "Oldest Death" },
              { number: "2024", label: "Latest Death" },
            ].map((stat) => (
              <div key={stat.label} className="bg-grave-card border border-grave-border rounded-xl p-4">
                <div className="font-heading text-grave-green text-2xl">{stat.number}</div>
                <div className="font-body text-grave-gray text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Deaths */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">💀</span>
            <h2 className="font-heading text-2xl text-grave-white">Recently Buried</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentDeaths.map(tool => (
              <TombstoneCard key={tool.id} tool={tool} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/graveyard" className="font-body text-grave-green hover:underline text-sm">
              View all {deadAITools.length} buried tools →
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-grave-border py-8 text-center font-body text-grave-gray text-sm">
          <p>🪦 AI Model Graveyard — Built with respect for the fallen.</p>
          <p className="mt-1 text-xs">Know a dead AI tool? <Link href="/submit" className="text-grave-green hover:underline">Submit it here</Link></p>
        </footer>
      </div>
    </>
  );
}
