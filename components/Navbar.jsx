import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-grave-bg/90 backdrop-blur-sm border-b border-grave-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl animate-float">🪦</span>
          <span className="font-heading text-grave-white text-lg group-hover:text-grave-green transition-colors">
            AI Graveyard
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 font-body text-sm">
          <Link href="/" className="text-grave-gray hover:text-grave-white transition-colors">Home</Link>
          <Link href="/graveyard" className="text-grave-gray hover:text-grave-white transition-colors">The Graveyard</Link>
          <Link href="/blog" className="text-grave-gray hover:text-grave-white transition-colors">Obituaries</Link>
          <Link href="/stats" className="text-grave-gray hover:text-grave-white transition-colors">Stats</Link>
          <Link href="/submit" className="bg-grave-green text-black px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity font-semibold">
            + Submit a Death
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-grave-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-grave-card border-t border-grave-border px-4 py-4 flex flex-col gap-4 font-body text-sm">
          <Link href="/" className="text-grave-gray hover:text-grave-white" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/graveyard" className="text-grave-gray hover:text-grave-white" onClick={() => setMenuOpen(false)}>The Graveyard</Link>
          <Link href="/blog" className="text-grave-gray hover:text-grave-white" onClick={() => setMenuOpen(false)}>Obituaries</Link>
          <Link href="/stats" className="text-grave-gray hover:text-grave-white" onClick={() => setMenuOpen(false)}>Stats</Link>
          <Link href="/submit" className="text-grave-green font-semibold" onClick={() => setMenuOpen(false)}>+ Submit a Death</Link>
        </div>
      )}
    </nav>
  );
}
