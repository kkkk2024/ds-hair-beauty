// Mock data for D.S HAIR & BEAUTY
// Replace with Shopify API calls in production

export interface MockProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  vendor: string;
  productType: string;
  tags: string[];
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  featuredImage: {
    url: string;
    altText: string | null;
    width: number;
    height: number;
  } | null;
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
        width: number;
        height: number;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        priceV2: {
          amount: string;
          currencyCode: string;
        };
        selectedOptions: Array<{
          name: string;
          value: string;
        }>;
      };
    }>;
  };
  options: Array<{
    id: string;
    name: string;
    values: string[];
  }>;
}

export const mockProducts: MockProduct[] = [
  {
    id: "1",
    handle: "silk-seam-clip-in-set",
    title: "Silk Seam Clip-In Set",
    description: "Premium silk seam clip-in hair extensions for natural volume.",
    descriptionHtml: "<p>Premium silk seam clip-in hair extensions for natural volume.</p>",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    tags: ["bestseller", "clip-in"],
    priceRange: {
      minVariantPrice: { amount: "189.00", currencyCode: "GBP" },
      maxVariantPrice: { amount: "219.00", currencyCode: "GBP" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop",
      altText: "Silk Seam Clip-In Set",
      width: 600,
      height: 800,
    },
    images: {
      edges: [
        { node: { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop", altText: "Silk Seam", width: 600, height: 800 } },
        { node: { url: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=600&h=800&fit=crop", altText: "Silk Seam 2", width: 600, height: 800 } },
      ],
    },
    variants: {
      edges: [
        { node: { id: "v1", title: "16 inches / Blonde", availableForSale: true, priceV2: { amount: "189.00", currencyCode: "GBP" }, selectedOptions: [{ name: "Length", value: "16 inches" }, { name: "Color", value: "Blonde" }] } },
        { node: { id: "v2", title: "18 inches / Blonde", availableForSale: true, priceV2: { amount: "199.00", currencyCode: "GBP" }, selectedOptions: [{ name: "Length", value: "18 inches" }, { name: "Color", value: "Blonde" }] } },
        { node: { id: "v3", title: "20 inches / Brown", availableForSale: true, priceV2: { amount: "209.00", currencyCode: "GBP" }, selectedOptions: [{ name: "Length", value: "20 inches" }, { name: "Color", value: "Brown" }] } },
        { node: { id: "v4", title: "22 inches / Black", availableForSale: true, priceV2: { amount: "219.00", currencyCode: "GBP" }, selectedOptions: [{ name: "Length", value: "22 inches" }, { name: "Color", value: "Black" }] } },
      ],
    },
    options: [
      { id: "opt1", name: "Length", values: ["16 inches", "18 inches", "20 inches", "22 inches"] },
      { id: "opt2", name: "Color", values: ["Blonde", "Brown", "Black", "Auburn"] },
    ],
  },
  {
    id: "2",
    handle: "classic-clip-in-set",
    title: "Classic Clip-In Set",
    description: "Easy-to-apply clip-in extensions for everyday use.",
    descriptionHtml: "<p>Easy-to-apply clip-in extensions for everyday use.</p>",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    tags: ["popular"],
    priceRange: {
      minVariantPrice: { amount: "149.00", currencyCode: "GBP" },
      maxVariantPrice: { amount: "169.00", currencyCode: "GBP" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=600&h=800&fit=crop",
      altText: "Classic Clip-In Set",
      width: 600,
      height: 800,
    },
    images: {
      edges: [
        { node: { url: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=600&h=800&fit=crop", altText: "Classic", width: 600, height: 800 } },
      ],
    },
    variants: {
      edges: [
        { node: { id: "v5", title: "14 inches / Natural Black", availableForSale: true, priceV2: { amount: "149.00", currencyCode: "GBP" }, selectedOptions: [{ name: "Length", value: "14 inches" }, { name: "Color", value: "Natural Black" }] } },
        { node: { id: "v6", title: "16 inches / Dark Brown", availableForSale: true, priceV2: { amount: "159.00", currencyCode: "GBP" }, selectedOptions: [{ name: "Length", value: "16 inches" }, { name: "Color", value: "Dark Brown" }] } },
      ],
    },
    options: [
      { id: "opt3", name: "Length", values: ["14 inches", "16 inches", "18 inches"] },
      { id: "opt4", name: "Color", values: ["Natural Black", "Dark Brown", "Chestnut"] },
    ],
  },
  {
    id: "3",
    handle: "wrap-ponytail",
    title: "Wrap Ponytail",
    description: "Instant glamour with our premium wrap ponytail.",
    descriptionHtml: "<p>Instant glamour with our premium wrap ponytail.</p>",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Ponytails",
    tags: ["new"],
    priceRange: {
      minVariantPrice: { amount: "89.00", currencyCode: "GBP" },
      maxVariantPrice: { amount: "99.00", currencyCode: "GBP" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=800&fit=crop",
      altText: "Wrap Ponytail",
      width: 600,
      height: 800,
    },
    images: {
      edges: [
        { node: { url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=800&fit=crop", altText: "Ponytail", width: 600, height: 800 } },
      ],
    },
    variants: {
      edges: [
        { node: { id: "v7", title: "12 inches / Black", availableForSale: true, priceV2: { amount: "89.00", currencyCode: "GBP" }, selectedOptions: [{ name: "Length", value: "12 inches" }, { name: "Color", value: "Black" }] } },
      ],
    },
    options: [
      { id: "opt5", name: "Length", values: ["12 inches", "14 inches", "16 inches"] },
      { id: "opt6", name: "Color", values: ["Black", "Brown", "Blonde"] },
    ],
  },
  {
    id: "4",
    handle: "professional-tape-ins",
    title: "Professional Tape-Ins",
    description: "Seamless, long-lasting results for salon professionals.",
    descriptionHtml: "<p>Seamless, long-lasting results for salon professionals.</p>",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Tape-In Extensions",
    tags: ["professional"],
    priceRange: {
      minVariantPrice: { amount: "159.00", currencyCode: "GBP" },
      maxVariantPrice: { amount: "189.00", currencyCode: "GBP" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=800&fit=crop",
      altText: "Professional Tape-Ins",
      width: 600,
      height: 800,
    },
    images: {
      edges: [
        { node: { url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=800&fit=crop", altText: "Tape-Ins", width: 600, height: 800 } },
      ],
    },
    variants: {
      edges: [
        { node: { id: "v8", title: "20 inches / Straight", availableForSale: true, priceV2: { amount: "159.00", currencyCode: "GBP" }, selectedOptions: [{ name: "Length", value: "20 inches" }, { name: "Style", value: "Straight" }] } },
      ],
    },
    options: [
      { id: "opt7", name: "Length", values: ["16 inches", "18 inches", "20 inches", "22 inches"] },
      { id: "opt8", name: "Style", values: ["Straight", "Wavy", "Curly"] },
    ],
  },
  {
    id: "5",
    handle: "luxury-weft-extensions",
    title: "Luxury Weft Extensions",
    description: "Professional-grade quality weft extensions.",
    descriptionHtml: "<p>Professional-grade quality weft extensions.</p>",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Weft Extensions",
    tags: ["professional", "luxury"],
    priceRange: {
      minVariantPrice: { amount: "249.00", currencyCode: "GBP" },
      maxVariantPrice: { amount: "299.00", currencyCode: "GBP" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop",
      altText: "Luxury Weft",
      width: 600,
      height: 800,
    },
    images: {
      edges: [
        { node: { url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop", altText: "Weft", width: 600, height: 800 } },
      ],
    },
    variants: {
      edges: [
        { node: { id: "v9", title: "18 inches / European", availableForSale: true, priceV2: { amount: "249.00", currencyCode: "GBP" }, selectedOptions: [{ name: "Length", value: "18 inches" }, { name: "Type", value: "European" }] } },
      ],
    },
    options: [
      { id: "opt9", name: "Length", values: ["16 inches", "18 inches", "20 inches"] },
      { id: "opt10", name: "Type", values: ["European", "Indian", "Russian"] },
    ],
  },
  {
    id: "6",
    handle: "hair-care-kit",
    title: "Premium Hair Care Kit",
    description: "Complete care kit for maintaining your extensions.",
    descriptionHtml: "<p>Complete care kit for maintaining your extensions.</p>",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Hair Care",
    tags: ["accessories"],
    priceRange: {
      minVariantPrice: { amount: "45.00", currencyCode: "GBP" },
      maxVariantPrice: { amount: "45.00", currencyCode: "GBP" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&h=800&fit=crop",
      altText: "Hair Care Kit",
      width: 600,
      height: 800,
    },
    images: {
      edges: [
        { node: { url: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&h=800&fit=crop", altText: "Care Kit", width: 600, height: 800 } },
      ],
    },
    variants: {
      edges: [
        { node: { id: "v10", title: "Standard Kit", availableForSale: true, priceV2: { amount: "45.00", currencyCode: "GBP" }, selectedOptions: [{ name: "Size", value: "Standard" }] } },
      ],
    },
    options: [
      { id: "opt11", name: "Size", values: ["Standard", "Deluxe"] },
    ],
  },
  {
    id: "7",
    handle: "invisible-clip-set",
    title: "Invisible Clip Set",
    description: "Ultra-discrete invisible clips for seamless blending.",
    descriptionHtml: "<p>Ultra-discrete invisible clips for seamless blending.</p>",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Clip-In Extensions",
    tags: ["invisible"],
    priceRange: {
      minVariantPrice: { amount: "179.00", currencyCode: "GBP" },
      maxVariantPrice: { amount: "199.00", currencyCode: "GBP" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=800&fit=crop",
      altText: "Invisible Clip Set",
      width: 600,
      height: 800,
    },
    images: {
      edges: [
        { node: { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=800&fit=crop", altText: "Invisible", width: 600, height: 800 } },
      ],
    },
    variants: {
      edges: [
        { node: { id: "v11", title: "16 inches", availableForSale: true, priceV2: { amount: "179.00", currencyCode: "GBP" }, selectedOptions: [{ name: "Length", value: "16 inches" }] } },
      ],
    },
    options: [
      { id: "opt12", name: "Length", values: ["14 inches", "16 inches", "18 inches"] },
    ],
  },
  {
    id: "8",
    handle: "permanent-bonding-kit",
    title: "Permanent Bonding Kit",
    description: "Professional bonding kit for long-term extensions.",
    descriptionHtml: "<p>Professional bonding kit for long-term extensions.</p>",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Accessories",
    tags: ["professional", "bonding"],
    priceRange: {
      minVariantPrice: { amount: "129.00", currencyCode: "GBP" },
      maxVariantPrice: { amount: "129.00", currencyCode: "GBP" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&h=800&fit=crop",
      altText: "Bonding Kit",
      width: 600,
      height: 800,
    },
    images: {
      edges: [
        { node: { url: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&h=800&fit=crop", altText: "Bonding", width: 600, height: 800 } },
      ],
    },
    variants: {
      edges: [
        { node: { id: "v12", title: "Pro Kit", availableForSale: true, priceV2: { amount: "129.00", currencyCode: "GBP" }, selectedOptions: [{ name: "Size", value: "Pro Kit" }] } },
      ],
    },
    options: [
      { id: "opt13", name: "Size", values: ["Pro Kit", "Starter Kit"] },
    ],
  },
];

// Helper functions
export function formatPrice(amount: string, currencyCode: string = "GBP"): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}

export function getAllProducts() {
  return mockProducts;
}

export function getProductByHandle(handle: string) {
  return mockProducts.find((p) => p.handle === handle);
}
