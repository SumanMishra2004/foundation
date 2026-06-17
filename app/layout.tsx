import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-librebaskerville",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={libreBaskerville.variable}
    >
      <body
        className={`${libreBaskerville.className} antialiased bg-[#FAF7E6] text-[#0f172a]`}
      >
        {children}
      </body>
    </html>
  );
}