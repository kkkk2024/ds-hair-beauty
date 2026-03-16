import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-display tracking-[0.2em] mb-4">D.S</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md">
              Premium hair care and beauty products for salon-quality results at home.
              Discover our curated collection of professional-grade formulas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white text-sm transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 text-sm">Contact Us</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Shipping Info</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Returns</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} D.S HAIR & BEAUTY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-500 text-xs">Privacy Policy</span>
            <span className="text-gray-500 text-xs">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
