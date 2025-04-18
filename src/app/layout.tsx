import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "훈스에씨오 for SEO",
  description: "SEO 연구 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
