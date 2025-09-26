import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-08-27.basil',
    })
  : null;

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  try {
    if (!stripe || !webhookSecret) {
      return NextResponse.json(
        { error: 'Stripe webhook is not configured' },
        { status: 500 }
      );
    }

    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;

        // Handle successful payment
        console.log('Payment succeeded for session:', session.id);

        // Extract booking information from session metadata
        const bookingInfo = {
          sessionId: session.id,
          bookingId: session.metadata?.bookingId,
          customerName: `${session.metadata?.firstName} ${session.metadata?.lastName}`,
          customerEmail: session.customer_email,
          customerPhone: session.metadata?.phone,
          tourOption: session.metadata?.tourOption,
          paymentAmount: session.amount_total ? session.amount_total / 100 : 0,
          paymentStatus: session.payment_status,
          currency: session.currency?.toUpperCase() || 'USD',
          paymentIntentId: session.payment_intent,
          createdAt: new Date(session.created * 1000).toISOString(),
        };

        console.log('Booking completed:', bookingInfo);

        // Send email notification to tech@sixhourlayover.com
        await sendBookingNotificationEmail(bookingInfo);

        // Here you would typically also:
        // 1. Save booking to database
        // 2. Send confirmation email to customer
        // 3. Update inventory if needed

        break;

      case 'checkout.session.expired':
        const expiredSession = event.data.object as Stripe.Checkout.Session;
        console.log('Checkout session expired:', expiredSession.id);
        break;

      case 'payment_intent.payment_failed':
        console.log('Payment failed:', event.data.object.id);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function sendBookingNotificationEmail(bookingInfo: any) {
  try {
    // For now, just log the email data
    // In production, you'd use a service like SendGrid, Resend, or similar

    const emailData = {
      to: 'tech@sixhourlayover.com',
      subject: `🎉 New Booking Confirmed - ${bookingInfo.customerName}`,
      booking: {
        ...bookingInfo,
        formattedAmount: `$${bookingInfo.paymentAmount.toFixed(2)} ${bookingInfo.currency}`,
        timestamp: new Date().toLocaleString('en-US', {
          timeZone: 'America/Los_Angeles',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),
      }
    };

    console.log('📧 Email notification data for tech@sixhourlayover.com:');
    console.log('═══════════════════════════════════════════════════════════');
    console.log(`Subject: ${emailData.subject}`);
    console.log(`Customer: ${bookingInfo.customerName}`);
    console.log(`Email: ${bookingInfo.customerEmail}`);
    console.log(`Phone: ${bookingInfo.customerPhone}`);
    console.log(`Tour: ${bookingInfo.tourOption}`);
    console.log(`Amount: ${emailData.booking.formattedAmount}`);
    console.log(`Payment Status: ${bookingInfo.paymentStatus}`);
    console.log(`Booking ID: ${bookingInfo.bookingId}`);
    console.log(`Session ID: ${bookingInfo.sessionId}`);
    console.log(`Payment Intent: ${bookingInfo.paymentIntentId}`);
    console.log(`Timestamp: ${emailData.booking.timestamp}`);
    console.log('═══════════════════════════════════════════════════════════');

    // TODO: Implement actual email sending
    // Example with a hypothetical email service:
    /*
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      throw new Error('Email sending failed');
    }
    */

    return true;
  } catch (error) {
    console.error('Failed to send notification email:', error);
    return false;
  }
}