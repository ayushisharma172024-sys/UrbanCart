import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config/index.js';
import apiRouter from './routes/api.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

const app = express();

// Middlewares
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (config.nodeEnv !== 'test') {
  app.use(morgan('dev'));
}

// API Routes
app.use('/api', apiRouter);

// Fallback Root
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to UrbanCart Backend API',
    endpoints: {
      health: '/api/health',
      products: '/api/products',
      trending: '/api/products/trending',
      categories: '/api/categories',
      cart: '/api/cart',
      coupons: '/api/coupons/validate',
      orders: '/api/orders',
      user: '/api/user/profile',
      pincode: '/api/shipping/check-pincode',
      newsletter: '/api/newsletter/subscribe',
    },
  });
});

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;

