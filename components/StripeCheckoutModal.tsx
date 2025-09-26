"use client";
import { useCallback, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

interface StripeCheckoutPayload {
  bookingId: string;
  productId: string;
  travelerCount: number;
  addOnIds: string[];
  customerEmail?: string;
  metadata?: Record<string, string>;
}

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

interface StripeCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onError: (error: string) => void;
  payload: StripeCheckoutPayload | null;
}

export default function StripeCheckoutModal({
  isOpen,
  onClose,
  onSuccess,
  onError,
  payload
}: StripeCheckoutModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = useCallback(async () => {
    if (!payload || isLoading) return;

    setIsLoading(true);

    try {
      if (!stripePromise) {
        throw new Error('Stripe is not configured. Please check your environment variables.');
      }

      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      // Create checkout session
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { sessionId, url } = await response.json();

      if (url) {
        window.location.href = url;
        onSuccess();
        return;
      }

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        throw error;
      }

      onSuccess();
    } catch (error) {
      console.error('Checkout error:', error);
      onError(error instanceof Error ? error.message : 'Payment failed');
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, onError, onSuccess, payload]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      handleCheckout();
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [handleCheckout, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center">
          {isLoading ? (
            <>
              <div className="mb-6">
                <svg className="animate-spin h-12 w-12 mx-auto text-purple-600" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Redirecting to Payment</h3>
              <p className="text-slate-600">Please wait while we redirect you to our secure payment page...</p>
            </>
          ) : (
            <>
              <div className="text-6xl mb-6">💳</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Ready to Complete Your Booking</h3>
              <p className="text-slate-600 mb-6">
                You'll be redirected to our secure payment page to complete your booking.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Continue to Payment
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
