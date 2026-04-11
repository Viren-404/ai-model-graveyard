import { useState } from "react";
import Navbar from "../components/Navbar";
import TombstoneCard from "../components/TombstoneCard";
import { deadAITools, categories } from "../data/deadAITools";
import Head from "next/head";

export default function Graveyard() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  // Filter logic
  const filtered = deadAITools
    .filter(tool => {
      const matchSearch =
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.company.toLowerCase().includes(search.toLowerCase()) ||
        tool.tags.some(t => t.includes(search.toLowerCase()));
      const matchCategory = activeCategory === "All" || tool.category === activeCategory;
      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      if (sortBy === "newest") return parseInt(b.died) - parseInt(a.died);
      if (sortBy === "oldest") return parseInt(a.died) - parseInt(b.died);
      if (sortBy === "popular") return b.popularity - a.popularity;
      return 0;
    });

  return (
    <>
      <Head>
        <title>The Graveyard — All Dead AI Tools | AI Model Graveyard</title>
        <meta name="description" content="Browse all discontinued and dead AI tools. Search by name, company, or category." />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=IBM+Plex+Mono:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-grave-bg text-grave-white">
        <Navbar />

        <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-grave-white mb-3">
              The <span className="text-grave-green">Graveyard</span>
            </h1>
            <p className="font-body text-grave-gray">
              {deadAITools.length} AI tools buried and counting. 
              <span className="text-red-400"> New deaths added weekly.</span>
            </p>
          </div>

          {/* Search + Sort Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="🔍 Search by name, company, or tag..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 bg-grave-card border border-grave-border rounded-xl px-4 py-3 font-body text-grave-white placeholder-grave-gray focus:outline-none focus:border-grave-green transition-colors"
            />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="bg-grave-card border border-grave-border rounded-xl px-4 py-3 font-body text-grave-white focus:outline-none focus:border-grave-green transition-colors cursor-pointer"
            >
              <option value="newest">Sort: Newest Deaths</option>
              <option value="oldest">Sort: Oldest Deaths</option>
              <option value="popular">Sort: Most Popular</option>
            </select>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-sm px-4 py-1.5 rounded-full border transition-all ${
                  activeCategory === cat
                    ? "bg-grave-green text-black border-grave-green"
                    : "border-grave-border text-grave-gray hover:border-grave-green hover:text-grave-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="font-body text-grave-gray text-sm mb-6">
            Showing <span className="text-grave-green">{filtered.length}</span> buried tools
          </p>

          {/* Tool Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(tool => (
                <TombstoneCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">👻</p>
              <p className="font-body text-grave-gray">
  No tools found. Maybe it&apos;s not dead yet...
</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
