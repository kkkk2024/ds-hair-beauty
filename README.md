# D.S HAIR & BEAUTY - Next.js 14 Shopify Storefront

A premium e-commerce frontend built with Next.js 14, Tailwind CSS, and Shopify Storefront API.

## Features

- **Next.js 14 App Router** - Modern React server components architecture
- **Shopify Storefront API** - Full product catalog integration
- **Shopping Cart** - Persistent cart with localStorage
- **Checkout** - Seamless redirect to Shopify checkout
- **Premium Design** - Minimalist black & white aesthetic
- **Responsive** - Mobile-first design

## Getting Started

### 1. Install Dependencies

```bash
cd ds-hair-beauty
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and add your Shopify credentials:

```bash
cp .env.example .env.local
```

You'll need:
- `SHOPIFY_STORE_DOMAIN` - Your store domain (e.g., `d-s-hair-beauty.myshopify.com`)
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN` - Storefront API access token

### 3. Get Shopify Storefront Access Token

1. Log in to your Shopify Admin
2. Go to **Settings** → **Apps and sales channels** → **Develop apps**
3. Click **Create an app**
4. Configure Admin API scopes: `unauthenticated_read_product_listings`, `unauthenticated_read_products`
5. Click **Save**
6. Click **Reveal token** to get your Storefront access token

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
ds-hair-beauty/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── products/
│   │   ├── page.tsx        # Product listing
│   │   └── [handle]/       # Product detail
│   └── cart/
│       └── page.tsx        # Shopping cart
├── components/
│   ├── header.tsx          # Site header
│   ├── footer.tsx          # Site footer
│   ├── cart-provider.tsx   # Cart context provider
│   └── add-to-cart-button.tsx
├── lib/
│   ├── shopify.ts          # Shopify API client
│   ├── cart.ts             # Cart utilities
│   └── utils.ts            # Helper functions
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

### Theme Colors

Edit `tailwind.config.ts` to customize colors:

```typescript
// Example: Change primary color
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  // ...
}
```

### Logo

Update the logo in `components/header.tsx`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

```
SHOPIFY_STORE_DOMAIN=d-s-hair-beauty.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token-here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## License

MIT
