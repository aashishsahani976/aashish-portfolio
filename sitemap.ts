import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://YOUR-VERCEL-DOMAIN.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/work", "/about", "/resume", "/contact", ...projects.map((p) => `/work/${p.slug}`)]; return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route === "/work" ? 0.9 : 0.7 })); }
