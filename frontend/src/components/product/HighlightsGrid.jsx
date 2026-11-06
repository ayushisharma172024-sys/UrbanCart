import React from 'react';

const HighlightsGrid = ({ highlights = [] }) => {
  if (!highlights.length) return null;

  return (
    <section className="px-margin pt-space-xl flex flex-col gap-space-sm max-w-2xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">Engineering Highlights</h2>
        <span className="font-label-sm text-label-sm text-primary font-bold">AUDIO LAB SPEC</span>
      </div>

      <div className="grid grid-cols-2 gap-space-sm">
        {highlights.map((h, i) => (
          <div
            key={i}
            className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-full bg-primary-container/15 text-primary flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[22px]">{h.icon}</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-[15px] text-on-surface font-semibold">{h.label}</h3>
              <p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">{h.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsGrid;

