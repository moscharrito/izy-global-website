# Email Setup Guide - Contact Form

## ✅ Status: FULLY IMPLEMENTED

The contact form email functionality is **completely implemented** and ready to use. Only email service configuration is needed.

## What's Already Working

### 1. **Complete Contact Form** (`/contact`)
- ✅ Professional form with validation
- ✅ Loading states and success/error messages
- ✅ Form fields: name, company, email, phone, subject, message, how they heard about us
- ✅ Sends to `contracts@izyglobalservices.com`
- ✅ User confirmation emails

### 2. **API Endpoint** (`/api/contact`)
- ✅ Validates all form data
- ✅ Professional email templates
- ✅ Error handling and responses

### 3. **Email Service** (`/src/lib/email.ts`)
- ✅ Nodemailer integration
- ✅ Professional email formatting
- ✅ Company branding in emails

## Quick Setup - Hostinger SMTP (Configured)

### Hostinger Email Configuration
The system is pre-configured for Hostinger SMTP. Just update your credentials:

**Update `.env.local`**:
```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=your-email@izyglobalservices.com
SMTP_PASS=your-email-password
SMTP_FROM=noreply@izyglobalservices.com
```

### Setup Steps:
1. **Create email account** in your Hostinger control panel (if not already done)
2. **Update `.env.local`** with your actual email credentials:
   - Replace `your-email@izyglobalservices.com` with your actual email
   - Replace `your-email-password` with your actual email password
3. **Restart development server**: `npm run dev`

### Hostinger SMTP Details (Already Configured):
- **Host**: smtp.hostinger.com
- **Port**: 465 (SSL encryption)
- **Security**: SSL enabled
- **Authentication**: Required (your email and password)

### Alternative Options (If Needed):

#### Option A: Gmail (For Testing)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-character-app-password
SMTP_FROM=noreply@izyglobalservices.com
```

#### Option B: SendGrid (For High Volume)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
SMTP_FROM=noreply@izyglobalservices.com
```

## Testing Steps
1. Update `.env.local` with your email credentials
2. Restart development server: `npm run dev`
3. Go to `http://localhost:3000/contact`
4. Fill out and submit the form
5. Check `contracts@izyglobalservices.com` for the message
6. Check the user's email for confirmation

## Email Templates

### Company Notification Email
```
New Contact Form Submission from Izy Global Services Website

Contact Information:
- Name: [User Name]
- Company: [Company Name]
- Email: [User Email]
- Phone: [Phone Number]
- How they heard about us: [Source]

Subject: [Subject]

Message:
[User Message]

Sent on: [Timestamp] CST
```

### User Confirmation Email
```
Dear [User Name],

Thank you for contacting Izy Global Services LLC. We have received your message and will respond within 24 hours during business days.

Your Message Details:
- Subject: [Subject]
- Submitted: [Timestamp] CST

For urgent matters, please call us directly at (713) 992-0481.

Best regards,
Izy Global Services LLC Team
Service-Disabled Veteran-Owned Small Business
```

## Production Deployment
For production (Vercel, Netlify, etc.), add the environment variables in your hosting platform's dashboard.

## Support
The email system is fully functional. If you need help with email service configuration, refer to your email provider's SMTP documentation.

**The contact form is ready to receive and forward all inquiries to `contracts@izyglobalservices.com`!**