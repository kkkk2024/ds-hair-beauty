import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartProvider } from "@/components/cart-provider";

export const metadata: Metadata = {
  title: "D.S HAIR & BEAUTY | Premium Hair Care Products",
  description: "Discover premium hair care and beauty products at D.S HAIR & BEAUTY. Professional-grade formulas for salon-quality results at home.",
  keywords: ["hair care", "beauty products", "professional hair", "salon quality"],
  openGraph: {
    title: "D.S HAIR & BEAUTY | Premium Hair Care Products",
    description: "Discover premium hair care and beauty products at D.S HAIR & BEAUTY.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
