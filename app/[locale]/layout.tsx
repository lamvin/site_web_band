import type { Metadata } from "next";
import { Syne, Inter, Pacifico, Kaushan_Script, Caveat } from "next/font/google";
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


export const metadata: Metadata = {
  title: "Thérapie Club | Official Website",
  description: "Official website of Thérapie Club",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${syne.variable} ${inter.variable} ${pacifico.variable} ${kaushan.variable} ${caveat.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
