import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';
import { LOGO_URL, USER_AVATAR } from '../../data/mockData';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const Header = ({ title, showBack = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { itemCount } = useCart();
  const { wishlistCount } = useWishlist();

  const isCheckout = location.pathname === '/checkout';
  const isProduct = location.pathname.startsWith('/product');

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Top Announcement strip only on non-checkout pages */}
      {!isCheckout && <AnnouncementBar />}

      <div className="h-16 px-margin flex items-center justify-between gap-space-sm max-w-7xl mx-auto">
        <div className="flex items-center gap-space-sm min-w-0">
          {(showBack || isProduct || isCheckout) ? (
            <button
              aria-label="Go back"
              className="w-11 h-11 -ml-2 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors"
              onClick={() => navigate(-1)}
            >
              <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            </button>
          ) : null}

          <Link to="/" className="flex items-center gap-space-sm min-w-0">
            <img
              alt="UrbanCart Logo"
              className="h-8 w-auto object-contain"
              src={LOGO_URL}
            />
            <div className="flex flex-col truncate">
              <span className="font-headline-sm text-headline-sm text-on-surface leading-tight truncate">
                {title || 'UrbanCart'}
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-space-xs">
          <Link
            to="/catalog"
            aria-label="Search catalog"
            className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">search</span>
          </Link>

          <Link
            to="/catalog?filter=wishlist"
            aria-label="Wishlist"
            className="w-11 h-11 relative flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">favorite</span>
            {wishlistCount > 0 && (
              <span className="absolute top-2 right-2 min-w-[14px] h-[14px] px-1 rounded-full bg-primary-container text-on-primary font-label-sm text-[9px] flex items-center justify-center leading-none">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            aria-label="Shopping Cart"
            className="w-11 h-11 relative flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            {itemCount > 0 && (
              <span className="absolute top-2 right-2 min-w-[14px] h-[14px] px-1 rounded-full bg-primary-container text-on-primary font-label-sm text-[9px] flex items-center justify-center leading-none">
                {itemCount}
              </span>
            )}
          </Link>

          <Link
            to="/account"
            aria-label="Account"
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-surface-container-high"
              src={USER_AVATAR}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

