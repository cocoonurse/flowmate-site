import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — FacilIA",
  description: "Mentions légales, politique de confidentialité et conditions générales de vente de FacilIA.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0D1022" }}>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm mb-12 transition-colors">
          ← Retour au site
        </Link>

        <h1 className="text-4xl font-black text-white mb-2">Mentions légales</h1>
        <p className="text-white/40 text-sm mb-16">Dernière mise à jour : mai 2026</p>

        <div className="space-y-16 text-white/70 leading-relaxed">

          {/* Éditeur */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">1. Éditeur du site</h2>
            <div className="space-y-2">
              <p><span className="text-white/40">Site :</span> myfacilia.com</p>
              <p><span className="text-white/40">Éditeur :</span> Alicia Carli, auto-entrepreneur</p>
              <p><span className="text-white/40">Activité :</span> Services informatiques, développement de logiciels</p>
              <p><span className="text-white/40">Email :</span> contact@myfacilia.com</p>
              <p><span className="text-white/40">Directrice de publication :</span> Alicia Carli</p>
            </div>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">2. Hébergement</h2>
            <div className="space-y-2">
              <p><span className="text-white/40">Hébergeur site :</span> Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
              <p><span className="text-white/40">Hébergeur backend :</span> Railway Corp., San Francisco, États-Unis</p>
              <p><span className="text-white/40">Base de données :</span> Supabase Inc. — données hébergées en Europe (Frankfurt)</p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus du site myfacilia.com (textes, images, logos, code) est protégé par le droit d&apos;auteur. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
            </p>
          </section>

          {/* Politique de confidentialité */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">4. Politique de confidentialité (RGPD)</h2>

            <h3 className="text-lg font-semibold text-white mb-3">Données collectées</h3>
            <p className="mb-4">
              Dans le cadre de nos services, nous collectons les données suivantes : nom, email, numéro de téléphone, SIRET, adresse postale, et données d&apos;utilisation (devis et factures générés). Ces données sont nécessaires à la fourniture du service.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">Finalités du traitement</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Fourniture des agents IA (génération de devis, factures, rapports)</li>
              <li>Communication avec l&apos;utilisateur (email, WhatsApp)</li>
              <li>Facturation et suivi commercial</li>
              <li>Amélioration du service</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">Durée de conservation</h3>
            <p className="mb-4">Les données sont conservées 3 ans après la fin du contrat, conformément aux obligations légales comptables françaises.</p>

            <h3 className="text-lg font-semibold text-white mb-3">Vos droits</h3>
            <p className="mb-4">
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de portabilité et d&apos;opposition. Pour exercer ces droits : <a href="mailto:contact@myfacilia.com" className="text-violet-400 hover:underline">contact@myfacilia.com</a>
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">Cookies</h3>
            <p>Le site utilise uniquement des cookies techniques nécessaires au fonctionnement (langue, session). Aucun cookie publicitaire ou de tracking tiers n&apos;est utilisé.</p>
          </section>

          {/* CGV */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">5. Conditions Générales de Vente</h2>

            <h3 className="text-lg font-semibold text-white mb-3">Objet</h3>
            <p className="mb-4">
              FacilIA propose des agents IA en tant que service (SaaS) pour automatiser les tâches administratives des PME et artisans : génération de devis, factures, rapports et assistant WhatsApp.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">Prix et paiement</h3>
            <p className="mb-4">
              Les tarifs sont affichés TTC sur la page de tarification. Le paiement est mensuel ou annuel, par carte bancaire via LemonSqueezy (Merchant of Record). La TVA applicable est celle en vigueur dans le pays de l&apos;acheteur.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">Droit de rétractation — 30 jours</h3>
            <p className="mb-4">
              Conformément à l&apos;article L221-18 du Code de la consommation, vous disposez d&apos;un délai de <strong className="text-white">30 jours</strong> à compter de la souscription pour exercer votre droit de rétractation, sans justification ni pénalité. Le remboursement est effectué sous 14 jours. Pour exercer ce droit : <a href="mailto:contact@myfacilia.com" className="text-violet-400 hover:underline">contact@myfacilia.com</a>
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">Résiliation</h3>
            <p className="mb-4">
              L&apos;abonnement peut être résilié à tout moment depuis votre espace client, sans frais ni engagement minimum. La résiliation prend effet à la fin de la période en cours.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">Responsabilité</h3>
            <p className="mb-4">
              FacilIA est un outil d&apos;assistance. Les documents générés (devis, factures) restent sous la responsabilité de l&apos;utilisateur, qui en assure la validation finale avant envoi au client.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">Droit applicable</h3>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux français sont seuls compétents.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">6. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales :{" "}
              <a href="mailto:contact@myfacilia.com" className="text-violet-400 hover:underline">
                contact@myfacilia.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
