"use client";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n";

export default function Agents() {
  const { lang } = useLanguage();
  const t = translations[lang].agents;

  return (
    <section id="agents" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 text-violet-300 text-sm mb-6">
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t.title1}<br />
            <span className="text-violet-400">{t.title2}</span>
          </h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {t.list.map((agent) => (
            <div
              key={agent.id}
              className={`card-glass rounded-3xl p-8 transition-all duration-300 group ${
                agent.status === "actif" ? "ring-1 ring-violet-500/40" : ""
              }`}
            >
              {/* Header card */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{background: 'linear-gradient(135deg, rgba(74,127,255,0.2), rgba(123,63,228,0.2)'}}>
                    {agent.icon}
                  </div>
                  <div>
                    <div className="text-white/30 text-xs font-mono mb-1">{t.agentLabel} {agent.id}</div>
                    <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  agent.status === "actif"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-white/5 text-white/30 border border-white/10"
                }`}>
                  {agent.status === "actif" ? t.statusActive : t.statusSoon}
                </span>
              </div>

              <p className="text-white/60 mb-6 leading-relaxed">{agent.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {agent.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                    <span style={{color: '#4A7FFF'}}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {agent.demo ? (
                <a
                  href={agent.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-3 rounded-xl text-sm font-semibold text-white text-center block"
                >
                  {t.ctaActive}
                </a>
              ) : (
                <button className="w-full py-3 rounded-xl text-sm font-semibold text-white/30 border border-white/10 cursor-not-allowed">
                  {t.ctaSoon}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
