"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { getCart } from "@/lib/cart";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart();
      setCartCount(cart.itemCount);
    };

    updateCartCount();
    window.addEventListener("cart-updated", updateCartCount);
    
    return () => {
      window.removeEventListener("cart-updated", updateCartCount);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-lg md:text-xl font-display tracking-[0.2em]">
              D.S
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/products"
              className="text-sm uppercase tracking-widest hover:text-gray-600 transition-colors"
            >
              Shop
            </Link>
          </nav>

          {/* Cart */}
          <Link
            href="/cart"
            className="flex items-center gap-2 hover:text-gray-600 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="text-sm">{cartCount}</span>
            )}
          </Link>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <Link
              href="/products"
              className="block py-2 text-sm uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
