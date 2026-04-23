"use client";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 hover:scale-110"
      style={{
        background: "linear-gradient(135deg, #4A7FFF, #7B3FE4)",
        boxShadow: "0 0 25px rgba(123,63,228,0.5)",
      }}
      aria-label="Retour en haut"
    >
      ↑
    </button>
  );
}
