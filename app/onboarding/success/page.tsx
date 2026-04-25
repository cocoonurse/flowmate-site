"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const formLink      = searchParams.get("form_link");
  const dashboardLink = searchParams.get("dashboard_link");
  const clientEmail   = searchParams.get("email");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (formLink) {
      navigator.clipboard.writeText(formLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(74,127,255,0.2) 0%, transparent 60%), #0D1022" }}
    >
      <div className="max-w-lg w-full text-center">
        <div className="text-7xl mb-6">🎉</div>

        <h1 className="text-4xl font-black text-white mb-4">Votre agent est actif !</h1>
        <p className="text-white/50 mb-10">
          {clientEmail && `Compte créé pour ${clientEmail}. `}
          Partagez ce lien à vos clients — ils remplissent, vous recevez le devis automatiquement.
        </p>

        {formLink && (
          <div
            className="rounded-2xl p-6 mb-6"
            style={{ background: "linear-gradient(135deg, rgba(74,127,255,0.15), rgba(123,63,228,0.2))", border: "1px solid rgba(123,63,228,0.4)" }}
          >
            <p className="text-white/40 text-xs mb-2 uppercase tracking-widest">Votre lien formulaire</p>
            <p className="text-white font-mono text-sm mb-4 break-all">{formLink}</p>
            <button
              onClick={handleCopy}
              className="btn-primary px-6 py-3 rounded-xl font-bold text-white text-sm"
            >
              {copied ? "✓ Copié !" : "Copier le lien"}
            </button>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: "📱", text: "Envoyer par WhatsApp" },
            { icon: "📧", text: "Envoyer par email" },
            { icon: "🌐", text: "Mettre sur votre site" },
          ].map((item) => (
            <div key={item.text} className="card-glass rounded-2xl p-4 text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-white/50 text-xs">{item.text}</div>
            </div>
          ))}
        </div>

        {dashboardLink && (
          <a href={dashboardLink}
            className="block w-full rounded-xl py-3 text-sm font-bold text-white mb-4"
            style={{ background: "linear-gradient(135deg, rgba(74,127,255,0.3), rgba(123,63,228,0.3))", border: "1px solid rgba(123,63,228,0.4)" }}>
            📊 Accéder à mon tableau de bord →
          </a>
        )}

        <a href="/" className="text-white/30 text-sm hover:text-white">
          ← Retour à l'accueil FlowMate
        </a>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}
