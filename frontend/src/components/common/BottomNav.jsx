import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const BottomNav = () => {
  const { itemCount } = useCart();

  const navItems = [
    { to: '/', label: 'Home', icon: 'storefront' },
    { to: '/catalog', label: 'Catalog', icon: 'grid_view' },
    { to: '/catalog?filter=wishlist', label: 'Wishlist', icon: 'favorite_border' },
    { to: '/cart', label: 'Cart', icon: 'shopping_bag', badge: itemCount },
    { to: '/account', label: 'Account', icon: 'person_outline' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)] border-t border-outline-variant/30">
      <div className="h-16 px-space-xs flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 h-full gap-0.5 transition-colors relative ${
                isActive
                  ? 'text-primary-container font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-[22px]"
                    style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                  >
                    {item.icon}
                  </span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="absolute -top-1 -right-2 px-1 min-w-[12px] h-[12px] rounded-full bg-primary-container text-on-primary font-label-sm text-[8px] flex items-center justify-center leading-none">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="font-label-sm text-[10px] leading-tight">{item.label}</span>
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-primary-container mt-0.5"></span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;

