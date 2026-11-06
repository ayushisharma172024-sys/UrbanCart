import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';

const AccountLinks = () => {
  const { wishlistCount } = useWishlist();

  return (
    <div className="flex flex-col gap-space-md max-w-2xl mx-auto w-full">
      {/* VIP Privilege Tile */}
      <section className="w-full rounded-xl bg-gradient-to-r from-inverse-surface to-surface-tint p-space-md text-surface shadow-sm relative overflow-hidden">
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex flex-col min-w-0 pr-space-md">
            <span className="font-label-sm text-[10px] text-on-primary-container uppercase tracking-widest font-bold">
              VIP Privilege
            </span>
            <h3 className="font-headline-sm text-headline-sm text-surface font-bold mt-0.5">
              Concierge Audio Warranty
            </h3>
            <p className="font-body-sm text-body-sm text-surface/80 mt-1 line-clamp-2">
              Complimentary 2-year doorstep swap covered under your Black Membership.
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-surface/10 flex items-center justify-center shrink-0">
            <span
              className="material-symbols-outlined text-[26px] text-surface"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              shield_with_heart
            </span>
          </div>
        </div>
      </section>

      {/* Account Navigation List */}
      <section className="w-full bg-surface-container-lowest rounded-xl p-space-xs shadow-sm flex flex-col border border-surface-container/60 divide-y divide-surface-container/60">
        {/* List Item: Orders */}
        <div className="flex items-center justify-between p-space-md rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
          <div className="flex items-center gap-space-md min-w-0">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface shrink-0">
              <span className="material-symbols-outlined text-[20px]">local_shipping</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md font-semibold text-on-surface">
                My Orders & Returns
              </span>
              <span className="font-body-sm text-body-sm text-outline">
                Manage 2 orders & exchange requests
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-[10px] font-bold">
              1 in transit
            </span>
            <span className="material-symbols-outlined text-outline text-[20px]">
              chevron_right
            </span>
          </div>
        </div>

        {/* List Item: Addresses */}
        <div className="flex items-center justify-between p-space-md rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
          <div className="flex items-center gap-space-md min-w-0">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface shrink-0">
              <span className="material-symbols-outlined text-[20px]">location_on</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md font-semibold text-on-surface">
                Saved Addresses
              </span>
              <span className="font-body-sm text-body-sm text-outline truncate">
                Home (Indiranagar), Office (Whitefield)
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline text-[20px] shrink-0">
            chevron_right
          </span>
        </div>

        {/* List Item: Wishlist */}
        <Link
          to="/catalog?filter=wishlist"
          className="flex items-center justify-between p-space-md rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-space-md min-w-0">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface shrink-0">
              <span className="material-symbols-outlined text-[20px]">bookmark</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md font-semibold text-on-surface">
                Wishlist & Curations
              </span>
              <span className="font-body-sm text-body-sm text-outline">
                {wishlistCount} items saved across 2 boards
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline text-[20px] shrink-0">
            chevron_right
          </span>
        </Link>

        {/* List Item: Notifications */}
        <div className="flex items-center justify-between p-space-md rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
          <div className="flex items-center gap-space-md min-w-0">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface shrink-0">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md font-semibold text-on-surface">
                Notification Preferences
              </span>
              <span className="font-body-sm text-body-sm text-outline">
                SMS, WhatsApp, and Drop Alerts
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline text-[20px] shrink-0">
            chevron_right
          </span>
        </div>

        {/* List Item: Payment Methods */}
        <div className="flex items-center justify-between p-space-md rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
          <div className="flex items-center gap-space-md min-w-0">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface shrink-0">
              <span className="material-symbols-outlined text-[20px]">credit_card</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md font-semibold text-on-surface">
                Saved Cards & UPI
              </span>
              <span className="font-body-sm text-body-sm text-outline">
                1 UPI handle • 2 RBI Verified cards
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline text-[20px] shrink-0">
            chevron_right
          </span>
        </div>
      </section>
    </div>
  );
};

export default AccountLinks;

