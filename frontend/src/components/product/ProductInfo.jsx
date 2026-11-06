import React from 'react';

const ProductInfo = ({ product, activeEditionPrice }) => {
  const currentPrice = activeEditionPrice || product.price;
  const originalPrice = product.originalPrice || currentPrice * 1.33;
  const savings = originalPrice - currentPrice;

  return (
    <div className="px-margin pt-space-md flex flex-col gap-space-sm max-w-2xl mx-auto w-full">
      {/* Badges */}
      <div className="flex flex-wrap items-center gap-space-xs">
        <span className="bg-inverse-surface text-inverse-on-surface px-2.5 py-0.5 rounded-full font-label-sm text-label-sm flex items-center gap-1 shadow-sm">
          <span
            className="material-symbols-outlined text-[13px] text-primary-fixed-dim"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            bolt
          </span>
          BESTSELLER #1 IN AUDIO
        </span>
        <span className="bg-primary-container text-on-primary px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-bold shadow-sm">
          {product.discountPercentage || 25}% OFF
        </span>
        <span className="bg-surface-container-high text-on-surface-variant px-2.5 py-0.5 rounded-full font-label-sm text-label-sm">
          SPATIAL AUDIO
        </span>
      </div>

      {/* Product Title */}
      <h1 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-surface leading-tight">
        {product.title}
      </h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant -mt-1">
        {product.tagline || product.subtitle}
      </p>

      {/* Ratings and Ask Question Row */}
      <div className="flex items-center justify-between py-1">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-surface-container px-2.5 py-1 rounded-full">
            <span className="font-label-md text-label-md text-on-surface font-semibold">
              {product.rating}
            </span>
            <span
              className="material-symbols-outlined text-[15px] text-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          </div>
          <a
            className="font-body-sm text-body-sm text-primary font-medium underline underline-offset-2"
            href="#reviews-section"
          >
            {product.verifiedReviewsCount || 1842} verified reviews
          </a>
        </div>
        <button className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">help_outline</span>
          <span>Ask Question</span>
        </button>
      </div>

      {/* Pricing Summary */}
      <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-1.5 shadow-sm">
        <div className="flex items-baseline gap-2.5 flex-wrap">
          <span className="font-price-lg text-price-lg text-on-surface tracking-tight font-bold">
            ₹{currentPrice.toLocaleString('en-IN')}
          </span>
          <span className="font-body-md text-body-md text-outline line-through">
            ₹{Math.round(originalPrice).toLocaleString('en-IN')}
          </span>
          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-label-sm text-label-sm font-bold">
            Save ₹{Math.round(savings).toLocaleString('en-IN')}
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Inclusive of all taxes & regulatory duties
        </p>
        <div className="flex items-center gap-2 pt-1 border-t border-surface-container/60 mt-1">
          <span className="material-symbols-outlined text-[18px] text-primary-container">
            payments
          </span>
          <p className="font-body-sm text-body-sm text-on-surface">
            EMI begins from <strong className="font-semibold text-primary">₹1,080/mo</strong> with no-cost tenure options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

