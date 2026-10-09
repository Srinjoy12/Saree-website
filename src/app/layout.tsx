import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroScreen from "@/components/IntroScreen";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Darsh Collections | A Legacy of Six Yards",
  description: "A premium digital catalogue and brand showcase for Darsh Collections. Quiet luxury, a museum of textiles meets a refined boutique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} antialiased selection:bg-accent/20 selection:text-primary flex flex-col min-h-screen font-sans`}
      >
        <IntroScreen />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
