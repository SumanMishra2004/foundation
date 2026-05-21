import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { fallbackFooter, fallbackNav } from "@/lib/fallback-data";
import { client } from "@/lib/sanity/client";
import { footerQuery, navQuery } from "@/lib/sanity/queries";
import type { FooterData, NavData } from "@/lib/sanity/types";

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
  const [nav, footer] = await Promise.all([
    fetchWithFallback<NavData>(navQuery, fallbackNav),
    fetchWithFallback<FooterData>(footerQuery, fallbackFooter),
  ]);

  return (
    <>
      <Navbar data={nav} />
      <main className="flex-1">{children}</main>
      <Footer data={footer} />
    </>
  );
}
