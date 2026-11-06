import { Router } from 'express';
import {
  getProducts,
  getProductById,
  getTrendingProducts,
} from '../controllers/productController.js';
import { getCategories } from '../controllers/categoryController.js';
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} from '../controllers/cartController.js';
import { validateCoupon } from '../controllers/couponController.js';
import {
  getOrders,
  getOrderById,
  createOrder,
} from '../controllers/orderController.js';
import { getProfile, updateAddress } from '../controllers/userController.js';
import { checkPincode } from '../controllers/shippingController.js';
import { subscribe } from '../controllers/newsletterController.js';

const router = Router();

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'UrbanCart REST API',
    version: '1.0.0',
  });
});

// Products
router.get('/products', getProducts);
router.get('/products/trending', getTrendingProducts);
router.get('/products/:id', getProductById);

// Categories
router.get('/categories', getCategories);

// Cart
router.get('/cart', getCart);
router.post('/cart/items', addToCart);
router.put('/cart/items/:id', updateCartItem);
router.delete('/cart/items/:id', removeFromCart);
router.delete('/cart', clearCart);

// Coupons
router.post('/coupons/validate', validateCoupon);

// Orders
router.get('/orders', getOrders);
router.get('/orders/:id', getOrderById);
router.post('/orders', createOrder);

// User & Profile
router.get('/user/profile', getProfile);
router.put('/user/addresses/:addressId', updateAddress);

// Shipping & Utilities
router.post('/shipping/check-pincode', checkPincode);

// Newsletter / Society
router.post('/newsletter/subscribe', subscribe);

export default router;

