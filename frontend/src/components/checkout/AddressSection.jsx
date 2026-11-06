import React, { useState } from 'react';
import { USER_PROFILE } from '../../data/mockData';

const AddressSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState(USER_PROFILE.address);

  return (
    <section className="px-margin mt-space-sm max-w-2xl mx-auto w-full">
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-surface-container/60">
        <div className="flex items-start justify-between gap-space-sm">
          <div className="flex items-start gap-space-sm flex-1">
            <div className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-primary-container shrink-0 mt-0.5">
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                pin_drop
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">
                  {USER_PROFILE.name}
                </span>
                <span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full font-label-sm text-label-sm uppercase">
                  Home
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                {USER_PROFILE.phone}
              </p>

              {isEditing ? (
                <div className="mt-2 flex flex-col gap-2">
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={2}
                    className="w-full p-2 bg-surface-container text-on-surface rounded-lg text-sm focus:outline-none"
                  />
                  <button
                    onClick={() => setIsEditing(false)}
                    className="self-start px-3 py-1 bg-primary-container text-on-primary rounded-full text-xs font-semibold"
                  >
                    Save Address
                  </button>
                </div>
              ) : (
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  {address}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="shrink-0 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors"
            type="button"
          >
            {isEditing ? 'Cancel' : 'Change'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;

