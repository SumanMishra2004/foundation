import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { fetchSiteSettings } from "@/lib/sanity";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-librebaskerville",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await fetchSiteSettings();
  const title = settings?.metaTitle || "IKC Foundation — Empowering Through Knowledge & Care";
  const description =
    settings?.metaDescription ||
    "IKC Foundation empowers lives through integrated knowledge and care — education, healthcare, and community welfare programs across India.";

  return {
    title: {
      default: title,
      template: `%s | ${settings?.siteName || "IKC Foundation"}`,
    },
    description,
    keywords: [
      settings?.siteName || "IKC Foundation",
      "Integrated Knowledge and Care",
      "NGO India",
      "education",
      "healthcare",
      "community welfare",
    ],
    authors: [{ name: settings?.siteName || "IKC Foundation" }],
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    ),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "/",
      title,
      description,
      siteName: settings?.siteName || "IKC Foundation",
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await fetchSiteSettings();
  const navbarSettings = settings
    ? {
        siteName: settings.siteName,
        tagline: settings.tagline,
        logo: settings.logo,
        navLinks: (settings.navLinks ?? []).filter(
          (link): link is { href: string; label: string } =>
            typeof link?.href === "string" && typeof link?.label === "string"
        ),
      }
    : undefined;

  const footerSettings = settings
    ? {
        siteName: settings.siteName,
        tagline: settings.tagline,
        logo: settings.logo,
        footerDescription: settings.footerDescription,
        footerQuote: settings.footerQuote,
        focusAreas: settings.focusAreas,
        contactAddress: settings.contactAddress,
        contactEmail: settings.contactEmail,
        contactPhone: settings.contactPhone,
      }
    : undefined;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={libreBaskerville.variable}
    >
      <body
        className={`${libreBaskerville.className} antialiased bg-[#FAF7E6] text-[#0f172a]`}
      >
        <Navbar settings={navbarSettings} />
        <main>{children}</main>
        <Footer settings={footerSettings} />
      </body>
    </html>
  );
}
