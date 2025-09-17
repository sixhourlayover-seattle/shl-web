import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-08-27.basil',
    })
  : null;

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe is not configured' },
        { status: 500 }
      );
    }

    const { product, addOns, bookingData } = await request.json();

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    // Add main product
    if (product) {
      let quantity = 1;
      let unitAmount = product.price * 100; // Convert to cents

      // Handle per-person pricing for 2-3 travelers
      if (product.id === '2-3-travelers-6hour') {
        quantity = bookingData.numberOfTravelers;
      }

      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: unitAmount,
        },
        quantity,
      });
    }

    // Add add-ons
    if (addOns && addOns.length > 0) {
      addOns.forEach((addOn: any) => {
        lineItems.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: addOn.name,
              description: addOn.description,
            },
            unit_amount: addOn.price * 100, // Convert to cents
          },
          quantity: 1,
        });
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/booking-cancelled`,
      metadata: {
        bookingData: JSON.stringify(bookingData),
      },
      customer_email: bookingData.email,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}