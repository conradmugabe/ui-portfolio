import "./styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-family-poppins",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Shortly URL shortening API Challenge",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className={`${font.variable} font-poppins`}>{children}</main>;
}
