import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/mockData';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { useApp } from '../../context/AppContext';

const TrendingSection = () => {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { openQuickLook, showToast } = useApp();
  const [addedIds, setAddedIds] = useState({});

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    showToast(`Added ${product.title} to bag!`);
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section className="mt-space-lg px-margin flex flex-col gap-space-sm max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <h3 className="font-headline-sm text-headline-sm text-on-surface">Curated Spotlight</h3>
        <Link to="/catalog" className="font-label-md text-label-md text-primary font-medium hover:underline">
          Browse All ({PRODUCTS.length})
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter-sm">
        {PRODUCTS.slice(0, 4).map((product) => {
          const favorited = isWishlisted(product.id);
          const isAdded = !!addedIds[product.id];

          return (
            <article
              key={product.id}
              className="product-card group flex flex-col bg-surface-container-lowest rounded-xl p-2.5 shadow-sm hover:shadow-md transition-all relative"
            >
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

                <div className="mt-2 pt-1.5 flex items-center justify-between border-t border-surface-container/50">
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

                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className={`quick-add-btn text-xs px-2.5 py-1 rounded-full font-label-md flex items-center gap-1 transition-all ${
                      isAdded
                        ? 'bg-primary-container text-on-primary'
                        : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <span className="material-symbols-outlined text-[14px]">check</span>
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[14px]">add</span>
                        <span>Add</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TrendingSection;

