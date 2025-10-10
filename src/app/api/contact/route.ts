import { NextRequest, NextResponse } from 'next/server';
import { EmailService, type ContactFormData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, subject, message, hearAboutUs } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const formData: ContactFormData = {
      name,
      company,
      email,
      phone,
      subject,
      message,
      hearAboutUs,
    };

    console.log('Processing contact form submission:', { name, email, subject });
    
    const emailService = new EmailService();

    try {
      // Send email to company (critical)
      await emailService.sendContactEmail(formData);
      console.log('Contact email sent successfully');

      // Send confirmation email to user (non-critical)
      await emailService.sendConfirmationEmail(formData);
      console.log('Confirmation email sent successfully');

      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
      
    } catch (emailError) {
      console.error('Email service error:', emailError);
      
      // Return more specific error information in development
      const errorMessage = process.env.NODE_ENV === 'development' 
        ? `Email error: ${emailError instanceof Error ? emailError.message : 'Unknown error'}`
        : 'Failed to send email. Please try again or contact us directly.';
        
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('General API error:', error);
    return NextResponse.json(
      { error: 'Server error occurred. Please try again.' },
      { status: 500 }
    );
  }
}