export const checkPincode = (req, res) => {
  const { pincode } = req.body;

  if (!pincode || String(pincode).trim().length !== 6 || isNaN(pincode)) {
    return res.status(400).json({
      success: false,
      message: 'Please enter a valid 6-digit Indian PIN code',
    });
  }

  const codeStr = String(pincode).trim();
  let city = 'Bengaluru';
  if (codeStr.startsWith('11')) city = 'New Delhi';
  else if (codeStr.startsWith('40')) city = 'Mumbai';
  else if (codeStr.startsWith('60')) city = 'Chennai';
  else if (codeStr.startsWith('70')) city = 'Kolkata';
  else if (codeStr.startsWith('50')) city = 'Hyderabad';

  res.json({
    success: true,
    data: {
      pincode: codeStr,
      city,
      deliveryDate: 'Tomorrow, 2:00 PM',
      deliveryType: 'Free Express Air Delivery',
      isAvailable: true,
    },
  });
};

