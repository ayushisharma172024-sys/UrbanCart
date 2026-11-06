import { PRODUCTS, CATEGORIES, USER_PROFILE, INITIAL_CART_ITEMS } from '../data/mockData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Robust fetch wrapper with error handling and fallback
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const res = await fetch(url, config);
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `Request failed with status ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    // If backend is unreachable or network error, let caller know
    console.warn(`[UrbanCart API] Call to ${endpoint} failed:`, error.message);
    throw error;
  }
}

// --- Products API ---
export const getProductsApi = async (params = {}) => {
  try {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null && val !== '') {
        query.append(key, val);
      }
    });
    const queryString = query.toString() ? `?${query.toString()}` : '';
    const res = await request(`/products${queryString}`);
    return res.data;
  } catch {
    // Fallback to local products
    return PRODUCTS;
  }
};

export const getProductByIdApi = async (id) => {
  try {
    const res = await request(`/products/${id}`);
    return res.data;
  } catch {
    return PRODUCTS.find((p) => p.id === String(id)) || PRODUCTS[0];
  }
};

export const getTrendingProductsApi = async () => {
  try {
    const res = await request('/products/trending');
    return res.data;
  } catch {
    return PRODUCTS.slice(0, 4);
  }
};

// --- Categories API ---
export const getCategoriesApi = async () => {
  try {
    const res = await request('/categories');
    return res.data;
  } catch {
    return CATEGORIES;
  }
};

// --- Cart API ---
export const getCartApi = async () => {
  try {
    const res = await request('/cart');
    return res.data.items;
  } catch {
    return INITIAL_CART_ITEMS;
  }
};

export const addToCartApi = async (productId, quantity = 1, options = {}) => {
  try {
    const res = await request('/cart/items', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity, ...options }),
    });
    return res.data;
  } catch {
    return null;
  }
};

export const updateCartItemApi = async (itemId, quantity) => {
  try {
    const res = await request(`/cart/items/${itemId}`, {
      method: 'PUT',
      body: JSON.stringify({ quantity }),
    });
    return res.data;
  } catch {
    return null;
  }
};

export const removeFromCartApi = async (itemId) => {
  try {
    await request(`/cart/items/${itemId}`, { method: 'DELETE' });
    return true;
  } catch {
    return false;
  }
};

export const clearCartApi = async () => {
  try {
    await request('/cart', { method: 'DELETE' });
    return true;
  } catch {
    return false;
  }
};

// --- Coupons API ---
export const validateCouponApi = async (code, cartAmount) => {
  return await request('/coupons/validate', {
    method: 'POST',
    body: JSON.stringify({ code, cartAmount }),
  });
};

// --- Shipping API ---
export const checkPincodeApi = async (pincode) => {
  return await request('/shipping/check-pincode', {
    method: 'POST',
    body: JSON.stringify({ pincode }),
  });
};

// --- Orders API ---
export const getOrdersApi = async () => {
  try {
    const res = await request('/orders');
    return res.data;
  } catch {
    return [USER_PROFILE.activeOrder];
  }
};

export const getOrderByIdApi = async (orderId) => {
  try {
    const res = await request(`/orders/${orderId}`);
    return res.data;
  } catch {
    return USER_PROFILE.activeOrder;
  }
};

export const createOrderApi = async (orderData) => {
  return await request('/orders', {
    method: 'POST',
    body: JSON.stringify(orderData),
  });
};

// --- User Profile API ---
export const getUserProfileApi = async () => {
  try {
    const res = await request('/user/profile');
    return res.data;
  } catch {
    return USER_PROFILE;
  }
};

// --- Newsletter API ---
export const subscribeNewsletterApi = async (email) => {
  return await request('/newsletter/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
};

