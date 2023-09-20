import "./styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const font = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-family-inter",
});

export const metadata: Metadata = {
  title: "New Homepage Main",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={`${font.variable} font-inter font-normal text-base px-4 text-news-homepage-main-very-dark-blue max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:px-0`}
    >
      {children}
    </main>
  );
}
