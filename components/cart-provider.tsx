"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Cart, getCart as getCartFromStorage } from "@/lib/cart";

interface CartContextType {
  cart: Cart;
  updateCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0, itemCount: 0 });

  const updateCart = () => {
    const newCart = getCartFromStorage();
    setCart(newCart);
    // Dispatch event for other components
    window.dispatchEvent(new Event("cart-updated"));
  };

  useEffect(() => {
    updateCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
