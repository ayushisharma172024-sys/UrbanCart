import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import CheckoutStepper from '../../components/checkout/CheckoutStepper';
import AddressSection from '../../components/checkout/AddressSection';
import DeliverySpeedSelector from '../../components/checkout/DeliverySpeedSelector';
import PaymentMethodSelector from '../../components/checkout/PaymentMethodSelector';
import OrderSummaryAccordion from '../../components/checkout/OrderSummaryAccordion';
import { useCart } from '../../context/CartContext';
import { useApp } from '../../context/AppContext';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { totalPayable, clearCart } = useCart();
  const { showToast } = useApp();

  const [deliverySpeed, setDeliverySpeed] = useState('express');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      showToast('Payment verified! Order placed successfully.');
      setTimeout(() => {
        clearCart();
        navigate('/account');
      }, 1800);
    }, 1500);
  };

  return (
    <div className="bg-surface min-h-screen flex flex-col font-body-md text-on-surface antialiased">
      <Header title="Checkout" showBack />

      <main className="w-full flex-1 bg-surface pt-20 pb-32">
        <div className="flex flex-col w-full pb-8">
          {/* Stepper Progression Track */}
          <CheckoutStepper currentStep={3} />

          {/* Simulated Sandbox Alert Ribbon */}
          <div className="px-margin py-space-xs max-w-2xl mx-auto w-full">
            <div className="flex items-center gap-space-sm bg-surface-container rounded-lg p-space-sm border border-surface-container-high">
              <span className="material-symbols-outlined text-primary-container text-[20px]">
                science
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                Simulated Checkout Sandbox. No real currency or payment data is charged.
              </p>
            </div>
          </div>

          {/* Delivery Destination Card */}
          <AddressSection />

          {/* Delivery Speed Options */}
          <DeliverySpeedSelector
            selectedSpeed={deliverySpeed}
            onSelectSpeed={setDeliverySpeed}
          />

          {/* Payment Selection Section */}
          <PaymentMethodSelector
            selectedMethod={paymentMethod}
            onSelectMethod={setPaymentMethod}
          />

          {/* Order Summary Collapsible Accordion */}
          <OrderSummaryAccordion />
        </div>
      </main>

      {/* Sticky Bottom Place Order CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-md border-t border-surface-container py-3 px-margin pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm text-outline block">Total Due</span>
            <span className="font-price-lg text-price-lg font-extrabold text-on-surface tabular-nums">
              ₹{totalPayable.toLocaleString('en-IN')}
            </span>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={isProcessing || orderComplete}
            className={`flex-1 max-w-xs h-12 rounded-full font-label-md text-label-md font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${
              orderComplete
                ? 'bg-emerald-600 text-white'
                : 'bg-primary-container text-on-primary hover:bg-primary-container/90'
            }`}
          >
            {isProcessing ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Authorizing UPI...</span>
              </>
            ) : orderComplete ? (
              <>
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Order Confirmed!</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">lock</span>
                <span>Pay & Confirm Order</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

