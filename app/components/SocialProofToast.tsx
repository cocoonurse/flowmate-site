"use client";
import { useState, useEffect } from "react";

const notifications = [
  { name: "Marc D.", city: "Lyon", action: "vient de s'inscrire", time: "il y a 2 min", avatar: "👷" },
  { name: "Sophie L.", city: "Genève", action: "a généré son 1er devis", time: "il y a 5 min", avatar: "👩‍💼" },
  { name: "Karim B.", city: "Bordeaux", action: "vient de s'inscrire", time: "il y a 8 min", avatar: "⚡" },
  { name: "Julie M.", city: "Paris", action: "a économisé 3h cette semaine", time: "il y a 12 min", avatar: "🎨" },
  { name: "Thomas R.", city: "Marseille", action: "vient de s'inscrire", time: "il y a 15 min", avatar: "🔧" },
  { name: "Nadia K.", city: "Bruxelles", action: "a généré 5 devis aujourd'hui", time: "il y a 20 min", avatar: "💼" },
];

export default function SocialProofToast() {
  const [current, setCurrent] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

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
  }, []);

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
