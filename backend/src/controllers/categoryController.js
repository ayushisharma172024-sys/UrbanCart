import { db } from '../models/db.js';

export const getCategories = (req, res, next) => {
  try {
    const categories = db.getCategories();
    res.json({
      success: true,
      data: categories,
    });
  } catch (err) {
    next(err);
  }
};

