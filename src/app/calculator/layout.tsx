import type { ReactNode } from "react";
import { absoluteUrl, routeMetadata, SITE_ORIGIN } from "../../lib/site";

export const metadata = routeMetadata(
  "/calculator",
  "Missed Call Revenue Calculator for Australian Trades | Vectolift",
  "Calculate how much revenue your trade business loses to missed and unanswered calls. Free calculator for Australian plumbers, electricians, HVAC, and home service businesses."
);

export default function CalculatorLayout({ children }: { children: ReactNode }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_ORIGIN,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Calculator",
        item: absoluteUrl("/calculator"),
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Missed Call Revenue Calculator for Australian Trades",
    description: "Calculate how much revenue your trade business loses to missed and unanswered calls.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    url: absoluteUrl("/calculator"),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AUD",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      {children}
    </>
  );
}
