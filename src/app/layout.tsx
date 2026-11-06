import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f9fc",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://asa-no-yohaku.example.com"),
  title: "朝の余白（あさのよはく）｜リモートワーカーのためのオンライン朝ヨガ＆瞑想サロン",
  description:
    "パジャマのまま、たった15分。朝の余白が、1日の生産性を変える。30代〜40代のリモートワーカー・フリーランス向けオンライン朝ヨガ＆マインドフルネスサロン「朝の余白」。公式LINE友だち追加で初回1週間無料体験をプレゼント。",
  keywords: [
    "朝の余白",
    "オンライン朝ヨガ",
    "マインドフルネス",
    "瞑想サロン",
    "リモートワーク",
    "朝活",
    "運動不足解消",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "朝の余白（あさのよはく）｜オンライン朝ヨガ＆マインドフルネスサロン",
    description:
      "パジャマのまま、たった15分。朝の余白が、1日の生産性を変える。リモートワーカーのためのオンライン朝ヨガ＆瞑想サロン。初回1週間無料体験プレゼント中。",
    url: "https://asa-no-yohaku.example.com",
    siteName: "朝の余白（あさのよはく）",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "朝の光が差し込む部屋で心身を整えるオンライン朝ヨガ＆マインドフルネスサロン「朝の余白」",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "朝の余白（あさのよはく）｜オンライン朝ヨガ＆マインドフルネスサロン",
    description:
      "パジャマのまま、たった15分。朝の余白が、1日の生産性を変える。初回1週間無料体験を実施中。",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap"
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-paleBlue-200 selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}
