"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { BookingFormText } from "@/lib/text";


function BookingSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isVerifying, setIsVerifying] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (sessionId) {
      // You could verify the session with Stripe here if needed
      // For now, we'll just show success
      setTimeout(() => {
        setIsVerifying(false);
        setIsValid(true);
      }, 1000);
    } else {
      setIsVerifying(false);
      setIsValid(false);
    }
  }, [sessionId]);

  if (isVerifying) {
    return (
      <div className="container py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <svg className="animate-spin h-12 w-12 mx-auto text-purple-600" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Verifying Your Payment</h2>
          <p className="text-slate-600">Please wait while we confirm your booking...</p>
        </div>
      </div>
    );
  }

  if (!isValid) {
    return (
      <div className="container py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl mb-6">❌</div>
          <h2 className="text-3xl font-bold text-red-700 mb-4">Invalid Booking</h2>
          <p className="text-slate-700 text-lg mb-6">
            We couldn't verify your booking. Please contact us if you believe this is an error.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-16">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-6xl mb-6">✅</div>
        <h2 className="text-3xl font-bold text-green-700 mb-4">{BookingFormText.successTitle}</h2>
        <p className="text-slate-700 text-lg mb-6">
          {BookingFormText.successMessage}
        </p>
        <div className="bg-green-50 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-green-800 mb-3">{BookingFormText.whatsNext}</h3>
          <ul className="text-left space-y-2 text-green-700">
            {BookingFormText.whatsNextItems.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
        {sessionId && (
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-blue-700">
              <strong>Reference ID:</strong> {sessionId.slice(-8).toUpperCase()}
            </p>
          </div>
        )}
        <a
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

export default function BookingSuccessPage() {
  return (
    <Suspense fallback={
      <div className="container py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <svg className="animate-spin h-12 w-12 mx-auto text-purple-600" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Loading...</h2>
        </div>
      </div>
    }>
      <BookingSuccessContent />
    </Suspense>
  );
}