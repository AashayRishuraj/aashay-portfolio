import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { absoluteUrl } from "@/lib/utils";
import { profile } from "@/data/profile";

const siteTitle = "Aashay Rishuraj | Data Analyst & Data Scientist";
const siteDescription =
  "Explore the portfolio of Aashay Rishuraj: data analytics, machine learning, Python, SQL, NLP and practical data applications.";

export const viewport: Viewport = {
  themeColor: "#081012",
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: siteTitle,
    template: "%s | Aashay Rishuraj",
  },
  description: siteDescription,
  applicationName: "Aashay Rishuraj Portfolio",
  keywords: [
    "Aashay Rishuraj",
    "Data Analyst",
    "Data Scientist",
    "Machine Learning Engineer",
    "Python",
    "SQL",
    "Power BI",
    "Data Analytics",
    "Machine Learning",
    "NLP",
  ],
  authors: [{ name: "Aashay Rishuraj" }],
  creator: "Aashay Rishuraj",
  alternates: {
    canonical: absoluteUrl(),
  },
  openGraph: {
    title: siteTitle,
    description: "Turning data into decisions. Building intelligence into products.",
    url: absoluteUrl(),
    siteName: "Aashay Rishuraj",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: "Data analytics, machine learning and AI projects.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: absoluteUrl(),
    jobTitle: "Data Analyst and Data Scientist",
    sameAs: [profile.github, profile.linkedin],
    email: `mailto:${profile.email}`,
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
