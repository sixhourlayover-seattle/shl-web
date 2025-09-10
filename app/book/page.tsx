import Navigation from "@/components/Navigation";
import BookingForm from "@/components/BookingForm";
import MobileNav from "@/components/MobileNav";

export const metadata = {
  title: "Book Your Seattle Layover Tour | The Six-Hour Layover",
  description: "Book your Seattle layover tour today. Quick and easy booking process with instant confirmation.",
};

export default function BookPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 animated-gradient opacity-10" />
      <div className="fixed inset-0 bg-gradient-to-b from-white/95 via-purple-50/90 to-indigo-50/95" />
      
      {/* Floating orbs for visual interest */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="fixed top-40 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}} />
      <div className="fixed bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}} />
      
      <div className="relative z-10">
        <Navigation />
        
        <section className="py-8">
          <div className="container">
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
                  Book Your Seattle Adventure
                </span>
              </h1>
              <p className="text-slate-700 text-lg max-w-2xl mx-auto">
                Just a few steps to secure your perfect Seattle layover experience
              </p>
            </div>
          </div>
          
          <BookingForm isModal={false} />
        </section>

        <MobileNav />
      </div>
    </div>
  );
}
