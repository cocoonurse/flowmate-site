"use client";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = translations[lang].faq;

  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 text-violet-300 text-sm mb-6">
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t.title1}<span className="text-violet-400">{t.title2}</span>
          </h2>
        </div>

        <div className="space-y-3">
          {t.list.map((faq, i) => (
            <div
              key={i}
              className="card-glass rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between p-6">
                <h3 className="text-white font-semibold text-sm md:text-base pr-4">{faq.q}</h3>
                <span className="text-violet-400 text-xl flex-shrink-0 transition-transform duration-300" style={{transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)'}}>
                  +
                </span>
              </div>
              {open === i && (
                <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed border-t border-violet-500/10 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
