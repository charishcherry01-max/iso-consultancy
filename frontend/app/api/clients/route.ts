import { NextResponse } from 'next/server';
import { sendRegistrationEmail } from '../../../lib/mailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userType, name, email, phone, company, standard, serviceType, message } = body;
    
    if (!name || !email || !phone || !standard) {
      return NextResponse.json({ success: false, message: 'Missing required fields.' }, { status: 400 });
    }

    const data = { id: Date.now(), userType, name, email, phone, company, standard, serviceType, message };

    // Trigger the email notification using Nodemailer
    const emailSent = await sendRegistrationEmail(data);

    if (emailSent) {
      console.log(`Successfully sent registration notification for ${email}`);
    } else {
      console.log(`Failed to send email for ${email}, check Vercel environment variables.`);
    }

    return NextResponse.json({ success: true, message: 'Client registered successfully.', data }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
