import Link from "next/link";
import Image from "next/image";
import { getAllProducts, formatPrice, MockProduct } from "@/lib/mock-data";

export default function HomePage() {
  const products: MockProduct[] = getAllProducts().slice(0, 8);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2074&q=80"
          alt="D.S HAIR & BEAUTY"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4">
          <p className="text-sm tracking-[0.3em] mb-4 uppercase">Premium Hair Care</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-[0.2em] mb-6">
            D.S
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-widest mb-8">
            HAIR & BEAUTY
          </p>
          <Link href="/products" className="inline-block bg-white text-black px-8 py-3 tracking-widest hover:bg-gray-200 transition-colors">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover our curated collection of premium hair care products, 
            designed for salon-quality results at home.
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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
                  {product.tags.includes("bestseller") && (
                    <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">
                      Best Seller
                    </span>
                  )}
                  {product.tags.includes("new") && (
                    <span className="absolute top-3 right-3 border border-black text-black text-xs px-2 py-1 bg-white">
                      New
                    </span>
                  )}
                </div>
                <h3 className="font-medium mb-1 group-hover:text-gray-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-900 font-semibold">
                  {formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">No products available yet.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/products" className="inline-block border border-black px-8 py-3 tracking-widest hover:bg-black hover:text-white transition-colors">
            View All Products
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1470&q=80"
                alt="Premium Hair Care"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] mb-6">
                Premium Quality
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At D.S HAIR & BEAUTY, we believe everyone deserves access to professional-grade 
                hair care products. Our carefully curated selection features the finest formulations 
                from around the world.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Each product is selected for its proven effectiveness, premium ingredients, and 
                ability to transform your hair care routine into a luxurious salon experience.
              </p>
              <Link href="/products" className="inline-block bg-black text-white px-8 py-3 tracking-widest hover:bg-gray-800 transition-colors">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-black">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-lg tracking-wider uppercase mb-2">Free Shipping</h3>
              <p className="text-gray-500 text-sm">On orders over £100</p>
            </div>
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-black">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg tracking-wider uppercase mb-2">Secure Payment</h3>
              <p className="text-gray-500 text-sm">100% Secure checkout</p>
            </div>
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-black">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg tracking-wider uppercase mb-2">Premium Quality</h3>
              <p className="text-gray-500 text-sm">Professional-grade formulas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
