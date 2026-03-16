import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductByHandle, formatPrice, MockProduct } from "@/lib/mock-data";
import { AddToCartButton } from "@/components/add-to-cart-button";

interface Props {
  params: { handle: string };
}

export async function generateMetadata({ params }: Props) {
  const product = getProductByHandle(params.handle);
  
  if (!product) {
    return { title: "Product Not Found | D.S HAIR & BEAUTY" };
  }

  return {
    title: `${product.title} | D.S HAIR & BEAUTY`,
    description: product.description,
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductByHandle(params.handle);

  if (!product) {
    notFound();
  }

  const firstVariant = product.variants.edges[0]?.node;
  const price = firstVariant?.priceV2.amount || product.priceRange.minVariantPrice.amount;
  const currencyCode = firstVariant?.priceV2.currencyCode || product.priceRange.minVariantPrice.currencyCode;
  const isAvailable = firstVariant?.availableForSale ?? true;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] relative bg-gray-100 overflow-hidden">
              {product.featuredImage ? (
                <Image
                  src={product.featuredImage.url}
                  alt={product.featuredImage.altText || product.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>
            
            {/* Additional Images */}
            {product.images.edges.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.edges.map((edge, index) => (
                  <div
                    key={index}
                    className="aspect-square relative bg-gray-100 overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={edge.node.url}
                      alt={edge.node.altText || `${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="md:py-8">
            {product.vendor && (
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
                {product.vendor}
              </p>
            )}
            
            <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
              {product.title}
            </h1>
            
            <p className="text-2xl font-light mb-6">
              {formatPrice(price, currencyCode)}
            </p>
            
            <div className="prose prose-sm max-w-none text-gray-600 mb-8">
              <p>{product.description}</p>
            </div>

            {/* Variants */}
            {product.variants.edges.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 uppercase tracking-wide">
                  Options
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.edges.map((edge) => (
                    <button
                      key={edge.node.id}
                      className="px-4 py-2 border border-gray-300 hover:border-black transition-colors text-sm"
                    >
                      {edge.node.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <AddToCartButton
              product={{
                id: product.id,
                handle: product.handle,
                title: product.title,
                variantId: firstVariant?.id || "mock-variant",
                variantTitle: firstVariant?.title || "Default",
                price: parseFloat(price),
                image: product.featuredImage?.url || "",
              }}
              available={isAvailable}
            />

            {/* Product Details */}
            <div className="mt-12 border-t pt-8">
              <h3 className="text-sm font-medium uppercase tracking-wide mb-4">
                Product Details
              </h3>
              <dl className="space-y-2 text-sm">
                {product.productType && (
                  <div className="flex">
                    <dt className="text-gray-500 w-32">Type:</dt>
                    <dd>{product.productType}</dd>
                  </div>
                )}
                {product.tags.length > 0 && (
                  <div className="flex">
                    <dt className="text-gray-500 w-32">Tags:</dt>
                    <dd>{product.tags.join(", ")}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
