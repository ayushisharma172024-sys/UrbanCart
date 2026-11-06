import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import BottomNav from '../../components/common/BottomNav';
import QuickLookModal from '../../components/common/QuickLookModal';
import HeroBanner from '../../components/home/HeroBanner';
import CategoryCarousel from '../../components/home/CategoryCarousel';
import FlashDropTimer from '../../components/home/FlashDropTimer';
import TrendingSection from '../../components/home/TrendingSection';
import ReviewsCarousel from '../../components/home/ReviewsCarousel';
import VipBanner from '../../components/home/VipBanner';
import { SEARCH_CHIPS } from '../../data/mockData';
import { useApp } from '../../context/AppContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useApp();
  const [activeChip, setActiveChip] = useState('Oversized Tees');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleChipClick = (term) => {
    setActiveChip(term);
    setSearchQuery(term);
    navigate(`/catalog?q=${encodeURIComponent(term)}`);
  };

  return (
    <div className="bg-surface min-h-screen flex flex-col font-body-md text-on-surface antialiased">
      <Header />

      <main className="w-full flex-1 bg-surface pt-24 pb-28">
        <div className="flex flex-col w-full">
          {/* Search & Trending Query Chips Bar */}
          <section className="px-margin pt-space-xs pb-space-sm flex flex-col gap-space-sm max-w-7xl mx-auto w-full">
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center gap-space-xs bg-surface-container-high px-space-md py-space-sm rounded-full shadow-sm"
            >
              <span className="material-symbols-outlined text-outline text-[20px]">search</span>
              <input
                className="bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline w-full focus:outline-none"
                placeholder="Search curated brands, tech, living..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="button"
                aria-label="Voice Search"
                className="text-outline hover:text-primary transition-colors flex items-center"
              >
                <span className="material-symbols-outlined text-[20px]">mic</span>
              </button>
            </form>

            {/* Quick Exploration Chips */}
            <div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-0.5">
              {SEARCH_CHIPS.map((chip) => {
                const isActive = activeChip === chip;
                return (
                  <button
                    key={chip}
                    onClick={() => handleChipClick(chip)}
                    className={`shrink-0 px-space-md py-1 rounded-full font-label-md text-label-md transition-all active:scale-95 shadow-sm ${
                      isActive
                        ? 'bg-primary-container text-on-primary'
                        : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    {chip}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Hero Banner */}
          <HeroBanner />

          {/* Categories */}
          <CategoryCarousel />

          {/* Flash Drop Timer */}
          <FlashDropTimer />

          {/* Curated Spotlight / Trending Products */}
          <TrendingSection />

          {/* Reviews Carousel */}
          <ReviewsCarousel />

          {/* VIP Club Section */}
          <VipBanner />
        </div>
      </main>

      <QuickLookModal />
      <BottomNav />
    </div>
  );
};

export default HomePage;

