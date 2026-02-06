import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates
 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Headers/Header";

const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kraviona",
  description: "Digital and IT Solution Provides In Affordable Cost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg-main text-text-primary`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
