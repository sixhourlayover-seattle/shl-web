// app/long-layover-seattle/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Long Layover in Seattle? What to Do During a SEA Airport Layover",
  description:
    "Have a long layover in Seattle? Learn what to see, how to get downtown, what to do with luggage, and how much airport buffer to allow.",
  alternates: {
    canonical: "/long-layover-seattle",
  },
  openGraph: {
    title: "Long Layover in Seattle? What to Do During a SEA Airport Layover",
    description:
      "A practical guide to making the most of a long Seattle airport layover, including transportation, luggage, timing, and airport buffer planning.",
    url: "/long-layover-seattle",
    images: [
      {
        url: "/og-seattle-layover.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Long Layover in Seattle? What to Do During a SEA Airport Layover",
    description:
      "A practical guide to leaving SEA Airport during a long Seattle layover and planning your time between flights.",
    images: ["/og-seattle-layover.png"],
  },
};

const attractions = [
  {
    number: "01",
    title: "Pike Place Market",
    text: "Explore one of Seattle's best-known landmarks, browse local vendors, and grab something to eat. It is a natural choice for travelers who want to experience a classic part of Seattle during a limited window.",
  },
  {
    number: "02",
    title: "Seattle Waterfront",
    text: "Walk along the waterfront and enjoy views of Elliott Bay. Its location near downtown attractions makes it a practical addition to a shorter Seattle airport layover.",
  },
  {
    number: "03",
    title: "Kerry Park",
    text: "For a quick skyline photo opportunity, Kerry Park can be worthwhile when your timing and traffic conditions allow. It works best as an optional stop rather than the centerpiece of a short itinerary.",
  },
  {
    number: "04",
    title: "Space Needle",
    text: "If your schedule provides enough flexibility, you can visit the Space Needle and take in Seattle from the observation deck. Allow additional time for transportation and the visit itself.",
  },
];

export default function LongLayoverSeattlePage() {
  const pageContainer =
    "mx-auto w-full max-w-[1080px] px-5 sm:px-8 lg:px-10";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className={`${pageContainer} py-10 sm:py-16 lg:py-20`}>
          <div className="max-w-3xl">
            <div className="w-fit rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700 sm:px-4 sm:py-2 sm:text-sm">
              SEA Airport Layover Guide
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
              What to Do During a Long Layover in Seattle
            </h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
              Have a long layover in Seattle? Depending on your flight schedule,
              you may have enough time to leave SEA Airport, explore some of the
              city, and return for your next flight.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs sm:mt-7 sm:gap-2.5 sm:text-sm">
              <span className="rounded-full px-3 py-1.5 text-slate-700 ring-1 ring-red-500 sm:px-3.5 sm:py-1.5">
                SEA Airport
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1.5 text-slate-700 ring-1 ring-red-500 sm:px-3.5 sm:py-1.5">
                6–8 hour layovers
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1.5 text-slate-700 ring-1 ring-red-500 sm:px-3.5 sm:py-1.5">
                Downtown Seattle
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1.5 text-slate-700 ring-1 ring-red-500 sm:px-3.5 sm:py-1.5">
                Practical planning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick answer */}
      <section className="py-7 sm:py-8">
        <div className={pageContainer}>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg sm:p-7">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-7">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-purple-600 sm:text-sm">
                  The short answer
                </p>

                <h2 className="text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
                  A long layover can be enough to see Seattle — if you plan
                  backward from your next flight.
                </h2>

                <p className="mt-3 text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
                  Your total connection time is not your sightseeing time. You
                  need to account for leaving SEA, transportation, exploring,
                  returning to the airport, and the airport procedures required
                  before your next departure.
                </p>
              </div>

              <div className="rounded-2xl bg-purple-50 px-5 py-4 text-center">
                <div className="text-2xl font-bold text-purple-700 sm:text-3xl">
                  6–8 hrs
                </div>
                <div className="mt-1 text-xs font-medium text-purple-900 sm:text-sm">
                  Common layover window
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className={`${pageContainer} py-8 sm:py-10`}>
        {/* Introduction */}
        <section className="mb-8 sm:mb-10">
          <div className="max-w-none">
            <p className="mt-3 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
              A Seattle airport layover does not necessarily mean spending the
              entire connection inside the terminal. If you have several hours
              between flights, a little planning can turn a long layover into an
              opportunity to see Seattle.
            </p>

            <p className="mt-3 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
              The key is to work backward from your next departure. Your
              available sightseeing time is shorter than your total layover
              because you need to account for leaving the airport, traveling
              into Seattle, exploring, returning to SEA, and completing the
              security and airport processes required for your next flight.
            </p>
          </div>
        </section>

        {/* Can I leave */}
        <section className="py-7 sm:py-12">
          <div className="mb-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-purple-600 sm:text-sm">
              Before you leave
            </p>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              Can I Leave SEA Airport During a Layover?
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:col-span-2">
              <p className="mt-1 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
                In many cases, yes. Whether you should leave the airport depends
                on your total layover, flight schedule, travel documents,
                baggage situation, and how much time you need before your next
                departure.
              </p>

              <p className="mt-3 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
                If you are considering whether you can leave Seattle airport
                during a layover, do not use the total connection time as your
                sightseeing time. Build your plan around the time available
                after allowing for transportation and your return to SEA.
              </p>
            </div>

            <div className="rounded-2xl primary-background p-5 text-white sm:p-6">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Check these first
              </h3>

              <ul className="mt-4 space-y-2.5 text-sm leading-6 text-white/80">
                <li>• Your next departure time</li>
                <li>• Your travel documents</li>
                <li>• Checked-bag requirements</li>
                <li>• Airline and airport procedures</li>
                <li>• Transportation time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Things to do */}
        <section className="py-7 sm:py-12">
          <div className="mb-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-purple-600 sm:text-sm">
              Seattle highlights
            </p>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              What Can I Do During a Long Layover in Seattle?
            </h2>

            <p className="mt-3 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
              Seattle has several attractions that can work well during a long
              layover. The best choice depends on how much time you have and how
              much transportation you want to include.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {attractions.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-purple-600">
                    {item.number}
                  </span>

                  <span className="h-px w-14 bg-slate-200 transition group-hover:bg-purple-300" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6-hour */}
        <section className="my-7 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 sm:my-12">
          <div className="primary-background from-purple-600 to-indigo-600 px-6 py-7 sm:px-9 sm:py-8">
            <p className="text-xs font-bold uppercase tracking-wider text-purple-100 sm:text-sm">
              Shorter connection
            </p>

            <h2 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Is a 6-Hour Layover Enough to Leave Seattle Airport?
            </h2>
          </div>

          <div className="p-6 sm:p-9">
            <p className="mt-1 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
              A 6-hour layover can be enough for a short Seattle visit, but your
              actual sightseeing time will be less than six hours.
            </p>

            <p className="mt-3 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
              You need to allow time to leave SEA, travel toward Seattle,
              explore, travel back to the airport, and allow an appropriate
              airport buffer before your next flight.
            </p>

            <div className="mt-6 rounded-2xl bg-purple-50 p-4 sm:p-5">
              <p className="mt-1 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
                A shorter itinerary works best when you concentrate on a few
                nearby highlights instead of trying to see everything. Our{" "}
                <Link
                  href="/6-hour-layover-seattle"
                  className="font-bold text-purple-700 underline decoration-purple-300 underline-offset-4 hover:text-purple-900"
                >
                  6-hour Seattle layover
                </Link>{" "}
                guide is a useful next step for planning a focused visit to Pike
                Place Market and the Seattle waterfront.
              </p>
            </div>
          </div>
        </section>

        {/* 7-8 hours */}
        <section className="py-7 sm:py-12">
          <div className="mb-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-purple-600 sm:text-sm">
              More flexibility
            </p>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              What About a 7- or 8-Hour Layover?
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-3 text-2xl font-bold text-purple-600 sm:text-3xl">
                7 hours
              </div>

              <p className="mt-1 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
                A 7-hour connection generally gives you more flexibility than a
                shorter layover. Depending on your flight times and
                transportation, you may be able to combine a couple of Seattle
                highlights without trying to cover the entire city.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-3 text-2xl font-bold text-purple-600 sm:text-3xl">
                8 hours
              </div>

              <p className="mt-1 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
                An 8-hour connection can provide even more flexibility, but it
                is still not an 8-hour sightseeing window. Subtract airport and
                transportation time before deciding how many stops to include.
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
            The important point is that a 7- or 8-hour Seattle airport layover
            gives you options, not unlimited time. Build your itinerary around
            your actual flight schedule and the conditions on the day.
          </p>
        </section>

        {/* Transportation */}
        <section className="py-7 sm:py-12">
          <div className="mb-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-purple-600 sm:text-sm">
              Getting around
            </p>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              How Do I Get Between SEA Airport and Downtown Seattle?
            </h2>
          </div>

          <div className="rounded-3xl primary-background p-6 text-white sm:p-8">
            <div className="grid gap-7 md:grid-cols-2">
              <div>
                <div className="mb-3 text-xs font-bold uppercase tracking-wider text-white/70 sm:text-sm">
                  Link Light Rail
                </div>

                <p className="mt-1 max-w-4xl text-[15px] leading-6 text-white/80 sm:text-base sm:leading-7">
                  The Link light rail is one option for traveling between SEA
                  Airport and downtown Seattle. It can be useful when you want a
                  predictable public-transit option and your itinerary is
                  centered around downtown.
                </p>
              </div>

              <div>
                <div className="mb-3 text-xs font-bold uppercase tracking-wider text-white/70 sm:text-sm">
                  Rideshare
                </div>

                <p className="mt-1 max-w-4xl text-[15px] leading-6 text-white/80 sm:text-base sm:leading-7">
                  Rideshare and other vehicle options can provide additional
                  flexibility, particularly when your itinerary includes
                  locations outside the most direct downtown route.
                </p>
              </div>
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="mt-1 max-w-4xl text-[15px] leading-6 text-white/80 sm:text-base sm:leading-7">
                For a short Seattle airport layover, transportation time matters
                because every minute affects how much time you have available to
                explore. Traffic conditions can also change your return journey,
                so leave sufficient time rather than planning your airport
                return to the minute.
              </p>
            </div>
          </div>
        </section>

        {/* Luggage */}
        <section className="py-7 sm:py-12">
          <div className="mb-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-purple-600 sm:text-sm">
              Travel logistics
            </p>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              What Can I Do With My Luggage?
            </h2>
            <p className="mt-4 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
            Baggage storage is available at SEA Airport through Smarte Carte for an additional fee. Because fees vary by bag size and storage duration, travelers should check current rates before their trip.
          </p>

          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-lg">
                🧳
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Checked baggage
              </h3>

              <p className="mt-3 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
                Your luggage situation depends on your itinerary and airline.
                Before leaving SEA, confirm whether your checked baggage is
                through-checked to your final destination or whether you need to
                collect and re-check it.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-lg">
                🎒
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Carry-on bags
              </h3>

              <p className="mt-3 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
                If you do not want to spend your layover carrying luggage around
                Seattle, check what storage or baggage-service options are
                available at the airport before your trip. Never assume that
                bags can be left unattended or that a particular storage service
                will be available.
              </p>
            </div>
          </div>
        </section>

        {/* Airport buffer */}
        <section className="py-7 sm:py-12">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-xl">
                ⏱️
              </div>

              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-amber-700 sm:text-sm">
                  Most important planning rule
                </p>

                <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                  How Much Airport Buffer Should I Allow?
                </h2>

                <p className="mt-3 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
                  There is no single buffer that works for every traveler or
                  every flight. Your return-to-airport timing should take into
                  account your airline's requirements, whether you have checked
                  luggage, security procedures, your destination, and the
                  conditions on the day of travel.
                </p>

                <p className="mt-3 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
                  For a SeaTac layover, the safest approach is to plan your
                  return to SEA with enough margin for unexpected traffic or
                  airport delays rather than aiming to arrive immediately before
                  boarding. If your connection is tight, staying at or near the
                  airport may be more appropriate than attempting a city visit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Planning tips */}
        <section className="py-7 sm:py-12">
          <div className="mb-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-purple-600 sm:text-sm">
              Before you go
            </p>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              Things to Do During a Seattle Layover: Planning Tips
            </h2>
          </div>

          <div className="divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {[
              {
                title: "Start with your next flight.",
                text: "Work backward from your departure rather than planning sightseeing first.",
              },
              {
                title: "Keep the itinerary focused.",
                text: "A few well-chosen stops are usually better than trying to cover the entire city.",
              },
              {
                title: "Allow for transportation.",
                text: "Seattle traffic and transit conditions can affect your available time, especially during busy periods.",
              },
              {
                title: "Plan your return early.",
                text: "Do not wait until the end of your sightseeing time to decide how you will get back to SEA.",
              },
              {
                title: "Check your baggage situation.",
                text: "Know what you need to do with checked and carry-on luggage before leaving the airport.",
              },
            ].map((tip, index) => (
              <div key={tip.title} className="flex gap-4 p-5 sm:p-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                    {tip.title}
                  </h3>

                  <p className="mt-2 text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
                    {tip.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What to do */}
        <section className="py-7 sm:py-12">
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50/70 p-6 sm:p-8">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              What to Do on a Seattle Layover
            </h2>

            <p className="mt-3 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
              The best Seattle airport layover plan is one that matches your
              actual available window. For some travelers, that may mean a
              focused visit to Pike Place Market and the waterfront. Others may
              prefer to add a skyline viewpoint or Space Needle visit when their
              schedule provides more flexibility.
            </p>

            <p className="mt-3 max-w-4xl text-[15px] leading-6 text-slate-700 sm:text-base sm:leading-7">
              If you are searching for a long layover Seattle itinerary, think
              less about checking every attraction off a list and more about
              choosing experiences that fit comfortably between your flights.
            </p>
          </div>
        </section>

        {/* Commercial transition */}
        <section className="relative mt-7 overflow-hidden rounded-[2rem] bg-red-600 px-6 py-8 text-center shadow-xl sm:mt-12 sm:px-10 sm:py-12">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-red-800/30 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-red-100 sm:text-sm sm:tracking-[0.2em]">
              Want help planning your layover?
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Prefer not to plan it all yourself?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-6 text-white/90 sm:mt-4 sm:text-base sm:leading-7">
              If you have enough time between flights, Six-Hour Layover offers
              private Seattle experiences designed around your flight schedule,
              interests, and available layover window.
            </p>

            <div className="mt-6">
              <Link
                href="/seattle-layover-tour"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-red-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-red-50 sm:px-7 sm:py-3.5 sm:text-base"
              >
                Explore Seattle Layover Tours
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            <p className="mt-4 text-xs text-red-100 sm:text-sm">
              Private experiences • Flexible layover windows • Planned return to
              SEA
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
