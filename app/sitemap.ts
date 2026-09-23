import { MetadataRoute } from "next";
import { getAllProjects } from "@/data/projects";

const siteUrl = "https://toheeb-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/about", "/services", "/contact"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = getAllProjects().map((p) => ({
    url: `${siteUrl}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
