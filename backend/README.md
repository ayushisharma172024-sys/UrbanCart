# UrbanCart RESTful Backend API

The production Node.js/Express backend service for the UrbanCart curated e-commerce platform.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Run Server
- **Development (with hot reload via Node --watch):**
  ```bash
  npm run dev
  ```
- **Production:**
  ```bash
  npm start
  ```

Server will start on `http://localhost:5000`.

---

## 🌐 API Endpoints Reference

### 1. System Health
- **`GET /api/health`**
  - Check service uptime and API status.

### 2. Products
- **`GET /api/products`**
  - Query parameters:
    - `category`: Filter by category slug (e.g. `fashion`, `electronics`, `footwear`, `accessories`, `living`).
    - `q` / `search`: Search title, subtitle, or category.
    - `minPrice` / `maxPrice`: Filter by price range.
    - `minRating`: Filter by minimum star rating (e.g. `4`).
    - `expressOnly`: Filter for express next-day delivery (`true`).
    - `inStockOnly`: Filter for in-stock items (`true`).
    - `discountOnly`: Filter for items with 20%+ discount (`true`).
    - `sort`: `Featured` | `Price: Low to High` | `Price: High to Low` | `Customer Rating` | `Newest Arrivals`.
    - `page` & `limit`: Pagination parameters.
- **`GET /api/products/trending`**
  - Get top curated products for the home spotlight.
- **`GET /api/products/:id`**
  - Get full product specifications, gallery, highlights, and bundle options.

### 3. Categories
- **`GET /api/categories`**
  - Fetch all active product categories with imagery.

### 4. Shopping Bag / Cart
- **`GET /api/cart`**
  - Retrieve active cart items and price breakdown (subtotal, product savings, free shipping progress).
- **`POST /api/cart/items`**
  - Body: `{ "productId": "1", "quantity": 1, "variant": "Stealth Black", "price": 11999 }`
- **`PUT /api/cart/items/:id`**
  - Body: `{ "quantity": 2 }`
- **`DELETE /api/cart/items/:id`**
  - Remove an item from the bag.
- **`DELETE /api/cart`**
  - Clear entire shopping bag.

### 5. Coupons & Promotions
- **`POST /api/coupons/validate`**
  - Body: `{ "code": "URBAN10", "cartAmount": 14998 }`
  - Valid codes:
    - `URBAN10`: 10% off entire order.
    - `SAVE500`: Flat ₹500 discount (min. order ₹1,500).
    - `FREESHIP`: Waives standard delivery fee.

### 6. Orders & Live Tracking
- **`GET /api/orders`**
  - Get user's order history.
- **`GET /api/orders/:id`**
  - Fetch detailed order info including carrier and live milestone tracking steps.
- **`POST /api/orders`**
  - Place a new order with items, shipping destination, delivery speed, and payment method.

### 7. User Profile
- **`GET /api/user/profile`**
  - Returns user profile (Aarav Kapoor), membership tier (`UrbanCart Black • Tier 1`), wallet balance, and saved addresses.
- **`PUT /api/user/addresses/:addressId`**
  - Update a saved shipping address.

### 8. Shipping & Delivery
- **`POST /api/shipping/check-pincode`**
  - Body: `{ "pincode": "560001" }`
  - Validates 6-digit Indian postal code and returns estimated arrival date and city.

### 9. Newsletter
- **`POST /api/newsletter/subscribe`**
  - Body: `{ "email": "patron@example.com" }`

