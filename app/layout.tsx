import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-head",
    display: "swap",
});

const space = Space_Grotesk({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-sans",
    display: "swap",
});

export const metadata: Metadata = {
  title: "PORTFOLIO - Pijus Misevicius",
  description: "I'm Pijus, a full-stack developer based in Ireland. I currently work on Laravel, React, Next.js, and Tailwind CSS projects. However, that is not the full extent of my skills. Click to see the rest!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${space.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
