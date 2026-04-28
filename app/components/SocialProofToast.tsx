"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n";

export default function SocialProofToast() {
  const [current, setCurrent] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();
  const notifications = translations[lang].socialProof.notifications;

  useEffect(() => {
    let idx = 0;
    const show = () => {
      setCurrent(idx % notifications.length);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
      idx++;
    };

    const timer = setTimeout(() => {
      show();
      const interval = setInterval(show, 12000);
      return () => clearInterval(interval);
    }, 5000);

    return () => clearTimeout(timer);
  }, [notifications.length]);

  if (current === null) return null;
  const notif = notifications[current];

  return (
    <div
      className="fixed bottom-24 left-6 z-50 transition-all duration-500"
      style={{
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm max-w-xs"
        style={{
          background: "rgba(13,16,34,0.95)",
          border: "1px solid rgba(123,63,228,0.4)",
          boxShadow: "0 0 20px rgba(123,63,228,0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-xl flex-shrink-0">
          {notif.avatar}
        </div>
        <div>
          <div className="text-white font-semibold">{notif.name} · {notif.city}</div>
          <div className="text-white/50 text-xs">{notif.action} · {notif.time}</div>
        </div>
        <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
      </div>
    </div>
  );
}
