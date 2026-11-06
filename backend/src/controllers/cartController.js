import { db } from '../models/db.js';
import { config } from '../config/index.js';

export const getCart = (req, res, next) => {
  try {
    const items = db.getCart();
    const itemCount = items.reduce((acc, i) => acc + (i.quantity || 1), 0);
    const subtotal = items.reduce(
      (acc, i) => acc + (i.originalPrice || i.price) * (i.quantity || 1),
      0
    );
    const regularTotal = items.reduce(
      (acc, i) => acc + i.price * (i.quantity || 1),
      0
    );
    const productDiscount = Math.max(0, subtotal - regularTotal);
    const isFreeShipping = regularTotal >= config.freeShippingThreshold || items.length === 0;
    const shippingFee = isFreeShipping ? 0 : config.standardShippingFee;

    res.json({
      success: true,
      data: {
        items,
        summary: {
          itemCount,
          subtotal,
          regularTotal,
          productDiscount,
          shippingFee,
          isFreeShipping,
          freeShippingThreshold: config.freeShippingThreshold,
          amountNeededForFreeShipping: Math.max(0, config.freeShippingThreshold - regularTotal),
          shippingProgressPercentage: Math.min(100, Math.round((regularTotal / config.freeShippingThreshold) * 100)),
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

export const addToCart = (req, res, next) => {
  try {
    const { productId, quantity = 1, variant, price } = req.body;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: 'productId is required',
      });
    }

    const product = db.getProductById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    const item = db.addToCart({
      productId: product.id,
      title: product.title,
      variant: variant || product.subtitle,
      categoryTag: product.categoryLabel,
      price: price || product.price,
      originalPrice: product.originalPrice || product.price * 1.3,
      discountPercentage: product.discountPercentage || 20,
      image: product.images?.[0] || '',
      quantity,
    });

    res.status(201).json({
      success: true,
      message: 'Item added to cart',
      data: item,
    });
  } catch (err) {
    next(err);
  }
};

export const updateCartItem = (req, res, next) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    if (quantity === undefined) {
      return res.status(400).json({
        success: false,
        message: 'quantity is required',
      });
    }

    const updated = db.updateCartItem(id, Number(quantity));

    res.json({
      success: true,
      message: updated ? 'Cart item updated' : 'Cart item removed',
      data: updated,
    });
  } catch (err) {
    next(err);
  }
};

export const removeFromCart = (req, res, next) => {
  try {
    const { id } = req.params;
    db.removeFromCart(id);

    res.json({
      success: true,
      message: 'Item removed from cart',
    });
  } catch (err) {
    next(err);
  }
};

export const clearCart = (req, res, next) => {
  try {
    db.clearCart();
    res.json({
      success: true,
      message: 'Cart cleared',
    });
  } catch (err) {
    next(err);
  }
};

