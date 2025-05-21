import { sitemapRoutes } from "@/router/router";

export default async function sitemap() {
  return sitemapRoutes.map((route) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
    //   lastModified: new Date(),
  }));
}
