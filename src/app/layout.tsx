import type { Metadata } from "next";
import { IBM_Plex_Mono, Libre_Franklin, Public_Sans } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Izy Global Services LLC — One Partner. Many Missions.",
  description:
    "Izy Global Services LLC — a service-disabled veteran-owned small business (SDVOSB) federal prime delivering logistics, healthcare support, staffing, facilities, and technology services to federal agencies and prime partners.",
  keywords:
    "SDVOSB, veteran-owned business, federal prime, pharmacy courier, VA courier services, logistics, government contracting, staffing, facilities, technology services, Houston, San Antonio",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#050f20",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Gates the scroll-reveal CSS so a no-JS visitor still sees every section */}
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.classList.add("js")',
          }}
        />
      </head>
      <body
        className={`${libreFranklin.variable} ${publicSans.variable} ${plexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
