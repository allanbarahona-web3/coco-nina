# API Integration Guide

This document describes how the Coco Nina Jewelry frontend integrates with the NestJS backend API.

## Overview

The frontend supports two modes:

1. **Mock Data Mode** (default): Uses static data from `lib/mockData.ts`
2. **API Mode**: Fetches data from NestJS backend when `NEXT_PUBLIC_API_BASE_URL` is configured

The system automatically falls back to mock data if:
- API URL is not configured
- API request fails
- API returns invalid data

## Configuration

### Environment Variable

```env
NEXT_PUBLIC_API_BASE_URL=https://api.coconinajewelry.com
```

Leave empty or unset to use mock data mode.

## API Endpoints

### 1. Get All Products

**Endpoint**: `GET /public/products`

**Purpose**: Fetch all available jewelry products

**Request**: No parameters required

**Expected Response Format** (supports two formats):

Format 1 - Wrapped response:
```json
{
  "data": [
    {
      "id": "br-001",
      "name": "Pearl Embrace Bracelet",
      "category": "bracelets",
      "shortDescription": "Elegant wire-wrapped bracelet...",
      "materials": ["Freshwater Pearls", "Bronze AAA Wire"],
      "techniques": ["Wire Wrapping", "Alambrismo"],
      "tags": ["Unique Piece", "Handmade"],
      "image": {
        "src": "products/bracelet-001.jpg",
        "alt": "Pearl bracelet"
      },
      "price": 45.99,
      "available": true
    }
  ],
  "success": true,
  "meta": {
    "total": 12
  }
}
```

Format 2 - Direct array:
```json
[
  {
    "id": "br-001",
    "name": "Pearl Embrace Bracelet",
    // ... same product structure
  }
]
```

**Frontend Handler**: `lib/api.ts > getProducts()`

**Usage in Code**:
```typescript
// Server Component (app/catalog/page.tsx)
const products = await getProducts();
```

**Caching**: ISR with 60-second revalidation

---

### 2. Get Product by ID

**Endpoint**: `GET /public/products/:id`

**Purpose**: Fetch a single product by its ID

**Request Parameters**:
- `id` (path parameter): Product identifier (e.g., "br-001")

**Expected Response** (supports two formats):

Format 1:
```json
{
  "data": {
    "id": "br-001",
    "name": "Pearl Embrace Bracelet",
    // ... full product object
  },
  "success": true
}
```

Format 2:
```json
{
  "id": "br-001",
  "name": "Pearl Embrace Bracelet",
  // ... full product object
}
```

**Frontend Handler**: `lib/api.ts > getProductById(id)`

**Usage in Code**:
```typescript
const product = await getProductById('br-001');
```

---

### 3. Submit Contact Form

**Endpoint**: `POST /api/contact`

**Purpose**: Submit customer inquiry/contact form

**Request Headers**:
```
Content-Type: application/json
```

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "whatsapp": "+50612345678",
  "message": "I'm interested in the Pearl Embrace Bracelet"
}
```

**Field Validations**:
- `name`: Required, string
- `email`: Required, valid email format
- `whatsapp`: Optional, string
- `message`: Required, string

**Expected Response**:
```json
{
  "success": true,
  "message": "Contact form submitted successfully"
}
```

**Error Response**:
```json
{
  "success": false,
  "message": "Validation failed",
  "error": "Email is required",
  "statusCode": 400
}
```

**Frontend Handler**: `lib/api.ts > submitContactForm(formData)`

**Usage in Code**:
```typescript
// Client Component (components/ContactForm.tsx)
try {
  await submitContactForm({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello!'
  });
  // Show success message
} catch (error) {
  // Handle error
}
```

---

## TypeScript Types

All types are defined in `lib/types.ts`:

### Product Interface

```typescript
interface Product {
  id: string;                           // Unique identifier
  name: string;                         // Display name
  category: ProductCategory;            // Category slug
  shortDescription: string;             // Brief description
  materials: string[];                  // Materials used
  techniques: string[];                 // Crafting techniques
  tags: string[];                       // Product tags
  image: ProductImage;                  // Image data
  price?: number;                       // Optional price
  available?: boolean;                  // Optional availability
}

type ProductCategory = 'bracelets' | 'necklaces' | 'rings' | 'earrings';

interface ProductImage {
  src: string;                          // Image path or URL
  alt: string;                          // Alt text for accessibility
}
```

### Category Interface

```typescript
interface Category {
  slug: ProductCategory;                // Category identifier
  name: string;                         // Display name
  description: string;                  // Category description
  image: CategoryImage;                 // Category image
}

