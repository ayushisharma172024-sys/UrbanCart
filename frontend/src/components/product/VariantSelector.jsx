import React from 'react';

const VariantSelector = ({
  colorways = [],
  selectedColor,
  onSelectColor,
  editions = [],
  selectedEdition,
  onSelectEdition,
}) => {
  return (
    <div className="px-margin flex flex-col gap-space-sm max-w-2xl mx-auto w-full">
      {/* Colorway Selector */}
      {colorways.length > 0 && (
        <div className="pt-space-xs flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <label className="font-label-md text-label-md text-on-surface font-semibold">
              Colorway:
            </label>
            <span className="font-label-md text-label-md text-primary font-bold">
              {selectedColor?.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {colorways.map((cw) => {
              const isActive = selectedColor?.name === cw.name;
              return (
                <button
                  key={cw.name}
                  onClick={() => onSelectColor(cw)}
                  aria-label={cw.name}
                  className={`color-swatch flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm active:scale-95 transition-all ${
                    isActive
                      ? 'bg-surface-container-highest ring-1 ring-primary-container'
                      : 'bg-surface-container hover:bg-surface-container-high'
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full shadow-inner border border-black/10"
                    style={{ backgroundColor: cw.hex }}
                  ></span>
                  <span className="font-label-sm text-label-sm text-on-surface font-medium">
                    {cw.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Audio Edition Selector */}
      {editions.length > 0 && (
        <div className="pt-space-xs flex flex-col gap-space-xs">
          <label className="font-label-md text-label-md text-on-surface font-semibold">
            Audio Bundle Edition:
          </label>
          <div className="grid grid-cols-2 gap-space-sm">
            {editions.map((ed) => {
              const isSelected = selectedEdition?.id === ed.id;
              return (
                <button
                  key={ed.id}
                  onClick={() => onSelectEdition(ed)}
                  className={`p-space-sm rounded-xl text-left shadow-sm transition-all flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-surface-container-highest border-primary-container'
                      : 'bg-surface-container border-transparent opacity-80 hover:opacity-100'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-md text-label-md font-bold text-on-surface">
                        {ed.name}
                      </span>
                      <span
                        className={`material-symbols-outlined text-[18px] ${
                          isSelected ? 'text-primary' : 'text-outline'
                        }`}
                      >
                        {isSelected ? 'check_circle' : 'radio_button_unchecked'}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      {ed.desc}
                    </p>
                  </div>
                  <span
                    className={`font-price-md text-price-md font-bold mt-2 ${
                      isSelected ? 'text-primary' : 'text-on-surface'
                    }`}
                  >
                    ₹{ed.price.toLocaleString('en-IN')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default VariantSelector;

