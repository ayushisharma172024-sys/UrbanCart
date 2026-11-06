import React, { useState } from 'react';

const VipBanner = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim().length > 3) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="my-space-xl px-margin max-w-7xl mx-auto w-full">
      <div className="relative rounded-2xl bg-gradient-to-br from-inverse-surface via-[#1b1c24] to-[#0d1020] text-surface p-space-lg md:p-space-xl overflow-hidden shadow-xl">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-xl flex flex-col gap-space-sm">
          <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-0.5 rounded-full bg-surface/10 backdrop-blur-md text-primary-fixed-dim">
            <span className="material-symbols-outlined text-[14px]">stars</span>
            <span className="font-label-sm text-[11px] uppercase tracking-wider">
              UrbanCart Society
            </span>
          </div>

          <h3 className="font-headline-lg md:font-display text-headline-lg md:text-display text-surface leading-tight">
            Curated Access. Before The World Notices.
          </h3>

          <p className="font-body-md text-surface/80">
            Join 35,000+ patrons receiving private drops, architectural stories, and 10% off the first collection acquisition.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 pt-2">
            <div className="relative flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your private email..."
                className="w-full h-12 px-4 rounded-full bg-surface/10 border border-surface/20 text-surface placeholder:text-surface/50 font-body-md focus:outline-none focus:border-primary-container focus:bg-surface/15 transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className={`h-12 px-6 rounded-full font-label-md text-label-md font-semibold transition-all shrink-0 ${
                submitted
                  ? 'bg-emerald-500 text-white cursor-default'
                  : 'bg-primary-container text-on-primary hover:bg-primary-container/90 active:scale-95'
              }`}
            >
              {submitted ? 'Joined Society' : 'Unlock Invitation'}
            </button>
          </form>

          {submitted && (
            <p className="font-body-sm text-emerald-400 flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              Welcome to UrbanCart. Your invitation key has been dispatched.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default VipBanner;

