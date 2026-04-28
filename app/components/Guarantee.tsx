"use client";

const badges = [
  { icon: "🔒", title: "Données sécurisées", desc: "Chiffrement SSL, données hébergées en Europe" },
  { icon: "✅", title: "Satisfait ou remboursé", desc: "30 jours pour tester sans risque" },
  { icon: "⚡", title: "Setup en 24h", desc: "Votre agent actif dès demain" },
  { icon: "🤝", title: "Support humain", desc: "Une vraie personne répond sous 2h" },
];

export default function Guarantee() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-3xl p-10 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(74,127,255,0.08), rgba(123,63,228,0.12))",
            border: "1px solid rgba(123,63,228,0.3)",
          }}
        >
          {/* Orb décoratif */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(123,63,228,0.15)" }} />

          <div className="text-center mb-10 relative z-10">
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Zéro risque. <span className="text-shimmer">100% garanti.</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Nous sommes confiants dans nos agents. Si vous n'êtes pas satisfait dans les 30 jours, on vous rembourse intégralement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {badges.map((b) => (
              <div key={b.title} className="text-center p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-3xl mb-3">{b.icon}</div>
                <div className="text-white font-bold text-sm mb-1">{b.title}</div>
                <div className="text-white/40 text-xs leading-relaxed">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
