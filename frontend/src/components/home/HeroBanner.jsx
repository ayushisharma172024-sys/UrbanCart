import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <section className="px-margin my-space-xs max-w-7xl mx-auto">
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg aspect-[4/5] md:aspect-[16/7] max-h-[480px] flex flex-col justify-end p-margin text-on-surface">
        <div
          className="absolute inset-0 bg-cover bg-center -z-10 transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCI_hXuqgEgMGarNbPSqFzs8g_rdBZRNCUgg2HBV6tUI1jOvn8boOT5AmqBMD3yLEC50Tsm5sy52MD5hLlClr2n7TKoVcPcS9rFLAHWyn5uVmXbm5wV5WQrGFBS4jMU_hLltJXFj3BQ2J6ly-_72YFYLFkFR2Jrq2djJ-2M7D1vp11qzqnTtJdncxcDnmtd8GE_w9zGKfnfNcwWujKfQIzZeqAI5h5EktY3sY_kNuidkEc8KVjVdfay')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/40 to-transparent -z-10"></div>

        {/* Limited-time badge */}
        <div className="absolute top-margin left-margin">
          <span className="bg-primary-container text-on-primary font-label-sm text-label-sm px-space-md py-1 rounded-full uppercase tracking-wider shadow-md">
            UP TO 40% OFF
          </span>
        </div>

        {/* Campaign Copy */}
        <div className="flex flex-col gap-space-xs text-surface max-w-md">
          <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest">
            Autumn/Winter '24
          </span>
          <h2 className="font-display-mobile md:font-display text-display-mobile md:text-display leading-none tracking-tight">
            AUTUMN/WINTER<br />ESSENTIALS
          </h2>
          <p className="font-body-md text-body-md text-surface/90 line-clamp-2">
            Elevated silhouettes engineered for contemporary metropolitan living.
          </p>
          <div className="pt-space-sm flex items-center gap-space-md">
            <Link
              to="/catalog"
              className="bg-surface text-on-background px-space-lg py-space-sm rounded-full font-label-md text-label-md font-semibold tracking-wide hover:bg-surface-bright transition-all shadow-md active:scale-95 flex items-center gap-space-xs"
            >
              Shop Collection
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <span className="font-label-sm text-label-sm text-surface/80">Limited Drop</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

