import Script from "next/script";
import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_ORIGIN, absoluteUrl } from "../lib/site";

const defaultTitle = "Vectolift - Never Miss Another Call";
const defaultDescription =
  "Your AI receptionist answers every call, books jobs, and sounds like your best team member — 24/7, without missing a beat. Built for Australian home service businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  applicationName: SITE_NAME,
  title: defaultTitle,
  description: defaultDescription,
  keywords: [
    "AI Receptionist",
    "Voice AI",
    "Home Services AI",
    "AI Call Answering",
    "Trade Business AI",
    "Australian Voice AI",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_AU",
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
      description: "AI receptionist for Australian home service businesses",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      name: SITE_NAME,
      url: `${SITE_ORIGIN}/`,
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    },
  ];

  return (
    <html lang="en">
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
