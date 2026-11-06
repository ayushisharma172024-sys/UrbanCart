import React from 'react';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-space-md p-space-md rounded-xl bg-surface-container-low shadow-sm transition-all duration-300">
      <div className="w-24 h-28 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container-highest relative">
        <img
          className="w-full h-full object-cover"
          src={item.image}
          alt={item.title}
        />
        {item.categoryTag && (
          <span className="absolute top-1.5 left-1.5 bg-inverse-surface/80 backdrop-blur-sm text-surface text-[9px] font-label-sm px-1.5 py-0.5 rounded-full uppercase tracking-wider">
            {item.categoryTag}
          </span>
        )}
      </div>

      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-start justify-between gap-space-xs">
            <h3 className="font-headline-sm text-headline-sm text-on-surface text-[15px] leading-tight line-clamp-1">
              {item.title}
            </h3>
            <button
              aria-label={`Remove ${item.title}`}
              onClick={() => removeFromCart(item.id)}
              className="text-on-surface-variant hover:text-error transition-colors p-0.5"
            >
              <span className="material-symbols-outlined text-[18px]">delete</span>
            </button>
          </div>

          <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
            {item.variant}
          </p>

          <div className="flex items-baseline gap-space-xs mt-0.5">
            <span className="font-price-md text-price-md text-on-surface">
              ₹{item.price.toLocaleString('en-IN')}
            </span>
            {item.originalPrice && (
              <span className="font-body-sm text-body-sm text-outline line-through">
                ₹{item.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            {item.discountPercentage && (
              <span className="font-label-sm text-label-sm text-primary bg-primary/10 px-1.5 py-0.2 rounded font-semibold text-[10px]">
                {item.discountPercentage}% OFF
              </span>
            )}
          </div>
        </div>

        {/* Quantity Stepper */}
        <div className="flex items-center justify-between pt-space-xs">
          <div className="flex items-center rounded-full bg-surface-container px-1 py-0.5">
            <button
              aria-label="Decrease quantity"
              onClick={() => updateQuantity(item.id, -1)}
              className="w-7 h-7 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">remove</span>
            </button>
            <span className="font-price-md text-price-md text-on-surface w-6 text-center tabular-nums text-[13px]">
              {item.quantity}
            </span>
            <button
              aria-label="Increase quantity"
              onClick={() => updateQuantity(item.id, 1)}
              className="w-7 h-7 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">add</span>
            </button>
          </div>

          <span className="font-label-sm text-label-sm text-outline">
            {item.stockLabel || 'In Stock'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

