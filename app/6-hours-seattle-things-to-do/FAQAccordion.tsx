"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQAccordion({
  faqs,
}: {
  faqs: FAQ[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-2xl bg-white/80 backdrop-blur shadow-lg border border-white/50 overflow-hidden hover-lift"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full p-6 flex items-center justify-between text-left"
          >
            <h3 className="font-semibold text-slate-800 pr-4">
              {faq.question}
            </h3>

            <div
              className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                }`}
            >
              <svg
                className="w-5 h-5 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          {openIndex === index && (
            <div className="px-6 pb-6">
              <div className="pt-2 border-t border-purple-100">
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">{faq.answer}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}