"use client";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-animated grid-bg overflow-hidden">
      {/* Orbs décoratifs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-[10%] w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{background: 'rgba(74,127,255,0.18)'}} />
      <div className="absolute bottom-1/3 right-[8%] w-48 h-48 rounded-full blur-3xl pointer-events-none" style={{background: 'rgba(74,127,255,0.12)'}} />

      {/* Badges flottants */}
      <div className="absolute top-32 left-[5%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full animate-float" style={{background:"rgba(34,197,94,0.15)", border:"1px solid rgba(34,197,94,0.3)", animationDelay:"0s"}}>
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span className="text-green-400 text-xs font-semibold">Agent actif 24/7</span>
      </div>
      <div className="absolute top-48 right-[5%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full animate-float" style={{background:"rgba(74,127,255,0.15)", border:"1px solid rgba(74,127,255,0.3)", animationDelay:"1.5s"}}>
        <span className="text-blue-400 text-xs font-semibold">⚡ Devis en 30 sec</span>
      </div>
      <div className="absolute bottom-48 left-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full animate-float" style={{background:"rgba(123,63,228,0.15)", border:"1px solid rgba(123,63,228,0.3)", animationDelay:"3s"}}>
        <span className="text-violet-400 text-xs font-semibold">🤖 IA Claude powered</span>
      </div>
      <div className="absolute bottom-36 right-[7%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full animate-float" style={{background:"rgba(255,184,0,0.1)", border:"1px solid rgba(255,184,0,0.3)", animationDelay:"2s"}}>
        <span className="text-yellow-400 text-xs font-semibold">📊 +3 200 devis générés</span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Badge live */}
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-5 py-2 mb-8 text-sm text-violet-300">
          <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
          {lang === "fr" ? "4 agents IA actifs — Disponibles maintenant" : "4 AI agents active — Available now"}
        </div>

        {/* Logo animé */}
        <div className="flex justify-center mb-8">
          <img src="/logo.png" alt="FacilIA" className="w-28 h-28 rounded-2xl pulse-glow animate-float" />
        </div>

        {/* Titre */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          <span className="text-white">{t.headline1}</span>
          <span className="text-shimmer">{t.headline2}</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/60 mb-4 max-w-3xl mx-auto">
          {t.sub1}
        </p>
        <p className="text-lg text-white/40 mb-12 max-w-2xl mx-auto">
          {t.sub2}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/onboarding" className="btn-primary px-8 py-4 rounded-2xl text-lg font-bold text-white">
            {t.cta1}
          </a>
          <a href="#agents" className="px-8 py-4 rounded-2xl text-lg font-semibold text-white/80 border border-white/20 hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300">
            {t.cta2}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {t.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black" style={{color: i === 1 ? "#9B5FFF" : "#4A7FFF"}}>{stat.value}</div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs z-10">
        <div className="w-px h-8 bg-gradient-to-b from-violet-500/50 to-transparent" />
        <span>↓</span>
      </div>
    </section>
  );
}
