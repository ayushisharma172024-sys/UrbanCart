import React, { useState } from 'react';

const PaymentMethodSelector = ({ selectedMethod, onSelectMethod }) => {
  const [vpa, setVpa] = useState('aarav.kapoor@okaxis');
  const [vpaVerified, setVpaVerified] = useState(true);

  const handleVerify = () => {
    if (vpa.includes('@')) {
      setVpaVerified(true);
    }
  };

  return (
    <section className="px-margin mt-space-md max-w-2xl mx-auto w-full">
      <div className="flex items-center justify-between mb-space-xs">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">Payment Options</h2>
        <div className="flex items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined text-[16px] text-primary-container">
            verified_user
          </span>
          <span className="font-label-sm text-label-sm">RBI Compliant</span>
        </div>
      </div>

      <div className="space-y-space-sm">
        {/* Option 1: Instant UPI */}
        <div
          className={`rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all border ${
            selectedMethod === 'upi' ? 'border-primary-container' : 'border-surface-container'
          }`}
        >
          <label
            onClick={() => onSelectMethod('upi')}
            className="flex items-center justify-between p-space-md cursor-pointer bg-surface-container-low/40"
          >
            <div className="flex items-center gap-space-sm">
              <input
                type="radio"
                name="payment_method"
                checked={selectedMethod === 'upi'}
                onChange={() => onSelectMethod('upi')}
                className="w-4 h-4 text-primary-container focus:ring-0"
              />
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                  Instant UPI
                  <span className="px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant font-label-sm text-[10px]">
                    Fastest
                  </span>
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  GPay, PhonePe, Paytm, BHIM
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 opacity-70">
              <span className="material-symbols-outlined text-[20px] text-primary-container">
                qr_code_scanner
              </span>
              <span className="material-symbols-outlined text-[20px] text-on-surface">
                account_balance_wallet
              </span>
            </div>
          </label>

          {/* UPI ID Input Tray */}
          {selectedMethod === 'upi' && (
            <div className="px-space-md pb-space-md pt-space-xs bg-surface-container-lowest">
              <div className="bg-surface-container-low rounded-lg p-space-sm">
                <label className="font-label-sm text-label-sm text-on-surface-variant block mb-1">
                  Enter Virtual Payment Address (VPA)
                </label>
                <div className="flex items-center gap-space-sm">
                  <input
                    type="text"
                    value={vpa}
                    onChange={(e) => {
                      setVpa(e.target.value);
                      setVpaVerified(false);
                    }}
                    placeholder="username@upi"
                    className="w-full bg-surface-container-lowest px-3 py-2 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none focus:bg-surface-bright"
                  />
                  <button
                    type="button"
                    onClick={handleVerify}
                    className="shrink-0 px-3 py-2 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm"
                  >
                    Verify
                  </button>
                </div>
                {vpaVerified && (
                  <div className="flex items-center gap-1.5 mt-2 text-primary">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    <span className="font-body-sm text-body-sm text-xs">
                      Verified handle • Axis Bank Ltd
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Option 2: Credit / Debit Card */}
        <div
          className={`rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all border ${
            selectedMethod === 'card' ? 'border-primary-container' : 'border-surface-container'
          }`}
        >
          <label
            onClick={() => onSelectMethod('card')}
            className="flex items-center justify-between p-space-md cursor-pointer hover:bg-surface-container-low/30"
          >
            <div className="flex items-center gap-space-sm">
              <input
                type="radio"
                name="payment_method"
                checked={selectedMethod === 'card'}
                onChange={() => onSelectMethod('card')}
                className="w-4 h-4 text-primary-container focus:ring-0"
              />
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">
                  Credit / Debit Card
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Visa, Mastercard, RuPay
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
              credit_card
            </span>
          </label>
        </div>

        {/* Option 3: NetBanking */}
        <div
          className={`rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all border ${
            selectedMethod === 'netbanking' ? 'border-primary-container' : 'border-surface-container'
          }`}
        >
          <label
            onClick={() => onSelectMethod('netbanking')}
            className="flex items-center justify-between p-space-md cursor-pointer hover:bg-surface-container-low/30"
          >
            <div className="flex items-center gap-space-sm">
              <input
                type="radio"
                name="payment_method"
                checked={selectedMethod === 'netbanking'}
                onChange={() => onSelectMethod('netbanking')}
                className="w-4 h-4 text-primary-container focus:ring-0"
              />
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">
                  NetBanking
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  HDFC, ICICI, SBI, Axis & 38 others
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
              account_balance
            </span>
          </label>
        </div>

        {/* Option 4: Cash on Delivery */}
        <div
          className={`rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all border ${
            selectedMethod === 'cod' ? 'border-primary-container' : 'border-surface-container'
          }`}
        >
          <label
            onClick={() => onSelectMethod('cod')}
            className="flex items-center justify-between p-space-md cursor-pointer hover:bg-surface-container-low/30"
          >
            <div className="flex items-center gap-space-sm">
              <input
                type="radio"
                name="payment_method"
                checked={selectedMethod === 'cod'}
                onChange={() => onSelectMethod('cod')}
                className="w-4 h-4 text-primary-container focus:ring-0"
              />
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">
                  Cash on Delivery (COD)
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Verified with dynamic OTP on dispatch
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
              local_atm
            </span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodSelector;

