import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAdsense } from "@/components/GoogleAdsense";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://communicationtype16.com"),
  title: {
    default: "16コミュニケーションタイプ診断",
    template: "%s | 16コミュニケーションタイプ診断",
  },
  description: "あなたの『会話スタイル』には、名前がある。性格の良し悪しではなく、無意識に使っている「会話の型」を可視化する成分分析。",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://communicationtype16.com",
    siteName: "16コミュニケーションタイプ診断",
    title: "16コミュニケーションタイプ診断",
    description: "あなたの『会話スタイル』は？無意識に使っている「会話の型」を可視化する分析ツール。",
    images: [
      {
        url: "/images/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "16コミュニケーションタイプ診断",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "16コミュニケーションタイプ診断",
    description: "あなたの『会話スタイル』は？無意識に使っている「会話の型」を可視化する分析ツール。",
    images: ["/images/ogp-default.png"],
  },
  verification: {
    google: "gVUfBF0COCt_KQnZ7vihZaUD1fpdPJZL9V01c1aa4lE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8802783650388237"
          crossOrigin="anonymous"
        ></script>
        {/* <GoogleAdsense pId="8802783650388237" /> */}
        <GoogleAnalytics gaId="G-JKEGM9WS1B" />
        {children}
      </body>
    </html>
  );
}
