"use client";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n";

export default function Guarantee() {
  const { lang } = useLanguage();
  const t = translations[lang].guarantee;

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
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(123,63,228,0.15)" }} />

          <div className="text-center mb-10 relative z-10">
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              {t.title}
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {t.badges.map((b) => (
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
