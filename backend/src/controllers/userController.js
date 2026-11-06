import { db } from '../models/db.js';

export const getProfile = (req, res, next) => {
  try {
    const user = db.getUser();
    res.json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const updateAddress = (req, res, next) => {
  try {
    const { addressId } = req.params;
    const updated = db.updateUserAddress(addressId, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Address not found',
      });
    }

    res.json({
      success: true,
      message: 'Address updated successfully',
      data: updated,
    });
  } catch (err) {
    next(err);
  }
};

