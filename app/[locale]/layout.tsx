import type { Metadata } from "next";
import { Syne, Inter, Pacifico, Kaushan_Script, Caveat, Fraunces, Playfair_Display, Satisfy, Kalam, Covered_By_Your_Grace } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: 'swap',
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: 'swap',
});

const kaushan = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kaushan",
  display: 'swap',
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-vintage",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-satisfy",
  display: 'swap',
});

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
  display: 'swap',
});

const covered = Covered_By_Your_Grace({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-covered",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Thérapie Club | Site officiel",
  description: "Site officiel de Thérapie Club",
};

export function generateStaticParams() {
  return [{ locale: 'fr' }];
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  await params;
  const messages = await getMessages();

  return (
    <html lang="fr">
      <body className={`${syne.variable} ${inter.variable} ${pacifico.variable} ${kaushan.variable} ${caveat.variable} ${fraunces.variable} ${playfair.variable} ${satisfy.variable} ${kalam.variable} ${covered.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
