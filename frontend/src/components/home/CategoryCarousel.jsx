import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/mockData';

const CategoryCarousel = ({ onSelectCategory }) => {
  return (
    <section className="mt-space-lg px-margin flex flex-col gap-space-sm max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <h3 className="font-headline-sm text-headline-sm text-on-surface">Explore Curations</h3>
        <Link to="/catalog" className="font-label-md text-label-md text-primary font-medium hover:underline">
          View All
        </Link>
      </div>

      <div className="flex gap-space-md overflow-x-auto no-scrollbar py-space-xs" id="category-selector">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            to={`/catalog?category=${cat.id}`}
            onClick={() => onSelectCategory && onSelectCategory(cat.id)}
            className="category-item flex flex-col items-center gap-space-xs shrink-0 group focus:outline-none"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container shadow-sm p-0.5 transition-transform group-hover:scale-105 active:scale-95">
              <img
                className="w-full h-full object-cover rounded-full"
                src={cat.image}
                alt={cat.name}
              />
            </div>
            <span className="font-label-sm text-label-sm text-on-surface text-center">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryCarousel;

