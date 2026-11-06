import { db } from '../models/db.js';

export const getProducts = (req, res, next) => {
  try {
    const {
      category,
      q,
      search,
      minPrice,
      maxPrice,
      minRating,
      expressOnly,
      inStockOnly,
      discountOnly,
      sort,
      page = 1,
      limit = 20,
    } = req.query;

    const filters = {
      category,
      search: q || search,
      minPrice,
      maxPrice,
      minRating,
      expressOnly,
      inStockOnly,
      discountOnly,
      sort,
    };

    const allFiltered = db.getProducts(filters);
    const total = allFiltered.length;
    const pageNum = Math.max(1, parseInt(page, 10));
    const limitNum = Math.max(1, parseInt(limit, 10));
    const startIndex = (pageNum - 1) * limitNum;
    const paginated = allFiltered.slice(startIndex, startIndex + limitNum);

    res.json({
      success: true,
      data: paginated,
      meta: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  } catch (err) {
    next(err);
  }
};

export const getProductById = (req, res, next) => {
  try {
    const { id } = req.params;
    const product = db.getProductById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product with ID '${id}' not found`,
      });
    }

    res.json({
      success: true,
      data: product,
    });
  } catch (err) {
    next(err);
  }
};

export const getTrendingProducts = (req, res, next) => {
  try {
    const products = db.getProducts().slice(0, 4);
    res.json({
      success: true,
      data: products,
    });
  } catch (err) {
    next(err);
  }
};

