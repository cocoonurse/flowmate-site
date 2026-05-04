"use client";
import { useLanguage } from "../contexts/LanguageContext";

export default function LogosBar() {
  const { lang } = useLanguage();
  const tools = [
    { name: "Gmail", icon: "📧" },
    { name: "Tally", icon: "📋" },
    { name: "Railway", icon: "🚂" },
    { name: "Claude AI", icon: "🤖" },
    { name: "Google Drive", icon: "☁️" },
    { name: "Stripe", icon: "💳" },
    { name: "WhatsApp", icon: "💬" },
    { name: "Notion", icon: "📝" },
  ];

  return (
    <section className="py-16 px-6 border-y border-violet-500/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-white/30 text-sm mb-10 uppercase tracking-widest">
          {lang === "fr" ? "Compatible avec vos outils du quotidien" : "Compatible with your everyday tools"}
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/50 text-sm hover:border-violet-500/30 hover:text-white/70 transition-all duration-300"
            >
              <span>{tool.icon}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
