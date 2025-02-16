import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansKr = Noto_Sans_KR({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "파도와 민박",
  description: "파도와 민박",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <Header />
        <main className="mt-[10vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
