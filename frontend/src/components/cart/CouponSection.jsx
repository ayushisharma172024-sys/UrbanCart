import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const CouponSection = () => {
  const { coupon, couponError, applyCoupon, removeCoupon, couponDiscount } = useCart();
  const [inputVal, setInputVal] = useState('');

  const handleApply = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      applyCoupon(inputVal.trim());
      setInputVal('');
    }
  };

  return (
    <section className="flex flex-col w-full gap-space-sm bg-surface-container-low p-space-md rounded-xl shadow-sm">
      <div className="flex items-center gap-space-xs">
        <span className="material-symbols-outlined text-primary text-[20px]">sell</span>
        <h3 className="font-headline-sm text-headline-sm text-on-surface text-[16px]">
          Coupons & Offers
        </h3>
      </div>

      {/* Applied Coupon Display */}
      {coupon ? (
        <div className="flex items-center justify-between bg-primary/10 px-space-md py-space-sm rounded-lg">
          <div className="flex items-center gap-space-xs min-w-0">
            <span
              className="material-symbols-outlined text-primary text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
            <div className="flex flex-col truncate">
              <span className="font-label-md text-label-md text-primary font-bold tracking-wide">
                {coupon} applied
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                Extra ₹{couponDiscount.toLocaleString('en-IN')} discount unlocked!
              </span>
            </div>
          </div>
          <button
            aria-label="Remove coupon"
            onClick={removeCoupon}
            className="text-on-surface-variant hover:text-error p-1"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
      ) : null}

      {/* Coupon Input Field */}
      <form onSubmit={handleApply} className="flex items-center gap-space-xs mt-space-xs">
        <div className="relative flex-1">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Enter coupon code"
            className="w-full h-11 px-space-md rounded-xl bg-surface-container text-on-surface font-label-md placeholder:text-outline focus:outline-none focus:bg-surface-container-high uppercase tracking-wider text-sm transition-colors"
          />
        </div>
        <button
          type="submit"
          className="h-11 px-space-md rounded-xl bg-inverse-surface text-surface font-label-md text-label-md font-semibold hover:opacity-90 active:scale-95 transition-all"
        >
          Apply
        </button>
      </form>

      {couponError && (
        <p className="font-body-sm text-xs text-error">{couponError}</p>
      )}

      {/* Suggested Promo Chips */}
      <div className="flex items-center gap-space-xs mt-space-xs overflow-x-auto pb-0.5">
        <span className="font-label-sm text-label-sm text-outline whitespace-nowrap">Try:</span>
        <button
          onClick={() => applyCoupon('URBAN10')}
          className="px-2.5 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1 whitespace-nowrap"
        >
          <span className="font-bold">URBAN10</span> • 10% Off
        </button>
        <button
          onClick={() => applyCoupon('SAVE500')}
          className="px-2.5 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1 whitespace-nowrap"
        >
          <span className="font-bold">SAVE500</span> • Flat ₹500
        </button>
        <button
          onClick={() => applyCoupon('FREESHIP')}
          className="px-2.5 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1 whitespace-nowrap"
        >
          <span className="font-bold">FREESHIP</span> • Zero Fee
        </button>
      </div>
    </section>
  );
};

export default CouponSection;

