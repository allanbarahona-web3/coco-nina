# Coco Nina Jewelry - Handmade Jewelry Ecommerce Website

A premium Next.js 14+ ecommerce website for handmade jewelry, built with TypeScript, Tailwind CSS, and the App Router.

## 🎨 Features

- **Modern Design**: Apple-like minimal and elegant design
- **Responsive**: Fully responsive across mobile, tablet, and desktop
- **Performance**: Optimized images with next/image and remote CDN support
- **SEO Ready**: Proper metadata, semantic HTML, and accessibility
- **Category Filtering**: Dynamic catalog filtering via query parameters
- **WhatsApp Integration**: Floating button and product inquiry functionality
- **Contact Form**: Fully functional with validation (API integration ready)
- **TypeScript**: Full type safety across the application

## 📁 Project Structure

```
coco-nina-jewelry/
├── app/
│   ├── catalog/
│   │   └── page.tsx          # Catalog page with filtering
│   ├── layout.tsx            # Root layout with Navbar, Footer, WhatsApp
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── CategoryCard.tsx      # Category card for home page
│   ├── ContactForm.tsx       # Contact form with validation
│   ├── Footer.tsx            # Site footer
│   ├── Hero.tsx              # Hero section
│   ├── Navbar.tsx            # Navigation bar
│   ├── ProductCard.tsx       # Product card for catalog
│   └── WhatsAppFloat.tsx     # Floating WhatsApp button
├── lib/
│   ├── api.ts                # API client with error handling & fallback
│   ├── mockData.ts           # Mock product and category data
│   ├── types.ts              # TypeScript interfaces
│   └── utils.ts              # Utility functions
├── .env.example              # Environment variables template
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager

### Installation

1. **Clone or navigate to the project directory**

```bash
cd coco-nina-jewelry
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Set up environment variables**

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values:

```env
# API Configuration (NestJS Backend)
# If not set, the app will use mock data
# Example: https://api.coconinajewelry.com
NEXT_PUBLIC_API_BASE_URL=

# CDN Configuration for DigitalOcean Spaces
NEXT_PUBLIC_CDN_BASE_URL=https://your-space.nyc3.digitaloceanspaces.com

# WhatsApp Configuration
NEXT_PUBLIC_WHATSAPP_NUMBER=+506XXXXXXXX
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hello, I saw your jewelry catalog and would like to inquire about a piece.

# Site Configuration
NEXT_PUBLIC_SITE_NAME=Coco Nina Jewelry
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

4. **Run the development server**

```bash
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Configure environment variables in the Vercel dashboard
6. Deploy!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Login to Vercel**

```bash
vercel login
```

3. **Deploy**

```bash
vercel
```

4. **Add environment variables**

```bash
vercel env add NEXT_PUBLIC_CDN_BASE_URL
vercel env add NEXT_PUBLIC_WHATSAPP_NUMBER
vercel env add NEXT_PUBLIC_WHATSAPP_MESSAGE
```

5. **Deploy to production**

```bash
vercel --prod
```

## 📦 DigitalOcean Spaces Configuration

### Setting up DigitalOcean Spaces for Images

1. **Create a Space** on DigitalOcean
2. **Upload your images** to the Space
3. **Enable CDN** for faster delivery
4. **Configure CORS** (if needed):

```json
[
  {
    "AllowedOrigins": ["*"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedHeaders": ["*"],
    "MaxAgeSeconds": 3600
  }
]
```

5. **Update** `NEXT_PUBLIC_CDN_BASE_URL` in your environment variables

### Image URL Structure

The application automatically handles image URLs:

- **Remote URLs** (starting with `http://` or `https://`): Used as-is
- **Relative paths**: Prefixed with `NEXT_PUBLIC_CDN_BASE_URL`

Example:
```typescript
// In mockData.ts
image: {
  src: 'products/bracelet-001.jpg', // Relative path
  alt: 'Beautiful bracelet'
}

// Becomes: https://your-cdn.com/products/bracelet-001.jpg
```

## 🎯 Updating Product Data

Edit [`lib/mockData.ts`](lib/mockData.ts) to update products:

```typescript
export const products: Product[] = [
  {
    id: 'br-001',
    name: 'Pearl Embrace Bracelet',
    category: 'bracelets',
    shortDescription: 'Elegant wire-wrapped bracelet...',
    materials: ['Freshwater Pearls', 'Bronze AAA Wire'],
    techniques: ['Wire Wrapping', 'Alambrismo'],
    tags: ['Unique Piece', 'Handmade', 'Premium'],
    image: {
      src: 'products/bracelet-001.jpg',
      alt: 'Pearl bracelet'
    }
  },
  // Add more products...
];
```

