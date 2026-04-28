"use client";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n";

export default function Pricing() {
  const { lang } = useLanguage();
  const t = translations[lang].pricing;
  const [annual, setAnnual] = useState(false);

  const getPrice = (monthly: number) => {
    if (annual) return Math.round(monthly * 0.8);
    return monthly;
  };

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 text-violet-300 text-sm mb-6">
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t.title1}<span className="text-violet-400">{t.title2}</span>
          </h2>
          <p className="text-white/50 text-lg mb-8">{t.subtitle}</p>

          {/* Toggle mensuel/annuel */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-2xl" style={{background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)"}}>
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${!annual ? "bg-violet-600 text-white" : "text-white/50 hover:text-white"}`}
            >
              {lang === "fr" ? "Mensuel" : "Monthly"}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${annual ? "bg-violet-600 text-white" : "text-white/50 hover:text-white"}`}
            >
              {lang === "fr" ? "Annuel" : "Annual"}
              <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">-20%</span>
            </button>
          </div>

          {annual && (
            <p className="text-green-400 text-sm mt-3">
              {lang === "fr" ? "🎉 2 mois offerts avec l'abonnement annuel" : "🎉 2 months free with annual plan"}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {t.plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 transition-all duration-300 relative ${
                plan.highlight
                  ? "bg-gradient-to-b from-violet-600/30 to-violet-900/20 border-2 border-violet-500/60 glow-violet scale-105"
                  : "card-glass neon-border"
              }`}
            >
              {"badge" in plan && plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/50 text-sm">{plan.desc}</p>
              </div>

              <div className="mb-2">
                <span className="text-5xl font-black text-white">{getPrice(Number(plan.price))}€</span>
                <span className="text-white/40 text-sm ml-2">{t.monthSuffix}</span>
              </div>
              {annual && (
                <div className="text-white/30 text-xs line-through mb-6">{plan.price}€{t.monthSuffix}</div>
              )}
              {!annual && <div className="mb-6" />}

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="text-violet-400 mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="/onboarding"
                className={`block w-full py-4 rounded-2xl font-bold text-sm text-center transition-all duration-300 ${
                  plan.highlight
                    ? "btn-primary text-white"
                    : "border border-violet-500/40 text-white/80 hover:border-violet-500/70 hover:bg-violet-500/10"
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-10">
          {t.footerText}{" "}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@myfacilia.com" target="_blank" rel="noreferrer" className="text-violet-400 hover:underline">{t.footerLink}</a>{" "}
          {t.footerSuffix}
        </p>
      </div>
    </section>
  );
}
