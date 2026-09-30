import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import QuickBar from "@/components/common/QuickBar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Blue Fox | Fine Dining, Grand Buffet & Multi-Cuisine Heritage • Madhapur, Hyderabad",
  description: "Experience iconic multi-cuisine fine dining at Blue Fox Madhapur. Grand Executive Buffet, Famous Apollo Fish, Butter Chicken, Hyderabadi Dum Biryani, Continental Pastas, Full Bar & Cocktails.",
  keywords: "Blue Fox Madhapur, Blue Fox Hyderabad, Blue Fox Buffet, Apollo Fish Blue Fox, Blue Fox Zomato, Multi Cuisine Restaurant Madhapur, Minerva Grand Blue Fox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-alabaster-100 text-charcoal-900 antialiased min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
        <QuickBar />
      </body>
    </html>
  );
}
