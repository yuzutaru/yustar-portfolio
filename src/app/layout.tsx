import type { Metadata } from "next";
import { Space_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/content";

const spaceMono = Space_Mono({
  variable: "--font-space",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s · ${site.author}`,
  },
  description: site.description,
  keywords: [
    "Yustar Pramudana",
    "Senior Full-Stack Engineer",
    "Senior Mobile Engineer",
    "Android Developer",
    "iOS Developer",
    "Kotlin",
    "Jetpack Compose",
    "SwiftUI",
    "TypeScript",
    "AI-Native Development",
    "MCP",
  ],
  authors: [{ name: site.author }],
  creator: site.author,
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.author,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceMono.variable} ${jetbrainsMono.variable} font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
