"use client";
import { useState } from "react";

export default function ROICalculator() {
  const [devis, setDevis] = useState(10);
  const [minutes, setMinutes] = useState(30);
  const [tauxHoraire, setTauxHoraire] = useState(50);

  const heuresSemaine = (devis * minutes) / 60;
  const heuresMois = heuresSemaine * 4;
  const economieArgent = Math.round(heuresMois * tauxHoraire);
  const heuresAnnee = Math.round(heuresMois * 12);

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 text-violet-300 text-sm mb-6">
            Calculateur ROI
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Combien vous coûte<br />
            <span className="text-violet-400">votre administratif ?</span>
          </h2>
          <p className="text-white/50">Calculez votre gain réel avec FlowMate</p>
        </div>

        <div className="card-glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Slider 1 */}
            <div>
              <label className="text-white/60 text-sm mb-3 block">
                Devis par semaine : <span className="text-white font-bold">{devis}</span>
              </label>
              <input
                type="range" min={1} max={50} value={devis}
                onChange={(e) => setDevis(+e.target.value)}
                className="w-full accent-violet-500"
              />
              <div className="flex justify-between text-white/30 text-xs mt-1">
                <span>1</span><span>50</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div>
              <label className="text-white/60 text-sm mb-3 block">
                Minutes par devis : <span className="text-white font-bold">{minutes} min</span>
              </label>
              <input
                type="range" min={5} max={120} step={5} value={minutes}
                onChange={(e) => setMinutes(+e.target.value)}
                className="w-full accent-violet-500"
              />
              <div className="flex justify-between text-white/30 text-xs mt-1">
                <span>5 min</span><span>2h</span>
              </div>
            </div>

            {/* Slider 3 */}
            <div>
              <label className="text-white/60 text-sm mb-3 block">
                Taux horaire : <span className="text-white font-bold">{tauxHoraire}€/h</span>
              </label>
              <input
                type="range" min={20} max={200} step={5} value={tauxHoraire}
                onChange={(e) => setTauxHoraire(+e.target.value)}
                className="w-full accent-violet-500"
              />
              <div className="flex justify-between text-white/30 text-xs mt-1">
                <span>20€</span><span>200€</span>
              </div>
            </div>
          </div>

          {/* Résultats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Heures perdues/semaine", value: heuresSemaine.toFixed(1) + "h", color: "#FF6B6B" },
              { label: "Heures perdues/mois", value: heuresMois.toFixed(1) + "h", color: "#FFB800" },
              { label: "Coût mensuel", value: economieArgent + "€", color: "#FF6B6B" },
              { label: "Heures récupérées/an", value: heuresAnnee + "h", color: "#4A7FFF" },
            ].map((r) => (
              <div key={r.label} className="text-center p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-2xl md:text-3xl font-black mb-2" style={{ color: r.color }}>{r.value}</div>
                <div className="text-white/40 text-xs leading-tight">{r.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, rgba(74,127,255,0.15), rgba(123,63,228,0.2))", border: "1px solid rgba(123,63,228,0.3)" }}>
            <p className="text-white/70 text-sm mb-2">Avec FlowMate à <strong className="text-white">99€/mois</strong>, vous récupérez</p>
            <p className="text-3xl font-black" style={{ color: "#4A7FFF" }}>
              {heuresAnnee}h et {economieArgent * 12 - 99 * 12}€ par an
            </p>
            <p className="text-white/40 text-xs mt-2">ROI moyen : {Math.round((economieArgent * 12) / (99 * 12))}x votre investissement</p>
            <a href="#pricing" className="btn-primary inline-block mt-4 px-8 py-3 rounded-xl font-bold text-white text-sm">
              Commencer maintenant →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
