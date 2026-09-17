import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shambhavi Ranjan | Portfolio",
  description:
    "Luxury dark portfolio for Shambhavi Ranjan — full stack developer, MCA scholar, Python and data enthusiast.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0B0F17] text-slate-100">
        <div className="pt-20 md:pt-24">{children}</div>
      </body>
    </html>
  );
}
