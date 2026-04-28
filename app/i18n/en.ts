const en = {
  // Navbar
  navbar: {
    links: [
      { href: "#agents", label: "AI Agents" },
      { href: "#how", label: "How it works" },
      { href: "#pricing", label: "Pricing" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Get started →",
  },

  // Hero
  hero: {
    headline1: "The AI that ",
    headline2: "frees your time",
    sub1: "Your quotes, emails, reports and more — generated automatically.",
    sub2: "Built for SMEs and tradespeople who want to stop wasting time on admin work.",
    cta1: "Try for free →",
    cta2: "See AI agents",
    stats: [
      { value: "90%", label: "time saved" },
      { value: "€0", label: "hidden fees" },
      { value: "24/7", label: "active agents" },
    ],
  },

  // WhyFacilIA
  why: {
    badge: "Why",
    title1: "What AI concretely",
    title2: "changes for you",
    points: [
      {
        icon: "⚡",
        title: "30 seconds, not 30 minutes",
        desc: "A quote that used to take half an hour is generated in 30 seconds. Every day, you reclaim time for your real work.",
      },
      {
        icon: "🎯",
        title: "Zero errors, zero oversights",
        desc: "The AI never miscalculates, never forgets VAT, and never loses a client email.",
      },
      {
        icon: "🌍",
        title: "Works while you sleep",
        desc: "Your agents run 24/7. A client fills in the form at midnight — they get their reply at midnight.",
      },
      {
        icon: "📈",
        title: "Scalable without hiring",
        desc: "Whether you have 10 or 1,000 clients, the work gets done. No need to hire an admin assistant.",
      },
      {
        icon: "🔒",
        title: "Your data stays yours",
        desc: "No data is shared. Each agent is configured exclusively for your business.",
      },
      {
        icon: "🤝",
        title: "Human support included",
        desc: "FacilIA is AI + a real person behind it. We configure, adjust, and answer your questions.",
      },
    ],
  },

  // BeforeAfter
  beforeAfter: {
    badge: "Before / After",
    title1: "The difference is ",
    title2: "immediate",
    taskHeader: "Task",
    withoutHeader: "❌ Without FacilIA",
    withHeader: "✅ With FacilIA",
    rows: [
      { task: "Create a quote", before: "30–60 min by hand", after: "30 seconds automatically" },
      { task: "Reply to emails", before: "2h/day on average", after: "Auto-reply in 1 min" },
      { task: "Weekly report", before: "2h every Monday", after: "Sent automatically" },
      { task: "Client follow-ups", before: "Forgotten or exhausting", after: "Scheduled and automatic" },
      { task: "Find a document", before: "5–15 min searching", after: "Instant via MemoAI" },
      { task: "VAT calculation errors", before: "High risk", after: "Perfect calculation every time" },
    ],
  },

  // Agents
  agents: {
    badge: "Available AI Agents",
    title1: "Your agents work,",
    title2: "you focus",
    subtitle: "Each agent automates a repetitive task in your daily routine. You save time, energy, and peace of mind.",
    statusActive: "● Active",
    statusSoon: "Coming soon",
    agentLabel: "Agent",
    ctaActive: "Try — 1 free test →",
    ctaSoon: "Coming soon",
    list: [
      {
        id: "01",
        name: "Automatic Quote",
        status: "actif",
        icon: "📋",
        description: "Your client fills in an online form. In 30 seconds, a professional PDF quote arrives in your inbox — ready to send.",
        features: ["Custom client form", "AI-generated PDF quote", "Sent to your Gmail", "Automatic VAT calculation"],
        demo: "https://tally.so/r/Bzbvre",
      },
      {
        id: "02",
        name: "Automatic Invoice",
        status: "actif",
        icon: "🧾",
        description: "Convert an accepted quote into a PDF invoice in 1 click, or create an invoice directly. Chorus Pro included for public sector contracts.",
        features: ["Quote → invoice 1-click conversion", "Professional PDF invoice", "Chorus Pro (public sector)", "Gmail draft ready to send"],
        demo: "https://tally.so/r/RGZdLv",
      },
      {
        id: "03",
        name: "Automatic Reports",
        status: "actif",
        icon: "📊",
        description: "Daily digest at 6pm, weekly PDF report on Mondays, monthly report on the 1st. AI-generated business score /10, advice and revenue forecasts.",
        features: ["Weekly & monthly PDF report", "AI business score /10", "Daily WhatsApp digest", "Revenue forecast"],
        demo: "/onboarding",
      },
      {
        id: "04",
        name: "MemoAI — WhatsApp Assistant",
        status: "actif",
        icon: "🧠",
        description: "Send a WhatsApp message to your personal AI assistant. It knows your revenue, pending quotes, your clients — and can trigger follow-ups in 1 message.",
        features: ["Responds in real time on WhatsApp", "Access to all your data", "Triggers follow-ups & reports", "Revenue charts on demand"],
        demo: "/onboarding",
      },
    ],
  },

  // HowItWorks
  how: {
    badge: "How it works",
    title: "As easy as ",
    titleHighlight: "pie",
    subtitle: "No technical skills required.",
    steps: [
      { n: "1", title: "Your client fills in", desc: "A simple, quick form from their phone or computer. No installation required.", icon: "📱" },
      { n: "2", title: "The AI works", desc: "In a few seconds, our agent analyses the information and generates a professional document.", icon: "⚡" },
      { n: "3", title: "You receive it", desc: "The result arrives directly in your inbox, ready to send or validate in 1 click.", icon: "📩" },
      { n: "4", title: "You save time", desc: "What used to take 30 minutes now takes 30 seconds. Every day, indefinitely.", icon: "🚀" },
    ],
  },

  // ROICalculator
  roi: {
    badge: "ROI Calculator",
    title1: "How much is your",
    title2: "admin work costing you?",
    subtitle: "Calculate your real savings with FacilIA",
    slider1: "Quotes per week",
    slider2: "Minutes per quote",
    slider2Unit: "min",
    slider3: "Hourly rate",
    results: [
      { label: "Hours lost/week" },
      { label: "Hours lost/month" },
      { label: "Monthly cost" },
      { label: "Hours recovered/year" },
    ],
    summaryPre: "With FacilIA at",
    summaryPost: "you recover",
    summaryUnit: "/month",
    perYear: "per year",
    roi: "Average ROI",
    roiSuffix: "x your investment",
    cta: "Start now →",
  },

  // Testimonials
  testimonials: {
    badge: "Testimonials",
    title1: "They stopped",
    title2: "wasting their time",
    list: [
      {
        name: "Marc Dubois",
        role: "Independent plumber, Lyon",
        avatar: "👷",
        text: "Before FacilIA, I spent 2 hours every evening on quotes. Now it's automatic. I've gained 10 hours a week and my clients receive their quote in 30 seconds.",
        stars: 5,
      },
      {
        name: "Sophie Laurent",
        role: "SME Manager (construction), Geneva",
        avatar: "👩‍💼",
        text: "The email responder changed my life. I never miss a client request even when I'm on a job site. My revenue increased by 30% in 3 months.",
        stars: 5,
      },
      {
        name: "Karim Benali",
        role: "Electrician, Bordeaux",
        avatar: "⚡",
        text: "I was sceptical about AI but Alicia guided me step by step. Now my quotes are more professional than before and it takes 30 seconds.",
        stars: 5,
      },
    ],
  },

  // Pricing
  pricing: {
    badge: "Simple, transparent pricing",
    title1: "Choose your ",
    title2: "plan",
    subtitle: "No commitment. Cancel anytime.",
    monthSuffix: "/month",
    footerText: "Have specific needs?",
    footerLink: "Contact us",
    footerSuffix: "for a custom quote.",
    plans: [
      {
        name: "Starter",
        price: "49",
        desc: "Perfect for getting started with automation",
        features: [
          "1 AI agent of your choice",
          "Up to 50 documents/month",
          "Email support",
          "Updates included",
        ],
        cta: "Get started",
        highlight: false,
      },
      {
        name: "Pro",
        price: "99",
        desc: "For SMEs that want to go further",
        features: [
          "3 AI agents included",
          "Unlimited documents",
          "Priority support",
          "Personalised follow-up 1h/month",
          "Agent customisation",
          "Updates included",
        ],
        cta: "Choose Pro",
        highlight: true,
        badge: "Most popular",
      },
      {
        name: "Business",
        price: "199",
        desc: "Complete solution with dedicated support",
        features: [
          "All AI agents (4)",
          "Unlimited documents",
          "Dedicated support 7/7",
          "Monthly follow-up 3h",
          "Custom integration",
          "Team training included",
          "Early access to new agents",
        ],
        cta: "Contact FacilIA",
        highlight: false,
      },
    ],
  },

  // FAQ
  faq: {
    badge: "Frequently asked questions",
    title1: "Do you have ",
    title2: "questions?",
    list: [
      {
        q: "Do I need technical skills?",
        a: "No. FacilIA handles everything. There's nothing to install or configure. We do everything for you and train you to use your agents.",
      },
      {
        q: "How long does it take to set up an agent?",
        a: "Between 24 and 48 hours depending on the agent. We handle the complete installation and you receive your agent ready to use.",
      },
      {
        q: "Is my data safe?",
        a: "Yes. Your data is never shared. Each agent is configured exclusively for your company and your Gmail/Google access remains under your control.",
      },
      {
        q: "Can I change my plan at any time?",
        a: "Yes. You can upgrade or cancel at any time, free of charge. No minimum commitment.",
      },
      {
        q: "Do the agents work with my existing tools?",
        a: "Yes. FacilIA is compatible with Gmail, Google Drive, Tally, Notion, WhatsApp Business and many others. We adapt to your existing tools.",
      },
      {
        q: "What happens if the agent makes a mistake?",
        a: "All generated documents go through your inbox before being sent to the client. You keep control and the final approval.",
      },
    ],
  },

  // WaitlistForm
  waitlist: {
    title: "Join the waitlist",
    subtitle: "Early subscribers get one month free and priority onboarding.",
    placeholder: "your@email.com",
    cta: "Join now →",
    successTitle: "You're on the list!",
    successSub: "We'll be in touch very soon.",
    noSpam: "No spam. Unsubscribe in 1 click.",
  },

  // Contact
  contact: {
    badge: "Contact us",
    title: "A question? We'll answer",
    subtitle: "Our team is available to help you set up your AI agents.",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
  },

  // Footer
  footer: {
    tagline: "The AI that simplifies your life",
    links: [
      { href: "#agents", label: "AI Agents" },
      { href: "#pricing", label: "Pricing" },
      { href: "mailto:contact@myfacilia.com", label: "Contact" },
    ],
    copyright: "© 2026 FacilIA — All rights reserved",
  },

  // LiveDemo
  liveDemo: {
    badge: "● Live demo — Agent 1 active",
    title1: "Test the quote agent",
    title2: "right now, for free",
    subtitle: "Fill in the form below. In 30 seconds, you'll receive a real PDF quote in your inbox.",
    warning: "⚠️ 1 free test — unlimited agent is included in the subscription",
    iframeTitle: "FacilIA Quote Agent Demo",
    iframeLabel: "tally.so/r/Bzbvre — Free FacilIA Quote",
  },

  // ExitIntent
  exitIntent: {
    doneTitle: "Got it!",
    doneSub: "We're giving you 1 month free. See you soon!",
    title: "Wait — free gift!",
    desc1: "Visitors who leave now are missing out on",
    desc2: "1 free month",
    desc3: "Leave your email to claim it.",
    placeholder: "your@email.com",
    cta: "I want my free month →",
    dismiss: "No thanks, I'd rather waste time",
  },

  // SocialProofToast
  socialProof: {
    notifications: [
      { name: "Marc D.", city: "Lyon", action: "just signed up", time: "2 min ago", avatar: "👷" },
      { name: "Sophie L.", city: "Geneva", action: "generated their 1st quote", time: "5 min ago", avatar: "👩‍💼" },
      { name: "Karim B.", city: "Bordeaux", action: "just signed up", time: "8 min ago", avatar: "⚡" },
      { name: "Julie M.", city: "Paris", action: "saved 3h this week", time: "12 min ago", avatar: "🎨" },
      { name: "Thomas R.", city: "Marseille", action: "just signed up", time: "15 min ago", avatar: "🔧" },
      { name: "Nadia K.", city: "Brussels", action: "generated 5 quotes today", time: "20 min ago", avatar: "💼" },
    ],
  },
};

export default en;
