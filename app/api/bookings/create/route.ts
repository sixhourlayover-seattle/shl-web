import { NextRequest, NextResponse } from 'next/server';

// Interface for booking data
interface BookingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whatsappWeChat?: string;
  arrivalDate: string;
  arrivalTime: string;
  arrivalFlight: string;
  departureDate: string;
  departureTime: string;
  departureFlight: string;
  tourOption: string;
  numberOfTravelers: number;
  adultsCount: number;
  childrenCount: number;
  childrenAges?: string;
  childrenUnder5Count: number;
  childrenUnder5Ages?: string;
  preferredLanguage: string;
  specialRequests?: string;
  dietaryRestrictions?: string;
  addOns: string[];
  selectedProduct: any;
  selectedAddOns: any[];
  totalPrice: number;
  agreeToTerms: boolean;
  submittedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const bookingData: BookingData = await request.json();

    // Validate required fields
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone',
      'arrivalDate', 'arrivalTime', 'arrivalFlight',
      'departureDate', 'departureTime', 'departureFlight',
      'tourOption', 'agreeToTerms'
    ];

    for (const field of requiredFields) {
      if (!bookingData[field as keyof BookingData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (!bookingData.agreeToTerms) {
      return NextResponse.json(
        { error: 'Terms and conditions must be accepted' },
        { status: 400 }
      );
    }

    // Generate booking ID
    const bookingId = `SHL-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

    // For now, we'll just return the booking ID
    // In a real implementation, this would save to a database
    console.log('Booking data received:', {
      bookingId,
      customer: `${bookingData.firstName} ${bookingData.lastName}`,
      email: bookingData.email,
      tourOption: bookingData.selectedProduct?.name,
      totalPrice: bookingData.totalPrice,
      preferredLanguage: bookingData.preferredLanguage,
      submittedAt: bookingData.submittedAt
    });

    return NextResponse.json({
      success: true,
      bookingId,
      message: 'Booking data received successfully'
    });

  } catch (error) {
    console.error('Booking creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}