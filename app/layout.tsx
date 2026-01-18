import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AgeGate from "@/components/AgeGate";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barley Naked Brewing Company | Stafford, Virginia",
  description: "Craft brewery in Stafford, Virginia. Enjoy handcrafted beers, live music, and food trucks in a welcoming taproom atmosphere.",
  keywords: ["brewery", "craft beer", "Stafford", "Virginia", "taproom", "live music", "food trucks"],
  openGraph: {
    title: "Barley Naked Brewing Company",
    description: "Craft brewery in Stafford, Virginia",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <AgeGate>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AgeGate>
      </body>
    </html>
  );
}
