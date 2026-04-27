export default function WhyFacilIA() {
  const points = [
    {
      icon: "⚡",
      title: "30 secondes, pas 30 minutes",
      desc: "Un devis qui prenait une demi-heure est généré en 30 secondes. Chaque jour, vous récupérez du temps pour votre vrai métier.",
    },
    {
      icon: "🎯",
      title: "Zéro erreur, zéro oubli",
      desc: "L'IA ne se trompe pas dans les calculs, n'oublie pas la TVA et ne perd jamais un email client.",
    },
    {
      icon: "🌍",
      title: "Travaille pendant que vous dormez",
      desc: "Vos agents tournent 24h/24. Un client remplit le formulaire à minuit — il reçoit sa réponse à minuit.",
    },
    {
      icon: "📈",
      title: "Scalable sans recruter",
      desc: "Que vous ayez 10 ou 1000 clients, le travail est fait. Pas besoin d'embaucher une secrétaire administrative.",
    },
    {
      icon: "🔒",
      title: "Vos données restent les vôtres",
      desc: "Aucune donnée partagée. Chaque agent est configuré pour votre business uniquement.",
    },
    {
      icon: "🤝",
      title: "Accompagnement humain inclus",
      desc: "FacilIA c'est une IA + une vraie personne derrière. On configure, on ajuste, on répond à vos questions.",
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 text-violet-300 text-sm mb-6">
            Pourquoi FacilIA
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ce que l'IA change<br />
            <span className="text-violet-400">concrètement pour vous</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="card-glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
