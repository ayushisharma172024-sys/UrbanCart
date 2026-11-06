import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useApp } from '../../context/AppContext';

const StickyBottomBar = ({ product, selectedEdition, selectedColor }) => {
  const [qty, setQty] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();
  const { showToast } = useApp();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product, qty, {
      price: selectedEdition?.price || product.price,
      variant: `${selectedColor?.name || 'Default'} • ${selectedEdition?.name || 'Standard'}`,
    });
    setIsAdded(true);
    showToast(`Added ${qty} × ${product.title} to bag!`);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleBuyNow = () => {
    addToCart(product, qty, {
      price: selectedEdition?.price || product.price,
      variant: `${selectedColor?.name || 'Default'} • ${selectedEdition?.name || 'Standard'}`,
    });
    navigate('/checkout');
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-md border-t border-surface-container py-3 px-margin pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="max-w-2xl mx-auto flex items-center gap-space-sm">
        {/* Quantity Stepper */}
        <div className="flex items-center rounded-full bg-surface-container px-2 py-1 shrink-0">
          <button
            onClick={() => setQty((prev) => Math.max(1, prev - 1))}
            className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">remove</span>
          </button>
          <span className="font-price-md text-price-md text-on-surface w-7 text-center tabular-nums">
            {qty}
          </span>
          <button
            onClick={() => setQty((prev) => prev + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
          </button>
        </div>

        {/* Add to Bag */}
        <button
          onClick={handleAddToCart}
          className={`flex-1 h-12 rounded-full font-label-md text-label-md font-semibold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm ${
            isAdded
              ? 'bg-emerald-600 text-white'
              : 'bg-surface-container-highest hover:bg-surface-container-high text-on-surface'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">
            {isAdded ? 'check' : 'shopping_bag'}
          </span>
          <span>{isAdded ? 'Added to Bag' : 'Add to Bag'}</span>
        </button>

        {/* Buy Now */}
        <button
          onClick={handleBuyNow}
          className="flex-1 h-12 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 shadow-md hover:bg-primary-container/90 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">bolt</span>
          <span>Buy Now</span>
        </button>
      </div>
    </div>
  );
};

export default StickyBottomBar;

