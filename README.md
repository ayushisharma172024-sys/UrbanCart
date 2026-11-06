# UrbanCart — Full-Stack E-Commerce Platform

A production-grade, architectural e-commerce platform built from Google Stitch designs, featuring a modular React frontend and a robust Node.js/Express REST API backend.

---

## 📁 Repository Structure

```
.
├── backend/                             # Node.js & Express RESTful API Server
│   ├── package.json
│   ├── .env                             # Environment configuration (PORT=5000)
│   ├── src/
│   │   ├── server.js                    # Server bootstrap
│   │   ├── app.js                       # Express app, CORS, error handling
│   │   ├── config/                      # Environment variables & constants
│   │   ├── controllers/                 # Products, Cart, Orders, Coupons, User, Shipping
│   │   ├── routes/                      # Consolidated REST API endpoints
│   │   ├── models/                      # In-memory & seed data store (db.js)
│   │   ├── middleware/                  # 404 handler, global error handler
│   │   └── data/                        # Seeded catalog, user, reviews, and active orders
│   └── README.md                        # Complete API documentation & curl examples
│
├── frontend/                            # React 18, Vite, Tailwind CSS Client
│   ├── package.json
│   ├── vite.config.js                   # Configured with proxy to http://localhost:5000
│   ├── tailwind.config.js               # Design tokens from DESIGN.md
│   ├── src/
│   │   ├── services/api.js              # Full-stack API client with offline fallback
│   │   ├── context/                     # Cart, Wishlist, and App global state
│   │   ├── components/                  # Domain-specific and shared components
│   │   └── pages/                       # Home, Catalog, Details, Cart, Checkout, Account
│   └── README.md
│
└── stitch_design/                       # Original Google Stitch designs & DESIGN.md
```

---

## 🚀 Running the Full-Stack Application

### 1. Start the Backend API (Port 5000)

```bash
cd backend
npm install
npm run dev
```

The backend API will be live at:
- **Base URL:** `http://localhost:5000/api`
- **Health Check:** `http://localhost:5000/api/health`

### 2. Start the Frontend Application (Port 3000)

Open a second terminal window:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000` in your browser. All API requests made to `/api/*` will automatically proxy to the backend.

---

## 📡 Backend API Endpoints

| Category | Endpoint | Method | Description |
| :--- | :--- | :--- | :--- |
| **System** | `/api/health` | `GET` | Service health status and uptime |
| **Products** | `/api/products` | `GET` | Filter, search, paginate, and sort catalog |
| **Products** | `/api/products/trending` | `GET` | Top 4 curated spotlight products |
| **Products** | `/api/products/:id` | `GET` | Single product details and specs |
| **Categories** | `/api/categories` | `GET` | Curated categories with imagery |
| **Cart** | `/api/cart` | `GET` | Retrieve cart items and subtotal/shipping breakdown |
| **Cart** | `/api/cart/items` | `POST` | Add product to bag |
| **Cart** | `/api/cart/items/:id` | `PUT` | Update quantity |
| **Cart** | `/api/cart/items/:id` | `DELETE` | Remove item from bag |
| **Cart** | `/api/cart` | `DELETE` | Clear shopping bag |
| **Coupons** | `/api/coupons/validate` | `POST` | Validate `URBAN10`, `SAVE500`, `FREESHIP` |
| **Orders** | `/api/orders` | `GET` | Retrieve order history |
| **Orders** | `/api/orders/:id` | `GET` | Order details with live milestone tracker |
| **Orders** | `/api/orders` | `POST` | Create a new order |
| **User** | `/api/user/profile` | `GET` | Profile, membership tier & addresses |
| **Shipping** | `/api/shipping/check-pincode` | `POST` | Check delivery date by 6-digit Indian PIN |
| **Newsletter**| `/api/newsletter/subscribe` | `POST` | Join the UrbanCart Society private club |
