import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { useApp } from '../../context/AppContext';

const ProductCard = ({ product, viewMode = 'grid' }) => {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { openQuickLook, showToast } = useApp();
  const [isAdded, setIsAdded] = useState(false);

  const favorited = isWishlisted(product.id);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    showToast(`Added ${product.title} to bag!`);
    setTimeout(() => setIsAdded(false), 1500);
  };

  if (viewMode === 'list') {
    return (
      <article className="group flex gap-space-md bg-surface-container-lowest rounded-xl p-3 shadow-sm hover:shadow-md transition-all relative border border-surface-container/60">
        <div className="relative w-28 h-36 bg-surface-container-low rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
          <Link to={`/product/${product.id}`} className="w-full h-full block">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              src={product.images[0]}
              alt={product.title}
            />
          </Link>
          {product.badge && (
            <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-[9px] uppercase">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col justify-between flex-1 min-w-0">
          <div>
            <div className="flex items-center justify-between gap-1 mb-1">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider truncate">
                {product.categoryLabel}
              </span>
              <button
                aria-label="Save to Wishlist"
                onClick={() => toggleWishlist(product.id)}
                className={`p-1 rounded-full hover:bg-surface-container transition-colors ${
                  favorited ? 'text-error' : 'text-outline hover:text-error'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={favorited ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {favorited ? 'favorite' : 'favorite_border'}
                </span>
              </button>
            </div>

            <Link to={`/product/${product.id}`}>
              <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-1 hover:text-primary transition-colors">
                {product.title}
              </h3>
            </Link>
            <p className="font-body-sm text-body-sm text-on-surface-variant truncate mt-0.5">
              {product.subtitle}
            </p>

            <div className="flex items-center gap-1 mt-1 text-tertiary">
              <span
                className="material-symbols-outlined text-[13px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-label-sm text-[11px] font-bold text-on-surface">
                {product.rating}
              </span>
              <span className="font-body-sm text-[10px] text-outline">
                ({product.reviewCount})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-surface-container">
            <div className="flex items-baseline gap-2">
              <span className="font-price-md text-price-md text-on-surface font-bold">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="font-body-sm text-body-sm text-outline line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => openQuickLook(product)}
                className="p-1.5 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
                title="Quick Look"
              >
                <span className="material-symbols-outlined text-[16px]">visibility</span>
              </button>
              <button
                onClick={handleQuickAdd}
                className={`px-3 py-1 rounded-full font-label-md text-xs flex items-center gap-1 transition-all ${
                  isAdded
                    ? 'bg-primary-container text-on-primary'
                    : 'bg-on-surface text-surface hover:bg-primary-container hover:text-on-primary'
                }`}
              >
                <span className="material-symbols-outlined text-[14px]">
                  {isAdded ? 'check' : 'shopping_bag'}
                </span>
                <span>{isAdded ? 'Added' : 'Add to Bag'}</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="product-card group flex flex-col bg-surface-container-lowest rounded-xl p-2.5 shadow-sm hover:shadow-md transition-all relative border border-surface-container/60">
      <div className="relative w-full aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center">
        <Link to={`/product/${product.id}`} className="w-full h-full block">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src={product.images[0]}
            alt={product.title}
          />
        </Link>

        {product.badge && (
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px] tracking-wide uppercase">
            {product.badge}
          </span>
        )}

        <button
          aria-label="Save to Wishlist"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface/90 backdrop-blur-md flex items-center justify-center active:scale-90 transition-transform shadow-sm ${
            favorited ? 'text-error' : 'text-outline hover:text-error'
          }`}
        >
          <span
            className="material-symbols-outlined text-[18px]"
            style={favorited ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            {favorited ? 'favorite' : 'favorite_border'}
          </span>
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openQuickLook(product);
          }}
          className="quickview-btn absolute bottom-2 inset-x-2 py-1.5 rounded-lg bg-surface/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm opacity-90 hover:opacity-100 flex items-center justify-center gap-1 shadow-sm active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[14px]">visibility</span> Quick Look
        </button>
      </div>

      <div className="pt-2 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between gap-1 mb-0.5">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider truncate">
              {product.categoryLabel}
            </span>
            <div className="flex items-center gap-0.5 shrink-0 bg-surface-container px-1.5 py-0.5 rounded-full">
              <span
                className="material-symbols-outlined text-[12px] text-tertiary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-label-sm text-[10px] text-on-surface font-bold">
                {product.rating}
              </span>
              <span className="font-body-sm text-[9px] text-outline">
                ({product.reviewCount})
              </span>
            </div>
          </div>

          <Link to={`/product/${product.id}`}>
            <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight line-clamp-2 hover:text-primary transition-colors">
              {product.title}
            </h3>
          </Link>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">
            {product.subtitle}
          </p>
        </div>

        <div className="mt-2 pt-1.5 flex items-baseline justify-between border-t border-surface-container/50">
          <div className="flex items-baseline gap-1.5">
            <span className="font-price-md text-price-md text-on-surface">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="font-body-sm text-body-sm text-outline line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          {product.discountPercentage && (
            <span className="font-label-sm text-label-sm text-error font-semibold">
              {product.discountPercentage}% OFF
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

