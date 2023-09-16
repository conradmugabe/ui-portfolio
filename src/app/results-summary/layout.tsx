import "./styles.css";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

const font = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-family-hanken-grotesk",
});

export const metadata: Metadata = {
  title: "Results Summary Component",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className={font.variable}>{children}</main>;
}
