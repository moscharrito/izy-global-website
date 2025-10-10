import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Izy Global Services - Service-Disabled Veteran-Owned Small Business",
  description: "Professional transportation, logistics, and government contract support services. SDVOSB certified company delivering excellence through service.",
  keywords: "SDVOSB, veteran-owned business, transportation, logistics, government contracts, freight services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <Header />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
