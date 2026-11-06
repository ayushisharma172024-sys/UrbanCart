import React, { createContext, useContext, useState, useMemo } from 'react';
import { INITIAL_CART_ITEMS } from '../data/mockData';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);
  const [coupon, setCoupon] = useState('URBAN10');
  const [couponError, setCouponError] = useState('');

  const addToCart = (product, quantity = 1, options = {}) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.productId === product.id);
      if (existing) {
        return prev.map(item =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: `cart-item-${Date.now()}`,
          productId: product.id,
          title: product.title,
          variant: options.variant || product.subtitle || 'Standard Edition',
          categoryTag: product.categoryLabel || 'Curated',
          price: options.price || product.price,
          originalPrice: product.originalPrice || (product.price * 1.3),
          discountPercentage: product.discountPercentage || 20,
          quantity,
          image: product.images?.[0] || '',
          stockLabel: 'In Stock',
        },
      ];
    });
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const applyCoupon = code => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'URBAN10') {
      setCoupon('URBAN10');
      setCouponError('');
      return true;
    }
    if (cleanCode === 'SAVE500') {
      setCoupon('SAVE500');
      setCouponError('');
      return true;
    }
    if (cleanCode === 'FREESHIP') {
      setCoupon('FREESHIP');
      setCouponError('');
      return true;
    }
    setCouponError('Invalid coupon code. Try URBAN10 or SAVE500.');
    return false;
  };

  const removeCoupon = () => {
    setCoupon(null);
    setCouponError('');
  };

  const calculations = useMemo(() => {
    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cartItems.reduce(
      (acc, item) => acc + (item.originalPrice || item.price) * item.quantity,
      0
    );
    const regularTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const productDiscount = Math.max(0, subtotal - regularTotal);

    let couponDiscount = 0;
    if (coupon === 'URBAN10') {
      couponDiscount = Math.round(regularTotal * 0.1);
    } else if (coupon === 'SAVE500') {
      couponDiscount = 500;
    }

    const freeShippingThreshold = 1999;
    const isFreeShipping = regularTotal >= freeShippingThreshold || coupon === 'FREESHIP';
    const shippingFee = isFreeShipping || cartItems.length === 0 ? 0 : 249;

    const totalSavings = productDiscount + couponDiscount + (isFreeShipping ? 249 : 0);
    const totalPayable = Math.max(0, regularTotal - couponDiscount + (isFreeShipping ? 0 : shippingFee));

    const shippingProgressPercentage = Math.min(
      100,
      Math.round((regularTotal / freeShippingThreshold) * 100)
    );
    const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - regularTotal);

    return {
      itemCount,
      subtotal,
      regularTotal,
      productDiscount,
      couponDiscount,
      shippingFee,
      isFreeShipping,
      totalSavings,
      totalPayable,
      shippingProgressPercentage,
      amountNeededForFreeShipping,
    };
  }, [cartItems, coupon]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        coupon,
        couponError,
        applyCoupon,
        removeCoupon,
        ...calculations,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

