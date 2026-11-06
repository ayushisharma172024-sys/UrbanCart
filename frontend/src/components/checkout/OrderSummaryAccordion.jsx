import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const OrderSummaryAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, totalPayable } = useCart();

  return (
    <section className="px-margin mt-space-md max-w-2xl mx-auto w-full">
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-surface-container">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
              shopping_basket
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[15px]">
              Order Summary ({cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'})
            </span>
          </div>
          <div className="flex items-center gap-1 text-on-surface">
            <span className="font-price-md text-price-md font-bold">
              ₹{totalPayable.toLocaleString('en-IN')}
            </span>
            <span
              className={`material-symbols-outlined text-[20px] transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            >
              expand_more
            </span>
          </div>
        </div>

        {/* Collapsible Items Details */}
        {isOpen && (
          <div className="mt-space-md pt-space-md bg-surface-container-low/50 rounded-lg p-space-sm space-y-space-sm border-t border-surface-container">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-space-sm">
                <img
                  className="w-14 h-14 rounded-lg object-cover bg-surface-container"
                  src={item.image}
                  alt={item.title}
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-body-md text-body-md font-semibold text-on-surface truncate">
                    {item.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    {item.variant} • Qty: {item.quantity}
                  </p>
                </div>
                <span className="font-price-md text-price-md font-bold text-on-surface">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderSummaryAccordion;

