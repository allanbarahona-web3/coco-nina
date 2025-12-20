# STEP 7: Sold Out Strategy Implementation

## Overview
This document outlines two approaches for managing the "Sold Out" status of products in the Coco&Nina jewelry store.

---

## OPTION 1: Manual CMS / JSON-Based Approach (Recommended for MVP)

### How It Works
1. Update `available` field in mock data or CMS when item sells
2. ProductDetail.tsx conditionally renders UI based on `product.available`
3. No webhooks, no external dependencies

### Implementation

#### In `lib/mockData.ts`:
```typescript
const PRODUCTS: Product[] = [
  {
    id: '1',
    sku: 'COCO-ROSSY-DIC25-BR-001',
    name: 'Bronze Rose Pendant',
    price: 65,
    available: false,  // ← Change to false when sold
    // ... rest of fields
  },
  // ... other products
];
```

#### ProductDetail.tsx Already Handles This:
```typescript
{/* Top Section with availability badge */}
<ProductTopSection product={product} />
```

ProductTopSection will display:
- ✅ If `available: true` → Show "One of a kind" + "Only 1 available" + active "Buy Now" button
- ❌ If `available: false` → Show "Sold Out" (red indicator) + disable "Buy Now" button

### Changes Needed to ProductTopSection.tsx

Add this conditional rendering:

```typescript
// Button logic
const isSoldOut = !product.available;

return (
  // ... existing code ...
  <div className="flex flex-col gap-4">
    {/* Buy Now Button */}
    {isSoldOut ? (
      <button
        disabled
        className="bg-gray-300 text-gray-500 cursor-not-allowed px-6 py-3 rounded-lg font-semibold"
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        Sold Out
      </button>
    ) : (
      <a
        href="/checkout?product={product.id}"
        className="bg-[#8A6A2F] hover:bg-[#755824] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
      >
        <ShoppingCart className="w-5 h-5" />
        Buy Now
      </a>
    )}

    {/* WhatsApp Button - Always Available */}
    <a
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#2F6F5E] hover:bg-[#275E50] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
    >
      <MessageCircle className="w-5 h-5" />
      {isSoldOut ? 'Check Availability' : 'Inquire'}
    </a>
  </div>
);
```

### Pros
✅ Simple to implement  
✅ No external dependencies  
✅ Fast updates (just edit the JSON)  
✅ Good for MVP stage  
✅ Full control over timing  

### Cons
❌ Manual updates required  
❌ Doesn't sync with payment system automatically  
❌ Risk of inventory mismatch if not careful  

### Deployment Flow
1. Item sells → Update `available: false` in mockData.ts (or CMS)
2. Commit + push to GitHub
3. Vercel auto-deploys
4. Product shows as "Sold Out" immediately

---

## OPTION 2: Automated Stripe Webhook Approach (Future: When Payment System Integrated)

### How It Works
1. Customer purchases via Stripe Checkout
2. Stripe sends webhook event (charge.succeeded)
3. API endpoint receives webhook, updates `available: false`
4. Database auto-updates in real-time
5. Product page reflects status instantly

### Prerequisites
- Stripe account & API keys configured
- Payment processing page created
- API route for webhook handling
- Database (Supabase, MongoDB, or similar)

### Implementation Steps

#### Step 1: Create API Endpoint for Webhook

File: `app/api/webhooks/stripe/route.ts`

```typescript
import { stripe } from '@/lib/stripe';
import { updateProductAvailability } from '@/lib/db';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    return new Response('Webhook signature verification failed', { status: 400 });
  }

  if (event.type === 'charge.succeeded') {
    const charge = event.data.object;
    const productId = charge.metadata.product_id; // Must be included in checkout
    
    // Mark as sold out
    await updateProductAvailability(productId, false);
  }

  return Response.json({ success: true });
}
```

#### Step 2: Update Checkout to Include Product ID

```typescript
// In payment/checkout page
const stripe = await loadStripe(STRIPE_KEY);

const session = await createCheckoutSession({
  items: [{ productId: '1', name: product.name, price: product.price * 100 }],
  metadata: { product_id: '1' }, // ← Product ID for webhook
});

// Redirect to checkout
stripe.redirectToCheckout({ sessionId: session.id });
```

#### Step 3: Database Query to Update Product

File: `lib/db.ts`

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function updateProductAvailability(
  productId: string,
  available: boolean
) {
  const { error } = await supabase
    .from('products')
    .update({ available })
    .eq('id', productId);

  if (error) throw error;
}
```

#### Step 4: Register Webhook with Stripe

```bash
# Terminal command
stripe listen --forward-to http://localhost:3000/api/webhooks/stripe

# For production, register in Stripe Dashboard:
# Settings > Webhooks > Add endpoint
# URL: https://yourdomain.com/api/webhooks/stripe
# Events: charge.succeeded
```

### Pros
✅ Fully automated  
✅ Syncs with payment system  
✅ Real-time inventory updates  
✅ No manual intervention  
✅ Professional enterprise solution  

### Cons
❌ Requires payment system integration  
❌ More complex infrastructure  
❌ Database setup needed  
❌ Overkill for MVP phase  

---

## Recommended Approach for Coco&Nina

### Current Stage (MVP): **OPTION 1 (Manual)**
- Simple to manage
- Perfect for handmade jewelry (low volume)
- Can update within 5 minutes of sale
- No infrastructure overhead

### Future Stage (When Revenue Scales): **OPTION 2 (Automated)**
- Implement when you have payment processing
- Add database storage
- Set up Stripe webhooks
- Transition smoothly from JSON to database

---

## Implementation Checklist for OPTION 1

- [ ] Update ProductTopSection.tsx to show "Sold Out" button when `available: false`
- [ ] Update "Buy Now" button logic (disable if sold)
- [ ] Update "Inquire" button text (change to "Check Availability" if sold)
- [ ] Test in dev: Set `available: false` and verify UI changes
- [ ] Deploy to Vercel
- [ ] Document in README when/how to mark products as sold

---

## Implementation Checklist for OPTION 2 (Future)

- [ ] Stripe account & API keys setup
- [ ] Create payment checkout page
- [ ] Create `/api/webhooks/stripe/route.ts`
- [ ] Create `updateProductAvailability()` database function
- [ ] Set up Supabase or MongoDB
- [ ] Migrate products from mockData to database
- [ ] Test webhook locally with `stripe listen`
- [ ] Register webhook in Stripe Dashboard
- [ ] Test end-to-end payment → sold out status

---

## Current Product Schema (mockData.ts)

```typescript
interface Product {
  id: string;
  sku: string;
  name: string;
  price: number;
  available: boolean; // ← This field controls sold out status
  creator: string;
  collection: string;
  collectionDate: string;
  origin: string;
  category: ProductCategory;
  shortDescription: string;
  fullDescription?: string;
  materials: string[];
  techniques: string[];
  tags: string[];
  image: ProductImage;
  gallery?: string[];
  stock?: number;
}
```

---

## Questions?

- **How to test locally?** Edit `lib/mockData.ts`, set `available: false`, run `npm run dev`
- **How long to deploy after update?** ~30 seconds via Vercel (auto-deploy from GitHub)
- **Can I use both options together?** Yes, start with Option 1, add Option 2 when payment system is ready

---

**Status**: Recommended → Implement **OPTION 1** now, plan **OPTION 2** for Q1 2026 when payment processing is added.
