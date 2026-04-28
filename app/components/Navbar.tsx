"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang].navbar;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0D1022]/90 backdrop-blur-md border-b border-violet-500/20" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.png" alt="FacilIA" className="w-10 h-10 rounded-xl" />
          <span className="text-xl font-bold"><span className="text-white">Facil</span><span style={{color:"#8B5CF6"}}>IA</span></span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          {t.links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA + lang switcher + burger */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-sm font-semibold text-white/60 hover:text-white border border-white/20 px-3 py-1.5 rounded-lg transition-colors"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <a href="/onboarding" className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold text-white hidden sm:block">
            {t.cta}
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
          {t.links.map((l) => (
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
            {t.cta}
          </a>
        </div>
      )}
    </nav>
  );
}
