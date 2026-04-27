"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero grid-bg overflow-hidden">
      {/* Orbs décoratifs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-[10%] w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{background: 'rgba(74,127,255,0.12)'}} />
      <div className="absolute bottom-1/3 right-[8%] w-48 h-48 rounded-full blur-3xl pointer-events-none" style={{background: 'rgba(74,127,255,0.08)'}} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 mb-8 text-sm text-violet-300">
          <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
          Agent IA n°1 déjà actif — Devis automatique
        </div>

        {/* Logo animé */}
        <div className="flex justify-center mb-8">
          <img
            src="/logo.png"
            alt="FacilIA"
            className="w-28 h-28 rounded-2xl glow-violet animate-float"
          />
        </div>

        {/* Titre */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          <span className="text-white">L'IA qui </span>
          <span className="text-shimmer">libère votre temps</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/60 mb-4 max-w-3xl mx-auto">
          Vos devis, emails, rapports et plus encore — générés automatiquement.
        </p>
        <p className="text-lg text-white/40 mb-12 max-w-2xl mx-auto">
          Conçu pour les PME et artisans qui veulent arrêter de perdre du temps sur l'administratif.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/onboarding"
            className="btn-primary px-8 py-4 rounded-2xl text-lg font-bold text-white"
          >
            Essayer gratuitement →
          </a>
          <a
            href="#agents"
            className="px-8 py-4 rounded-2xl text-lg font-semibold text-white/80 border border-white/20 hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300"
          >
            Voir les agents IA
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "90%", label: "de temps gagné", color: "#4A7FFF" },
            { value: "0€", label: "de frais cachés", color: "#9B5FFF" },
            { value: "24/7", label: "agents actifs", color: "#4A7FFF" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black" style={{color: stat.color}}>{stat.value}</div>
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
