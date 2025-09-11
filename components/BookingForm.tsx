"use client";
import { useState } from "react";
import { PlaneIcon, ClockIcon } from "@/components/Icons";

interface BookingFormProps {
  onClose?: () => void;
  isModal?: boolean;
}

interface BookingData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Flight Information
  arrivalDate: string;
  arrivalTime: string;
  arrivalFlight: string;
  departureDate: string;
  departureTime: string;
  departureFlight: string;
  
  // Tour Information
  tourOption: string;
  numberOfTravelers: string;
  adultsCount: string;
  childrenCount: string;
  childrenAges: string;
  
  // Special Requests
  specialRequests: string;
  dietaryRestrictions: string;
  addOns: string[];
  
  // Agreement
  agreeToTerms: boolean;
}

const TOUR_OPTIONS = [
  { value: "6-hour-classic", label: "6-Hour Classic Tour - Pike Place & Waterfront", basePrice: 250 },
  { value: "7-hour-extended", label: "7-Hour Extended Tour - Classic + Space Needle", basePrice: 280 },
  { value: "8-hour-premium", label: "8-Hour Premium Tour - Extended + Kerry Park", basePrice: 320 }
];

const ADD_ONS = [
  { value: "dicks-burger", label: "Dick's Burger Combo", price: 15 },
  { value: "top-pot-coffee", label: "Top Pot Coffee & Doughnut", price: 12 },
  { value: "mollys-ice-cream", label: "Molly Moon's Ice Cream", price: 8 },
  { value: "starbucks-reserve", label: "Starbucks Reserve Roastery Visit", price: 20 }
];

