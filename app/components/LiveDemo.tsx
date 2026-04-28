"use client";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n";

export default function LiveDemo() {
  const { lang } = useLanguage();
  const t = translations[lang].liveDemo;

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 text-green-400 text-sm mb-6">
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t.title1}<br />
            <span className="text-violet-400">{t.title2}</span>
          </h2>
          <p className="text-white/50 text-lg">
            {t.subtitle}
          </p>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 text-yellow-300 text-sm mt-4">
            {t.warning}
          </div>
        </div>

        <div
          className="rounded-3xl overflow-hidden"
          style={{ border: "1px solid rgba(123,63,228,0.3)", boxShadow: "0 0 40px rgba(123,63,228,0.15)" }}
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-violet-500/20" style={{ background: "rgba(13,16,34,0.8)" }}>
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="text-white/30 text-xs ml-2">{t.iframeLabel}</span>
          </div>
          <iframe
            src={lang === "fr" ? "https://tally.so/r/Bzbvre" : "https://tally.so/r/81JgqP"}
            width="100%"
            height="600"
            style={{ border: "none", background: "#0D1022" }}
            title={t.iframeTitle}
          />
        </div>
      </div>
    </section>
  );
}
