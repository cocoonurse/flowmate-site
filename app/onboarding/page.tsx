"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const RAILWAY_URL = "https://flowmate-agent-devis-production.up.railway.app";

function OnboardingContent() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [clientId, setClientId] = useState<string | null>(null);
  const [formLink, setFormLink] = useState<string | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const error = searchParams.get("error");
    if (error) setAuthError(decodeURIComponent(error));
  }, [searchParams]);

  const [form, setForm] = useState({
    email: "",
    nom_artisan: "",
    nom_entreprise: "",
    telephone: "",
    adresse: "",
    siret: "",
    logo_url: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${RAILWAY_URL}/api/onboarding`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.client_id) {
        setClientId(data.client_id);
        setStep(2);
      } else {
        alert("Erreur : " + (data.erreur || "inconnue"));
      }
    } catch (e) {
      alert("Erreur de connexion au serveur");
    }
    setLoading(false);
  };

  const handleConnectGmail = () => {
    if (!clientId) return;
    window.location.href = `${RAILWAY_URL}/auth/gmail?client_id=${clientId}`;
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(74,127,255,0.2) 0%, transparent 60%), #0D1022" }}
    >
      <div className="max-w-xl w-full">
        {authError && (
          <div className="mb-6 p-4 rounded-xl text-sm text-red-300 border border-red-500/30" style={{ background: "rgba(239,68,68,0.1)" }}>
            ❌ Erreur OAuth : {authError}
          </div>
        )}
        {/* Header */}
        <div className="text-center mb-10">
          <img src="/logo.png" alt="FlowMate" className="w-16 h-16 rounded-2xl mx-auto mb-4" style={{ boxShadow: "0 0 30px rgba(123,63,228,0.4)" }} />
          <h1 className="text-3xl font-black text-white mb-2">Bienvenue sur FlowMate</h1>
          <p className="text-white/50">Configurez votre agent en 2 minutes</p>
        </div>

        {/* Steps */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  background: step >= s ? "linear-gradient(135deg, #4A7FFF, #7B3FE4)" : "rgba(255,255,255,0.1)",
                  color: step >= s ? "white" : "rgba(255,255,255,0.3)",
                }}
              >
                {step > s ? "✓" : s}
              </div>
              {s < 3 && <div className="w-12 h-px" style={{ background: step > s ? "#7B3FE4" : "rgba(255,255,255,0.1)" }} />}
            </div>
          ))}
        </div>

        {/* Étape 1 — Infos */}
        {step === 1 && (
          <form onSubmit={handleSubmitInfo} className="card-glass rounded-3xl p-8 space-y-4">
            <h2 className="text-xl font-bold text-white mb-6">Vos informations professionnelles</h2>

            {[
              { name: "email", label: "Email professionnel *", placeholder: "contact@votre-entreprise.fr", required: true },
              { name: "nom_artisan", label: "Votre nom complet *", placeholder: "Jean Dupont", required: true },
              { name: "nom_entreprise", label: "Nom de l'entreprise *", placeholder: "Plomberie Dupont", required: true },
              { name: "telephone", label: "Téléphone", placeholder: "06 00 00 00 00", required: false },
              { name: "adresse", label: "Adresse", placeholder: "12 rue de la Paix, 69001 Lyon", required: false },
              { name: "siret", label: "SIRET", placeholder: "123 456 789 00012", required: false },
              { name: "logo_url", label: "URL de votre logo (optionnel)", placeholder: "https://...", required: false },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-white/60 text-sm mb-1 block">{field.label}</label>
                <input
                  name={field.name}
                  type={field.name === "email" ? "email" : "text"}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full px-4 py-3 rounded-xl text-white text-sm focus:outline-none focus:border-violet-500"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)" }}
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-4 rounded-2xl font-bold text-white mt-4"
            >
              {loading ? "Enregistrement..." : "Continuer →"}
            </button>
          </form>
        )}

        {/* Étape 2 — Gmail */}
        {step === 2 && (
          <div className="card-glass rounded-3xl p-8 text-center">
            <div className="text-5xl mb-6">📧</div>
            <h2 className="text-2xl font-black text-white mb-4">Connectez votre Gmail</h2>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              FlowMate a besoin d'accès à votre Gmail pour créer les brouillons de devis automatiquement.
              <br /><br />
              Vous restez en contrôle — vous validez chaque email avant l'envoi.
            </p>

            <div className="space-y-3 text-left mb-8">
              {["Création des brouillons devis dans votre Gmail", "Création des brouillons factures", "Aucun email envoyé sans votre validation"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                  <span style={{ color: "#4A7FFF" }}>✓</span> {item}
                </div>
              ))}
            </div>

            <button
              onClick={handleConnectGmail}
              className="btn-primary w-full py-4 rounded-2xl font-bold text-white"
            >
              Connecter mon Gmail →
            </button>

            <p className="text-white/30 text-xs mt-4">
              Connexion sécurisée via Google OAuth 2.0
            </p>
          </div>
        )}

        {/* Étape 3 — Succès */}
        {step === 3 && formLink && (
          <div className="card-glass rounded-3xl p-8 text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-2xl font-black text-white mb-4">Votre agent est actif !</h2>
            <p className="text-white/60 text-sm mb-8">
              Partagez ce lien à vos clients pour recevoir des devis automatiquement.
            </p>

            <div
              className="p-4 rounded-2xl mb-6 flex items-center gap-3"
              style={{ background: "rgba(74,127,255,0.1)", border: "1px solid rgba(74,127,255,0.3)" }}
            >
              <span className="text-white text-sm flex-1 font-mono break-all">{formLink}</span>
              <button
                onClick={() => navigator.clipboard.writeText(formLink)}
                className="text-violet-400 text-xs whitespace-nowrap hover:text-white"
              >
                Copier
              </button>
            </div>

            <a href="/" className="text-white/40 text-sm hover:text-white">
              ← Retour à l'accueil
            </a>
          </div>
        )}
      </div>
    </main>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense>
      <OnboardingContent />
    </Suspense>
  );
}
