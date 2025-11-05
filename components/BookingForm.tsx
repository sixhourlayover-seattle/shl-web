"use client";
import { useEffect,useState } from "react";
import { PlaneIcon, ClockIcon } from "@/components/Icons";
import { BookingFormText } from "@/lib/text";
import { STRIPE_TOUR_PRODUCTS, STRIPE_ADD_ONS, getProductByGroupSize, calculateTotalPrice, redirectToStripeCheckout, type StripeProduct, type StripeAddOn } from "@/lib/stripe-products";

interface BookingFormProps {
  onClose?: () => void; 
  isModal?: boolean;
  preselectedTourId?: string | null; // 👈 add this
}

interface BookingData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whatsappWeChat: string;

  // Flight Information
  arrivalDate: string;
  arrivalTime: string;
  arrivalFlight: string;
  departureDate: string;
  departureTime: string;
  departureFlight: string;

  // Tour Information
  tourOption: string;
  numberOfTravelers: number;
  adultsCount: number;
  childrenCount: number; // Children 5-12 (paid)
  childrenAges: string; // Ages of children 5-12
  childrenUnder5Count: number; // Children under 5 (free)
  childrenUnder5Ages: string; // Ages of children under 5
  preferredLanguage: string;

  // Special Requests
  specialRequests: string;
  dietaryRestrictions: string;
  addOns: string[];

  // Calculated pricing
  selectedProduct: StripeProduct | null;
  selectedAddOns: StripeAddOn[];
  totalPrice: number;

  // Agreement
  agreeToTerms: boolean;

  // luggage storage
  needsLuggageStorage: boolean;
  luggagePieces: number;
}

// Using Stripe products from configuration
const TOUR_OPTIONS = STRIPE_TOUR_PRODUCTS;
const ADD_ONS = STRIPE_ADD_ONS;

// Language options for tours
const LANGUAGE_OPTIONS = [
  { value: 'English', label: 'English (Default)' },
  { value: 'Mandarin', label: 'Mandarin' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'German', label: 'German' },
  { value: 'French', label: 'French' },
  { value: 'Japanese', label: 'Japanese' },
];

// Initialize form data with proper defaults
const initializeFormData = (): BookingData => {
  const defaultProduct = getProductByGroupSize(2);
  const totalPrice = defaultProduct ? calculateTotalPrice(defaultProduct, 2, []) : 0;

  return {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsappWeChat: "",
    arrivalDate: "",
    arrivalTime: "",
    arrivalFlight: "",
    departureDate: "",
    departureTime: "",
    departureFlight: "",
    tourOption: defaultProduct?.id || "per-person-6hour",
    numberOfTravelers: 2,
    adultsCount: 2,
    childrenCount: 0,
    childrenAges: "",
    childrenUnder5Count: 0,
    childrenUnder5Ages: "",
    preferredLanguage: "English",
    specialRequests: "",
    dietaryRestrictions: "",
    addOns: [],
    agreeToTerms: false,
    selectedProduct: defaultProduct,
    selectedAddOns: [],
    totalPrice,
    needsLuggageStorage: false,
    luggagePieces: 0,
  };
};

