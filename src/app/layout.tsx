import type { Metadata } from "next";
import "./globals.css";
import { professorData } from "./data";

export const metadata: Metadata = {
  title: professorData.seo.title,
  description: professorData.seo.description,
  keywords: professorData.seo.keywords,
  openGraph: {
    title: professorData.seo.title,
    description: professorData.seo.description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: professorData.seo.title,
    description: professorData.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
