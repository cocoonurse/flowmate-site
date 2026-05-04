import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FacilIA — L'IA qui facilite votre vie",
  description: "Automatisez vos tâches répétitives avec des agents IA sur mesure. Devis, emails, rapports — FacilIA gère tout pour vous.",
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "FacilIA — L'IA qui libère votre temps",
    description: "Devis, factures, rapports, WhatsApp — générés automatiquement par l'IA. Conçu pour les PME et artisans.",
    url: "https://myfacilia.com",
    siteName: "FacilIA",
    images: [{ url: "https://myfacilia.com/logo.png", width: 512, height: 512, alt: "FacilIA" }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FacilIA — L'IA qui libère votre temps",
    description: "Devis, factures, rapports, WhatsApp — générés automatiquement par l'IA.",
    images: ["https://myfacilia.com/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
