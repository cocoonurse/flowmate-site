"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MerciPage() {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(74,127,255,0.2) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(123,63,228,0.2) 0%, transparent 60%), #0D1022",
      }}
    >
      <div className="max-w-2xl w-full text-center">
        {/* Icône animée */}
        <div className="text-7xl mb-8 animate-bounce">📩</div>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Votre devis arrive !
        </h1>

        {/* Countdown */}
        <div className="inline-flex items-center gap-3 bg-violet-500/10 border border-violet-500/30 rounded-2xl px-6 py-4 mb-8">
          <div
            className="text-4xl font-black"
            style={{ color: seconds > 10 ? "#4A7FFF" : "#FF6B6B" }}
          >
            {seconds}s
          </div>
          <div className="text-white/60 text-sm text-left">
            <div className="text-white font-semibold">Génération en cours...</div>
            <div>Vérifiez votre boîte mail dans {seconds} secondes</div>
          </div>
        </div>

        <p className="text-white/50 mb-12 text-lg">
          Un devis PDF professionnel vient d'être généré par l'IA et envoyé dans votre boîte mail.
          <br />C'est exactement ce que vos clients recevront — automatiquement, à chaque demande.
        </p>

        {/* CTA principal */}
        <div
          className="rounded-3xl p-8 mb-6 text-left"
          style={{
            background: "linear-gradient(135deg, rgba(74,127,255,0.15), rgba(123,63,228,0.2))",
            border: "1px solid rgba(123,63,228,0.4)",
          }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="text-3xl">🚀</div>
            <div>
              <h2 className="text-xl font-black text-white mb-2">
                Vous avez vu comment ça marche.
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Maintenant imaginez ça pour <strong className="text-white">tous vos clients</strong>,
                automatiquement, à l'infini — plus jamais un devis à la main.
                Ajoutez le répondeur email, les rapports hebdomadaires, MemoAI...
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
            {[
              "Devis illimités automatiques",
              "Votre logo et vos couleurs",
              "Connecté à votre Gmail",
              "Agents email + rapports + MemoAI",
              "Accompagnement personnalisé",
              "Sans engagement",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-white/70">
                <span style={{ color: "#4A7FFF" }}>✓</span> {f}
              </div>
            ))}
          </div>

          <a
            href="/#pricing"
            className="btn-primary w-full py-4 rounded-2xl font-black text-white text-lg text-center block"
            style={{ fontSize: "1.1rem" }}
          >
            Je veux l'agent pour tous mes clients →
          </a>
        </div>

        {/* Option secondaire */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl border border-white/20 text-white/50 text-sm hover:border-violet-500/40 hover:text-white/70 transition-all"
          >
            ← Retour à l'accueil
          </Link>
          <a
            href="mailto:contact@flowmate.ai"
            className="px-6 py-3 rounded-xl border border-white/20 text-white/50 text-sm hover:border-violet-500/40 hover:text-white/70 transition-all"
          >
            Poser une question →
          </a>
        </div>
      </div>
    </main>
  );
}
