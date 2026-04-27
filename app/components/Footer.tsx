export default function Footer() {
  return (
    <footer className="border-t border-violet-500/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold text-lg">
              <span className="text-white">Facil</span><span style={{color:"#7B3FE4"}}>IA</span>
            </div>
            <div className="text-white/40 text-xs">L'IA qui facilite votre vie</div>
          </div>
        </div>

        <div className="flex gap-8 text-sm text-white/40">
          <a href="#agents" className="hover:text-white transition-colors">Agents IA</a>
          <a href="#pricing" className="hover:text-white transition-colors">Tarifs</a>
          <a href="mailto:contact@myfacilia.com" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-white/30 text-xs">
          © 2026 FacilIA — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
