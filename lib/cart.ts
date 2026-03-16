import { getVariantId } from "./shopify";

export interface CartItem {
  id: string;
  variantId: string;
  productId: string;
  handle: string;
  title: string;
  variantTitle: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

const CART_KEY = "ds-hair-beauty-cart";

export function getCart(): Cart {
  if (typeof window === "undefined") {
    return { items: [], total: 0, itemCount: 0 };
  }

  try {
    const cartData = localStorage.getItem(CART_KEY);
    if (!cartData) {
      return { items: [], total: 0, itemCount: 0 };
    }
    return JSON.parse(cartData);
  } catch {
    return { items: [], total: 0, itemCount: 0 };
  }
}

export function addToCart(item: Omit<CartItem, "id">): Cart {
  const cart = getCart();
  
  const existingItemIndex = cart.items.findIndex(
    (i) => i.variantId === item.variantId
  );

  if (existingItemIndex > -1) {
    cart.items[existingItemIndex].quantity += item.quantity;
  } else {
    const id = `${item.variantId}-${Date.now()}`;
    cart.items.push({ ...item, id });
  }

  const total = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = cart.items.reduce((sum, i) => sum + i.quantity, 0);

  const newCart = { ...cart, total, itemCount };
  
  if (typeof window !== "undefined") {
    localStorage.setItem(CART_KEY, JSON.stringify(newCart));
  }

  return newCart;
}

export function updateCartItemQuantity(itemId: string, quantity: number): Cart {
  const cart = getCart();
  
  if (quantity <= 0) {
    cart.items = cart.items.filter((i) => i.id !== itemId);
  } else {
    const item = cart.items.find((i) => i.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
  }

  const total = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = cart.items.reduce((sum, i) => sum + i.quantity, 0);

  const newCart = { ...cart, total, itemCount };
  
  if (typeof window !== "undefined") {
    localStorage.setItem(CART_KEY, JSON.stringify(newCart));
  }

  return newCart;
}

export function removeFromCart(itemId: string): Cart {
  return updateCartItemQuantity(itemId, 0);
}

export function clearCart(): Cart {
  const newCart = { items: [], total: 0, itemCount: 0 };
  
  if (typeof window !== "undefined") {
    localStorage.setItem(CART_KEY, JSON.stringify(newCart));
  }

  return newCart;
}

// Create Shopify checkout URL
export async function createCheckoutUrl(items: CartItem[]): Promise<string> {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || process.env.SHOPIFY_STORE_DOMAIN;
  const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!domain || !storefrontAccessToken) {
    throw new Error("Missing Shopify environment variables");
  }

  const lineItems = items.map((item) => ({
    variantId: getVariantId(item.variantId),
    quantity: item.quantity,
  }));

  const mutation = `
    mutation checkoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          webUrl
        }
        checkoutUserErrors {
          message
        }
      }
    }
  `;

  const response = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
    body: JSON.stringify({
      query: mutation,
      variables: {
        input: {
          lineItems,
        },
      },
    }),
  });

  const result = await response.json();

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  const checkout = result.data.checkoutCreate.checkout;
  
  if (!checkout) {
    throw new Error("Failed to create checkout");
  }

  return checkout.webUrl;
}
