"use client";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n";

export default function Testimonials() {
  const { lang } = useLanguage();
  const t = translations[lang].testimonials;

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 text-violet-300 text-sm mb-6">
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t.title1}<br />
            <span className="text-violet-400">{t.title2}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.list.map((testimonial) => (
            <div key={testimonial.name} className="card-glass rounded-3xl p-8 flex flex-col gap-6">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <span key={i} style={{ color: '#FFB800' }}>★</span>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed flex-1">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-white/40 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
