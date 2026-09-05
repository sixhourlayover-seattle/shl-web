"use client";

import { useState } from "react";

export default function ContactInquiryForm() {
  const [formData, setFormData] = useState({
    inquiryType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cruiseDate: "",
    shipTerminal: "",
    availableTime: "",
    numberOfGuests: "",
    whatToSee: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Unable to send your inquiry. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="text-5xl mb-4">✅</div>

        <h3 className="text-2xl font-bold text-green-800 mb-3">
          Thank You!
        </h3>

        <p className="text-green-700">
          We received your inquiry and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          What can we help you with? *
        </label>

        <select
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Please select</option>
          <option value="Cruise Guest / Plan My Seattle Time">
            Cruise Guest / Plan My Seattle Time
          </option>
          <option value="Airport Layover Tour">
            Airport Layover Tour
          </option>
          <option value="General Inquiry">
            General Inquiry
          </option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            First Name *
          </label>

          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Last Name *
          </label>

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email *
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Phone
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-xl font-bold text-slate-800 mb-4">
          Cruise & Seattle Details
        </h3>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Cruise Date *
            </label>

            <input
              type="date"
              name="cruiseDate"
              value={formData.cruiseDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Ship / Terminal *
            </label>

            <input
              type="text"
              name="shipTerminal"
              value={formData.shipTerminal}
              onChange={handleChange}
              required
              placeholder="Example: Norwegian Encore / Pier 66"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              How much time do you have in Seattle? *
            </label>

            <input
              type="text"
              name="availableTime"
              value={formData.availableTime}
              onChange={handleChange}
              required
              placeholder="Example: 9:00 AM - 4:00 PM"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Number of Guests *
            </label>

            <input
              type="number"
              name="numberOfGuests"
              min="1"
              value={formData.numberOfGuests}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              What would you like to see?
            </label>

            <textarea
              name="whatToSee"
              value={formData.whatToSee}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us what you'd like to see or experience in Seattle..."
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Additional Information
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Anything else we should know?"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Send Inquiry
      </button>
    </form>
  );
}
