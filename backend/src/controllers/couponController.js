import { db } from '../models/db.js';

export const validateCoupon = (req, res, next) => {
  try {
    const { code, cartAmount = 0 } = req.body;

    if (!code) {
      return res.status(400).json({
        success: false,
        message: 'Coupon code is required',
      });
    }

    const coupon = db.getCoupon(code);

    if (!coupon) {
      return res.status(404).json({
        success: false,
        message: 'Invalid promo code. Try URBAN10, SAVE500, or FREESHIP.',
      });
    }

    if (cartAmount < coupon.minOrder) {
      return res.status(400).json({
        success: false,
        message: `Order amount must be at least ₹${coupon.minOrder} to apply ${coupon.code}`,
      });
    }

    let discountAmount = 0;
    if (coupon.type === 'percentage') {
      discountAmount = Math.round((Number(cartAmount) * coupon.value) / 100);
    } else if (coupon.type === 'flat') {
      discountAmount = coupon.value;
    } else if (coupon.type === 'shipping') {
      discountAmount = coupon.value;
    }

    res.json({
      success: true,
      message: `${coupon.code} applied successfully!`,
      data: {
        code: coupon.code,
        type: coupon.type,
        value: coupon.value,
        description: coupon.description,
        discountAmount,
      },
    });
  } catch (err) {
    next(err);
  }
};

