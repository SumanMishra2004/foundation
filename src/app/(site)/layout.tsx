import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { fallbackFooter, fallbackNav, fallbackSiteSettings } from "@/lib/fallback-data";
import { client } from "@/lib/sanity/client";
import { footerQuery, navQuery, siteSettingsQuery } from "@/lib/sanity/queries";
import type { FooterData, NavData, SiteSettings } from "@/lib/sanity/types";

export const revalidate = 60;

async function fetchWithFallback<T>(query: string, fallback: T): Promise<T> {
  try {
    const data = await client.fetch<T | null>(query, {}, { next: { revalidate: 60 } });
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [nav, footer, settings] = await Promise.all([
    fetchWithFallback<NavData>(navQuery, fallbackNav),
    fetchWithFallback<FooterData>(footerQuery, fallbackFooter),
    fetchWithFallback<SiteSettings>(siteSettingsQuery, fallbackSiteSettings),
  ]);

  return (
    <>
      <Navbar data={nav} showCertificates={settings.showCertificates} />
      <main className="flex-1">{children}</main>
      <Footer data={footer} showCertificates={settings.showCertificates} />
    </>
  );
}
