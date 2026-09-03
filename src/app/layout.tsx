import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Vectolift - Never Miss Another Call",
  "description": "Your AI receptionist answers every call, books jobs, and sounds like your best team member — 24/7, without missing a beat. Built for Australian home service businesses.",
  "keywords": [
    "AI Receptionist",
    "Voice AI",
    "Home Services AI",
    "AI Call Answering",
    "Trade Business AI",
    "Australian Voice AI"
  ],
  "robots": "index, follow",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Vectolift - Never Miss Another Call",
    "description": "Your AI receptionist answers every call, books jobs, and sounds like your best team member — 24/7, without missing a beat.",
    "type": "website",
    "siteName": "Vectolift",
    "url": "/",
    "images": [
      "/assets/cloned/images/db6fb70a8189.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vectolift - Never Miss Another Call",
    "description": "Your AI receptionist answers every call, books jobs, and sounds like your best team member — 24/7, without missing a beat.",
    "site": "@Vectolift",
    "creator": "@Vectolift",
    "images": [
      "/assets/cloned/images/db6fb70a8189.jpg"
    ]
  },
  "manifest": "/site.webmanifest",
  "icons": {
    "icon": [
      {
        "url": "/favicon.ico",
        "type": "image/x-icon",
        "sizes": "32x32"
      },
      {
        "url": "/favicon.svg",
        "type": "image/svg+xml",
        "sizes": "any"
      },
      {
        "url": "/favicon-96x96.png",
        "type": "image/png",
        "sizes": "96x96"
      }
    ],
    "apple": [
      {
        "url": "/apple-touch-icon.png",
        "type": "image/png",
        "sizes": "180x180"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#0E0E13"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Vectolift",
      url: SITE_ORIGIN || "http://localhost:3000",
      logo: `${SITE_ORIGIN || "http://localhost:3000"}/favicon.svg`,
      sameAs: [
        "https://twitter.com/Vectolift",
        "https://www.linkedin.com/company/vectolift",
      ],
      description: "AI receptionist for Australian home service businesses",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Vectolift",
      url: SITE_ORIGIN || "http://localhost:3000",
    },
  ];

  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="G-V5FP5S9SJF" />
      </body>
    </html>
  );
}
