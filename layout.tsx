import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://YOUR-VERCEL-DOMAIN.vercel.app";
export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: { default: "Aashish Sahani — Graphic Designer", template: "%s — Aashish Sahani" }, description: "Portfolio of Aashish Sahani, an emerging graphic designer exploring branding, advertising, and AI-assisted creative workflows.", openGraph: { type: "website", title: "Aashish Sahani — Graphic Designer", description: "Graphic design, advertising, branding and creative experiments.", siteName: "Aashish Sahani Portfolio" }, robots: { index: true, follow: true }, icons: { icon: "/favicon.svg" } };
export const viewport: Viewport = { themeColor: "#0a0a0a", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${geist.variable} ${geistMono.variable}`}><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>; }
