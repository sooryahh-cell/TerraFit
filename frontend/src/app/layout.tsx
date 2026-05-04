import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveBackground from "@/components/WaveBackground";
import FloatingTshirts from "@/components/FloatingTshirts";





const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Terra Fit | Premium Activewear",
  description: "Premium mobile eCommerce app for activewear, shoes, and smartwatches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <WaveBackground />
        <FloatingTshirts />
        <CartProvider>
          <Navbar />
          <main style={{ flex: 1, paddingBottom: "2rem", position: "relative", zIndex: 1 }}>
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
