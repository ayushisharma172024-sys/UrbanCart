import React, { useState, useRef, useEffect } from 'react';

const SORT_OPTIONS = [
  'Featured',
  'Price: Low to High',
  'Price: High to Low',
  'Customer Rating',
  'Newest Arrivals',
];

const SortDropdown = ({ currentSort, onSelectSort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md hover:text-on-surface transition-colors"
      >
        <span className="material-symbols-outlined text-[16px]">swap_vert</span>
        <span>{currentSort}</span>
        <span className="material-symbols-outlined text-[14px]">expand_more</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1 w-48 bg-surface-container-lowest rounded-xl shadow-xl p-1 z-40 border border-surface-container">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSelectSort(option);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg font-body-sm text-body-sm transition-colors ${
                currentSort === option
                  ? 'text-primary font-semibold bg-surface-container-low'
                  : 'text-on-surface hover:bg-surface-container'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;

