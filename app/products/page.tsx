import Link from "next/link";
import Image from "next/image";
import { getAllProducts, formatPrice, MockProduct } from "@/lib/mock-data";

export const metadata = {
  title: "Shop All Products | D.S HAIR & BEAUTY",
  description: "Browse our complete collection of premium hair care and beauty products.",
};

export default async function ProductsPage() {
  const products: MockProduct[] = getAllProducts();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] mb-4">
            All Products
          </h1>
          <p className="text-gray-400 tracking-wide">
            {products.length} products available
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.handle}`}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                  {product.featuredImage ? (
                    <Image
                      src={product.featuredImage.url}
                      alt={product.featuredImage.altText || product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                      No Image
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium">View Details</span>
                  </div>
                </div>
                <h3 className="font-medium mb-1 group-hover:text-gray-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-900 font-semibold">
                  {formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
                </p>
                {product.tags.includes("bestseller") && (
                  <span className="inline-block mt-1 text-xs bg-black text-white px-2 py-0.5">
                    Best Seller
                  </span>
                )}
                {product.tags.includes("new") && (
                  <span className="inline-block mt-1 text-xs border border-black px-2 py-0.5 ml-1">
                    New
                  </span>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">No products available.</p>
          </div>
        )}
      </section>
    </div>
  );
}
