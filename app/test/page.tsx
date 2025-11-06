"use client";
import { useState } from "react";
import { PlaneIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/Icons";
import Navigation from "@/components/Navigation";
import MobileNav from "@/components/MobileNav";
import BookingModal from "@/components/BookingModal";
import { PricingPageText, GlobalText } from "@/lib/text";
import { STRIPE_TOUR_PRODUCTS } from "@/lib/stripe-products";


export default function RefundRequestPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    bookingRef: "",
    amount: "",
    tourDate: "",
    reason: "",
    details: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.bookingRef || !form.agree) {
      alert("Please fill all required fields and agree to the policy.");
      return;
    }

    const res = await fetch("/api/refund-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) setSubmitted(true);
  };

  if (submitted)
    return (
      <div className="max-w-xl mx-auto text-center py-10">
        <h2 className="text-xl font-semibold">Thanks!</h2>
        <p>
          Your request was received. Our team will review and get back to you by
          email.
        </p>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Refund / Cancellation Request</h1>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Refund & Cancellation Policy</h2>
        <ul className="list-disc ml-5 text-sm space-y-1">
          <li>
            Cancellations made 48 hours or more before your tour are refunded
            minus Stripe’s 3% processing fee.
          </li>
          <li>
            Cancellations within 48 hours are non-refundable, but may be
            rescheduled.
          </li>
          <li>
            Airline-caused disruptions: 50% refund or complimentary reschedule
            at our discretion.
          </li>
          <li>Refunds return to the original payment method within 5–10 days.</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full name*"
          value={form.fullName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="bookingRef"
          placeholder="Booking reference or order number*"
          value={form.bookingRef}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          name="amount"
          placeholder="Payment amount (USD)"
          value={form.amount}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="datetime-local"
          name="tourDate"
          value={form.tourDate}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <select
          name="reason"
          value={form.reason}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select reason</option>
          <option>Schedule change</option>
          <option>Flight canceled/delayed</option>
          <option>Booked by mistake</option>
          <option>Other</option>
        </select>

        <textarea
          name="details"
          placeholder="Additional details"
          value={form.details}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            required
          />
          <span className="text-sm">
            I understand the Stripe processing fee is non-refundable.
          </span>
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
