import { db } from '../models/db.js';

export const getOrders = (req, res, next) => {
  try {
    const orders = db.getOrders();
    res.json({
      success: true,
      data: orders,
    });
  } catch (err) {
    next(err);
  }
};

export const getOrderById = (req, res, next) => {
  try {
    const { id } = req.params;
    const order = db.getOrderById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: `Order #${id} not found`,
      });
    }

    res.json({
      success: true,
      data: order,
    });
  } catch (err) {
    next(err);
  }
};

export const createOrder = (req, res, next) => {
  try {
    const { items, address, deliverySpeed, paymentMethod, totalAmount } = req.body;

    const newOrder = db.createOrder({
      items,
      address,
      deliverySpeed,
      paymentMethod,
      totalAmount,
    });

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      data: newOrder,
    });
  } catch (err) {
    next(err);
  }
};

