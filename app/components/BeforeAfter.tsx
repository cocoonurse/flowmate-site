export default function BeforeAfter() {
  const rows = [
    { task: "Créer un devis", before: "30–60 min à la main", after: "30 secondes automatique" },
    { task: "Répondre aux emails", before: "2h/jour en moyenne", after: "Réponse auto en 1 min" },
    { task: "Rapport hebdomadaire", before: "2h chaque lundi", after: "Envoyé automatiquement" },
    { task: "Relances clients", before: "Oubliées ou fatigantes", after: "Planifiées et automatiques" },
    { task: "Retrouver un document", before: "5–15 min de recherche", after: "Instantané via MemoAI" },
    { task: "Erreurs de calcul TVA", before: "Risque élevé", after: "Calcul parfait à chaque fois" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 text-violet-300 text-sm mb-6">
            Avant / Après
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            La différence est <span className="text-violet-400">immédiate</span>
          </h2>
        </div>

        <div className="card-glass rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 gap-0 text-sm font-bold">
            <div className="p-4 text-white/40 text-center border-b border-white/5">Tâche</div>
            <div className="p-4 text-center border-b border-white/5" style={{ background: "rgba(255,80,80,0.08)", color: "#FF6B6B" }}>
              ❌ Sans FacilIA
            </div>
            <div className="p-4 text-center border-b border-white/5" style={{ background: "rgba(74,127,255,0.08)", color: "#4A7FFF" }}>
              ✅ Avec FacilIA
            </div>
          </div>

          {rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 gap-0 text-sm ${i < rows.length - 1 ? "border-b border-white/5" : ""}`}>
              <div className="p-4 text-white/60 font-medium flex items-center">{row.task}</div>
              <div className="p-4 text-center flex items-center justify-center" style={{ background: "rgba(255,80,80,0.04)", color: "#FF8888" }}>
                {row.before}
              </div>
              <div className="p-4 text-center flex items-center justify-center" style={{ background: "rgba(74,127,255,0.04)", color: "#7BB8FF" }}>
                {row.after}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
