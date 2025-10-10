# Hostinger Email Configuration - Ready to Use

## ✅ Status: CONFIGURED FOR HOSTINGER SMTP

The contact form is now **pre-configured** to use Hostinger's SMTP settings. Only your email credentials are needed.

## Current Configuration

### SMTP Settings (Already Applied)
- **Host**: `smtp.hostinger.com`
- **Port**: `465` (SSL encryption)
- **Security**: SSL enabled
- **Authentication**: Email and password required

### Files Updated
- ✅ `/src/lib/email.ts` - Updated for Hostinger SMTP with SSL
- ✅ `.env.local` - Pre-configured with Hostinger settings
- ✅ Build tested and working

## Final Setup Steps

### 1. Update Email Credentials
Edit `.env.local` and replace these values:
```env
SMTP_USER=your-actual-email@izyglobalservices.com
SMTP_PASS=your-actual-email-password
```

### 2. Email Account Requirements
Make sure you have:
- ✅ An email account created in Hostinger (e.g., `noreply@izyglobalservices.com`)
- ✅ The email password from your Hostinger control panel
- ✅ SMTP access enabled (usually enabled by default)

### 3. Test the Setup
1. Update `.env.local` with real credentials
2. Restart dev server: `npm run dev`
3. Go to `/contact` and submit a test message
4. Check `contracts@izyglobalservices.com` for the email

## Email Flow

### When Someone Submits the Contact Form:
1. **Company Email** → `contracts@izyglobalservices.com`
   ```
   New Contact Form Submission from Izy Global Services Website
   
   Contact Information:
   - Name: [User Name]
   - Company: [Company]
   - Email: [User Email]
   - Phone: [Phone]
   - How they heard about us: [Source]
   
   Subject: [Subject]
   
   Message:
   [User Message]
   
   Sent on: [Timestamp] CST
   ```

2. **User Confirmation** → User's email address
   ```
   Dear [User Name],
   
   Thank you for contacting Izy Global Services LLC. We have received 
   your message and will respond within 24 hours during business days.
   
   Your Message Details:
   - Subject: [Subject]
   - Submitted: [Timestamp] CST
   
   For urgent matters, please call us directly at (713) 992-0481.
   
   Best regards,
   Izy Global Services LLC Team
   Service-Disabled Veteran-Owned Small Business
   ```

## Troubleshooting

### Common Issues:
1. **"Authentication failed"**
   - Verify email address and password in `.env.local`
   - Check if SMTP is enabled in Hostinger control panel

2. **"Connection timeout"**
   - Verify port 465 is not blocked by firewall
   - Check Hostinger server status

3. **Emails not received**
   - Check spam/junk folders
   - Verify `contracts@izyglobalservices.com` exists
   - Test with a different recipient email first

### Testing Tips:
1. **Start with a test email** to yourself first
2. **Check both company and user emails** are working
3. **Verify SSL connection** is working (port 465)

## Production Deployment

### Environment Variables for Production:
When deploying to Vercel, Netlify, or other platforms, add these environment variables:
```
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=your-email@izyglobalservices.com
SMTP_PASS=your-email-password
SMTP_FROM=noreply@izyglobalservices.com
```

## Security Notes
- ✅ SSL encryption enabled (port 465)
- ✅ Environment variables used (credentials not in code)
- ✅ Input validation implemented
- ✅ Error handling in place

**The contact form is ready to handle all business inquiries and forward them to `contracts@izyglobalservices.com` using Hostinger's reliable SMTP service!**