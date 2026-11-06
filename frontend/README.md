# UrbanCart — Production React Frontend

This frontend is the React conversion of the **UrbanCart E-Commerce Platform**, transformed from Google Stitch designs into a production-grade, componentized React application.

---

## 🏗️ Architecture & Folder Structure

```
frontend/
├── index.html                 # HTML shell with Google Fonts & Material Symbols
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration with React plugin
├── tailwind.config.js         # Design tokens from DESIGN.md (colors, typography, spacing)
├── postcss.config.js          # Tailwind & Autoprefixer
├── src/
│   ├── main.jsx               # React DOM entrypoint
│   ├── App.jsx                # Router configuration & Global Toast provider
│   ├── index.css              # Tailwind base, utilities, tabular numerals, scrollbar rules
│   │
│   ├── context/               # Global React State Management
│   │   ├── CartContext.jsx    # Cart items, live quantity, discount, coupons, totals
│   │   ├── WishlistContext.jsx# Wishlist item toggles and count
│   │   └── AppContext.jsx     # Quick Look modal state, search query, global alerts
│   │
│   ├── data/
│   │   └── mockData.js        # High-res assets, catalog products, profile, active orders
│   │
│   ├── components/
│   │   ├── common/            # Shared cross-page UI components
│   │   │   ├── AnnouncementBar.jsx # Free shipping promotional strip
│   │   │   ├── Header.jsx          # Top blur navigation bar with cart & wishlist counters
│   │   │   ├── BottomNav.jsx       # 5-tab mobile navigation bar
│   │   │   └── QuickLookModal.jsx  # Bottom sheet preview drawer with instant "Add to Bag"
│   │   │
│   │   ├── home/              # Landing page modules
│   │   │   ├── HeroBanner.jsx      # Autumn/Winter campaign hero with 40% OFF CTA
│   │   │   ├── CategoryCarousel.jsx# Horizontal exploration chips with photos
│   │   │   ├── FlashDropTimer.jsx  # Real-time ticking countdown timer
│   │   │   ├── TrendingSection.jsx # Curated grid with wishlist & quick-add feedback
│   │   │   ├── ReviewsCarousel.jsx # Smooth scroll customer reviews track
│   │   │   └── VipBanner.jsx       # UrbanCart Society newsletter subscription form
│   │   │
│   │   ├── catalog/           # Catalog & filter modules
│   │   │   ├── FilterModal.jsx     # Bottom sheet filter drawer (Price, Rating, Delivery)
│   │   │   ├── SortDropdown.jsx    # Sort options (Featured, Price, Rating, Newest)
│   │   │   └── ProductCard.jsx     # Grid mode (3:4 ratio) and List mode responsive cards
│   │   │
│   │   ├── product/           # Product detail modules
│   │   │   ├── ImageGallery.jsx    # 4-slide interactive carousel with 360° Studio badge
│   │   │   ├── ProductInfo.jsx     # Vital data, ratings, EMI calculator, price breakdown
│   │   │   ├── VariantSelector.jsx # Colorway swatches & Audio Bundle editions
│   │   │   ├── PincodeChecker.jsx  # 6-digit delivery availability checker
│   │   │   ├── HighlightsGrid.jsx  # Engineering highlights bento grid
│   │   │   └── StickyBottomBar.jsx # Sticky purchase bar with stepper & "Buy Now"
│   │   │
│   │   ├── cart/              # Shopping bag modules
│   │   │   ├── FreeShippingMeter.jsx # Dynamic progress bar tracking free delivery threshold
│   │   │   ├── CartItem.jsx          # Bag item with quantity stepper & remove trigger
│   │   │   ├── CouponSection.jsx     # URBAN10, SAVE500, FREESHIP instant validation
│   │   │   └── PriceDetails.jsx      # Subtotal, product savings, and total payable
│   │   │
│   │   ├── checkout/          # Express checkout modules
│   │   │   ├── CheckoutStepper.jsx        # 3-step address/delivery/payment progress
│   │   │   ├── AddressSection.jsx         # Saved destination card with inline change trigger
│   │   │   ├── DeliverySpeedSelector.jsx  # Standard vs Express Next-Day radio options
│   │   │   ├── PaymentMethodSelector.jsx  # Instant UPI (VPA verification), Card, NetBanking, COD
│   │   │   └── OrderSummaryAccordion.jsx  # Collapsible item preview with total
│   │   │
│   │   └── account/           # Account & orders tracking modules
│   │       ├── ProfileHeader.jsx     # Bento user card with UrbanCart Black VIP status
│   │       ├── ActiveOrderTracker.jsx# Live Bluedart Air cargo status with vertical 4-step stepper
│   │       └── AccountLinks.jsx      # Concierge warranty tile & account settings list
│   │
│   └── pages/                 # Dedicated directory for each and every page
│       ├── HomePage/
│       │   └── index.jsx      # / -> Home & Curated Discover experience
│       ├── CatalogPage/
│       │   └── index.jsx      # /catalog -> Full Catalog with live filters & search
│       ├── ProductDetailsPage/
│       │   └── index.jsx      # /product/:id -> Interactive product specifications
│       ├── CartPage/
│       │   └── index.jsx      # /cart -> Shopping bag with dynamic shipping meter & promo
│       ├── CheckoutPage/
│       │   └── index.jsx      # /checkout -> Express checkout with simulation sandbox
│       └── AccountPage/
│           └── index.jsx      # /account -> Profile, order tracking & settings
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0 or higher) & npm (or pnpm/yarn)

### Installation & Development Run
```bash
cd frontend
npm install
npm run dev
```
The application will launch on `http://localhost:3000`.

### Building for Production
```bash
npm run build
npm run preview
```

---

## 🎨 Design System Implementation

The frontend strictly implements the tokens specified in `urbancart/DESIGN.md`:
- **Colors**:
  - `primary`: `#003ec7` | `primary-container`: `#0052ff`
  - `surface`: `#fbf8ff` | `on-surface`: `#1a1b22`
  - Surface elevations: `surface-container-low`, `surface-container`, `surface-container-high`, `surface-container-highest`
- **Typography**:
  - Plus Jakarta Sans (`display`, `headline-lg`, `headline-md`, `headline-sm`)
  - Inter (`body-lg`, `body-md`, `body-sm`, `label-sm`, `label-md`, `price-lg`, `price-md`)
  - Tabular Numbers (`tnum`, `cv05`) for all currency and order counts.
- **Micro-Interactions & States**:
  - Live bag counter badge in header and bottom nav.
  - Heart toggle across catalog and product pages linked to global wishlist.
  - Interactive coupon validation (`URBAN10`, `SAVE500`, `FREESHIP`).
  - Active checkout order submission with live redirect to order tracking.

