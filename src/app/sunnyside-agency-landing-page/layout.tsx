import { FrontendMentorCopyright } from "@/components/copyright";
import "./styles.css";
import type { Metadata } from "next";
import { Barlow, Fraunces } from "next/font/google";

const font = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-family-barlow",
});

export const font_two = Fraunces({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-family-fraunces",
});

export const metadata: Metadata = {
  title: "Sunnyside Agency Landing Page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`${font.variable}`}>
      {children}
      <FrontendMentorCopyright />
    </main>
  );
}
