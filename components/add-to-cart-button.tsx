"use client";

import { useState } from "react";
import { addToCart, getCart } from "@/lib/cart";
import { ShoppingBag } from "lucide-react";

interface ProductInfo {
  id: string;
  handle: string;
  title: string;
  variantId: string;
  variantTitle: string;
  price: number;
  image: string;
}

interface Props {
  product: ProductInfo;
  available?: boolean;
}

export function AddToCartButton({ product, available = true }: Props) {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = async () => {
    if (!available || !product.variantId) return;

    setLoading(true);
    
    // Simulate small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 300));

    addToCart({
      productId: product.id,
      handle: product.handle,
      title: product.title,
      variantId: product.variantId,
      variantTitle: product.variantTitle,
      price: product.price,
      quantity: 1,
      image: product.image,
    });

    setLoading(false);
    setAdded(true);

    // Reset after 2 seconds
    setTimeout(() => {
      setAdded(false);
    }, 2000);

    // Update cart count in header
    window.dispatchEvent(new Event("cart-updated"));
  };

  if (!available) {
    return (
      <button
        disabled
        className="w-full bg-gray-200 text-gray-400 px-8 py-4 uppercase text-sm tracking-widest cursor-not-allowed"
      >
        Out of Stock
      </button>
    );
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading || added || !product.variantId}
      className={`w-full flex items-center justify-center gap-2 px-8 py-4 uppercase text-sm tracking-widest transition-all duration-200 ${
        added
          ? "bg-green-600 text-white"
          : "bg-black text-white hover:bg-gray-800"
      } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {loading ? (
        <span>Adding...</span>
      ) : added ? (
        <>
          <ShoppingBag className="w-5 h-5" />
          <span>Added to Cart</span>
        </>
      ) : (
        <>
          <ShoppingBag className="w-5 h-5" />
          <span>Add to Cart</span>
        </>
      )}
    </button>
  );
}
