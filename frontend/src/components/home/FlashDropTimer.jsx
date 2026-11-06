import React, { useState, useEffect } from 'react';

const FlashDropTimer = () => {
  // 4 hours, 23 mins, 12 seconds initial
  const [totalSeconds, setTotalSeconds] = useState(4 * 3600 + 23 * 60 + 12);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');

  return (
    <section className="px-margin my-space-md max-w-7xl mx-auto w-full">
      <div className="bg-surface-container-high rounded-xl p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm shadow-sm">
        <div className="flex items-center gap-space-sm">
          <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[20px]">timer</span>
          </div>
          <div>
            <h4 className="font-headline-sm text-[16px] text-on-surface font-bold">
              Midnight Curated Drop
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Exclusive archive editions unlocked for limited hours only.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm min-w-[50px]">
            <span className="font-price-md text-price-md font-bold text-on-surface tabular-nums">
              {hours}
            </span>
            <span className="font-label-sm text-[9px] uppercase text-outline">Hours</span>
          </div>
          <span className="font-headline-sm font-bold text-outline">:</span>
          <div className="flex flex-col items-center bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm min-w-[50px]">
            <span className="font-price-md text-price-md font-bold text-on-surface tabular-nums">
              {minutes}
            </span>
            <span className="font-label-sm text-[9px] uppercase text-outline">Mins</span>
          </div>
          <span className="font-headline-sm font-bold text-outline">:</span>
          <div className="flex flex-col items-center bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm min-w-[50px]">
            <span className="font-price-md text-price-md font-bold text-primary tabular-nums">
              {seconds}
            </span>
            <span className="font-label-sm text-[9px] uppercase text-outline">Secs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashDropTimer;

