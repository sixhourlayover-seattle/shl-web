import Navigation from "@/components/Navigation";

export default function Seattle6HoursPage() {
    return (
        <main className="min-h-screen relative overflow-hidden">

            {/* Animated background */}
            <div className="fixed inset-0 animated-gradient opacity-10" />
            <div className="fixed inset-0 bg-gradient-to-b from-white/95 via-purple-50/90 to-indigo-50/95" />

            {/* Floating orbs */}
            <div className="fixed top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

            <div
                className="fixed top-40 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
                style={{ animationDelay: "2s" }}
            />

            <div
                className="fixed bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
                style={{ animationDelay: "4s" }}
            />

            {/* PAGE CONTENT */}
            <div className="relative z-10">

                <Navigation />

                {/* SECTION 1 */}
                <section className="py-12 sm:py-20">

                    <div className="container text-center">

                        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
                            <span className="headings_color">
                                Explore Seattle in 6 Hours
                            </span>
                        </h1>

                        <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
                            Make the most of your time —<br></br>
                            coffee, food, views, and a smooth return to the airport.
                        </p>

                    </div>

                </section>
            </div>
        </main>
    );
}