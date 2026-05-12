// "use client";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import FAQAccordion from "./FAQAccordion";

export const metadata = {
    title: "6 Hours in Seattle: Best Things to Do, Eat & See",
    description:
        "Only have a few hours in Seattle? Discover coffee shops, food, parks, waterfront walks, and local experiences perfect for a short visit or layover.",
    alternates: {
        canonical:
            "https://yourdomain.com/6-hours-seattle-things-to-do",
    },
};


export default function Seattle6HoursPage() {

    // const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What can I do in Seattle in 6 hours?",
            answer:
                "In 6 hours, you can explore Pike Place Market, walk along the Seattle Waterfront, grab coffee at the original Starbucks, and enjoy views from the Space Needle or Kerry Park depending on your schedule.",
        },
        {
            question: "Is 6 hours enough for Seattle?",
            answer:
                "Yes, 6 hours is enough to experience Seattle’s main downtown attractions. While you won’t see everything, you can comfortably visit iconic spots, enjoy local food, and soak in the city atmosphere.",
        },
        {
            question: "What to do in Seattle during a layover?",
            answer:
                "During a Seattle layover, take the Link Light Rail from the airport to downtown Seattle. Visit Pike Place Market, the waterfront, or enjoy a quick seafood meal before heading back to the airport.",
        },
        {
            question: "What to eat near Pike Place Market?",
            answer:
                "Near Pike Place Market, try fresh Pacific Northwest seafood, clam chowder, artisan pastries, local coffee, and salmon dishes from the market’s famous food vendors and nearby restaurants.",
        },
    ];

    // const toggleFAQ = (index) => {
    //     setOpenIndex(openIndex === index ? null : index);
    // };


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

                            <span className="text-slate-900">
                                6 Hours in Seattle:
                            </span>

                            <br />

                            <span className="headings_color">
                                What to Do, Eat & See Near Downtown
                            </span>

                        </h1>

                        <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
                            Whether you're on a layover, short visit, or quick stop in Seattle,
                            this guide highlights simple and accessible experiences that fit
                            comfortably into just a few hours.
                        </p>

                    </div>

                </section>

                {/* SECTION 2 */}
                <section className="quick-plan-section container py-16">

                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
                        <span className="text-slate-900">
                            A Simple 6-Hour Seattle Plan
                        </span>
                    </h2>

                    <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed text-center">
                        If you only have a few hours in Seattle, this route keeps things
                        simple, walkable, and realistic without trying to do too much.
                    </p>

                    <div className="grid gap-6 max-w-4xl mx-auto py-16">

                        <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 hover-lift">
                            <span className="text-2xl font-bold mb-4 headings_color">
                                ☕ Coffee
                            </span>

                            <p className="text-slate-700 leading-relaxed">
                                Start with a local Seattle coffee stop near downtown or Pike Place Market.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 hover-lift">
                            <span className="text-2xl font-bold mb-4 headings_color">
                                🍽️ Food
                            </span>

                            <p className="text-slate-700 leading-relaxed">
                                Explore seafood, pastries, teriyaki, or quick local favorites around the market area.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 hover-lift">
                            <span className="text-2xl font-bold mb-4 headings_color">
                                🚶 Waterfront Walk
                            </span>

                            <p className="text-slate-700 leading-relaxed">
                                Walk along the Seattle waterfront for ferries, views,
                                street activity, and fresh air.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 hover-lift">
                            <span className="text-2xl font-bold mb-4 headings_color">
                                🌿 Parks & Views
                            </span>

                            <p className="text-slate-700 leading-relaxed">
                                Finish with skyline views, green spaces,
                                or a relaxing scenic stop before returning.
                            </p>
                        </div>

                    </div>

                </section>

                {/* SECTION 3 */}
                <section className="py-12 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6"> Explore Seattle by Category </h2>
                            <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed"> This section is designed as a growing Seattle content hub — featuring local recommendations, videos, short guides, and easy ideas for travelers with limited time. </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">

                            {/* COFFEE */}
                            <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 hover-lift">

                                <div className="grid md:grid-cols-2 gap-8 items-center">

                                    {/* LEFT CONTENT */}
                                    <div>

                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-3xl">☕</span>

                                            <h3 className="text-2xl font-bold text-slate-900">
                                                Coffee
                                            </h3>
                                        </div>

                                        <p className="text-slate-600 leading-8">
                                            Discover local Seattle coffee shops, cozy cafés,
                                            quick downtown stops, and iconic places near Pike Place Market.
                                        </p>

                                    </div>

                                    {/* RIGHT MEDIA */}
                                    <div className="relative h-64 rounded-2xl overflow-hidden">
                                        <Image src="/pouring-hot-coffee.jpg" alt="Seattle coffee shop" fill className="object-cover" />
                                    </div>

                                </div>

                            </div>

                            {/* FOOD */}
                            <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 hover-lift">

                                <div className="grid md:grid-cols-2 gap-8 items-center">

                                    {/* LEFT CONTENT */}
                                    <div>

                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-3xl">🍽️</span>

                                            <h3 className="text-2xl font-bold text-slate-900">
                                                Food
                                            </h3>
                                        </div>

                                        <p className="text-slate-600 leading-8">
                                            Explore seafood, pastries, teriyaki, hidden local favorites,
                                            and easy food stops that fit naturally into a short Seattle visit.
                                        </p>

                                    </div>

                                    {/* RIGHT MEDIA */}
                                    <div className="relative h-64 rounded-2xl overflow-hidden">
                                        <Image src="/seattle-skyline.jpg" alt="Seattle coffee shop" fill className="object-cover" />
                                    </div>

                                </div>

                            </div>

                            {/* PARKS & VIEWS */}
                            <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 hover-lift">

                                <div className="grid md:grid-cols-2 gap-8 items-center">

                                    {/* LEFT CONTENT */}
                                    <div>

                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-3xl">🌿</span>

                                            <h3 className="text-2xl font-bold text-slate-900">
                                                Parks & Views
                                            </h3>
                                        </div>

                                        <p className="text-slate-600 leading-8">
                                            Find relaxing parks, skyline viewpoints,
                                            waterfront scenery, and peaceful places to slow down during your visit.
                                        </p>

                                    </div>

                                    {/* RIGHT MEDIA */}
                                    <div className="relative h-64 rounded-2xl overflow-hidden">
                                        <Image src="/seattle-skyline.jpg" alt="Seattle coffee shop" fill className="object-cover" />
                                    </div>

                                </div>

                            </div>

                            {/* ACTIVITIES */}
                            <div className="rounded-3xl bg-white/80 backdrop-blur shadow-lg p-8 hover-lift">

                                <div className="grid md:grid-cols-2 gap-8 items-center">

                                    {/* LEFT CONTENT */}
                                    <div>

                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-3xl">🚣</span>

                                            <h3 className="text-2xl font-bold text-slate-900">
                                                Activities & Experiences
                                            </h3>
                                        </div>

                                        <p className="text-slate-600 leading-8">
                                            Browse walkable Seattle experiences,
                                            seasonal activities, markets, ferries,
                                            local moments, and memorable short-stop ideas.
                                        </p>

                                    </div>

                                    {/* RIGHT MEDIA */}
                                    <div className="relative h-64 rounded-2xl overflow-hidden">
                                        <Image src="/seattle-skyline.jpg" alt="Seattle coffee shop" fill className="object-cover" />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION - 4 */}

                <section className="py-12 sm:py-20">
                    <div className="container">

                        <div className="text-center mb-12">
                            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
                                <span className="bg-gradient-to-r headings_color bg-clip-text text-transparent">
                                    Frequently Asked Questions
                                </span>
                            </h2>

                            <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
                                Helpful information for planning your Seattle layover
                            </p>
                        </div>

                        <FAQAccordion faqs={faqs} />

                    </div>

                    {/* FAQ Structured Data */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                mainEntity: [
                                    {
                                        "@type": "Question",
                                        name: "What can I do in Seattle in 6 hours?",
                                        acceptedAnswer: {
                                            "@type": "Answer",
                                            text:
                                                "In 6 hours, you can explore Pike Place Market, the Seattle Waterfront, the original Starbucks, and nearby attractions like the Space Needle."
                                        }
                                    }
                                ]
                            })
                        }}
                    />
                </section>

                {/* SECTION 5 */}
                <section className="py-12">
                    <div className="container max-w-4xl mx-auto">
                        <div className="rounded-3xl bg-gradient-to-br from-orange-100 to-yellow-100 border-2 border-orange-300 p-16 shadow-2xl hover-lift">
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-orange-800 mb-4">
                                    Discover Seattle in a Simpler Way
                                </h2>
                                <p className="text-slate-700 text-lg mb-6">
                                    Six-Hour Layover is designed for travelers who want
                                    realistic city experiences during short visits,
                                    layovers,<br></br> and quick stopovers.
                                    From coffee shops and waterfront walks to local food
                                    and scenic<br></br> viewpoints, the goal is to make short
                                    travel windows feel easy, flexible, and enjoyable.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a href="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                                        Explore More Seattle Guides
                                    </a>
                                    <a href="tel:+12069281277" className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                                        Call Us Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </main>
    );
}