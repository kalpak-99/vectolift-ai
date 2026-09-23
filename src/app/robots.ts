import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = `${SITE_ORIGIN}/sitemap.xml`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Bing-specific: identical rules, explicitly named so Bing Webmaster
      // Tools recognises the directive when validating.
      {
        userAgent: "bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    // Both Google and Bing read sitemap directives from robots.txt.
    // A single sitemap URL works for both — submit this same URL
    // in Google Search Console AND Bing Webmaster Tools.
    sitemap: sitemapUrl,
  };
}
