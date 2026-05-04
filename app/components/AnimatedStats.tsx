"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

function useCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  { value: 3200,  suffix: "+", label: "Devis générés",      labelEn: "Quotes generated",   icon: "📋", color: "#4A7FFF" },
  { value: 94,    suffix: "%", label: "Clients satisfaits",  labelEn: "Satisfied clients",  icon: "⭐", color: "#9B5FFF" },
  { value: 12,    suffix: "h", label: "Gagnées par semaine", labelEn: "Saved per week",     icon: "⏱️", color: "#4A7FFF" },
  { value: 180,   suffix: "+", label: "PME accompagnées",    labelEn: "SMEs onboarded",     icon: "🏢", color: "#9B5FFF" },
];

function StatCard({ value, suffix, label, icon, color, started }: { value: number; suffix: string; label: string; icon: string; color: string; started: boolean }) {
  const count = useCounter(value, 2200, started);
  return (
    <div className="card-glass neon-border rounded-2xl p-6 text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <div className="text-4xl font-black mb-2" style={{ color }}>
        {count.toLocaleString("fr-FR")}{suffix}
      </div>
      <div className="text-white/50 text-sm">{label}</div>
    </div>
  );
}

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 text-green-400 text-sm mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            {lang === "fr" ? "En temps réel" : "Real-time"}
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            {lang === "fr" ? <>Des résultats <span className="text-shimmer">mesurables</span></> : <>Measurable <span className="text-shimmer">results</span></>}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} label={lang === "fr" ? s.label : s.labelEn} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
