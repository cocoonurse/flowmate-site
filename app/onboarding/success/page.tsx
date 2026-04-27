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

        {/* Activation MemoAI WhatsApp */}
        <div
          className="rounded-2xl p-6 mb-6 text-left"
          style={{ background: "linear-gradient(135deg, rgba(37,211,102,0.1), rgba(37,211,102,0.05))", border: "1px solid rgba(37,211,102,0.3)" }}
        >
          <p className="text-white font-bold mb-1">📱 Activer MemoAI — votre assistant WhatsApp</p>
          <p className="text-white/50 text-xs mb-4">Cliquez sur le bouton ci-dessous — WhatsApp s'ouvre automatiquement et votre assistant est activé en 1 clic.</p>
          <a
            href="https://wa.me/14155238886?text=join%20member-try"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white text-sm"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
          >
            <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Activer MemoAI sur WhatsApp
          </a>
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