interface CategoryImage {
  src: string;
  alt: string;
}
```

### API Response Wrapper

```typescript
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
  };
}
```

---

## Error Handling

### Frontend Behavior

1. **API Not Configured**: Uses mock data, logs `[API] Using mock data`
2. **API Request Fails**: Catches error, logs error message, falls back to mock data
3. **Invalid Response Format**: Logs warning, falls back to mock data

### Error Logging

All API operations log to console:

```
[API] Using mock data (API_BASE_URL not configured)
[API] Fetching products from: https://api.example.com/public/products
[API] Failed to fetch products, using mock data: Error message
```

### Example Error Handling in NestJS

```typescript
@Get('public/products')
async getProducts() {
  try {
    const products = await this.productsService.findAll();
    return {
      data: products,
      success: true,
      meta: { total: products.length }
    };
  } catch (error) {
    throw new HttpException(
      {
        success: false,
        message: 'Failed to fetch products',
        error: error.message
      },
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
}
```

---

## Testing the Integration

### 1. Mock Data Mode (No API)

```bash
# Ensure NEXT_PUBLIC_API_BASE_URL is not set
pnpm dev
```

Expected console output:
```
[API] Using mock data (API_BASE_URL not configured)
```

### 2. API Mode (With Backend)

```bash
# Set API URL in .env.local
echo "NEXT_PUBLIC_API_BASE_URL=https://api.yourdomain.com" >> .env.local
pnpm dev
```

Expected console output (on success):
```
[API] Fetching products from: https://api.yourdomain.com/public/products
```

Expected console output (on failure):
```
[API] Fetching products from: https://api.yourdomain.com/public/products
[API] Failed to fetch products, using mock data: Error: API Error: 500
```

### 3. Test Contact Form

Visit `http://localhost:3000/#contact` and submit the form.

**Without API**:
- Form submits successfully (mock mode)
- Console shows: `[API] Contact form submission skipped (API not configured)`

**With API**:
- Form sends POST request to `/api/contact`
- Success: Shows "Message Sent!" confirmation
- Error: Shows error message in form

---

## Performance & Caching

### ISR (Incremental Static Regeneration)

The catalog page uses ISR with 60-second revalidation:

```typescript
// app/catalog/page.tsx
export const revalidate = 60;
```

This means:
- First request: Generates static page
- Subsequent requests: Serves cached page
- After 60 seconds: Regenerates page in background
- Users always get fast responses

### Image Optimization

Images are optimized through Next.js Image component:

```typescript
<Image
  src={getImageUrl(product.image.src)}
  alt={product.image.alt}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

Configure remote image domains in `next.config.js`:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**.digitaloceanspaces.com',
    },
  ],
}
```

---

## Future Enhancements

### Planned API Endpoints

1. **Get Categories** (currently uses mock data)
   ```
   GET /public/categories
   ```

2. **Filter Products by Category** (currently client-side)
   ```
   GET /public/products?category=bracelets
   ```

3. **Search Products**
   ```
   GET /public/products?search=pearl
   ```

4. **Pagination**
   ```
   GET /public/products?page=1&limit=12
   ```

### Adding New Endpoints

1. **Define the function in `lib/api.ts`**:

```typescript
export async function searchProducts(query: string): Promise<Product[]> {
  if (!isApiConfigured()) {
    return mockProducts.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  try {
    const response = await apiFetch<ApiResponse<Product[]>>(
      `/public/products?search=${encodeURIComponent(query)}`
    );
    return response.data;
  } catch (error) {
    console.error('[API] Search failed:', error);
    return [];
  }
}
```

2. **Use in your component**:

```typescript
const results = await searchProducts('pearl');
```

---

## Security Considerations

1. **API URL is Public**: `NEXT_PUBLIC_` prefix exposes the URL to client
2. **No Authentication**: Public endpoints don't require auth
3. **CORS**: Ensure your NestJS backend allows requests from your frontend domain
4. **Rate Limiting**: Implement rate limiting on backend for contact form
5. **Input Validation**: Always validate on both frontend and backend

---

## Troubleshooting

### Issue: Products not showing

**Check**:
1. Is `NEXT_PUBLIC_API_BASE_URL` set correctly?
2. Check browser console for `[API]` logs
3. Verify API is running and accessible
4. Check Network tab for failed requests
5. Verify API response format matches expected structure

### Issue: Images not loading

**Check**:
1. Is image domain allowed in `next.config.js`?
2. Check image URLs in browser Network tab
3. Verify `NEXT_PUBLIC_CDN_BASE_URL` is set correctly
4. Check CORS settings on CDN/Spaces

### Issue: Contact form not submitting

**Check**:
1. Check console for errors
2. Verify `/api/contact` endpoint exists on backend
3. Check Network tab for request/response
4. Verify backend CORS allows POST requests
5. Check backend logs for errors

---

## Support

For issues or questions:
- Check console logs for `[API]` messages
- Review Network tab in browser DevTools
- Check backend logs
- Review this documentation

Contact: info@coconinajewelry.com
