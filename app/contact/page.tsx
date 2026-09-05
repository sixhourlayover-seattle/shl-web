"use client";

import { PlaneIcon, InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import { ContactPageText, CONTACT_METHODS, BOOKING_INFO, FAQ_QUICK, GlobalText } from "@/lib/text";
import { useState } from "react";


// export const metadata = {
//   title: "Contact Us - Seattle Layover Tours | Six Hour Layover",
//   // description: "Contact Six Hour Layover for Seattle layover tour bookings. Call (206) 928-1277, WhatsApp, or email for SEA airport pickup tours. Quick response guaranteed.",
//   description: "Contact Six Hour Layover for Seattle layover tour bookings. Call (206) 928-1277, WhatsApp, or email for SEA airport pickup tours. We aim to respond promptly during business hours.",
//   keywords: ["Seattle layover tour contact", "SEA airport tour booking", "layover tour phone number", "Seattle tour contact", "airport pickup booking", "layover tour WhatsApp"],
//   openGraph: {
//     title: "Contact Us - Seattle Layover Tours | Six Hour Layover",
//     description: "Contact Six Hour Layover for Seattle layover tour bookings. Call (206) 928-1277, WhatsApp, or email for SEA airport pickup tours.",
//     url: "/contact",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Contact Us - Seattle Layover Tours | Six Hour Layover",
//     description: "Contact Six Hour Layover for Seattle layover tour bookings. Call (206) 928-1277, WhatsApp, or email for SEA airport pickup tours.",
//   },
//   alternates: {
//     canonical: "/contact"
//   }
// };

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleCruiseSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      cruiseDate: formData.get("cruiseDate"),
      cruiseShip: formData.get("cruiseShip"),
      terminal: formData.get("terminal"),

      // Updated time fields
      availableFrom: formData.get("availableFrom"),
      needToBeBackBy: formData.get("needToBeBackBy"),

      // New fields
      luggage: formData.get("luggage"),
      goingAfterSeattle: formData.get("goingAfterSeattle"),

      numberOfGuests: formData.get("numberOfGuests"),
      phone: formData.get("phone"),
      interests: formData.get("interests"),
      inquiryType: "Cruise Guest / Plan My Seattle Time",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log("Contact API response:", result);

      if (!response.ok) {
        throw new Error(result.error || "Failed to send inquiry");
      }

      setSubmitMessage(
        "Thank you! Your inquiry has been sent successfully."
      );

      form.reset();

    } catch (error) {
      console.error(error);

      setSubmitMessage(
        "Sorry, something went wrong. Please try again."
      );

    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Animated background */}
      <div className="fixed inset-0 animated-gradient opacity-10" />
      <div className="fixed inset-0 bg-gradient-to-b from-white/95 via-purple-50/90 to-indigo-50/95" />

      {/* Floating orbs for visual interest */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="fixed top-40 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="fixed bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }} />



      <div className="relative z-10">
        <Navigation />

        {/* Hero */}
        <section className="py-12 sm:py-20">
          <div className="container">
            <div className="text-center mb-12" style={{ animation: 'slide-in 0.6s ease-out' }}>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
                <span className="bg-gradient-to-r  bg-clip-text ">{ContactPageText.title}</span>
              </h1>
              <p className="text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
                {ContactPageText.subtitle}
              </p>
            </div>
          </div>
        </section>


        {/* Contact Methods */}
        <section className="py-8">
          <div className="container max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              {CONTACT_METHODS.map((method, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift text-center"
                  style={{ animation: `slide-in 0.${index + 7}s ease-out` }}
                >
                  <div className="mb-6 flex justify-center">
                    {method.title === "WhatsApp Us" ? (
                      <WhatsAppIcon className="w-16 h-16 text-green-600" />
                    ) : (
                      <div className="text-6xl">{method.icon}</div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{method.title}</h3>
                  <p className="text-purple-600 font-medium mb-4">{method.subtitle}</p>
                  {method.contact.includes('@') ? (
                    <a
                      href={method.href}
                      className="inline-flex items-center justify-center px-8 py-4 btn-primary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4 text-lg"
                    >
                      {method.contact}
                    </a>
                  ) : (
                    <a
                      href={method.href}
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r btn-primary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4 text-lg"
                    >
                      {method.contact}
                    </a>
                  )}
                  <p className="text-slate-600 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Information */}
        <section className="py-16 bg-gradient-to-br ">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">{ContactPageText.bookingInfoTitle}</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                {ContactPageText.bookingInfoSubtitle}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {BOOKING_INFO.map((info, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift"
                  style={{ animation: `slide-in 0.${index + 9}s ease-out` }}
                >
                  <h3 className="text-2xl font-bold  mb-6">{info.title}</h3>
                  <ul className="space-y-4">
                    {info.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-green-600 text-lg">•</span>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick FAQ */}
        <section className="py-16">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">{ContactPageText.quickQuestionsTitle}</h2>
              <p className="text-lg text-slate-600">
                {ContactPageText.quickQuestionsSubtitle}
              </p>
            </div>

            <div className="space-y-6">
              {FAQ_QUICK.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/50 p-8 hover-lift"
                  style={{ animation: `slide-in 0.${index + 11}s ease-out` }}
                >
                  <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/faq"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r btn-primary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">❓</span>
                {GlobalText.viewAllFAQs}
              </a>
            </div>
          </div>
        </section>

        {/* Cruise Guest Inquiry */}
<section className="py-12">
  <div className="container max-w-5xl mx-auto">
    <div className="rounded-3xl bg-white/90 backdrop-blur shadow-xl border border-purple-200 p-6">

      <div className="text-center mb-12">
        <div className="text-4xl mb-2">🚢</div>

        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Cruise Guest / Plan My Seattle Time
        </h2>

        <p className="text-slate-600 text-sm max-w-2xl mx-auto">
          Tell us about your cruise schedule and what you'd like to see in Seattle.
        </p>
      </div>

      <form
        className="space-y-4"
        onSubmit={handleCruiseSubmit}
      >

        {/* Row 1 - 3 columns */}
        <div className="grid gap-4 md:grid-cols-3">

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              First Name *
            </label>

            <input
              type="text"
              name="firstName"
              required
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm placeholder:text-slate-400"
              placeholder="First name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Last Name *
            </label>

            <input
              type="text"
              name="lastName"
              required
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm placeholder:text-slate-400"
              placeholder="Last name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email *
            </label>

            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm placeholder:text-slate-400"
              placeholder="you@example.com"
            />
          </div>

        </div>

        {/* Row 2 - Cruise information */}
        <div className="grid gap-4 md:grid-cols-3">

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Cruise Date *
            </label>

            <input
              type="date"
              name="cruiseDate"
              required
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Cruise Ship
            </label>

            <input
              type="text"
              name="cruiseShip"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm placeholder:text-slate-400"
              placeholder="Ship name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Cruise Terminal (if known)
            </label>

            <input
              type="text"
              name="terminal"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm placeholder:text-slate-400"
              placeholder="Pier 66 / Pier 91"
            />
          </div>

        </div>

        {/* Row 3 - Available time */}
        <div className="grid gap-4 md:grid-cols-3">

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Available From *
            </label>

            <input
              type="time"
              name="availableFrom"
              required
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Need to Be Back By *
            </label>

            <input
              type="time"
              name="needToBeBackBy"
              required
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Number of Guests *
            </label>

            <select
              name="numberOfGuests"
              required
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8+">8+</option>
            </select>
          </div>

        </div>

        {/* Row 4 - Luggage / Going after Seattle / Phone */}
        <div className="grid gap-4 md:grid-cols-3">

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Will you have luggage with you? *
            </label>

            <select
              name="luggage"
              required
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              <option value="No">
                No
              </option>
              <option value="Yes — carry-on only">
                Yes — carry-on only
              </option>
              <option value="Yes — checked/large luggage">
                Yes — checked/large luggage
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Where will you be going after your Seattle experience? *
            </label>

            <select
              name="goingAfterSeattle"
              required
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              <option value="Back to the cruise ship">
                Back to the cruise ship
              </option>
              <option value="SEA Airport">
                SEA Airport
              </option>
              <option value="Seattle hotel">
                Seattle hotel
              </option>
              <option value="Other">
                Other
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Phone / WhatsApp
            </label>

            <input
              type="tel"
              name="phone"
             className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm placeholder:text-slate-400"
              placeholder="Phone / WhatsApp"
            />
          </div>

        </div>

        {/* What they want to see */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            What would you most like to see or experience in Seattle? *
          </label>

          <textarea
            name="interests"
            required
            rows={3}
            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm placeholder:text-slate-400"
            placeholder="Pike Place Market, waterfront, city views, local food, neighborhoods, or anything else you’re interested in."
          />
        </div>

        {/* Hidden inquiry type */}
        <input
          type="hidden"
          name="inquiryType"
          value="Cruise Guest / Plan My Seattle Time"
        />

        {/* Submit */}
        <div className="text-center pt-2">

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting
              ? "Sending..."
              : "🚢 Plan My Seattle Time"}
          </button>

        </div>

      </form>

      {submitMessage && (
        <div
          className={`mt-4 text-center font-medium ${
            submitMessage.includes("successfully")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {submitMessage}
        </div>
      )}

    </div>
  </div>
</section>



        {/* Business Hours & Location Info */}
        <section className="py-16 bg-gradient-to-br">
          <div className="container max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white/80 backdrop-blur shadow-2xl border border-white/50 p-8 hover-lift">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">{ContactPageText.serviceInfoTitle}</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="text-center">
                  <div className="text-4xl mb-4">🕐</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{ContactPageText.businessHours}</h3>
                  <div className="space-y-2 text-slate-700">
                    <p><strong>{ContactPageText.phoneSupport}</strong></p>
                    <p>{ContactPageText.phoneSupportHours.split('\n')[0]}</p>
                    <p>{ContactPageText.phoneSupportHours.split('\n')[1]}</p>
                    <p className="mt-4"><strong>{ContactPageText.emailResponse}</strong></p>
                    <p>{ContactPageText.emailResponseHours}</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{ContactPageText.serviceArea}</h3>
                  <div className="space-y-2 text-slate-700">
                    <p><strong>{ContactPageText.airport}</strong></p>
                    <p>{ContactPageText.airportName}</p>
                    <p><strong>{ContactPageText.tourAreas}</strong></p>
                    {ContactPageText.tourAreasList.split('\n').map((area, i) => <p key={i}>{area}</p>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16">
          <div className="container max-w-4xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-br from-orange-100 to-yellow-100 border-2 border-orange-300 p-8 shadow-2xl hover-lift">
              <div className="text-center">
                <div className="text-4xl mb-4">🚨</div>
                <h3 className="text-2xl font-bold text-orange-800 mb-4">{ContactPageText.emergencyTitle}</h3>
                <p className="text-slate-700 text-lg mb-6">
                  {ContactPageText.emergencySubtitle}
                </p>
                <a
                  href="tel:+12069281277"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-2xl">📞</span>
                  {ContactPageText.emergencyHotline}
                </a>
                <p className="text-slate-600 text-sm mt-4">
                  {ContactPageText.emergencyNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br sub-primary-background">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">{ContactPageText.ctaTitle}</h2>
            <p className="text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
              {ContactPageText.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/book"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">📝</span>
                {GlobalText.bookYourTourNow}
              </a>
              <a
                href="tel:+12069281277"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white headings_color font-bold text-lg rounded-xl shadow-2xl hover:shadow-3d transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl">📞</span>
                {GlobalText.callUsNow}
              </a>
            </div>
          </div>
        </section>



        <MobileNav />
      </div>
    </div>
  );
}
