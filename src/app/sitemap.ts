import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/site";
import { getAllPosts } from "../lib/blog-data";

export const dynamic = "force-static";

const SITE_LAST_MODIFIED = "2026-09-20";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogPosts,
    {
      url: absoluteUrl("/faq"),
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/calculator"),
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/terms-and-conditions"),
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
