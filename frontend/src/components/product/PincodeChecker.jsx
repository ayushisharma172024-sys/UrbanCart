import React, { useState } from 'react';

const PincodeChecker = () => {
  const [pincode, setPincode] = useState('560001');
  const [checkedPincode, setCheckedPincode] = useState('560001');
  const [status, setStatus] = useState({
    city: 'Bengaluru',
    deliveryDate: 'Tomorrow, 2:00 PM',
    available: true,
  });

  const handleCheck = () => {
    if (pincode.trim().length === 6) {
      setCheckedPincode(pincode);
      setStatus({
        city: pincode.startsWith('11') ? 'New Delhi' : pincode.startsWith('40') ? 'Mumbai' : 'Bengaluru',
        deliveryDate: 'Tomorrow, 2:00 PM',
        available: true,
      });
    }
  };

  return (
    <div className="px-margin max-w-2xl mx-auto w-full">
      <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-sm shadow-sm mt-space-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-on-surface">
            <span className="material-symbols-outlined text-[18px] text-primary">local_shipping</span>
            <span className="font-label-md text-label-md font-semibold">Delivery Availability</span>
          </div>
          <span className="font-label-sm text-label-sm text-primary font-medium">
            Free Express Delivery
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              maxLength={6}
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter 6-digit Pincode"
              className="w-full h-11 px-3.5 bg-surface-container-lowest text-on-surface rounded-lg font-body-md text-body-md focus:outline-none placeholder:text-outline shadow-inner"
            />
          </div>
          <button
            onClick={handleCheck}
            className="h-11 px-5 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md active:scale-95 transition-transform"
          >
            Check
          </button>
        </div>

        {status && (
          <div className="flex items-center gap-2 text-on-surface bg-surface-container-lowest p-2.5 rounded-lg shadow-sm">
            <span
              className="material-symbols-outlined text-[18px] text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-body-sm text-body-sm text-on-surface truncate">
                Delivering to{' '}
                <strong className="font-semibold text-primary">
                  {checkedPincode} ({status.city})
                </strong>
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                Arrives by{' '}
                <strong className="text-on-surface font-bold">{status.deliveryDate}</strong> • Free Express Delivery
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PincodeChecker;

