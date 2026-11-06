import React from 'react';

const DeliverySpeedSelector = ({ selectedSpeed, onSelectSpeed }) => {
  return (
    <section className="px-margin mt-space-md max-w-2xl mx-auto w-full">
      <div className="flex items-center justify-between mb-space-xs">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">Dispatch & Transit</h2>
        <span className="font-label-sm text-label-sm text-primary-container font-semibold">
          Priority Routing
        </span>
      </div>

      <div className="space-y-space-sm">
        {/* Standard */}
        <label
          onClick={() => onSelectSpeed('standard')}
          className="block cursor-pointer"
        >
          <div
            className={`flex items-center justify-between p-space-md rounded-xl transition-all border ${
              selectedSpeed === 'standard'
                ? 'bg-surface-container-low border-primary-container'
                : 'bg-surface-container-lowest border-surface-container hover:bg-surface-container-low'
            }`}
          >
            <div className="flex items-center gap-space-sm">
              <input
                type="radio"
                name="delivery_speed"
                checked={selectedSpeed === 'standard'}
                onChange={() => onSelectSpeed('standard')}
                className="w-4 h-4 text-primary-container focus:ring-0"
              />
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">
                  Standard Shipping (2-3 Days)
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Estimated delivery by Friday, 6:00 PM
                </p>
              </div>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
              FREE
            </span>
          </div>
        </label>

        {/* Express Next-Day (Pre-Selected) */}
        <label
          onClick={() => onSelectSpeed('express')}
          className="block cursor-pointer"
        >
          <div
            className={`flex items-center justify-between p-space-md rounded-xl transition-all border ${
              selectedSpeed === 'express'
                ? 'bg-surface-container-low border-primary-container'
                : 'bg-surface-container-lowest border-surface-container hover:bg-surface-container-low'
            }`}
          >
            <div className="flex items-center gap-space-sm">
              <input
                type="radio"
                name="delivery_speed"
                checked={selectedSpeed === 'express'}
                onChange={() => onSelectSpeed('express')}
                className="w-4 h-4 text-primary-container focus:ring-0"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="font-label-md text-label-md text-on-surface font-semibold">
                    Express Next-Day Transit
                  </p>
                  <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px]">
                    Tomorrow 2 PM
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Unlocked with order value &gt; ₹1,999
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="font-label-sm text-label-sm text-primary-container font-bold">
                FREE
              </span>
              <p className="font-body-sm text-body-sm text-secondary line-through">₹249</p>
            </div>
          </div>
        </label>
      </div>
    </section>
  );
};

export default DeliverySpeedSelector;

