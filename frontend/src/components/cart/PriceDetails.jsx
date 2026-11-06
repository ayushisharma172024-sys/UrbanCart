import React from 'react';
import { useCart } from '../../context/CartContext';

const PriceDetails = () => {
  const {
    itemCount,
    subtotal,
    productDiscount,
    coupon,
    couponDiscount,
    shippingFee,
    isFreeShipping,
    totalSavings,
    totalPayable,
  } = useCart();

  return (
    <section className="flex flex-col w-full p-space-md rounded-xl bg-surface-container-low shadow-sm gap-space-sm">
      <h3 className="font-headline-sm text-headline-sm text-on-surface text-[16px] mb-space-xs">
        Price Details ({itemCount} {itemCount === 1 ? 'Item' : 'Items'})
      </h3>

      <div className="flex justify-between items-center">
        <span className="font-body-md text-body-md text-on-surface-variant">Bag Subtotal</span>
        <span className="font-price-md text-price-md text-on-surface">
          ₹{subtotal.toLocaleString('en-IN')}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-body-md text-body-md text-on-surface-variant">Product Discount</span>
        <span className="font-price-md text-price-md text-primary font-semibold">
          -₹{productDiscount.toLocaleString('en-IN')}
        </span>
      </div>

      {coupon && couponDiscount > 0 && (
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span className="font-body-md text-body-md text-on-surface-variant">Coupon Discount</span>
            <span className="font-label-sm text-[10px] text-primary bg-primary/10 px-1 rounded">
              {coupon}
            </span>
          </div>
          <span className="font-price-md text-price-md text-primary font-semibold">
            -₹{couponDiscount.toLocaleString('en-IN')}
          </span>
        </div>
      )}

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <span className="font-body-md text-body-md text-on-surface-variant">Estimated Delivery</span>
          <span className="material-symbols-outlined text-[14px] text-outline" title="Free over ₹1,999">
            info
          </span>
        </div>
        <span className="font-price-md text-price-md text-primary font-bold uppercase tracking-wide">
          {isFreeShipping ? 'FREE' : `₹${shippingFee}`}
        </span>
      </div>

      {/* Total Savings Highlight Pill */}
      {totalSavings > 0 && (
        <div className="flex items-center gap-space-xs bg-primary/10 text-primary p-space-sm rounded-lg my-space-xs">
          <span
            className="material-symbols-outlined text-[18px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            savings
          </span>
          <span className="font-label-md text-label-md font-semibold text-xs sm:text-sm">
            Total Savings on this order: ₹{totalSavings.toLocaleString('en-IN')}
          </span>
        </div>
      )}

      {/* Total Payable Block */}
      <div className="flex justify-between items-end pt-space-xs border-t border-surface-container">
        <div className="flex flex-col">
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-[18px]">
            Total Payable
          </span>
          <span className="font-body-sm text-body-sm text-outline">
            Inclusive of all Indian GST taxes
          </span>
        </div>
        <span className="font-price-lg text-price-lg text-on-surface font-extrabold">
          ₹{totalPayable.toLocaleString('en-IN')}
        </span>
      </div>
    </section>
  );
};

export default PriceDetails;

