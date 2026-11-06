import React from 'react';
import { USER_PROFILE, USER_AVATAR } from '../../data/mockData';
import { useWishlist } from '../../context/WishlistContext';
import { Link } from 'react-router-dom';

const ProfileHeader = () => {
  const { wishlistCount } = useWishlist();

  return (
    <section className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden border border-surface-container/60 max-w-2xl mx-auto">
      {/* Subtle Ambient Accent Mesh */}
      <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-primary-fixed-dim/25 blur-2xl pointer-events-none"></div>

      <div className="flex items-center gap-space-md relative z-10">
        <div className="relative shrink-0">
          <img
            alt={USER_PROFILE.name}
            className="w-16 h-16 rounded-full object-cover shadow-sm ring-2 ring-surface-container-high"
            src={USER_AVATAR}
          />
          <div className="absolute -bottom-1 -right-1 bg-inverse-surface text-surface rounded-full p-0.5 flex items-center justify-center shadow">
            <span
              className="material-symbols-outlined text-[14px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
          </div>
        </div>

        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-space-xs">
            <h1 className="font-headline-sm text-headline-sm text-on-surface truncate">
              {USER_PROFILE.name}
            </h1>
          </div>
          <p className="font-body-sm text-body-sm text-outline truncate">{USER_PROFILE.email}</p>
          <div className="mt-1 inline-flex items-center gap-1 self-start px-2 py-0.5 rounded-full bg-inverse-surface text-inverse-on-surface">
            <span
              className="material-symbols-outlined text-[12px] text-amber-300"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              stars
            </span>
            <span className="font-label-sm text-[10px] tracking-wide uppercase">
              {USER_PROFILE.tier}
            </span>
          </div>
        </div>
      </div>

      {/* Quick Stats Bento Pills */}
      <div className="grid grid-cols-3 gap-space-xs mt-space-md pt-space-sm border-t border-surface-container/50">
        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-low transition-transform active:scale-95 cursor-pointer">
          <div className="flex items-center gap-1 text-primary-container">
            <span className="material-symbols-outlined text-[15px]">local_shipping</span>
            <span className="font-price-md text-price-md font-bold text-on-surface">
              {USER_PROFILE.activeOrders}
            </span>
          </div>
          <span className="font-label-sm text-[10px] text-outline mt-0.5 text-center leading-tight">
            Active Orders
          </span>
        </div>

        <Link
          to="/catalog?filter=wishlist"
          className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-low transition-transform active:scale-95 cursor-pointer"
        >
          <div className="flex items-center gap-1 text-primary-container">
            <span
              className="material-symbols-outlined text-[15px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <span className="font-price-md text-price-md font-bold text-on-surface">
              {wishlistCount}
            </span>
          </div>
          <span className="font-label-sm text-[10px] text-outline mt-0.5 text-center leading-tight">
            Wishlist
          </span>
        </Link>

        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-low transition-transform active:scale-95 cursor-pointer">
          <div className="flex items-center gap-1 text-primary-container">
            <span className="material-symbols-outlined text-[15px]">account_balance_wallet</span>
            <span className="font-price-md text-price-md font-bold text-on-surface">
              ₹{USER_PROFILE.walletBalance.toLocaleString('en-IN')}
            </span>
          </div>
          <span className="font-label-sm text-[10px] text-outline mt-0.5 text-center leading-tight">
            Wallet
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;

