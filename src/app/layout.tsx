import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from '@/components/Footer';
import customImageLoader from '@/lib/imageLoader';
import "./globals.css";
import Script from 'next/script';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Online Games - Free Game Portal",
  description: "Play the best free online games on onlinegames.io. We offer a wide selection of browser games for the whole family.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1M1TFEBGXJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1M1TFEBGXJ');
          `}
        </Script>
        <div className="flex-grow">
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

// 直接使用next.config.js中的配置，不在这里重复定义
