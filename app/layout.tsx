import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Integrated Knowledge and Care (IKC) | Empowering Lives",
    template: "%s | IKC Foundation"
  },
  description: "IKC Foundation empowers lives through knowledge and care. We provide education, healthcare, and community support programs to build a better future for all.",
  keywords: [
    "IKC Foundation",
    "Integrated Knowledge and Care",
    "non-profit organization",
    "community development",
    "education programs",
    "healthcare services",
    "social welfare",
    "empowerment programs",
    "charity organization",
    "community support",
    "knowledge sharing",
    "care services"
  ],
  authors: [{ name: "IKC Foundation" }],
  creator: "IKC Foundation",
  publisher: "IKC Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Integrated Knowledge and Care (IKC) | Empowering Lives',
    description: 'IKC Foundation empowers lives through knowledge and care. We provide education, healthcare, and community support programs to build a better future for all.',
    siteName: 'IKC Foundation',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IKC Foundation - Empowering Lives through Knowledge & Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integrated Knowledge and Care (IKC) | Empowering Lives',
    description: 'IKC Foundation empowers lives through knowledge and care. We provide education, healthcare, and community support programs.',
    images: ['/og-image.jpg'],
    creator: '@IKCFoundation',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Integrated Knowledge and Care (IKC) Foundation",
              "alternateName": "IKC Foundation",
              "url": "https://ikc.org.in",
              "logo": "https://ikc.org.in/logo.png",
              "description": "IKC Foundation empowers lives through knowledge and care. We provide education, healthcare, and community support programs to build a better future for all.",
              "foundingDate": "2020",
              "areaServed": "India",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "info@ikc.org.in"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-slate-50">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
