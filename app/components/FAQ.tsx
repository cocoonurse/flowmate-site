"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Est-ce que j'ai besoin de compétences techniques ?",
    a: "Non. FacilIA s'occupe de tout. Vous n'avez rien à installer, rien à configurer. On fait tout pour vous et on vous forme à utiliser vos agents.",
  },
  {
    q: "Combien de temps pour mettre en place un agent ?",
    a: "Entre 24 et 48h selon l'agent. On s'occupe de l'installation complète, vous recevez votre agent clé en main.",
  },
  {
    q: "Est-ce que mes données sont en sécurité ?",
    a: "Oui. Vos données ne sont jamais partagées. Chaque agent est configuré exclusivement pour votre entreprise et vos accès Gmail/Google restent sous votre contrôle.",
  },
  {
    q: "Puis-je changer de formule à tout moment ?",
    a: "Oui. Vous pouvez upgrader ou résilier à tout moment, sans frais. Aucun engagement minimum.",
  },
  {
    q: "Les agents fonctionnent-ils avec mes outils actuels ?",
    a: "Oui. FacilIA est compatible avec Gmail, Google Drive, Tally, Notion, WhatsApp Business et bien d'autres. On s'adapte à vos outils existants.",
  },
  {
    q: "Que se passe-t-il si l'agent fait une erreur ?",
    a: "Tous les documents générés passent par votre boîte mail avant d'être envoyés au client. Vous gardez le contrôle et la validation finale.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 text-violet-300 text-sm mb-6">
            Questions fréquentes
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Vous avez des <span className="text-violet-400">questions ?</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="card-glass rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between p-6">
                <h3 className="text-white font-semibold text-sm md:text-base pr-4">{faq.q}</h3>
                <span className="text-violet-400 text-xl flex-shrink-0 transition-transform duration-300" style={{transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)'}}>
                  +
                </span>
              </div>
              {open === i && (
                <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed border-t border-violet-500/10 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
