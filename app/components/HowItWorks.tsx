"use client";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n";

export default function HowItWorks() {
  const { lang } = useLanguage();
  const t = translations[lang].how;

  return (
    <section id="how" className="py-32 px-6 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 text-violet-300 text-sm mb-6">
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t.title}<span className="text-violet-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-white/50 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

          {t.steps.map((step) => (
            <div key={step.n} className="text-center relative">
              <div className="w-20 h-20 bg-violet-500/15 border border-violet-500/30 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 relative z-10">
                {step.icon}
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-violet-600 rounded-full text-xs font-bold text-white flex items-center justify-center">
                  {step.n}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
