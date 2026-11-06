import React from 'react';

const CheckoutStepper = ({ currentStep = 3 }) => {
  const steps = [
    { number: 1, label: 'Address' },
    { number: 2, label: 'Delivery' },
    { number: 3, label: 'Payment' },
  ];

  return (
    <section className="px-margin pt-space-md pb-space-sm max-w-2xl mx-auto w-full">
      <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm">
        <div className="flex items-center justify-between relative max-w-md mx-auto">
          <div className="absolute left-6 right-6 top-3 h-0.5 bg-primary-container z-0"></div>

          {steps.map((step) => {
            const isCompleted = step.number < currentStep;
            const isActive = step.number === currentStep;

            return (
              <div key={step.number} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shadow-sm ${
                    isCompleted || isActive
                      ? 'bg-primary-container text-on-primary'
                      : 'bg-surface-container-highest text-outline'
                  }`}
                >
                  {isCompleted ? (
                    <span
                      className="material-symbols-outlined text-[15px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check
                    </span>
                  ) : isActive ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-surface-container-lowest animate-pulse"></span>
                  ) : (
                    <span className="text-[11px] font-bold">{step.number}</span>
                  )}
                </div>
                <span
                  className={`font-label-sm text-label-sm mt-1.5 ${
                    isActive
                      ? 'text-primary-container font-semibold'
                      : 'text-on-surface font-medium'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CheckoutStepper;

