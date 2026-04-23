"use client";
import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="rounded-3xl p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(74,127,255,0.15) 0%, rgba(123,63,228,0.2) 100%)',
            border: '1px solid rgba(123,63,228,0.4)',
          }}
        >
          {/* Orb décoratif */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{background: 'rgba(123,63,228,0.2)'}} />

          <div className="relative z-10">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Rejoignez la liste d'attente
            </h2>
            <p className="text-white/60 mb-8">
              Les premiers inscrits bénéficient d'un mois offert et d'un accompagnement prioritaire.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center gap-3">
                <div className="text-5xl">✅</div>
                <div className="text-white font-bold text-lg">Vous êtes sur la liste !</div>
                <div className="text-white/50 text-sm">On vous contacte très vite.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-violet-500/60 text-sm"
                />
                <button
                  type="submit"
                  className="btn-primary px-8 py-4 rounded-xl font-bold text-white text-sm whitespace-nowrap"
                >
                  Je rejoins →
                </button>
              </form>
            )}

            <p className="text-white/30 text-xs mt-4">
              Aucun spam. Désabonnement en 1 clic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
