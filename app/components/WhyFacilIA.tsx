"use client";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n";

export default function WhyFacilIA() {
  const { lang } = useLanguage();
  const t = translations[lang].why;

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 text-violet-300 text-sm mb-6">
            {t.badge} <span className="text-white font-semibold">Facil</span><span style={{color:"#8B5CF6"}} className="font-semibold">IA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t.title1}<br />
            <span className="text-violet-400">{t.title2}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.points.map((p) => (
            <div key={p.title} className="card-glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
