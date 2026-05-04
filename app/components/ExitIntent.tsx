"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n";

export default function ExitIntent() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].exitIntent;

  useEffect(() => {
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) setVisible(true);
    };
    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, [dismissed]);

  const dismiss = () => { setVisible(false); setDismissed(true); };
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("https://flowmate-agent-devis-production.up.railway.app/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, lang }),
      });
    } catch (_) {}
    setDone(true);
    setTimeout(dismiss, 2000);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}>
      <div className="relative max-w-md w-full rounded-3xl p-8 text-center" style={{ background: "linear-gradient(135deg, #0D1022, #1a1040)", border: "1px solid rgba(123,63,228,0.5)", boxShadow: "0 0 60px rgba(123,63,228,0.3)" }}>
        <button onClick={dismiss} className="absolute top-4 right-4 text-white/30 hover:text-white text-xl">✕</button>

        {done ? (
          <div className="py-4">
            <div className="text-5xl mb-4">🎉</div>
            <div className="text-white text-xl font-bold">{t.doneTitle}</div>
            <div className="text-white/50 text-sm mt-2">{t.doneSub}</div>
          </div>
        ) : (
          <>
            <div className="text-4xl mb-4">⏳</div>
            <h3 className="text-2xl font-black text-white mb-2">{t.title}</h3>
            <p className="text-white/60 text-sm mb-6">
              {t.desc1} <strong className="text-white">{t.desc2}</strong>.<br />
              {t.desc3}
            </p>
            <form onSubmit={submit} className="flex flex-col gap-3">
              <input
                type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholder}
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-violet-500"
              />
              <button type="submit" className="btn-primary py-3 rounded-xl font-bold text-white text-sm">
                {t.cta}
              </button>
            </form>
            <button onClick={dismiss} className="text-white/30 text-xs mt-4 hover:text-white/50">
              {t.dismiss}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
