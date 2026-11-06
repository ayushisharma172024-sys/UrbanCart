import React from 'react';
import { USER_PROFILE } from '../../data/mockData';

const ActiveOrderTracker = () => {
  const order = USER_PROFILE.activeOrder;

  return (
    <section className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col gap-space-md relative overflow-hidden border border-surface-container/60 max-w-2xl mx-auto">
      {/* Card Head: Status & Order Number */}
      <div className="flex items-center justify-between gap-space-sm pb-space-xs border-b border-surface-container">
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
            </span>
            <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider">
              {order.status}
            </span>
          </div>
          <p className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight mt-0.5">
            Order #{order.orderNumber}
          </p>
        </div>
        <div className="text-right shrink-0">
          <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-semibold">
            {order.carrier}
          </span>
        </div>
      </div>

      {/* Product Preview Tile */}
      <div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-low">
        <div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden shrink-0 relative flex items-center justify-center">
          <img
            alt={order.productTitle}
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoqUXfve3wKa0gv8ygLlPIX4Ppr_KDjHg9Gv9l5qJM5GEXefQnQEdcsfKXOvtUfg2Bh8GRzFZZMNlvwjXshtZHB6JOLnnjuT2GrRF55NDY50eRen5VLANzYaGdIwJ_-c-B2NLMmrdTrs19DWcK-Ue_-JKBFX6YuDKE2fqSJVxmKcaywh7ZV1THN78jtGDFe_bodjBa-LfIp8Jf0U-9XvHOEG6x7QoTp-FnMGUHr2ugj-zrBpBcYUjL"
          />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-label-sm text-[10px] uppercase text-outline tracking-wider">
            {order.category}
          </span>
          <h2 className="font-body-md text-body-md font-semibold text-on-surface truncate">
            {order.productTitle}
          </h2>
          <div className="flex items-center justify-between mt-1">
            <span className="font-body-sm text-body-sm text-secondary truncate">
              {order.variant}
            </span>
            <span className="font-price-md text-price-md text-on-surface font-bold">
              ₹{order.price.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>

      {/* Live ETA Banner */}
      <div className="flex items-center justify-between p-2.5 rounded-lg bg-primary/5 text-primary">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-primary">schedule</span>
          <div className="flex flex-col">
            <span className="font-label-sm text-[11px] text-secondary font-medium">
              Estimated Arrival
            </span>
            <span className="font-headline-sm text-[14px] text-on-surface font-bold">
              {order.eta}
            </span>
          </div>
        </div>
        <div className="flex items-center text-primary-container gap-0.5">
          <span className="material-symbols-outlined text-[16px]">bolt</span>
          <span className="font-label-sm text-label-sm font-semibold uppercase">Express Air</span>
        </div>
      </div>

      {/* Interactive Stepper */}
      <div className="w-full pt-2 pb-1">
        <div className="relative flex flex-col gap-5 pl-7">
          {/* Vertical Connection Line */}
          <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-surface-container-highest">
            <div className="w-full h-[68%] bg-primary-container"></div>
          </div>

          {order.trackingSteps.map((step) => (
            <div key={step.step} className="relative flex flex-col group">
              <div
                className={`absolute -left-7 top-0 w-6 h-6 rounded-full flex items-center justify-center shadow-xs ${
                  step.active
                    ? 'bg-primary-container text-on-primary ring-4 ring-primary-container/20 shadow-sm'
                    : step.done
                    ? 'bg-primary-container text-on-primary'
                    : 'bg-surface-container text-outline'
                }`}
              >
                {step.done && !step.active && (
                  <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                )}
                {step.active && (
                  <span className="material-symbols-outlined text-[14px] animate-pulse">
                    local_shipping
                  </span>
                )}
                {!step.done && (
                  <span className="material-symbols-outlined text-[13px]">inventory_2</span>
                )}
              </div>

              <div className="flex items-baseline justify-between">
                <p
                  className={`font-label-md text-label-md font-semibold ${
                    step.active ? 'text-primary-container' : 'text-on-surface'
                  }`}
                >
                  {step.title}
                </p>
                <span className="font-body-sm text-body-sm text-outline">{step.time}</span>
              </div>
              <p className="font-body-sm text-body-sm text-secondary">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-space-sm pt-space-xs border-t border-surface-container">
        <button
          className="w-full h-11 px-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-transform"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">near_me</span>
          <span>Track Live Map</span>
        </button>
        <button
          className="w-full h-11 px-3 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 active:scale-[0.98] transition-transform hover:bg-surface-container-high"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">receipt_long</span>
          <span>Tax Invoice</span>
        </button>
      </div>
    </section>
  );
};

export default ActiveOrderTracker;

