import { db } from '../models/db.js';

export const subscribe = (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@') || email.trim().length < 5) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address',
    });
  }

  db.addSubscriber(email);

  res.json({
    success: true,
    message: 'Welcome to UrbanCart Society. Your invitation key has been dispatched.',
  });
};

