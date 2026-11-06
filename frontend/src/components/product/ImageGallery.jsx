import React, { useState } from 'react';
import { useWishlist } from '../../context/WishlistContext';

const ImageGallery = ({ images, productId }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isWishlisted, toggleWishlist } = useWishlist();

  const favorited = isWishlisted(productId);

  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low max-w-2xl mx-auto rounded-b-2xl">
      {/* Slides Container */}
      <div className="relative aspect-[4/3] flex items-center justify-center p-space-md">
        <img
          key={currentSlide}
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-contain drop-shadow-md transition-opacity duration-300"
        />
      </div>

      {/* Floating 360 Badge & Wishlist */}
      <div className="absolute top-3 left-margin flex items-center gap-1.5 bg-inverse-surface/85 backdrop-blur-md px-2.5 py-1 rounded-full text-inverse-on-surface shadow-sm">
        <span className="material-symbols-outlined text-[14px] text-primary-fixed-dim animate-spin" style={{ animationDuration: '9s' }}>
          360
        </span>
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-inverse-on-surface">
          360° Studio View
        </span>
      </div>

      <button
        aria-label="Toggle Wishlist"
        onClick={() => toggleWishlist(productId)}
        className="absolute top-3 right-margin w-10 h-10 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-sm flex items-center justify-center text-on-surface active:scale-90 transition-transform"
      >
        <span
          className={`material-symbols-outlined text-[20px] transition-colors ${
            favorited ? 'text-error' : 'text-outline'
          }`}
          style={favorited ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          {favorited ? 'favorite' : 'favorite_border'}
        </span>
      </button>

      {/* Previous / Next click arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center text-on-surface shadow-sm hover:bg-surface"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center text-on-surface shadow-sm hover:bg-surface"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </>
      )}

      {/* Carousel Dots Pagination */}
      <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 h-1.5 rounded-full ${
              currentSlide === idx ? 'w-6 bg-primary' : 'w-2 bg-outline-variant hover:bg-outline'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;

