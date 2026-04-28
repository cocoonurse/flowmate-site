const fr = {
  // Navbar
  navbar: {
    links: [
      { href: "#agents", label: "Agents IA" },
      { href: "#how", label: "Comment ça marche" },
      { href: "#pricing", label: "Tarifs" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Commencer →",
  },

  // Hero
  hero: {
    headline1: "L'IA qui ",
    headline2: "libère votre temps",
    sub1: "Vos devis, emails, rapports et plus encore — générés automatiquement.",
    sub2: "Conçu pour les PME et artisans qui veulent arrêter de perdre du temps sur l'administratif.",
    cta1: "Essayer gratuitement →",
    cta2: "Voir les agents IA",
    stats: [
      { value: "90%", label: "de temps gagné" },
      { value: "0€", label: "de frais cachés" },
      { value: "24/7", label: "agents actifs" },
    ],
  },

  // WhyFacilIA
  why: {
    badge: "Pourquoi",
    title1: "Ce que l'IA change",
    title2: "concrètement pour vous",
    points: [
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
    ],
  },

  // BeforeAfter
  beforeAfter: {
    badge: "Avant / Après",
    title1: "La différence est ",
    title2: "immédiate",
    taskHeader: "Tâche",
    withoutHeader: "❌ Sans FacilIA",
    withHeader: "✅ Avec FacilIA",
    rows: [
      { task: "Créer un devis", before: "30–60 min à la main", after: "30 secondes automatique" },
      { task: "Répondre aux emails", before: "2h/jour en moyenne", after: "Réponse auto en 1 min" },
      { task: "Rapport hebdomadaire", before: "2h chaque lundi", after: "Envoyé automatiquement" },
      { task: "Relances clients", before: "Oubliées ou fatigantes", after: "Planifiées et automatiques" },
      { task: "Retrouver un document", before: "5–15 min de recherche", after: "Instantané via MemoAI" },
      { task: "Erreurs de calcul TVA", before: "Risque élevé", after: "Calcul parfait à chaque fois" },
    ],
  },

  // Agents
  agents: {
    badge: "Agents IA disponibles",
    title1: "Vos agents travaillent,",
    title2: "vous vous concentrez",
    subtitle: "Chaque agent automatise une tâche répétitive de votre quotidien. Vous gagnez du temps, de l'énergie et de la sérénité.",
    statusActive: "● Actif",
    statusSoon: "Bientôt",
    agentLabel: "Agent",
    ctaActive: "Essayer — 1 test gratuit →",
    ctaSoon: "Disponible prochainement",
    list: [
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
    ],
  },

  // HowItWorks
  how: {
    badge: "Comment ça marche",
    title: "Simple comme ",
    titleHighlight: "bonjour",
    subtitle: "Aucune compétence technique requise.",
    steps: [
      { n: "1", title: "Votre client remplit", desc: "Un formulaire simple et rapide depuis son téléphone ou ordinateur. Aucune installation requise.", icon: "📱" },
      { n: "2", title: "L'IA travaille", desc: "En quelques secondes, notre agent analyse les informations et génère un document professionnel.", icon: "⚡" },
      { n: "3", title: "Vous recevez", desc: "Le résultat arrive directement dans votre boîte mail, prêt à envoyer ou à valider en 1 clic.", icon: "📩" },
      { n: "4", title: "Vous gagnez du temps", desc: "Ce qui prenait 30 minutes prend désormais 30 secondes. Chaque jour, à l'infini.", icon: "🚀" },
    ],
  },

  // ROICalculator
  roi: {
    badge: "Calculateur ROI",
    title1: "Combien vous coûte",
    title2: "votre administratif ?",
    subtitle: "Calculez votre gain réel avec FacilIA",
    slider1: "Devis par semaine",
    slider2: "Minutes par devis",
    slider2Unit: "min",
    slider3: "Taux horaire",
    results: [
      { label: "Heures perdues/semaine" },
      { label: "Heures perdues/mois" },
      { label: "Coût mensuel" },
      { label: "Heures récupérées/an" },
    ],
    summaryPre: "Avec FacilIA à",
    summaryPost: "vous récupérez",
    summaryUnit: "/mois",
    perYear: "par an",
    roi: "ROI moyen",
    roiSuffix: "x votre investissement",
    cta: "Commencer maintenant →",
  },

  // Testimonials
  testimonials: {
    badge: "Témoignages",
    title1: "Ils ont arrêté de",
    title2: "perdre leur temps",
    list: [
      {
        name: "Marc Dubois",
        role: "Plombier indépendant, Lyon",
        avatar: "👷",
        text: "Avant FacilIA, je passais 2h par soir sur mes devis. Maintenant c'est automatique. J'ai gagné 10 heures par semaine et mes clients reçoivent leur devis en 30 secondes.",
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
    ],
  },

  // Pricing
  pricing: {
    badge: "Tarifs simples et transparents",
    title1: "Choisissez votre ",
    title2: "formule",
    subtitle: "Sans engagement. Résiliable à tout moment.",
    monthSuffix: "/mois",
    footerText: "Vous avez des besoins spécifiques ?",
    footerLink: "Contactez-nous",
    footerSuffix: "pour un devis sur mesure.",
    plans: [
      {
        name: "Starter",
        price: "49",
        desc: "Parfait pour débuter l'automatisation",
        features: [
          "1 agent IA au choix",
          "Jusqu'à 50 documents/mois",
          "Support par email",
          "Mises à jour incluses",
        ],
        cta: "Commencer",
        highlight: false,
      },
      {
        name: "Pro",
        price: "99",
        desc: "Pour les PME qui veulent aller plus loin",
        features: [
          "3 agents IA inclus",
          "Documents illimités",
          "Support prioritaire",
          "Suivi personnalisé 1h/mois",
          "Personnalisation des agents",
          "Mises à jour incluses",
        ],
        cta: "Choisir Pro",
        highlight: true,
        badge: "Le plus populaire",
      },
      {
        name: "Business",
        price: "199",
        desc: "Solution complète avec accompagnement",
        features: [
          "Tous les agents IA (4)",
          "Documents illimités",
          "Support dédié 7j/7",
          "Suivi mensuel 3h",
          "Intégration sur mesure",
          "Formation équipe incluse",
          "Accès agents en avant-première",
        ],
        cta: "Contacter FacilIA",
        highlight: false,
      },
    ],
  },

  // FAQ
  faq: {
    badge: "Questions fréquentes",
    title1: "Vous avez des ",
    title2: "questions ?",
    list: [
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
    ],
  },

  // WaitlistForm
  waitlist: {
    title: "Rejoignez la liste d'attente",
    subtitle: "Les premiers inscrits bénéficient d'un mois offert et d'un accompagnement prioritaire.",
    placeholder: "votre@email.com",
    cta: "Je rejoins →",
    successTitle: "Vous êtes sur la liste !",
    successSub: "On vous contacte très vite.",
    noSpam: "Aucun spam. Désabonnement en 1 clic.",
  },

  // Contact
  contact: {
    badge: "Contactez-nous",
    title: "Une question ? On vous répond",
    subtitle: "Notre équipe est disponible pour vous accompagner dans la mise en place de vos agents IA.",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
  },

  // Footer
  footer: {
    tagline: "L'IA qui facilite votre vie",
    links: [
      { href: "#agents", label: "Agents IA" },
      { href: "#pricing", label: "Tarifs" },
      { href: "mailto:contact@myfacilia.com", label: "Contact" },
    ],
    copyright: "© 2026 FacilIA — Tous droits réservés",
  },

  // LiveDemo
  liveDemo: {
    badge: "● Démo live — Agent 1 actif",
    title1: "Testez l'agent devis",
    title2: "maintenant, gratuitement",
    subtitle: "Remplissez le formulaire ci-dessous. En 30 secondes, vous recevrez un vrai devis PDF dans votre boîte mail.",
    warning: "⚠️ 1 test gratuit — l'agent illimité est inclus dans l'abonnement",
    iframeTitle: "Démo Agent Devis FacilIA",
    iframeLabel: "tally.so/r/Bzbvre — Devis gratuit FacilIA",
  },

  // ExitIntent
  exitIntent: {
    doneTitle: "C'est noté !",
    doneSub: "On vous offre 1 mois. À très vite !",
    title: "Attendez — cadeau !",
    desc1: "Les visiteurs qui partent maintenant ratent",
    desc2: "1 mois offert",
    desc3: "Laissez votre email pour en profiter.",
    placeholder: "votre@email.com",
    cta: "Je veux mon mois offert →",
    dismiss: "Non merci, je préfère perdre du temps",
  },

  // SocialProofToast
  socialProof: {
    notifications: [
      { name: "Marc D.", city: "Lyon", action: "vient de s'inscrire", time: "il y a 2 min", avatar: "👷" },
      { name: "Sophie L.", city: "Genève", action: "a généré son 1er devis", time: "il y a 5 min", avatar: "👩‍💼" },
      { name: "Karim B.", city: "Bordeaux", action: "vient de s'inscrire", time: "il y a 8 min", avatar: "⚡" },
      { name: "Julie M.", city: "Paris", action: "a économisé 3h cette semaine", time: "il y a 12 min", avatar: "🎨" },
      { name: "Thomas R.", city: "Marseille", action: "vient de s'inscrire", time: "il y a 15 min", avatar: "🔧" },
      { name: "Nadia K.", city: "Bruxelles", action: "a généré 5 devis aujourd'hui", time: "il y a 20 min", avatar: "💼" },
    ],
  },
};

export default fr;
