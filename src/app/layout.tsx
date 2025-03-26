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
  title: "Online Games | Free Browser Games",
  description: "Play a wide selection of free online games directly in your browser. No downloads, no sign-ups, just instant fun!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// 直接使用next.config.js中的配置，不在这里重复定义
