import "./styles.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const font = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-family-nunito-sans",
});

export const metadata: Metadata = {
  title: "Rest Countries API",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`${font.variable} font-nunito-sans`}>{children}</main>
  );
}
