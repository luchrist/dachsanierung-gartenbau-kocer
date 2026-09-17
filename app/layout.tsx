import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { restaurant } from "@/lib/restaurant";
import { galabau } from "@/lib/galabau";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"]
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

// The factory-generated restaurant.seo values still contain a food-industry
// phrasing that does not fit this Dachsanierung & Gartenbau vertical. lib/restaurant.ts
// is factory territory, so the metadata is composed here with industry-correct copy.
const seoTitle = "Dachsanierung & Gartenbau Kocer | Dach, Rinne, Pflaster und Garten in Lampertheim";
const seoDescription = "Familienbetrieb in Lampertheim, seit über 20 Jahren. Dachsanierung, Dachreparaturen, Klempnerarbeiten, Pflaster, Terrassen und Gartenpflege aus einer Hand. Aufmaß vor Ort, ehrliche Angebote.";
const seoKeywords = [
  "Dachsanierung Lampertheim",
  "Dachdecker Lampertheim",
  "Dachreparatur Lampertheim",
  "Dachrinne Lampertheim",
  "Klempnerarbeiten Lampertheim",
  "Dachdämmung Lampertheim",
  "Pflasterarbeiten Lampertheim",
  "Terrasse Lampertheim",
  "Gartenpflege Lampertheim",
  "Dachsanierung & Gartenbau Kocer"
];

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: seoKeywords,
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    locale: restaurant.seo.locale
  }
};

export const viewport: Viewport = {
  themeColor: "#F7F6F2",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

// schema.org: RoofingContractor is a HomeAndConstructionBusiness subtype that
// exactly fits the primary Google category of this business. Additional service
// categories are surfaced via `knowsAbout`.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": restaurant.name,
  "image": "/assets/logo-mark.png",
  "url": "http://www.dg-kocer.de/",
  "telephone": restaurant.phone,
  "email": galabau.contact.email,
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": restaurant.address.street,
    "postalCode": restaurant.address.cityLine.match(/\b\d{5}\b/)?.[0] ?? "",
    "addressLocality": restaurant.address.city,
    "addressCountry": "DE"
  },
  "areaServed": galabau.serviceArea.places.length
    ? galabau.serviceArea.places.map((place) => ({ "@type": "City", "name": place }))
    : [{ "@type": "City", "name": galabau.serviceArea.centerCity }],
  "geo": galabau.serviceArea.center
    ? {
        "@type": "GeoCoordinates",
        "latitude": galabau.serviceArea.center.lat,
        "longitude": galabau.serviceArea.center.lng
      }
    : undefined,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:30"
    }
  ],
  "knowsAbout": [
    "Dachsanierung",
    "Neueindeckung",
    "Dachdämmung",
    "Dachreparatur",
    "Dachrinnen",
    "Klempnerarbeiten",
    "Pflasterarbeiten",
    "Terrassenbau",
    "Dachterrassen",
    "Gartenpflege",
    "Baumfällung"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      <body className="grain overflow-x-hidden bg-bone text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
