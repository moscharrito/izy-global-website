/**
 * Email Service Utility
 * Handles email sending functionality for contact forms
 */

import nodemailer from 'nodemailer';

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  hearAboutUs?: string;
}

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    const port = parseInt(process.env.SMTP_PORT || '465');
    
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: port,
      secure: port === 465, // true for 465 (SSL), false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Additional options for better compatibility
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
      debug: process.env.NODE_ENV === 'development', // Enable debug in development
      logger: process.env.NODE_ENV === 'development', // Enable logging in development
    });
  }

  async sendContactEmail(data: ContactFormData): Promise<void> {
    try {
      // Verify connection first
      await this.transporter.verify();
      console.log('SMTP connection verified successfully');
      
      const emailContent = this.formatContactEmail(data);

      // Get recipients from environment variable or use defaults
      const recipientList = process.env.CONTACT_EMAIL_RECIPIENTS || 'contracts@izyglobalservices.com,contracts@izymovers.com';
      const recipients = recipientList.split(',').map(email => email.trim());

      const mailOptions = {
        from: `"Izy Global Services" <${process.env.SMTP_USER}>`, // Use authenticated email as sender
        to: recipients.join(', '), // Send to both addresses
        subject: `Website Contact: ${data.subject}`,
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>'),
        replyTo: data.email,
      };

      console.log('Sending email with options:', {
        from: mailOptions.from,
        to: mailOptions.to,
        subject: mailOptions.subject,
      });

      const result = await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully to both addresses:', result.messageId);
      console.log('Recipients:', recipients);
      
    } catch (error) {
      console.error('Error sending contact email:', error);
      throw new Error(`Failed to send contact email: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async sendConfirmationEmail(data: ContactFormData): Promise<void> {
    try {
      const confirmationContent = this.formatConfirmationEmail(data);

      const mailOptions = {
        from: `"Izy Global Services" <${process.env.SMTP_USER}>`, // Use authenticated email as sender
        to: data.email,
        subject: 'Thank you for contacting Izy Global Services',
        text: confirmationContent,
        html: confirmationContent.replace(/\n/g, '<br>'),
      };

      console.log('Sending confirmation email to:', data.email);
      
      const result = await this.transporter.sendMail(mailOptions);
      console.log('Confirmation email sent successfully:', result.messageId);
      
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      // Don't throw error for confirmation email - it's not critical
      console.warn('Confirmation email failed, but contact email may have succeeded');
    }
  }

  private formatContactEmail(data: ContactFormData): string {
    const recipientList = process.env.CONTACT_EMAIL_RECIPIENTS || 'contracts@izyglobalservices.com,contracts@izymovers.com';
    
    return `
New Contact Form Submission from Izy Global Services Website

Contact Information:
- Name: ${data.name}
- Company: ${data.company || 'Not provided'}
- Email: ${data.email}
- Phone: ${data.phone || 'Not provided'}
- How they heard about us: ${data.hearAboutUs || 'Not specified'}

Subject: ${data.subject}

Message:
${data.message}

---
This message was sent from the Izy Global Services website contact form.
Sent to: ${recipientList}
Sent on: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CST
    `.trim();
  }

  private formatConfirmationEmail(data: ContactFormData): string {
    return `
Dear ${data.name},

Thank you for contacting Izy Global Services LLC. We have received your message and will respond within 24 hours during business days.

Your Message Details:
- Subject: ${data.subject}
- Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CST

For urgent matters, please call us directly at (713) 992-0481.

Best regards,
Izy Global Services LLC Team
Service-Disabled Veteran-Owned Small Business

---
This is an automated confirmation email. Please do not reply to this message.
    `.trim();
  }
}