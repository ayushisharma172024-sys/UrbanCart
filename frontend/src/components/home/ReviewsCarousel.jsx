import React, { useRef } from 'react';
import { REVIEWS } from '../../data/mockData';

const ReviewsCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="mt-space-xl px-margin flex flex-col gap-space-sm max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            Discerning Voices
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Verified experiences from our collector community.
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scroll('left')}
            aria-label="Previous review"
            className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next review"
            className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-space-md overflow-x-auto no-scrollbar py-space-xs scroll-smooth"
      >
        {REVIEWS.map((review) => (
          <div
            key={review.id}
            className="w-[280px] shrink-0 p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-sm border border-surface-container"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="font-label-sm text-[11px] text-outline">{review.date}</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                "{review.comment}"
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-surface-container">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-xs">
                {review.author[0]}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md font-semibold text-on-surface truncate">
                  {review.author}
                </span>
                <span className="font-label-sm text-[10px] text-outline">
                  {review.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsCarousel;

