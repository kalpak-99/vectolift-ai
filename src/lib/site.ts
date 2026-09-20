import type { Metadata } from "next";

export const SITE_NAME = "Vectolift";
export const SITE_ORIGIN = "https://www.vectolift.com";
export const DEFAULT_OG_IMAGE = "/assets/hero-plumber.jpg";

export function absoluteUrl(path: string): string {
  if (!path || path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

type RouteMetadataOptions = {
  image?: string;
  type?: "website" | "article";
};

export function routeMetadata(
  path: string,
  title: string,
  description: string,
  options: RouteMetadataOptions = {},
): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl(options.image ?? DEFAULT_OG_IMAGE);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: options.type ?? "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
