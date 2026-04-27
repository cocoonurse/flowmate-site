"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#agents", label: "Agents IA" },
    { href: "#how", label: "Comment ça marche" },
    { href: "#pricing", label: "Tarifs" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0D1022]/90 backdrop-blur-md border-b border-violet-500/20" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <span className="text-xl font-bold">
            <span className="text-white">Facil</span><span style={{color:"#7B3FE4"}}>IA</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA + burger */}
        <div className="flex items-center gap-4">
          <a href="/onboarding" className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold text-white hidden sm:block">
            Commencer →
          </a>
          <button
            className="md:hidden text-white/70 hover:text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1022]/95 backdrop-blur-md border-b border-violet-500/20 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-white text-sm py-2 border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="/onboarding" className="btn-primary px-5 py-3 rounded-xl text-sm font-semibold text-white text-center mt-2">
            Commencer →
          </a>
        </div>
      )}
    </nav>
  );
}
