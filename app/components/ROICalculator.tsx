"use client";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n";

export default function ROICalculator() {
  const [devis, setDevis] = useState(10);
  const [minutes, setMinutes] = useState(30);
  const [tauxHoraire, setTauxHoraire] = useState(50);
  const { lang } = useLanguage();
  const t = translations[lang].roi;

  const heuresSemaine = (devis * minutes) / 60;
  const heuresMois = heuresSemaine * 4;
  const economieArgent = Math.round(heuresMois * tauxHoraire);
  const heuresAnnee = Math.round(heuresMois * 12);

  const currencySymbol = lang === "en" ? "€" : "€";

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 text-violet-300 text-sm mb-6">
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t.title1}<br />
            <span className="text-violet-400">{t.title2}</span>
          </h2>
          <p className="text-white/50">{t.subtitle}</p>
        </div>

        <div className="card-glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Slider 1 */}
            <div>
              <label className="text-white/60 text-sm mb-3 block">
                {t.slider1} : <span className="text-white font-bold">{devis}</span>
              </label>
              <input
                type="range" min={1} max={50} value={devis}
                onChange={(e) => setDevis(+e.target.value)}
                className="w-full accent-violet-500"
              />
              <div className="flex justify-between text-white/30 text-xs mt-1">
                <span>1</span><span>50</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div>
              <label className="text-white/60 text-sm mb-3 block">
                {t.slider2} : <span className="text-white font-bold">{minutes} {t.slider2Unit}</span>
              </label>
              <input
                type="range" min={5} max={120} step={5} value={minutes}
                onChange={(e) => setMinutes(+e.target.value)}
                className="w-full accent-violet-500"
              />
              <div className="flex justify-between text-white/30 text-xs mt-1">
                <span>5 {t.slider2Unit}</span><span>2h</span>
              </div>
            </div>

            {/* Slider 3 */}
            <div>
              <label className="text-white/60 text-sm mb-3 block">
                {t.slider3} : <span className="text-white font-bold">{tauxHoraire}{currencySymbol}/h</span>
              </label>
              <input
                type="range" min={20} max={200} step={5} value={tauxHoraire}
                onChange={(e) => setTauxHoraire(+e.target.value)}
                className="w-full accent-violet-500"
              />
              <div className="flex justify-between text-white/30 text-xs mt-1">
                <span>20{currencySymbol}</span><span>200{currencySymbol}</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: t.results[0].label, value: heuresSemaine.toFixed(1) + "h", color: "#FF6B6B" },
              { label: t.results[1].label, value: heuresMois.toFixed(1) + "h", color: "#FFB800" },
              { label: t.results[2].label, value: economieArgent + currencySymbol, color: "#FF6B6B" },
              { label: t.results[3].label, value: heuresAnnee + "h", color: "#4A7FFF" },
            ].map((r) => (
              <div key={r.label} className="text-center p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-2xl md:text-3xl font-black mb-2" style={{ color: r.color }}>{r.value}</div>
                <div className="text-white/40 text-xs leading-tight">{r.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, rgba(74,127,255,0.15), rgba(123,63,228,0.2))", border: "1px solid rgba(123,63,228,0.3)" }}>
            <p className="text-white/70 text-sm mb-2">
              {t.summaryPre} <strong className="text-white">99{currencySymbol}{t.summaryUnit}</strong>, {t.summaryPost}
            </p>
            <p className="text-3xl font-black" style={{ color: "#4A7FFF" }}>
              {heuresAnnee}h {lang === "fr" ? "et" : "and"} {economieArgent * 12 - 99 * 12}{currencySymbol} {t.perYear}
            </p>
            <p className="text-white/40 text-xs mt-2">{t.roi} : {Math.round((economieArgent * 12) / (99 * 12))}x {t.roiSuffix}</p>
            <a href="/onboarding" className="btn-primary inline-block mt-4 px-8 py-3 rounded-xl font-bold text-white text-sm">
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
