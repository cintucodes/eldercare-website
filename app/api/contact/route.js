import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic server-side validation
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required.' },
        { status: 400 }
      );
    }

    // TODO: Add your logic here to:
    // 1. Save to a database (e.g., Firebase Firestore)
    // 2. Send an email notification (e.g., using Resend or Nodemailer)

    console.log('Contact form submission received:', { name, email, message });

    return NextResponse.json(
      { message: 'Your support request has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Failed to store support request.' },
      { status: 500 }
    );
  }
}