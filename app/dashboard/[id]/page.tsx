"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const API = "https://flowmate-agent-devis-production.up.railway.app";

const STATUT_STYLE: Record<string, string> = {
  envoye:   "bg-blue-500/20 text-blue-300 border-blue-500/40",
  relance:  "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
  accepte:  "bg-green-500/20 text-green-300 border-green-500/40",
  refuse:   "bg-red-500/20 text-red-300 border-red-500/40",
  converti: "bg-purple-500/20 text-purple-300 border-purple-500/40",
  envoyee:  "bg-green-500/20 text-green-300 border-green-500/40",
};

const STATUT_LABEL: Record<string, string> = {
  envoye: "Envoyé", relance: "Relancé", accepte: "Accepté",
  refuse: "Refusé", converti: "Converti", envoyee: "Envoyée",
};

function Badge({ statut }: { statut: string }) {
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border ${STATUT_STYLE[statut] || "bg-gray-500/20 text-gray-300 border-gray-500/40"}`}>
      {STATUT_LABEL[statut] || statut}
    </span>
  );
}

function fmt(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" });
}

export default function Dashboard() {
  const { id } = useParams<{ id: string }>();
  const [data, setData]       = useState<any>(null);
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);

  const load = () => {
    setLoading(true);
    fetch(`${API}/api/dashboard/${id}`)
      .then(r => r.json())
      .then(d => { if (d.erreur) setError(d.erreur); else setData(d); })
      .catch(() => setError("Impossible de charger les données."))
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, [id]);

  const majStatut = async (devisId: string, statut: string) => {
    setUpdating(devisId);
    await fetch(`${API}/api/devis/${devisId}/statut`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ statut, artisan_id: id }),
    });
    setUpdating(null);
    load();
  };

  if (loading) return <div style={{ background: "#0D1022", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8" }}>Chargement...</div>;
  if (error)   return <div style={{ background: "#0D1022", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#f87171" }}>{error}</div>;
  if (!data)   return null;

  const { artisan, devis, factures } = data;
  const ca = factures.reduce((s: number, f: any) => s + (f.total_ttc || 0), 0);

  return (
    <div style={{ background: "#0D1022", minHeight: "100vh", color: "white", fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>FlowMate</span>
          <span style={{ color: "#94a3b8", marginLeft: 12, fontSize: "0.9rem" }}>Tableau de bord — {artisan.nom_entreprise}</span>
        </div>
        <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>{artisan.gmail_email}</span>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
        {/* KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 40 }}>
          {[
            { label: "Devis envoyés",  value: devis.length },
            { label: "Devis acceptés", value: devis.filter((d: any) => d.statut === "accepte" || d.statut === "converti").length },
            { label: "En attente",     value: devis.filter((d: any) => d.statut === "envoye" || d.statut === "relance").length },
            { label: "CA facturé",     value: `${ca.toLocaleString("fr-FR")} €` },
          ].map(k => (
            <div key={k.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ color: "#94a3b8", fontSize: "0.75rem", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{k.label}</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 700 }}>{k.value}</div>
            </div>
          ))}
        </div>

        {/* Devis */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 16 }}>📋 Devis ({devis.length})</h2>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", color: "#6b7280" }}>
                  {["Numéro","Client","Travaux","Total TTC","Statut","Date","Actions"].map(h => (
                    <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontWeight: 500 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {devis.length === 0 && (
                  <tr><td colSpan={7} style={{ padding: "24px 16px", color: "#6b7280", textAlign: "center" }}>Aucun devis pour l'instant</td></tr>
                )}
                {devis.map((d: any, i: number) => (
                  <tr key={d.id} style={{ borderBottom: i < devis.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <td style={{ padding: "12px 16px", fontFamily: "monospace", color: "#a78bfa" }}>{d.numero}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <div>{d.nom_client_final}</div>
                      <div style={{ color: "#6b7280", fontSize: "0.75rem" }}>{d.email_client_final}</div>
                    </td>
                    <td style={{ padding: "12px 16px", color: "#94a3b8" }}>{d.type_travaux}</td>
                    <td style={{ padding: "12px 16px", fontWeight: 600 }}>{d.total_ttc ? `${Number(d.total_ttc).toLocaleString("fr-FR")} €` : "—"}</td>
                    <td style={{ padding: "12px 16px" }}><Badge statut={d.statut} /></td>
                    <td style={{ padding: "12px 16px", color: "#6b7280", fontSize: "0.8rem" }}>{fmt(d.created_at)}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {d.statut === "envoye" && (
                          <>
                            <button onClick={() => majStatut(d.id, "accepte")} disabled={!!updating}
                              style={{ fontSize: "0.75rem", padding: "4px 10px", borderRadius: 6, border: "1px solid #22c55e44", background: "#22c55e22", color: "#86efac", cursor: "pointer" }}>
                              ✓ Accepté
                            </button>
                            <button onClick={() => majStatut(d.id, "refuse")} disabled={!!updating}
                              style={{ fontSize: "0.75rem", padding: "4px 10px", borderRadius: 6, border: "1px solid #ef444444", background: "#ef444422", color: "#fca5a5", cursor: "pointer" }}>
                              ✗ Refusé
                            </button>
                          </>
                        )}
                        {(d.statut === "envoye" || d.statut === "accepte") && d.convert_token && (
                          <a href={`${API}/convert/${d.convert_token}`} target="_blank" rel="noreferrer"
                            style={{ fontSize: "0.75rem", padding: "4px 10px", borderRadius: 6, border: "1px solid #a78bfa44", background: "#a78bfa22", color: "#c4b5fd", cursor: "pointer", textDecoration: "none" }}>
                            → Facture
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Factures */}
        <div>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 16 }}>🧾 Factures ({factures.length})</h2>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", color: "#6b7280" }}>
                  {["Numéro","Client","Total TTC","Devis lié","Statut","Date"].map(h => (
                    <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontWeight: 500 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {factures.length === 0 && (
                  <tr><td colSpan={6} style={{ padding: "24px 16px", color: "#6b7280", textAlign: "center" }}>Aucune facture pour l'instant</td></tr>
                )}
                {factures.map((f: any, i: number) => (
                  <tr key={f.id} style={{ borderBottom: i < factures.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <td style={{ padding: "12px 16px", fontFamily: "monospace", color: "#34d399" }}>{f.numero}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <div>{f.nom_client_final}</div>
                      <div style={{ color: "#6b7280", fontSize: "0.75rem" }}>{f.email_client_final}</div>
                    </td>
                    <td style={{ padding: "12px 16px", fontWeight: 600 }}>{f.total_ttc ? `${Number(f.total_ttc).toLocaleString("fr-FR")} €` : "—"}</td>
                    <td style={{ padding: "12px 16px", color: "#94a3b8", fontFamily: "monospace", fontSize: "0.8rem" }}>{f.numero_devis || "—"}</td>
                    <td style={{ padding: "12px 16px" }}><Badge statut={f.statut} /></td>
                    <td style={{ padding: "12px 16px", color: "#6b7280", fontSize: "0.8rem" }}>{fmt(f.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
