import React from 'react';
import { useApp } from '../../context/AppContext';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const QuickLookModal = () => {
  const { quickLookProduct, closeQuickLook, showToast } = useApp();
  const { addToCart } = useCart();

  if (!quickLookProduct) return null;

  const handleAdd = () => {
    addToCart(quickLookProduct, 1);
    showToast(`Added ${quickLookProduct.title} to bag!`);
    closeQuickLook();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div
        className="absolute inset-0 bg-on-background/50 backdrop-blur-sm transition-opacity"
        onClick={closeQuickLook}
      ></div>

      <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-t-2xl shadow-2xl p-space-md flex flex-col gap-space-sm animate-slide-up z-10">
        <div className="flex items-center justify-between pb-2 border-b border-surface-container">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            Quick Overview
          </span>
          <button
            onClick={closeQuickLook}
            aria-label="Close Quick Look"
            className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container text-on-surface-variant hover:text-on-surface"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="flex gap-space-md items-center py-2">
          <div className="w-24 h-28 rounded-lg bg-surface-container-low shrink-0 overflow-hidden flex items-center justify-center">
            <img
              className="w-full h-full object-cover"
              src={quickLookProduct.images?.[0]}
              alt={quickLookProduct.title}
            />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-label-sm text-[10px] uppercase text-outline tracking-wider">
              {quickLookProduct.categoryLabel}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
              {quickLookProduct.title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
              {quickLookProduct.subtitle}
            </p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-price-md text-price-md text-on-surface">
                ₹{quickLookProduct.price?.toLocaleString('en-IN')}
              </span>
              {quickLookProduct.originalPrice && (
                <span className="font-body-sm text-body-sm text-outline line-through">
                  ₹{quickLookProduct.originalPrice?.toLocaleString('en-IN')}
                </span>
              )}
              {quickLookProduct.discountPercentage && (
                <span className="font-label-sm text-label-sm text-error font-semibold">
                  {quickLookProduct.discountPercentage}% OFF
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-space-sm mt-2">
          <button
            onClick={handleAdd}
            className="flex-1 py-3 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
            <span>Add to Bag</span>
          </button>

          <Link
            to={`/product/${quickLookProduct.id}`}
            onClick={closeQuickLook}
            className="px-4 py-3 rounded-full bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center justify-center"
          >
            Full Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickLookModal;

