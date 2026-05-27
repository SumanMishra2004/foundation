import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
// @ts-expect-error -- Next.js supports global CSS side-effect imports in app/layout.tsx
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

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={libreBaskerville.variable}
    >
      <body
        className={`${libreBaskerville.className} antialiased bg-[#FAF7E6] text-[#0f172a]`}
      >
        <Navbar settings={settings} />
        <main>{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
