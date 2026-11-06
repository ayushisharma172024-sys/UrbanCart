import React from 'react';
import { useCart } from '../../context/CartContext';

const FreeShippingMeter = () => {
  const { isFreeShipping, shippingProgressPercentage, amountNeededForFreeShipping } = useCart();

  return (
    <section className="flex flex-col w-full bg-surface-container p-space-md rounded-xl shadow-sm">
      <div className="flex items-center justify-between gap-space-xs mb-space-sm">
        <div className="flex items-center gap-space-xs">
          <span
            className="material-symbols-outlined text-primary text-[20px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            bolt
          </span>
          <p className="font-label-md text-label-md text-on-surface font-semibold">
            Free Express Shipping
          </p>
        </div>
        <span className="font-label-sm text-label-sm text-primary font-bold">
          {isFreeShipping ? '100% Unlocked!' : `${shippingProgressPercentage}% unlocked`}
        </span>
      </div>

      {/* Progress Bar Track */}
      <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden mb-space-xs">
        <div
          className="h-full bg-primary-container rounded-full transition-all duration-500 ease-out"
          style={{ width: `${shippingProgressPercentage}%` }}
        ></div>
      </div>

      <p className="font-body-sm text-body-sm text-on-surface-variant">
        {isFreeShipping ? (
          <span className="text-emerald-600 font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">check_circle</span>
            Congratulations! You've qualified for FREE Express Delivery!
          </span>
        ) : (
          <>
            Add <span className="font-semibold text-on-surface">₹{amountNeededForFreeShipping.toLocaleString('en-IN')}</span> more to unlock{' '}
            <span className="text-primary font-semibold">FREE Express Delivery</span>!
          </>
        )}
      </p>
    </section>
  );
};

export default FreeShippingMeter;