export default function BookingForm({ onClose, isModal = false }: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const [formData, setFormData] = useState<BookingData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    arrivalDate: "",
    arrivalTime: "",
    arrivalFlight: "",
    departureDate: "",
    departureTime: "",
    departureFlight: "",
    tourOption: "6-hour-classic",
    numberOfTravelers: "2",
    adultsCount: "2",
    childrenCount: "0",
    childrenAges: "",
    specialRequests: "",
    dietaryRestrictions: "",
    addOns: [],
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof BookingData, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleAddOnChange = (addOn: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      addOns: checked 
        ? [...prev.addOns, addOn]
        : prev.addOns.filter(item => item !== addOn)
    }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    }

    if (step === 2) {
      if (!formData.arrivalDate) newErrors.arrivalDate = "Arrival date is required";
      if (!formData.arrivalTime) newErrors.arrivalTime = "Arrival time is required";
      if (!formData.arrivalFlight.trim()) newErrors.arrivalFlight = "Arrival flight is required";
      if (!formData.departureDate) newErrors.departureDate = "Departure date is required";
      if (!formData.departureTime) newErrors.departureTime = "Departure time is required";
      if (!formData.departureFlight.trim()) newErrors.departureFlight = "Departure flight is required";
    }

    if (step === 4) {
      if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    
    try {
      // Here you would normally send to your backend
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Booking submitted:", formData);
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Booking submission failed:", error);
      setErrors({ submit: "Booking submission failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className={`${isModal ? 'p-8' : 'container py-16'}`}>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">Booking Confirmed!</h2>
          <p className="text-slate-700 text-lg mb-6">
            Thank you for booking your Seattle layover tour! We've received your request and will send you a confirmation email within 30 minutes with all the details.
          </p>
          <div className="bg-green-50 rounded-2xl p-6 mb-6">
            <h3 className="font-bold text-green-800 mb-3">What's Next?</h3>
            <ul className="text-left space-y-2 text-green-700">
              <li>• You'll receive a confirmation email with tour details</li>
              <li>• We'll start tracking your flight 24 hours before arrival</li>
              <li>• Your guide will contact you on the day of your tour</li>
              <li>• We'll send meeting instructions and contact info</li>
            </ul>
          </div>
          {isModal && (
            <button
              onClick={onClose}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  const stepTitles = [
    "Personal Information",
    "Flight Details", 
    "Tour Preferences",
    "Review & Confirm"
  ];

  return (
    <div className={`${isModal ? 'p-6' : 'container py-16'} max-w-4xl mx-auto`}>
      {isModal && onClose && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Book Your Seattle Tour</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {stepTitles.map((title, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                index + 1 <= currentStep 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {index + 1}
              </div>
              {index < stepTitles.length - 1 && (
                <div className={`w-16 h-1 mx-2 ${
                  index + 1 < currentStep ? 'bg-purple-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <h3 className="text-xl font-bold text-center text-slate-800">{stepTitles[currentStep - 1]}</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.firstName ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.lastName ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.phone ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>
        )}

        {/* Step 2: Flight Details */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <PlaneIcon className="h-6 w-6 text-blue-600" />
                <h3 className="font-bold text-blue-800">Flight Information</h3>
              </div>
              <p className="text-blue-700 text-sm">
                We'll track your flights in real-time and adjust pickup times automatically if there are delays.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Arrival Flight */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                  <span className="text-green-600">🛬</span> Arrival Flight
                </h4>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Date *</label>
                    <input
                      type="date"
                      value={formData.arrivalDate}
                      onChange={(e) => handleInputChange('arrivalDate', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.arrivalDate ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {errors.arrivalDate && <p className="text-red-500 text-sm mt-1">{errors.arrivalDate}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Time *</label>
                    <input
                      type="time"
                      value={formData.arrivalTime}
                      onChange={(e) => handleInputChange('arrivalTime', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.arrivalTime ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {errors.arrivalTime && <p className="text-red-500 text-sm mt-1">{errors.arrivalTime}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Flight Number *</label>
                  <input
                    type="text"
                    value={formData.arrivalFlight}
                    onChange={(e) => handleInputChange('arrivalFlight', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.arrivalFlight ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="e.g., AA1234"
                  />
                  {errors.arrivalFlight && <p className="text-red-500 text-sm mt-1">{errors.arrivalFlight}</p>}
                </div>
              </div>

              {/* Departure Flight */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                  <span className="text-blue-600">🛫</span> Departure Flight
                </h4>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Date *</label>
                    <input
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => handleInputChange('departureDate', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.departureDate ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {errors.departureDate && <p className="text-red-500 text-sm mt-1">{errors.departureDate}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Time *</label>
                    <input
                      type="time"
                      value={formData.departureTime}
                      onChange={(e) => handleInputChange('departureTime', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.departureTime ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {errors.departureTime && <p className="text-red-500 text-sm mt-1">{errors.departureTime}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Flight Number *</label>
                  <input
                    type="text"
                    value={formData.departureFlight}
                    onChange={(e) => handleInputChange('departureFlight', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.departureFlight ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="e.g., UA5678"
                  />
                  {errors.departureFlight && <p className="text-red-500 text-sm mt-1">{errors.departureFlight}</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Tour Preferences */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Choose Your Tour *
              </label>
              <div className="space-y-3">
                {TOUR_OPTIONS.map((option) => (
                  <label key={option.value} className="flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer hover:bg-purple-50 transition-colors">
                    <input
                      type="radio"
                      name="tourOption"
                      value={option.value}
                      checked={formData.tourOption === option.value}
                      onChange={(e) => handleInputChange('tourOption', e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-slate-800">{option.label}</div>
                      <div className="text-purple-600 font-bold">Starting from ${option.basePrice}pp</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Total Travelers *
                </label>
                <select
                  value={formData.numberOfTravelers}
                  onChange={(e) => handleInputChange('numberOfTravelers', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Adults (13+)
                </label>
                <select
                  value={formData.adultsCount}
                  onChange={(e) => handleInputChange('adultsCount', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Children (0-12)
                </label>
                <select
                  value={formData.childrenCount}
                  onChange={(e) => handleInputChange('childrenCount', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {[0,1,2,3,4,5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            {parseInt(formData.childrenCount) > 0 && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Children's Ages
                </label>
                <input
                  type="text"
                  value={formData.childrenAges}
                  onChange={(e) => handleInputChange('childrenAges', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., 8, 10, 12"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Add-Ons (Optional)
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                {ADD_ONS.map((addon) => (
                  <label key={addon.value} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={formData.addOns.includes(addon.value)}
                      onChange={(e) => handleAddOnChange(addon.value, e.target.checked)}
                    />
                    <div className="flex-1">
                      <div className="font-medium text-slate-800">{addon.label}</div>
                      <div className="text-purple-600 font-semibold">+${addon.price}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Special Requests
              </label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={3}
                placeholder="Any special requests, accessibility needs, or preferences?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Dietary Restrictions
              </label>
              <input
                type="text"
                value={formData.dietaryRestrictions}
                onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Any dietary restrictions or allergies?"
              />
            </div>
          </div>
        )}

        {/* Step 4: Review & Confirm */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-slate-800 mb-4">Booking Summary</h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Personal Information</h4>
                  <p>{formData.firstName} {formData.lastName}</p>
                  <p>{formData.email}</p>
                  <p>{formData.phone}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Flight Details</h4>
                  <p><strong>Arrival:</strong> {formData.arrivalFlight} on {formData.arrivalDate} at {formData.arrivalTime}</p>
                  <p><strong>Departure:</strong> {formData.departureFlight} on {formData.departureDate} at {formData.departureTime}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Tour Selection</h4>
                  <p>{TOUR_OPTIONS.find(t => t.value === formData.tourOption)?.label}</p>
                  <p>{formData.numberOfTravelers} travelers ({formData.adultsCount} adults, {formData.childrenCount} children)</p>
                </div>

                {formData.addOns.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Add-Ons</h4>
                    {formData.addOns.map(addon => (
                      <p key={addon}>{ADD_ONS.find(a => a.value === addon)?.label}</p>
                    ))}
                  </div>
                )}
              </div>

              {(formData.specialRequests || formData.dietaryRestrictions) && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  {formData.specialRequests && (
                    <p><strong>Special Requests:</strong> {formData.specialRequests}</p>
                  )}
                  {formData.dietaryRestrictions && (
                    <p><strong>Dietary Restrictions:</strong> {formData.dietaryRestrictions}</p>
                  )}
                </div>
              )}
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-bold text-blue-800 mb-3">What Happens Next?</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• You'll receive a confirmation email within 30 minutes</li>
                <li>• We'll send you detailed meeting instructions and your guide's contact info</li>
                <li>• We'll start tracking your flights 24 hours before arrival</li>
                <li>• Your guide will contact you on the day of your tour with any updates</li>
              </ul>
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                  className={`mt-1 ${errors.agreeToTerms ? 'border-red-500' : ''}`}
                />
                <div className="text-sm text-slate-700">
                  I agree to the <a href="/terms" className="text-purple-600 hover:underline" target="_blank">Terms of Service</a> and <a href="/privacy" className="text-purple-600 hover:underline" target="_blank">Privacy Policy</a>. I understand that this tour includes a guaranteed 2-hour buffer before my departure flight and that cancellations are free up to 24 hours before the tour.
                </div>
              </label>
              {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}
            </div>

            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-red-700">{errors.submit}</p>
              </div>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              currentStep === 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Previous
          </button>

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 font-semibold rounded-xl transition-all duration-300 ${
                isSubmitting
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg transform hover:-translate-y-1'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Confirm Booking'
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
