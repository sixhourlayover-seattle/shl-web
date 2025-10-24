import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sendBookingNotificationEmail } from '@/lib/email';

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
          preferredLanguage: session.metadata?.preferredLanguage || 'English',
          paymentAmount: session.amount_total ? session.amount_total / 100 : 0,
          paymentStatus: session.payment_status,
          currency: session.currency?.toUpperCase() || 'USD',
          paymentIntentId: session.payment_intent,
          createdAt: new Date(session.created * 1000).toISOString(),
        };

        console.log('Booking completed:', bookingInfo);

        // Send email notification to tech@sixhourlayover.com
        const emailSent = await sendBookingNotificationEmail(bookingInfo);
        if (emailSent) {
          console.log('✅ Email notification sent successfully');
        } else {
          console.log('⚠️ Email notification failed or not configured');
        }

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
