import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-family-roboto",
});

export const metadata: Metadata = {
  title: "UI Portfolio",
  description: "Conrad Mugabe's UI Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.variable}>{children}</body>
    </html>
  );
}