export default function BookingForm({ onClose, isModal = false, preselectedTourId }: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const [formData, setFormData] = useState<BookingData>(initializeFormData());

  const [errors, setErrors] = useState<Record<string, string>>({});

    // ✅ Add this useEffect just below your useState declarations
  useEffect(() => {
    if (preselectedTourId) {
      const selectedProduct = STRIPE_TOUR_PRODUCTS.find(
        (p) => p.id === preselectedTourId
      );

      if (selectedProduct) {
        setFormData((prev) => ({
          ...prev,
          tourOption: selectedProduct.id,
          selectedProduct,
          totalPrice: calculateTotalPrice(
            selectedProduct,
            prev.adultsCount + prev.childrenCount,
            prev.selectedAddOns
          ),
        }));
      }
    }
  }, [preselectedTourId]); // 👈 runs when prop changes

  const handleInputChange = (field: keyof BookingData, value: string | boolean | string[] | number) => {
    const updatedData = { ...formData, [field]: value };
    
    // Special handling for solo tour selection
    if (field === 'tourOption') {
      const selectedProduct = STRIPE_TOUR_PRODUCTS.find(p => p.id === value as string) || null;
      updatedData.selectedProduct = selectedProduct;
      
      // For solo tours, set adults to 1 and reset children counts
      if (selectedProduct?.id?.includes('solo-')) {
        updatedData.adultsCount = 1;
        updatedData.childrenCount = 0;
        updatedData.childrenUnder5Count = 0;
        updatedData.childrenAges = "";
        updatedData.childrenUnder5Ages = "";
        updatedData.numberOfTravelers = 1;
      }
    }

    // Recalculate pricing when relevant fields change
    if (field === 'numberOfTravelers' || field === 'tourOption' || field === 'adultsCount' || field === 'childrenCount' || field === 'childrenUnder5Count') {
      // Determine duration from tour option
      let duration: '6h' | '7h' | '8h' = '6h';
      if (updatedData.tourOption.includes('7hour')) duration = '7h';
      else if (updatedData.tourOption.includes('8hour')) duration = '8h';

      // Total travelers includes adults + all children (for capacity, not pricing)
      const totalTravelers = updatedData.adultsCount + updatedData.childrenCount + updatedData.childrenUnder5Count;

      // Use direct product selection if a specific tour option is selected
      let selectedProduct: StripeProduct | null;
      if (field === 'tourOption') {
        selectedProduct = STRIPE_TOUR_PRODUCTS.find(p => p.id === value as string) || null;
      } else {
        // For pricing calculations, only count adults + children 5+ (children under 5 are free)
        const pricingTravelers = updatedData.adultsCount + updatedData.childrenCount;
        selectedProduct = getProductByGroupSize(pricingTravelers, duration);
      }

      const selectedAddOns = STRIPE_ADD_ONS.filter(addon => updatedData.addOns.includes(addon.id));

      // Calculate pricing - only adults and children 5+ are charged
      const effectiveTravelers = updatedData.adultsCount + updatedData.childrenCount;

      const totalPrice = selectedProduct ? calculateTotalPrice(selectedProduct, effectiveTravelers, selectedAddOns) : 0;

      updatedData.selectedProduct = selectedProduct;
      updatedData.selectedAddOns = selectedAddOns;
      updatedData.totalPrice = totalPrice;
      updatedData.numberOfTravelers = totalTravelers;

      console.log("Selected product 45465  ", updatedData);

    }

    console.log("Selected product " , updatedData);

    setFormData(updatedData);

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleAddOnChange = (addOn: string, checked: boolean) => {
    const newAddOns = checked
      ? [...formData.addOns, addOn]
      : formData.addOns.filter(item => item !== addOn);

    const selectedAddOns = STRIPE_ADD_ONS.filter(addon => newAddOns.includes(addon.id));
    const payingTravelers = Math.max(0, formData.adultsCount + formData.childrenCount);
    const totalPrice = formData.selectedProduct
      ? calculateTotalPrice(formData.selectedProduct, payingTravelers, selectedAddOns)
      : 0;

    setFormData(prev => ({
      ...prev,
      addOns: newAddOns,
      selectedAddOns,
      totalPrice
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

      // Business validation for dates and times
      if (formData.arrivalDate && formData.arrivalTime && formData.departureDate && formData.departureTime) {
        const now = new Date();
        const arrivalDateTime = new Date(`${formData.arrivalDate}T${formData.arrivalTime}`);
        const departureDateTime = new Date(`${formData.departureDate}T${formData.departureTime}`);

        // Check if arrival is in the past
        if (arrivalDateTime <= now) {
          newErrors.arrivalDate = "Arrival date and time cannot be in the past";
        }

        // Check if departure is before arrival
        if (departureDateTime <= arrivalDateTime) {
          newErrors.departureDate = "Departure must be after arrival";
        }

        // Check minimum 6-hour layover
        if (departureDateTime > arrivalDateTime) {
          const layoverHours = (departureDateTime.getTime() - arrivalDateTime.getTime()) / (1000 * 60 * 60);
          if (layoverHours < 6) {
            newErrors.departureTime = "You need at least 6 hours between flights for our tours";
          }
        }
      }
    }

    if (step === 3) {
      // Validate children ages 5-12 if provided
      if (formData.childrenCount > 0 && formData.childrenAges) {
        const ages = formData.childrenAges.split(',').map(age => parseInt(age.trim())).filter(age => !isNaN(age));
        
        if (ages.length !== formData.childrenCount) {
          newErrors.childrenAges = `Please provide exactly ${formData.childrenCount} age(s) for children 5-12`;
        }
        
        if (ages.some(age => age > 12 || age < 5)) {
          newErrors.childrenAges = "Children in this field must be between 5-12 years old";
        }
      } else if (formData.childrenCount > 0 && !formData.childrenAges) {
        newErrors.childrenAges = "Ages are required for children 5-12";
      }

      // Validate children under 5 ages if provided
      if (formData.childrenUnder5Count > 0 && formData.childrenUnder5Ages) {
        const ages = formData.childrenUnder5Ages.split(',').map(age => parseInt(age.trim())).filter(age => !isNaN(age));
        
        if (ages.length !== formData.childrenUnder5Count) {
          newErrors.childrenUnder5Ages = `Please provide exactly ${formData.childrenUnder5Count} age(s) for children under 5`;
        }
        
        if (ages.some(age => age >= 5 || age < 0)) {
          newErrors.childrenUnder5Ages = "Children in this field must be under 5 years old (0-4)";
        }
      } else if (formData.childrenUnder5Count > 0 && !formData.childrenUnder5Ages) {
        newErrors.childrenUnder5Ages = "Ages are required for children under 5";
      }
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

    const selectedProduct = formData.selectedProduct;
    const payingTravelers = formData.adultsCount + formData.childrenCount;

    if (!selectedProduct) {
      setErrors({ submit: "Please select a tour option that matches your group size." });
      setIsSubmitting(false);
      return;
    }

    if (payingTravelers < 1) {
      setErrors({ submit: "At least one paying traveler (adult or child 5+) is required." });
      setIsSubmitting(false);
      return;
    }

    try {
      // First, submit booking data to backend
      const bookingData = {
        ...formData,
        selectedProduct,
        totalPrice: calculateTotalPrice(selectedProduct, payingTravelers, formData.selectedAddOns),
        submittedAt: new Date().toISOString(),
        needsLuggageStorage: formData.needsLuggageStorage,
        luggagePieces: formData.luggagePieces,
      };

      // Send booking data to backend for processing
      const response = await fetch('/api/bookings/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error('Booking data submission failed');
      }

      const result = await response.json();

      // Create Stripe checkout session with metadata
      const checkoutResponse = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookingId: result.bookingId,
          productId: selectedProduct.id,
          travelerCount: payingTravelers,
          addOnIds: formData.selectedAddOns.map(addon => addon.id),
          customerEmail: formData.email,
          metadata: {
            bookingId: result.bookingId,
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            tourOption: selectedProduct.name || '',
            preferredLanguage: formData.preferredLanguage,
            travelerCount: String(payingTravelers),
            needsLuggageStorage: formData.needsLuggageStorage ? 'Yes' : 'No',
            luggagePieces: formData.needsLuggageStorage ? String(formData.luggagePieces) : '0',

          }
        }),
      });

      if (!checkoutResponse.ok) {
        throw new Error('Payment setup failed');
      }

      const { url } = await checkoutResponse.json();

      // Redirect to Stripe Checkout
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL received');
      }

    } catch (error) {
      console.error("Booking submission failed:", error);
      setErrors({ submit: "Unable to process your booking. Please try again or contact us directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className={`${isModal ? 'p-8' : 'container py-16'}`}>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">{BookingFormText.successTitle}</h2>
          <p className="text-slate-700 text-lg mb-6">
            {BookingFormText.successMessage}
          </p>
          <div className="bg-green-50 rounded-2xl p-6 mb-6">
            <h3 className="font-bold text-green-800 mb-3">{BookingFormText.whatsNext}</h3>
            <ul className="text-left space-y-2 text-green-700">
              {BookingFormText.whatsNextItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
          {isModal && (
            <button
              onClick={onClose}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              {BookingFormText.close}
            </button>
          )}
        </div>
      </div>
    );
  }

  const stepTitles = [
    BookingFormText.step1,
    BookingFormText.step2,
    BookingFormText.step3,
    BookingFormText.step4
  ];

  return (
    <div className={`${isModal ? 'p-6' : 'container py-16'} max-w-4xl mx-auto`}>
      {isModal && onClose && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">{BookingFormText.modalTitle}</h2>
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
                  {BookingFormText.firstName} *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.firstName ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder={BookingFormText.firstNamePlaceholder}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {BookingFormText.lastName} *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.lastName ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder={BookingFormText.lastNamePlaceholder}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {BookingFormText.email} *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder={BookingFormText.emailPlaceholder}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {BookingFormText.phone} *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.phone ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder={BookingFormText.phonePlaceholder}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                WhatsApp/WeChat Contact
              </label>
              <input
                type="text"
                value={formData.whatsappWeChat}
                onChange={(e) => handleInputChange('whatsappWeChat', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="WhatsApp number or WeChat ID (optional but recommended)"
              />
              <p className="text-sm text-slate-600 mt-1">For easier day-of-tour communication</p>
            </div>
          </div>
        )}

        {/* Step 2: Flight Details */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <PlaneIcon className="h-6 w-6 text-blue-600" />
                <h3 className="font-bold text-blue-800">{BookingFormText.flightInfo}</h3>
              </div>
              <p className="text-blue-700 text-sm">
                {BookingFormText.flightInfoNote}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Arrival Flight */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                  <span className="text-green-600">🛬</span> {BookingFormText.arrivalFlight}
                </h4>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{BookingFormText.date} *</label>
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
                    <label className="block text-sm font-medium text-slate-700 mb-2">{BookingFormText.time} *</label>
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
                  <label className="block text-sm font-medium text-slate-700 mb-2">{BookingFormText.flightNumber} *</label>
                  <input
                    type="text"
                    value={formData.arrivalFlight}
                    onChange={(e) => handleInputChange('arrivalFlight', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.arrivalFlight ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder={BookingFormText.flightNumberPlaceholder}
                  />
                  {errors.arrivalFlight && <p className="text-red-500 text-sm mt-1">{errors.arrivalFlight}</p>}
                </div>
              </div>

              {/* Departure Flight */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                  <span className="text-blue-600">🛫</span> {BookingFormText.departureFlight}
                </h4>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{BookingFormText.date} *</label>
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
                    <label className="block text-sm font-medium text-slate-700 mb-2">{BookingFormText.time} *</label>
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
                  <label className="block text-sm font-medium text-slate-700 mb-2">{BookingFormText.flightNumber} *</label>
                  <input
                    type="text"
                    value={formData.departureFlight}
                    onChange={(e) => handleInputChange('departureFlight', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.departureFlight ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder={BookingFormText.departureFlightNumberPlaceholder}
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
                {BookingFormText.tourOption} *
              </label>
              {formData.selectedProduct && (
                <div className="mb-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-sm text-purple-700">
                    <strong>Current selection:</strong> {formData.selectedProduct.name} - ${formData.selectedProduct.price} {formData.selectedProduct.priceDescription}
                  </p>
                </div>
              )}

              <div className="space-y-3">
                {TOUR_OPTIONS.map((option) => (
                  <label key={option.id} className="flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer hover:bg-purple-50 transition-colors">
                    <input
                      type="radio"
                      name="tourOption"
                      value={option.id}
                      checked={formData.tourOption === option.id}
                      onChange={(e) => handleInputChange('tourOption', e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-slate-800">{option.name}</div>
                      <div className="text-purple-600 font-bold">${option.price} {option.priceDescription}</div>
                      <div className="text-sm text-slate-600 mt-1">{option.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Check if this is a solo tour selection */}
            {formData.selectedProduct?.id === 'solo-6hour' || formData.selectedProduct?.id === 'solo-7hour' || formData.selectedProduct?.id === 'solo-8hour' ? (
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <div className="flex items-center gap-2 text-green-700">
                  <span className="text-xl">✓</span>
                  <p className="font-medium">Solo tour selected - no additional traveler details needed</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Adults (13+) *
                    </label>
                    <select
                      value={formData.adultsCount}
                      onChange={(e) => handleInputChange('adultsCount', parseInt(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Children (5-12) - Paid
                    </label>
                    <select
                      value={formData.childrenCount}
                      onChange={(e) => handleInputChange('childrenCount', parseInt(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {[0,1,2,3].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Children (Under 5) - Free
                    </label>
                    <select
                      value={formData.childrenUnder5Count}
                      onChange={(e) => handleInputChange('childrenUnder5Count', parseInt(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {[0,1,2,3].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {formData.childrenCount > 0 && (
                  <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                    <h4 className="font-medium text-yellow-800 mb-3">Ages for Children 5-12 (Required for Pricing)</h4>
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={formData.childrenAges}
                        onChange={(e) => handleInputChange('childrenAges', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                          errors.childrenAges ? 'border-red-500' : 'border-yellow-300'
                        }`}
                        placeholder="Enter ages separated by commas (e.g., 5, 7, 10)"
                        required={formData.childrenCount > 0}
                      />
                      {errors.childrenAges && <p className="text-red-500 text-sm mt-1">{errors.childrenAges}</p>}
                      <div className="text-sm text-yellow-700">
                        <p><strong>Ages 5-12:</strong> Please list exact ages for accurate pricing.</p>
                      </div>
                    </div>
                  </div>
                )}

                {formData.childrenUnder5Count > 0 && (
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <h4 className="font-medium text-green-800 mb-3">Ages for Children Under 5 (Free)</h4>
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={formData.childrenUnder5Ages}
                        onChange={(e) => handleInputChange('childrenUnder5Ages', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                          errors.childrenUnder5Ages ? 'border-red-500' : 'border-green-300'
                        }`}
                        placeholder="Enter ages separated by commas (e.g., 1, 3, 4)"
                        required={formData.childrenUnder5Count > 0}
                      />
                      {errors.childrenUnder5Ages && <p className="text-red-500 text-sm mt-1">{errors.childrenUnder5Ages}</p>}
                      <div className="text-sm text-green-700">
                        <p><strong>Under 5 years:</strong> These children tour for free! Ages 0-4 only.</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-sm text-slate-600 bg-slate-50 rounded-lg p-3">
                  <p><strong>Total Travelers:</strong> {formData.adultsCount + formData.childrenCount + formData.childrenUnder5Count}</p>
                  <p><strong>Paid Travelers:</strong> {formData.adultsCount + formData.childrenCount} (Children under 5 are free)</p>
                  {(formData.childrenAges || formData.childrenUnder5Ages) && (
                    <p><strong>Pricing calculation:</strong> Based on ages provided</p>
                  )}
                </div>
              </div>
            )}

            {/* Language Preference */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Preferred Tour Language
              </label>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mb-4">
                <div className="flex items-center gap-2 text-blue-700">
                  <span className="text-xl">🗣️</span>
                  <p className="font-medium">Tours are always available in English. Other languages are subject to guide availability.</p>
                </div>
              </div>
              <select
                value={formData.preferredLanguage}
                onChange={(e) => handleInputChange('preferredLanguage', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {LANGUAGE_OPTIONS.map((language) => (
                  <option key={language.value} value={language.value}>
                    {language.label}
                  </option>
                ))}
              </select>
              {formData.preferredLanguage !== 'English' && (
                <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-700">
                    <strong>Note:</strong> {formData.preferredLanguage} tours are available upon request and subject to guide availability.
                    Please confirm your language preference when booking.
                  </p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Add-Ons (Requires 9+ Hour Layover)
              </label>
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-200 mb-4">
                <div className="flex items-center gap-2 text-orange-700">
                  <span className="text-xl">⚠️</span>
                  <p className="font-medium">Add-ons are only available if you have a 9+ hour layover between flights</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-1">
                {ADD_ONS.map((addon) => (
                  <label key={addon.id} className="flex items-start gap-3 p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={formData.addOns.includes(addon.id)}
                      onChange={(e) => handleAddOnChange(addon.id, e.target.checked)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-slate-800">{addon.name}</div>
                      <div className="text-purple-600 font-semibold">+${addon.price} per group</div>
                      <div className="text-sm text-slate-600 mt-1">{addon.description}</div>
                      <div className="text-xs text-orange-600 font-medium mt-2">⚠️ Requires 9+ hour layover</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Do you need to store any larger luggage before the tour?
              </label>
              <div className="flex items-center gap-3 mb-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="needsLuggageStorage"
                    value="yes"
                    checked={formData.needsLuggageStorage === true}
                    onChange={() => handleInputChange('needsLuggageStorage', true)}
                    className="mt-1"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="needsLuggageStorage"
                    value="no"
                    checked={formData.needsLuggageStorage === false}
                    onChange={() => handleInputChange('needsLuggageStorage', false)}
                    className="mt-1"
                  />
                  <span>No</span>
                </label>
              </div>

              {formData.needsLuggageStorage && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    If yes, how many pieces?
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={formData.luggagePieces}
                    onChange={(e) => handleInputChange('luggagePieces', parseInt(e.target.value))}
                    className="w-32 px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Please refer to this website for luggage storage information at SEA Airport: <a className="text-blue-700" href="https://smartecarte.com/sea-tac-international-airport/" target="_blank">https://smartecarte.com/sea-tac-international-airport/</a>
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {BookingFormText.specialRequests}
              </label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={3}
                placeholder={BookingFormText.specialRequestsPlaceholder}
              />
            </div>

            
          </div>
        )}

        {/* Step 4: Review & Confirm */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-slate-800 mb-4">{BookingFormText.bookingSummary}</h3>

              {/* Pricing Summary */}
              {formData.totalPrice > 0 && (
                <div className="mb-6 p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-3">Total Price: ${formData.totalPrice}</h4>
                  <div className="text-sm text-purple-700">
                    <p>Base tour: ${formData.selectedProduct?.price} {formData.selectedProduct?.priceDescription}</p>
                    {formData.selectedAddOns.map(addon => (
                      <p key={addon.id}>+ {addon.name}: ${addon.price}</p>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">{BookingFormText.personalInfo}</h4>
                  <p>{formData.firstName} {formData.lastName}</p>
                  <p>{formData.email}</p>
                  <p>{formData.phone}</p>
                  {formData.whatsappWeChat && <p><strong>WhatsApp/WeChat:</strong> {formData.whatsappWeChat}</p>}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">{BookingFormText.flightDetails}</h4>
                  <p><strong>Arrival:</strong> {formData.arrivalFlight} on {formData.arrivalDate} at {formData.arrivalTime}</p>
                  <p><strong>Departure:</strong> {formData.departureFlight} on {formData.departureDate} at {formData.departureTime}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">{BookingFormText.tourSelection}</h4>
                  <p>{formData.selectedProduct?.name}</p>
                  {formData.selectedProduct?.id?.includes('solo-') ? (
                    <p>1 traveler (solo tour)</p>
                  ) : (
                    <div>
                      <p>{formData.numberOfTravelers} total travelers</p>
                      <p>• {formData.adultsCount} adults (paid)</p>
                      {formData.childrenCount > 0 && <p>• {formData.childrenCount} children 5-12 (paid)</p>}
                      {formData.childrenUnder5Count > 0 && <p>• {formData.childrenUnder5Count} children under 5 (free)</p>}
                    </div>
                  )}
                  <p><strong>Language:</strong> {formData.preferredLanguage}</p>
                </div>

                {formData.selectedAddOns.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Add-Ons</h4>
                    {formData.selectedAddOns.map(addon => (
                      <p key={addon.id}>{addon.name} (+${addon.price})</p>
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
              <h3 className="font-bold text-blue-800 mb-3">{BookingFormText.whatsNext}</h3>
              <ul className="space-y-2 text-blue-700">
                {BookingFormText.whatsNextItems.map((item, i) => <li key={i}>• {item}</li>)}
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
                <div className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: BookingFormText.agreeToTerms }} />
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
            {BookingFormText.previous}
          </button>

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              {BookingFormText.next}
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
                  Setting up payment...
                </span>
              ) : (
                `Complete Your Payment - $${formData.totalPrice}`
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
