import Script from "next/script";
import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_ORIGIN, absoluteUrl } from "../lib/site";

const defaultTitle = "Vectolift — AI Receptionist for Australian Businesses | Never Miss a Call";
const defaultDescription =
  "AI receptionist that answers every call 24/7, books jobs, and detects emergencies — with a natural Australian accent. Built for tradies and home service businesses. Try free for 7 days.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  applicationName: SITE_NAME,
  title: defaultTitle,
  description: defaultDescription,
  keywords: [
    "AI receptionist",
    "AI receptionist Australia",
    "AI phone answering",
    "AI answering service",
    "virtual receptionist Australia",
    "answering service for tradies",
    "after-hours call answering",
    "AI receptionist for plumbers",
    "AI receptionist for electricians",
    "AI receptionist for HVAC",
    "AI receptionist for tradies",
    "missed call recovery",
    "24/7 phone answering Australia",
    "home services AI",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
    languages: { "en-AU": absoluteUrl("/") },
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large" as const,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_AU",
    url: absoluteUrl("/"),
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E0E13",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_ORIGIN}/#organization`,
      name: SITE_NAME,
      url: `${SITE_ORIGIN}/`,
      logo: `${SITE_ORIGIN}/favicon.svg`,
      description: "AI receptionist for Australian home service businesses. Answers calls 24/7 with a natural Australian accent, books appointments, and detects emergencies.",
      email: "vectolift@gmail.com",
      areaServed: {
        "@type": "Country",
        name: "Australia",
        sameAs: "https://en.wikipedia.org/wiki/Australia",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "vectolift@gmail.com",
        contactType: "sales",
        availableLanguage: "English",
        areaServed: "AU",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      name: SITE_NAME,
      url: `${SITE_ORIGIN}/`,
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      inLanguage: "en-AU",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Vectolift AI Receptionist",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "AI receptionist that answers business calls 24/7 with a natural Australian accent, books appointments, detects emergencies, and sends SMS summaries.",
      url: `${SITE_ORIGIN}/`,
      provider: { "@id": `${SITE_ORIGIN}/#organization` },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "AUD",
        description: "7-day free trial available",
        areaServed: {
          "@type": "Country",
          name: "Australia",
        },
      },
      featureList: "24/7 Call Answering, Emergency Detection, Australian Voice, Calendar Booking, Call Recording, Scalable Infrastructure",
    },
  ];

  return (
    <html lang="en-AU">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-VSFP5S9SJF" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VSFP5S9SJF');
          `}
        </Script>
      </body>
    </html>
  );
}
