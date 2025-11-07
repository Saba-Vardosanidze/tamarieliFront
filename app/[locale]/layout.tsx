import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "features/query/QueryProvider";
import { Toaster } from "react-hot-toast";
import Footer from "features/landing/components/primitives/Footer";
import Header from "features/landing/components/primitives/Header";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tamarieli – Supporting Migrants and Communities Abroad",
    template: "%s | Tamarieli",
  },
  description:
    "Tamarieli is a non-profit organization empowering migrants through education, community support, and cultural exchange.",
  keywords: [
    "Tamarieli",
    "migrants",
    "non-profit",
    "NGO",
    "diaspora",
    "support",
    "education",
    "community",
  ],
  authors: [{ name: "Tamarieli NGO" }],
  metadataBase: new URL("https://tamarieli.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tamarieli.org",
    siteName: "Tamarieli",
    title: "Tamarieli – Supporting Migrants and Communities Abroad",
    description:
      "A global NGO helping migrants through education, networking, and empowerment programs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tamarieli – NGO for Migrants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tamarieli_org",
    title: "Tamarieli – Supporting Migrants and Communities Abroad",
    description:
      "Join Tamarieli, a global NGO helping migrants build stronger communities.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/images/headerImages/png/siteLogo.png",
    shortcut: "/images/headerImages/png/projectTamarieli.jpg",
    apple: "/images/headerImages/png/projectTamarieli.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F0F0F0]`}
      >
        <NextIntlClientProvider>
          <Header />
          <div className="min-h-screen">
            <QueryProvider>{children}</QueryProvider>
            <Toaster position="top-right" />
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
