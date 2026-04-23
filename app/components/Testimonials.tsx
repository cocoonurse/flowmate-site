const testimonials = [
  {
    name: "Marc Dubois",
    role: "Plombier indépendant, Lyon",
    avatar: "👷",
    text: "Avant FlowMate, je passais 2h par soir sur mes devis. Maintenant c'est automatique. J'ai gagné 10 heures par semaine et mes clients reçoivent leur devis en 30 secondes.",
    stars: 5,
  },
  {
    name: "Sophie Laurent",
    role: "Gérante PME BTP, Genève",
    avatar: "👩‍💼",
    text: "Le répondeur email a changé ma vie. Je ne rate plus aucune demande client même quand je suis sur un chantier. Mon CA a augmenté de 30% en 3 mois.",
    stars: 5,
  },
  {
    name: "Karim Benali",
    role: "Électricien, Bordeaux",
    avatar: "⚡",
    text: "J'étais sceptique sur l'IA mais Alicia m'a accompagné pas à pas. Maintenant mes devis sont plus professionnels qu'avant et ça prend 30 secondes.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 text-violet-300 text-sm mb-6">
            Témoignages
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ils ont arrêté de<br />
            <span className="text-violet-400">perdre leur temps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-glass rounded-3xl p-8 flex flex-col gap-6">
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} style={{ color: '#FFB800' }}>★</span>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
