import {
  INITIAL_PRODUCTS,
  INITIAL_CATEGORIES,
  INITIAL_USER,
  INITIAL_ORDERS,
  COUPONS,
} from '../data/initialData.js';

class Database {
  constructor() {
    this.products = [...INITIAL_PRODUCTS];
    this.categories = [...INITIAL_CATEGORIES];
    this.user = { ...INITIAL_USER };
    this.orders = [...INITIAL_ORDERS];
    this.coupons = { ...COUPONS };
    this.subscribers = new Set(["aarav.k@example.com"]);
    this.cart = [
      {
        id: "cart-item-1",
        productId: "1",
        title: "AeroTech Ultra ANC",
        variant: "Stealth Black • Wireless v5.3",
        categoryTag: "Audio",
        price: 11999,
        originalPrice: 15999,
        discountPercentage: 25,
        quantity: 1,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Q9pvlYqFQidc0HnneVXpUTHweSQ3W7sDN1IzSkaLXuboo7hV_5nP0JsgtQPULU2-ble-Rni8pEj_6HTYcSSTFo21h-UNPWlwq3RX6272xwRIJAYa7L9frJ-XV80xmgd1bArwdNrBq2LrZuCIJuGtkB1e0DhZ7_Sig2vurt9kauKXFXJ7dewQWio4fRVWWkrL0sn9yTxbXDESTPCqcLYjz-DtSW2Fg54IbGY14Le2CXSe8OpmS_nO",
        stockLabel: "In Stock",
      },
      {
        id: "cart-item-2",
        productId: "2",
        title: "Heavyweight French Terry",
        variant: "Heather Charcoal • Size L",
        categoryTag: "Apparel",
        price: 2999,
        originalPrice: 4499,
        discountPercentage: 33,
        quantity: 1,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgwk0ABYT_nbkQRuFsn2Vq1BYU0IQhr_mrl1SZhxdkUbcnKHTAg27iIywPyhBeL2_8i7uupWNq7gBPcqS88P_hK2dh5QX-V5J4hPcBitM7pVz2U9xyli3Becskc45Gnw2zwF3SWEg3O7qhllgYCaRq-McUmZ_FMWPJbDmKnX50_Z3fwZeqz45B9Bc-3vNAlxjeSzM1J_2HzYldoFzpbPcgGFyUCfW5s7jYOrgU1elWuLmkkHlH_YAS",
        stockLabel: "Only 3 Left",
      },
    ];
  }

  // --- Products ---
  getProducts(filters = {}) {
    let list = [...this.products];
    const { category, search, minPrice, maxPrice, minRating, expressOnly, inStockOnly, discountOnly, sort } = filters;

    if (category && category !== 'all') {
      list = list.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }

    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter((p) =>
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    if (minPrice !== undefined && !isNaN(minPrice)) {
      list = list.filter((p) => p.price >= Number(minPrice));
    }

    if (maxPrice !== undefined && !isNaN(maxPrice)) {
      list = list.filter((p) => p.price <= Number(maxPrice));
    }

    if (minRating !== undefined && !isNaN(minRating)) {
      list = list.filter((p) => p.rating >= Number(minRating));
    }

    if (expressOnly === 'true' || expressOnly === true) {
      list = list.filter((p) => p.expressDelivery);
    }

    if (inStockOnly === 'true' || inStockOnly === true) {
      list = list.filter((p) => p.inStock);
    }

    if (discountOnly === 'true' || discountOnly === true) {
      list = list.filter((p) => p.discountPercentage >= 20);
    }

    // Sort
    if (sort === 'Price: Low to High') {
      list.sort((a, b) => a.price - b.price);
    } else if (sort === 'Price: High to Low') {
      list.sort((a, b) => b.price - a.price);
    } else if (sort === 'Customer Rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'Newest Arrivals') {
      list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return list;
  }

  getProductById(id) {
    return this.products.find((p) => p.id === String(id));
  }

  // --- Categories ---
  getCategories() {
    return this.categories;
  }

  // --- Cart ---
  getCart() {
    return this.cart;
  }

  addToCart(item) {
    const existing = this.cart.find((i) => i.productId === item.productId);
    if (existing) {
      existing.quantity += item.quantity || 1;
      return existing;
    }
    const newItem = {
      id: `cart-item-${Date.now()}`,
      ...item,
      quantity: item.quantity || 1,
    };
    this.cart.push(newItem);
    return newItem;
  }

  updateCartItem(id, quantity) {
    const item = this.cart.find((i) => i.id === id);
    if (!item) return null;
    if (quantity <= 0) {
      this.cart = this.cart.filter((i) => i.id !== id);
      return null;
    }
    item.quantity = quantity;
    return item;
  }

  removeFromCart(id) {
    this.cart = this.cart.filter((i) => i.id !== id);
    return true;
  }

  clearCart() {
    this.cart = [];
    return true;
  }

  // --- Coupons ---
  getCoupon(code) {
    if (!code) return null;
    return this.coupons[code.toUpperCase()] || null;
  }

  // --- Orders ---
  getOrders() {
    return this.orders;
  }

  getOrderById(id) {
    return this.orders.find((o) => o.id === id || o.orderNumber === id);
  }

  createOrder(orderData) {
    const orderNumber = `UC-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      id: `ord_${Date.now()}`,
      orderNumber,
      userId: this.user.id,
      status: "Processing • Preparing Dispatch",
      carrier: "Bluedart Air",
      cargoId: `BD-${Math.floor(100 + Math.random() * 900)}`,
      items: orderData.items || [...this.cart],
      deliveryAddress: orderData.address || this.user.addresses[0],
      deliverySpeed: orderData.deliverySpeed || "express",
      paymentMethod: orderData.paymentMethod || "upi",
      totalAmount: orderData.totalAmount || 0,
      eta: "Tomorrow, 2:00 PM",
      trackingSteps: [
        { step: 1, title: "Order Confirmed", time: "Just now", desc: "Verified & authorized payment", done: true },
        { step: 2, title: "Packed & Quality Checked", time: "Pending", desc: "Acoustics & build quality audit", done: false },
        { step: 3, title: "Shipped via Bluedart Air", time: "Pending", desc: "Hub transit assignment", done: false },
        { step: 4, title: "Delivered", time: "Tomorrow, ~2:00 PM", desc: "Contactless handoff to doorstep", done: false },
      ],
      createdAt: new Date(),
    };

    this.orders.unshift(newOrder);
    this.user.activeOrdersCount = (this.user.activeOrdersCount || 0) + 1;
    this.clearCart();
    return newOrder;
  }

  // --- User Profile ---
  getUser() {
    return this.user;
  }

  updateUserAddress(addressId, newAddress) {
    const idx = this.user.addresses.findIndex((a) => a.id === addressId);
    if (idx !== -1) {
      this.user.addresses[idx] = { ...this.user.addresses[idx], ...newAddress };
      return this.user.addresses[idx];
    }
    return null;
  }

  // --- Newsletter ---
  addSubscriber(email) {
    this.subscribers.add(email.toLowerCase().trim());
    return true;
  }
}

export const db = new Database();

