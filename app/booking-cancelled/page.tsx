
export const metadata = {
  title: "Booking Cancelled - Seattle Layover Tours | Six Hour Layover",
  description: "Your Seattle layover tour booking was cancelled. No payment was processed. You can try booking again anytime for SEA airport pickup tours.",
  robots: {
    index: false,
    follow: true
  }
};

export default function BookingCancelledPage() {
  return (
    <div className="container py-16">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-6xl mb-6">😞</div>
        <h2 className="text-3xl font-bold text-orange-700 mb-4">Booking Cancelled</h2>
        <p className="text-slate-700 text-lg mb-6">
          Your booking was cancelled. Don't worry - no payment was processed.
        </p>
        <div className="bg-orange-50 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-orange-800 mb-3">Want to try again?</h3>
          <p className="text-orange-700">
            You can go back and complete your booking anytime. Your tour information is still available.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-colors"
          >
            Return Home
          </a>
          <a
            href="/book"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Try Again
          </a>
        </div>
      </div>
    </div>
  );
}