## 🔌 Backend Integration (Future)

The application is configured to fetch data from a NestJS backend API. It automatically falls back to mock data if the API is not available.

### API Integration

The app supports two modes:

1. **Mock Data Mode** (default): Uses local mock data from `lib/mockData.ts`
2. **API Mode**: Fetches from NestJS backend when `NEXT_PUBLIC_API_BASE_URL` is set

### Setting up the NestJS Backend

1. **Configure the API URL** in `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.coconinajewelry.com
```

2. **Required NestJS Endpoints**:

The frontend expects these endpoints from your NestJS backend:

#### Get All Products
```
GET /public/products
Response: Product[] or { data: Product[] }
```

#### Get Product by ID
```
GET /public/products/:id
Response: Product or { data: Product }
```

#### Submit Contact Form
```
POST /api/contact
Body: { name: string, email: string, whatsapp?: string, message: string }
Response: { success: boolean, message?: string }
```

### Product Schema

Your NestJS API should return products in this format:

```typescript
{
  id: string;
  name: string;
  category: 'bracelets' | 'necklaces' | 'rings' | 'earrings';
  shortDescription: string;
  materials: string[];
  techniques: string[];
  tags: string[];
  image: {
    src: string;
    alt: string;
  };
  price?: number;
  available?: boolean;
}
```

### API Client Features

The API client (`lib/api.ts`) includes:

- ✅ Automatic fallback to mock data on errors
- ✅ Request/response logging
- ✅ Error handling with descriptive messages
- ✅ TypeScript type safety
- ✅ Next.js ISR support (60-second revalidation)
- ✅ Support for multiple response formats

### Testing the API Integration

1. **Without API** (uses mock data):
```bash
# Don't set NEXT_PUBLIC_API_BASE_URL
pnpm dev
```

2. **With API**:
```bash
# Set your API URL
echo "NEXT_PUBLIC_API_BASE_URL=https://api.yourdomain.com" >> .env.local
pnpm dev
```

Check the console for API logs:
- `[API] Using mock data` - Mock data mode
- `[API] Fetching products from: ...` - API mode
- `[API] Failed to fetch products` - API error (falls back to mock data)

---

## 📝 Legacy Backend Integration Notes

The contact form is fully integrated with the API helper. To customize further:

**Edit [`components/ContactForm.tsx`](components/ContactForm.tsx)** for custom behavior:

```typescript
// The form now uses the API helper automatically
const handleSubmit = async (e: FormEvent) => {
  // ... validation ...
  
  try {
    await submitContactForm(formData);
    setIsSubmitted(true);
  } catch (error) {
    // Handle error
  }
};
```

**Customize API behavior** in [`lib/api.ts`](lib/api.ts):

```typescript
export async function submitContactForm(formData: ContactFormData) {
  // Modify headers, add authentication, etc.
}
```

## 🛠️ Build for Production

```bash
pnpm build
pnpm start
```

## 📱 Pages

- **Home (`/`)**: Hero section, about, materials, category grid, contact form
- **Catalog (`/catalog`)**: Product grid with category filtering
  - Filter by category: `/catalog?cat=bracelets`

## 🎨 Customization

### Colors

Edit [`tailwind.config.ts`](tailwind.config.ts) to change the color scheme:

```typescript
colors: {
  primary: {
    // Your brand colors
  },
}
```

### Fonts

The project uses:
- **Inter** for body text
- **Playfair Display** for headings

To change fonts, edit [`app/layout.tsx`](app/layout.tsx).

### Content

- **Home page content**: Edit [`app/page.tsx`](app/page.tsx)
- **Site metadata**: Edit [`app/layout.tsx`](app/layout.tsx)
- **Footer links**: Edit [`components/Footer.tsx`](components/Footer.tsx)

## 🔍 SEO

The site includes:
- Proper meta tags and Open Graph data
- Semantic HTML structure
- Alt text for all images
- Descriptive link text
- Sitemap ready (add `sitemap.xml` for production)

## 📧 Contact & Support

For questions or custom development:
- Email: info@coconinajewelry.com
- WhatsApp: Configured via environment variable

## 📄 License

This project is proprietary software for Coco Nina Jewelry.

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**
