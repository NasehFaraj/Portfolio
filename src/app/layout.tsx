import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
  src: [
    { path: "../../public/fonts/space-grotesk-400.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/space-grotesk-500.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/space-grotesk-600.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/space-grotesk-700.ttf", weight: "700", style: "normal" }
  ],
  display: "swap",
  variable: "--font-sans"
});

const tajawal = localFont({
  src: [
    { path: "../../public/fonts/tajawal-400.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/tajawal-500.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/tajawal-700.ttf", weight: "700", style: "normal" }
  ],
  display: "swap",
  variable: "--font-arabic"
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://nasehfaraj.github.io").replace(/\/$/, "");
const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title: "Naseh Faraj | Software Engineer (Backend-focused)",
  description:
    "Backend-focused software engineer specializing in NestJS and Node.js with infrastructure and deployment experience.",
  openGraph: {
    title: "Naseh Faraj | Portfolio",
    description:
      "Backend-focused software engineer specializing in NestJS and Node.js with infrastructure and deployment experience.",
    url: `${siteUrl}${basePath}/`,
    siteName: "Naseh Faraj Portfolio",
    images: [
      {
        url: "/og-placeholder.png",
        width: 1200,
        height: 630,
        alt: "Naseh Faraj portfolio preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.svg`, type: "image/svg+xml" },
      { url: `${basePath}/favicon.ico` }
    ]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${tajawal.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
