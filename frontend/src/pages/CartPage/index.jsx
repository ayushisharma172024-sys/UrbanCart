import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import BottomNav from '../../components/common/BottomNav';
import FreeShippingMeter from '../../components/cart/FreeShippingMeter';
import CartItem from '../../components/cart/CartItem';
import CouponSection from '../../components/cart/CouponSection';
import PriceDetails from '../../components/cart/PriceDetails';
import { useCart } from '../../context/CartContext';

const CartPage = () => {
  const { cartItems, clearCart, totalPayable } = useCart();
  const navigate = useNavigate();

  return (
    <div className="bg-surface min-h-screen flex flex-col font-body-md text-on-surface antialiased">
      <Header title="Shopping Bag" />

      <main className="w-full flex-1 bg-surface pt-24 pb-32 max-w-2xl mx-auto">
        <div className="flex flex-col w-full px-margin gap-space-lg">
          {cartItems.length === 0 ? (
            /* Empty Cart View */
            <div className="py-16 text-center flex flex-col items-center justify-center gap-space-md">
              <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center text-outline">
                <span className="material-symbols-outlined text-[40px]">shopping_bag</span>
              </div>
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  Your Bag is Empty
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-1">
                  Discover curated designs engineered for modern metropolitan living.
                </p>
              </div>
              <Link
                to="/catalog"
                className="px-6 py-3 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-md active:scale-95 transition-all"
              >
                Explore Curations
              </Link>
            </div>
          ) : (
            /* Active Cart View */
            <>
              {/* Top Free Shipping Delight Meter */}
              <FreeShippingMeter />

              {/* Cart Items List */}
              <section className="flex flex-col w-full gap-space-md">
                <div className="flex items-center justify-between">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Bag Items ({cartItems.length})
                  </h2>
                  <button
                    onClick={clearCart}
                    className="font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors underline"
                  >
                    Clear Bag Demo
                  </button>
                </div>

                <div className="flex flex-col gap-space-sm">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </section>

              {/* Coupons & Promo Offers */}
              <CouponSection />

              {/* Price Details Breakdown */}
              <PriceDetails />

              {/* Trust Badges & Policies */}
              <section className="grid grid-cols-3 gap-space-xs bg-surface-container p-space-md rounded-xl text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    verified_user
                  </span>
                  <span className="font-label-sm text-[11px] text-on-surface leading-tight font-medium">
                    100% Secure Checkout
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    published_with_changes
                  </span>
                  <span className="font-label-sm text-[11px] text-on-surface leading-tight font-medium">
                    7-Day Free Returns
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    payments
                  </span>
                  <span className="font-label-sm text-[11px] text-on-surface leading-tight font-medium">
                    Cash on Delivery Ready
                  </span>
                </div>
              </section>
            </>
          )}
        </div>
      </main>

      {/* Sticky Bottom Action for Checkout */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-16 inset-x-0 z-40 bg-surface/95 backdrop-blur-md border-t border-surface-container py-3 px-margin shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm text-outline block">Total Payable</span>
              <span className="font-price-lg text-price-lg font-extrabold text-on-surface tabular-nums">
                ₹{totalPayable.toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="flex-1 max-w-xs h-12 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-primary-container/90 active:scale-95 transition-all"
            >
              <span>Proceed to Checkout</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default CartPage;

