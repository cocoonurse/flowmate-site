"use client";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="border-t border-violet-500/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="FacilIA" className="w-10 h-10 rounded-xl" />
          <div>
            <div className="font-bold"><span className="text-white">Facil</span><span style={{color:"#8B5CF6"}}>IA</span></div>
            <div className="text-white/40 text-xs">{t.tagline}</div>
          </div>
        </div>

        <div className="flex gap-8 text-sm text-white/40">
          {t.links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
        </div>

        <div className="text-white/30 text-xs">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
}
