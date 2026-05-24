import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { fetchSiteSettings } from "@/lib/sanity";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
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
      className={`${montserrat.variable} ${dmSans.variable}`}
    >
      <body className="font-sans antialiased bg-[#FAF7E6] text-[#0f172a]">
        <Navbar settings={settings} />
        <main>{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
