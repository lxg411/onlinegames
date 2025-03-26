import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from '@/components/Footer';
import customImageLoader from '@/lib/imageLoader';
import "./globals.css";

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
        <meta name="next-image-loader" content="custom" />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export const images = {
  loader: customImageLoader
};
