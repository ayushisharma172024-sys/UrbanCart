import React from 'react';

const FilterModal = ({
  isOpen,
  onClose,
  priceFilter,
  setPriceFilter,
  ratingFilter,
  setRatingFilter,
  expressOnly,
  setExpressOnly,
  inStockOnly,
  setInStockOnly,
  discountOnly,
  setDiscountOnly,
  onReset,
  totalResults,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div
        className="absolute inset-0 bg-on-background/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-lg max-h-[85vh] bg-surface-container-lowest rounded-t-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up z-10">
        {/* Sheet Handle & Header */}
        <div className="p-space-md bg-surface-container-low flex flex-col gap-2">
          <div className="w-12 h-1 bg-outline-variant rounded-full mx-auto"></div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-primary">tune</span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Filter Catalog</h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container text-on-surface-variant hover:text-on-surface"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Body */}
        <div className="p-space-md overflow-y-auto space-y-space-md">
          {/* Price Tiers */}
          <div>
            <h4 className="font-label-md text-label-md text-on-surface mb-space-xs font-bold uppercase tracking-wider">
              Price Range
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'all', label: 'All Prices' },
                { id: 'under2k', label: 'Under ₹2,000' },
                { id: '2k-5k', label: '₹2,000 - ₹5,000' },
                { id: 'above5k', label: '₹5,000+' },
              ].map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setPriceFilter(tier.id)}
                  className={`px-2.5 py-2 rounded-xl font-body-sm text-body-sm transition-all ${
                    priceFilter === tier.id
                      ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                      : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rating Selection */}
          <div>
            <h4 className="font-label-md text-label-md text-on-surface mb-space-xs font-bold uppercase tracking-wider">
              Customer Rating
            </h4>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setRatingFilter(ratingFilter === 4 ? null : 4)}
                className={`flex-1 py-2 rounded-xl font-label-md text-label-md flex items-center justify-center gap-1 transition-all ${
                  ratingFilter === 4
                    ? 'bg-primary-container text-on-primary shadow-sm'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span>4.0+ Stars</span>
              </button>

              <button
                onClick={() => setRatingFilter(ratingFilter === 3 ? null : 3)}
                className={`flex-1 py-2 rounded-xl font-label-md text-label-md flex items-center justify-center gap-1 transition-all ${
                  ratingFilter === 3
                    ? 'bg-primary-container text-on-primary shadow-sm'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span>3.0+ Stars</span>
              </button>
            </div>
          </div>

          {/* Availability & Perks */}
          <div>
            <h4 className="font-label-md text-label-md text-on-surface mb-space-xs font-bold uppercase tracking-wider">
              Availability & Perks
            </h4>
            <div className="flex flex-col gap-2">
              <label className="flex items-center justify-between p-3 rounded-xl bg-surface-container cursor-pointer hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    electric_bolt
                  </span>
                  <div>
                    <p className="font-headline-sm text-[14px] text-on-surface">Express Delivery</p>
                    <p className="font-body-sm text-body-sm text-outline">
                      Guaranteed 24-48h arrival
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={expressOnly}
                  onChange={(e) => setExpressOnly(e.target.checked)}
                  className="w-5 h-5 rounded accent-primary-container cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-surface-container cursor-pointer hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    inventory_2
                  </span>
                  <div>
                    <p className="font-headline-sm text-[14px] text-on-surface">In Stock Only</p>
                    <p className="font-body-sm text-body-sm text-outline">
                      Exclude backorder items
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-5 h-5 rounded accent-primary-container cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-surface-container cursor-pointer hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-error text-[20px]">percent</span>
                  <div>
                    <p className="font-headline-sm text-[14px] text-on-surface">
                      Discount Offers (20%+)
                    </p>
                    <p className="font-body-sm text-body-sm text-outline">
                      Exclusive promotional markdowns
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={discountOnly}
                  onChange={(e) => setDiscountOnly(e.target.checked)}
                  className="w-5 h-5 rounded accent-primary-container cursor-pointer"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="p-space-md bg-surface-container-low flex items-center gap-space-sm border-t border-surface-container">
          <button
            onClick={onReset}
            className="flex-1 py-3 rounded-full bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"
          >
            Reset All
          </button>
          <button
            onClick={onClose}
            className="flex-[2] py-3 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-md active:scale-98 transition-transform"
          >
            Apply Filters ({totalResults})
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;

