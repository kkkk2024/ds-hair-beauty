"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getCart, removeFromCart, updateCartItemQuantity, createCheckoutUrl, Cart, CartItem } from "@/lib/cart";
import { formatPrice } from "@/lib/mock-data";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0, itemCount: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    const newCart = updateCartItemQuantity(itemId, quantity);
    setCart(newCart);
  };

  const handleRemove = (itemId: string) => {
    const newCart = removeFromCart(itemId);
    setCart(newCart);
  };

  const handleCheckout = async () => {
    if (cart.items.length === 0) return;

    setLoading(true);
    try {
      const checkoutUrl = await createCheckoutUrl(cart.items);
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to create checkout. Please try again.");
      setLoading(false);
    }
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-gray-300" />
          <h1 className="text-3xl font-light tracking-wide mb-4">Your cart is empty</h1>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link href="/products" className="btn-primary inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-12">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cart.items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 pb-6 border-b border-gray-200"
                >
                  {/* Product Image */}
                  <Link href={`/products/${item.handle}`} className="shrink-0">
                    <div className="w-24 h-32 md:w-32 md:h-40 relative bg-gray-100 overflow-hidden">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                          No Image
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1">
                    <Link href={`/products/${item.handle}`}>
                      <h3 className="font-medium text-sm uppercase tracking-wide hover:text-gray-600">
                        {item.title}
                      </h3>
                    </Link>
                    {item.variantTitle !== "Default Title" && (
                      <p className="text-sm text-gray-500 mt-1">
                        {item.variantTitle}
                      </p>
                    )}
                    <p className="mt-2">{formatPrice(String(item.price))}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center border border-gray-300">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-2 hover:bg-gray-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-2 hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Line Total */}
                  <div className="text-right">
                    <p className="font-medium">
                      {formatPrice(String(item.price * item.quantity))}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link href="/products" className="text-sm underline hover:text-gray-600">
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 md:p-8">
              <h2 className="text-xl font-light tracking-wide mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{formatPrice(String(cart.total))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>{formatPrice(String(cart.total))}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Proceed to Checkout"}
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Secure checkout powered by Shopify
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
