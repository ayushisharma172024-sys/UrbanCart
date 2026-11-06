import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/common/Header';
import BottomNav from '../../components/common/BottomNav';
import QuickLookModal from '../../components/common/QuickLookModal';
import FilterModal from '../../components/catalog/FilterModal';
import SortDropdown from '../../components/catalog/SortDropdown';
import ProductCard from '../../components/catalog/ProductCard';
import { PRODUCTS } from '../../data/mockData';
import { useWishlist } from '../../context/WishlistContext';

const CATEGORY_TABS = [
  { id: 'all', label: 'All Items' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'electronics', label: 'Electronics' },
  { id: 'footwear', label: 'Footwear' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'living', label: 'Home & Living' },
];

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { wishlistIds } = useWishlist();

  // Filters state
  const initialCategory = searchParams.get('category') || 'all';
  const initialFilter = searchParams.get('filter');
  const initialQuery = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isWishlistOnly, setIsWishlistOnly] = useState(initialFilter === 'wishlist');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [sortBy, setSortBy] = useState('Featured');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Deep filters
  const [priceFilter, setPriceFilter] = useState('all'); // 'all' | 'under2k' | '2k-5k' | 'above5k'
  const [ratingFilter, setRatingFilter] = useState(null); // null | 4 | 3
  const [expressOnly, setExpressOnly] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [discountOnly, setDiscountOnly] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
    const filter = searchParams.get('filter');
    setIsWishlistOnly(filter === 'wishlist');
    const q = searchParams.get('q');
    if (q) setSearchQuery(q);
  }, [searchParams]);

  // Active filter count
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (priceFilter !== 'all') count++;
    if (ratingFilter) count++;
    if (expressOnly) count++;
    if (inStockOnly) count++;
    if (discountOnly) count++;
    return count;
  }, [priceFilter, ratingFilter, expressOnly, inStockOnly, discountOnly]);

  const handleResetFilters = () => {
    setPriceFilter('all');
    setRatingFilter(null);
    setExpressOnly(false);
    setInStockOnly(false);
    setDiscountOnly(false);
    setSearchQuery('');
    setIsWishlistOnly(false);
    setSelectedCategory('all');
    setSearchParams({});
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (isWishlistOnly) {
      result = result.filter((p) => wishlistIds.includes(p.id));
    }

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q)
      );
    }

    if (priceFilter === 'under2k') {
      result = result.filter((p) => p.price < 2000);
    } else if (priceFilter === '2k-5k') {
      result = result.filter((p) => p.price >= 2000 && p.price <= 5000);
    } else if (priceFilter === 'above5k') {
      result = result.filter((p) => p.price > 5000);
    }

    if (ratingFilter) {
      result = result.filter((p) => p.rating >= ratingFilter);
    }

    if (expressOnly) {
      result = result.filter((p) => p.expressDelivery);
    }

    if (inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    if (discountOnly) {
      result = result.filter((p) => p.discountPercentage >= 20);
    }

    // Sorting
    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'Customer Rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'Newest Arrivals') {
      result.reverse();
    }

    return result;
  }, [
    isWishlistOnly,
    wishlistIds,
    selectedCategory,
    searchQuery,
    priceFilter,
    ratingFilter,
    expressOnly,
    inStockOnly,
    discountOnly,
    sortBy,
  ]);

  return (
    <div className="bg-surface min-h-screen flex flex-col font-body-md text-on-surface antialiased">
      <Header title="Catalog" />

      <main className="w-full flex-1 bg-surface pt-24 pb-28 max-w-7xl mx-auto">
        <div className="flex flex-col w-full">
          {/* Query Feedback Context & Reset Strip */}
          <section className="px-margin pt-space-sm pb-space-xs bg-surface flex items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-xs min-w-0">
              <span className="material-symbols-outlined text-[18px] text-primary shrink-0">
                {isWishlistOnly ? 'favorite' : 'travel_explore'}
              </span>
              <div className="flex items-baseline gap-1.5 truncate">
                <p className="font-headline-sm text-headline-sm text-on-surface truncate">
                  {isWishlistOnly
                    ? 'Saved Wishlist'
                    : searchQuery
                    ? `Results for "${searchQuery}"`
                    : selectedCategory !== 'all'
                    ? CATEGORY_TABS.find((c) => c.id === selectedCategory)?.label
                    : 'Curated Catalog'}
                </p>
                <span className="font-label-sm text-label-sm text-outline shrink-0">
                  {filteredProducts.length} items
                </span>
              </div>
            </div>

            {(selectedCategory !== 'all' || searchQuery || isWishlistOnly || activeFiltersCount > 0) && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant font-label-sm text-label-sm shrink-0"
              >
                <span>Clear</span>
                <span className="material-symbols-outlined text-[14px]">close</span>
              </button>
            )}
          </section>

          {/* Horizontal Scrollable Category Filter Pills */}
          <section className="py-space-xs bg-surface">
            <div className="flex items-center gap-space-xs px-margin overflow-x-auto no-scrollbar scroll-smooth">
              {CATEGORY_TABS.map((tab) => {
                const isActive = selectedCategory === tab.id && !isWishlistOnly;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSelectedCategory(tab.id);
                      setIsWishlistOnly(false);
                      setSearchParams(tab.id === 'all' ? {} : { category: tab.id });
                    }}
                    className={`whitespace-nowrap px-4 py-2 rounded-full font-label-md text-label-md shadow-sm transition-all ${
                      isActive
                        ? 'bg-primary-container text-on-primary'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Control Strip: Filter Trigger, Sort Pill, & Grid View Toggle */}
          <section className="sticky top-16 z-30 px-margin py-space-xs bg-surface/95 backdrop-blur-md flex items-center justify-between gap-space-sm border-y border-surface-container/40">
            <div className="flex items-center gap-2 min-w-0">
              {/* Filter Modal Trigger Button */}
              <button
                onClick={() => setIsFilterModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-surface-container-highest text-on-surface font-label-md text-label-md active:scale-95 transition-transform"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">tune</span>
                <span>Filters</span>
                {activeFiltersCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-primary-container text-on-primary text-[10px] font-bold flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* Sort Selection Menu */}
              <SortDropdown currentSort={sortBy} onSelectSort={setSortBy} />
            </div>

            {/* Layout Density Switcher */}
            <div className="flex items-center p-0.5 rounded-full bg-surface-container shrink-0">
              <button
                aria-label="Grid View"
                onClick={() => setViewMode('grid')}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  viewMode === 'grid'
                    ? 'bg-surface-container-lowest text-on-surface shadow-sm'
                    : 'text-outline hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">grid_view</span>
              </button>
              <button
                aria-label="List View"
                onClick={() => setViewMode('list')}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  viewMode === 'list'
                    ? 'bg-surface-container-lowest text-on-surface shadow-sm'
                    : 'text-outline hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">view_agenda</span>
              </button>
            </div>
          </section>

          {/* Active Applied Filter Chips Strip */}
          {activeFiltersCount > 0 && (
            <section className="px-margin py-space-xs flex flex-wrap items-center gap-1.5 bg-surface">
              {ratingFilter && (
                <div className="chip-item flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                  <span>Rating: {ratingFilter}★ & above</span>
                  <button onClick={() => setRatingFilter(null)} className="hover:text-error">
                    <span className="material-symbols-outlined text-[13px]">cancel</span>
                  </button>
                </div>
              )}
              {expressOnly && (
                <div className="chip-item flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                  <span>Express Shipping</span>
                  <button onClick={() => setExpressOnly(false)} className="hover:text-error">
                    <span className="material-symbols-outlined text-[13px]">cancel</span>
                  </button>
                </div>
              )}
              {priceFilter !== 'all' && (
                <div className="chip-item flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                  <span>
                    Price:{' '}
                    {priceFilter === 'under2k'
                      ? '< ₹2,000'
                      : priceFilter === '2k-5k'
                      ? '₹2,000 - ₹5,000'
                      : '> ₹5,000'}
                  </span>
                  <button onClick={() => setPriceFilter('all')} className="hover:text-error">
                    <span className="material-symbols-outlined text-[13px]">cancel</span>
                  </button>
                </div>
              )}
              <button
                onClick={handleResetFilters}
                className="font-label-sm text-label-sm text-primary hover:underline ml-1"
              >
                Reset All
              </button>
            </section>
          )}

          {/* Dynamic Product Showcase */}
          <section className="px-margin py-space-sm">
            {filteredProducts.length === 0 ? (
              <div className="p-12 text-center flex flex-col items-center justify-center gap-3">
                <span className="material-symbols-outlined text-outline text-[48px]">
                  inventory_2
                </span>
                <h3 className="font-headline-sm text-on-surface font-semibold">
                  No matching artifacts found
                </h3>
                <p className="font-body-sm text-on-surface-variant max-w-xs">
                  Try adjusting filters or clear your search query to explore the full collection.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-2 px-5 py-2 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold"
                >
                  Reset Catalog Filters
                </button>
              </div>
            ) : (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter-sm'
                    : 'flex flex-col gap-space-sm max-w-2xl mx-auto'
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
            )}
          </section>

          {/* Pagination & Progress */}
          {filteredProducts.length > 0 && (
            <section className="px-margin pt-space-md pb-space-lg flex flex-col items-center gap-space-sm">
              <div className="flex items-center justify-between w-full max-w-sm">
                <button
                  disabled
                  className="flex items-center gap-1 px-4 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md opacity-50 cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                  <span>Previous</span>
                </button>
                <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface">
                  <span className="font-bold text-primary">1</span>
                  <span className="text-outline">of</span>
                  <span className="text-on-surface-variant">1</span>
                </div>
                <button
                  disabled
                  className="flex items-center gap-1 px-4 py-2 rounded-full bg-surface-container text-on-surface font-label-md text-label-md opacity-50 cursor-not-allowed"
                >
                  <span>Next</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>

              <div className="w-full max-w-xs bg-surface-container-high rounded-full h-1.5 overflow-hidden">
                <div className="bg-primary-container h-full w-full rounded-full transition-all duration-300"></div>
              </div>
              <span className="font-body-sm text-body-sm text-outline">
                Showing {filteredProducts.length} curated items
              </span>
            </section>
          )}
        </div>
      </main>

      {/* Filter Bottom Sheet Drawer Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        expressOnly={expressOnly}
        setExpressOnly={setExpressOnly}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
        discountOnly={discountOnly}
        setDiscountOnly={setDiscountOnly}
        onReset={handleResetFilters}
        totalResults={filteredProducts.length}
      />

      <QuickLookModal />
      <BottomNav />
    </div>
  );
};

export default CatalogPage;

