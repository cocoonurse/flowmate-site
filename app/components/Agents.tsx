"use client";

const agents = [
  {
    id: "01",
    name: "Devis Automatique",
    status: "actif",
    icon: "📋",
    description: "Votre client remplit un formulaire en ligne. En 30 secondes, un devis PDF professionnel arrive dans votre boîte mail — prêt à envoyer.",
    features: ["Formulaire client personnalisé", "Devis PDF généré par IA", "Envoyé dans votre Gmail", "Calcul TVA automatique"],
    demo: "https://tally.so/r/Bzbvre",
  },
  {
    id: "02",
    name: "Facture Automatique",
    status: "actif",
    icon: "🧾",
    description: "Convertissez un devis accepté en facture PDF en 1 clic, ou créez une facture directement. Chorus Pro inclus pour les marchés publics.",
    features: ["Conversion devis → facture 1 clic", "Facture PDF professionnelle", "Chorus Pro (marchés publics)", "Brouillon Gmail prêt à envoyer"],
    demo: "https://tally.so/r/RGZdLv",
  },
  {
    id: "03",
    name: "Rapports Automatiques",
    status: "actif",
    icon: "📊",
    description: "Digest quotidien à 18h, rapport PDF hebdomadaire le lundi, rapport mensuel le 1er. Score business /10 généré par IA, conseils et prévisions CA.",
    features: ["Rapport PDF hebdo & mensuel", "Score business /10 par IA", "Digest WhatsApp quotidien", "Prévision chiffre d'affaires"],
    demo: "/onboarding",
  },
  {
    id: "04",
    name: "MemoAI — Assistant WhatsApp",
    status: "actif",
    icon: "🧠",
    description: "Envoyez un message WhatsApp à votre assistant IA personnel. Il connaît votre CA, vos devis en attente, vos clients — et peut déclencher des relances en 1 message.",
    features: ["Répond en temps réel sur WhatsApp", "Accès à toutes vos données", "Déclenche relances & rapports", "Graphiques CA sur demande"],
    demo: "/onboarding",
  },
];

export default function Agents() {
  return (
    <section id="agents" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 text-violet-300 text-sm mb-6">
            Agents IA disponibles
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Vos agents travaillent,<br />
            <span className="text-violet-400">vous vous concentrez</span>
          </h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            Chaque agent automatise une tâche répétitive de votre quotidien.
            Vous gagnez du temps, de l'énergie et de la sérénité.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className={`card-glass rounded-3xl p-8 transition-all duration-300 group ${
                agent.status === "actif" ? "ring-1 ring-violet-500/40" : ""
              }`}
            >
              {/* Header card */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{background: 'linear-gradient(135deg, rgba(74,127,255,0.2), rgba(123,63,228,0.2)'}}>
                    {agent.icon}
                  </div>
                  <div>
                    <div className="text-white/30 text-xs font-mono mb-1">Agent {agent.id}</div>
                    <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  agent.status === "actif"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-white/5 text-white/30 border border-white/10"
                }`}>
                  {agent.status === "actif" ? "● Actif" : "Bientôt"}
                </span>
              </div>

              <p className="text-white/60 mb-6 leading-relaxed">{agent.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {agent.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                    <span style={{color: '#4A7FFF'}}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {agent.demo ? (
                <a
                  href={agent.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-3 rounded-xl text-sm font-semibold text-white text-center block"
                >
                  Essayer — 1 test gratuit →
                </a>
              ) : (
                <button className="w-full py-3 rounded-xl text-sm font-semibold text-white/30 border border-white/10 cursor-not-allowed">
                  Disponible prochainement
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
