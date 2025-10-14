# Vercel Deployment Guide - Environment Variables Setup

## 🚀 Complete Guide to Deploy Contact Form to Vercel

### Prerequisites
- ✅ Vercel account (free at vercel.com)
- ✅ GitHub repository with your project
- ✅ Working contact form (already completed)

## Step 1: Prepare for Deployment

### 1.1 Verify Your Environment Variables
Your `.env.local` currently contains:
```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=contracts@izyglobalservices.com
SMTP_PASS=Greatest-123-@-ME
SMTP_FROM=contracts@izyglobalservices.com
CONTACT_EMAIL_RECIPIENTS=contracts@izyglobalservices.com,contracts@izymovers.com
```

### 1.2 Create Production Environment File (Optional)
Create `.env.production` for production-specific settings:
```env
# Production Environment Variables
NODE_ENV=production
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=contracts@izyglobalservices.com
SMTP_PASS=Greatest-123-@-ME
SMTP_FROM=contracts@izyglobalservices.com
CONTACT_EMAIL_RECIPIENTS=contracts@izyglobalservices.com,contracts@izymovers.com
```

## Step 2: Deploy to Vercel

### Method A: Deploy via Vercel Dashboard (Recommended)

#### 2.1 Connect Your Repository
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. **Import** your GitHub repository
4. Select your `izy-global-website` repository
5. Click **"Import"**

#### 2.2 Configure Project Settings
1. **Framework Preset**: Next.js (should auto-detect)
2. **Root Directory**: `./` (or `./izy-global-website` if repo has multiple folders)
3. **Build Command**: `npm run build` (default)
4. **Output Directory**: `.next` (default)
5. **Install Command**: `npm install` (default)

#### 2.3 Add Environment Variables (CRITICAL STEP)
**Before clicking "Deploy", add environment variables:**

1. Click **"Environment Variables"** section
2. Add each variable one by one:

**Variable 1:**
- **Name**: `SMTP_HOST`
- **Value**: `smtp.hostinger.com`
- **Environment**: All (Production, Preview, Development)

**Variable 2:**
- **Name**: `SMTP_PORT`
- **Value**: `465`
- **Environment**: All

**Variable 3:**
- **Name**: `SMTP_USER`
- **Value**: `contracts@izyglobalservices.com`
- **Environment**: All

**Variable 4:**
- **Name**: `SMTP_PASS`
- **Value**: `Greatest-123-@-ME`
- **Environment**: All

**Variable 5:**
- **Name**: `SMTP_FROM`
- **Value**: `contracts@izyglobalservices.com`
- **Environment**: All

**Variable 6:**
- **Name**: `CONTACT_EMAIL_RECIPIENTS`
- **Value**: `contracts@izyglobalservices.com,contracts@izymovers.com`
- **Environment**: All

#### 2.4 Deploy
1. Click **"Deploy"**
2. Wait for deployment to complete (usually 2-3 minutes)
3. Get your production URL (e.g., `https://your-project.vercel.app`)

### Method B: Deploy via Vercel CLI

#### 2.1 Install Vercel CLI
```bash
npm install -g vercel
```

#### 2.2 Login to Vercel
```bash
vercel login
```

#### 2.3 Deploy from Project Directory
```bash
cd izy-global-website
vercel
```

#### 2.4 Add Environment Variables via CLI
```bash
# Add each environment variable
vercel env add SMTP_HOST
# Enter: smtp.hostinger.com
# Select: Production, Preview, Development

vercel env add SMTP_PORT
# Enter: 465

vercel env add SMTP_USER
# Enter: contracts@izyglobalservices.com

vercel env add SMTP_PASS
# Enter: Greatest-123-@-ME

vercel env add SMTP_FROM
# Enter: contracts@izyglobalservices.com

vercel env add CONTACT_EMAIL_RECIPIENTS
# Enter: contracts@izyglobalservices.com,contracts@izymovers.com
```

## Step 3: Configure Environment Variables in Vercel Dashboard

### 3.1 Access Project Settings
1. Go to your Vercel dashboard
2. Click on your deployed project
3. Go to **"Settings"** tab
4. Click **"Environment Variables"** in the sidebar

### 3.2 Add/Edit Environment Variables
For each variable, click **"Add New"**:

| Name | Value | Environment |
|------|-------|-------------|
| `SMTP_HOST` | `smtp.hostinger.com` | Production, Preview, Development |
| `SMTP_PORT` | `465` | Production, Preview, Development |
| `SMTP_USER` | `contracts@izyglobalservices.com` | Production, Preview, Development |
| `SMTP_PASS` | `Greatest-123-@-ME` | Production, Preview, Development |
| `SMTP_FROM` | `contracts@izyglobalservices.com` | Production, Preview, Development |
| `CONTACT_EMAIL_RECIPIENTS` | `contracts@izyglobalservices.com,contracts@izymovers.com` | Production, Preview, Development |

### 3.3 Environment Selection
- **Production**: Live website
- **Preview**: Branch deployments and pull requests
- **Development**: Local development (optional)

**Recommendation**: Select **ALL** environments for consistency.

## Step 4: Redeploy After Adding Variables

### 4.1 Trigger Redeploy
After adding environment variables:
1. Go to **"Deployments"** tab
2. Click **"Redeploy"** on the latest deployment
3. Or push a new commit to trigger automatic deployment

### 4.2 Verify Deployment
1. Visit your production URL
2. Go to `/contact` page
3. Submit a test form
4. Check both email addresses receive the message

## Step 5: Domain Configuration (Optional)

### 5.1 Add Custom Domain
1. Go to **"Settings"** → **"Domains"**
2. Add your custom domain (e.g., `izyglobalservices.com`)
3. Configure DNS records as instructed
4. Wait for SSL certificate provisioning

### 5.2 Update Environment Variables for Custom Domain
If using custom domain, you might want to update:
```env
SMTP_FROM=noreply@izyglobalservices.com
```

## Step 6: Testing Production Deployment

### 6.1 Test Contact Form
1. Visit your production site
2. Navigate to `/contact`
3. Fill out and submit the form
4. Verify emails are received at both addresses:
   - `contracts@izyglobalservices.com`
   - `contracts@izymovers.com`

### 6.2 Check Vercel Function Logs
1. Go to Vercel dashboard
2. Click **"Functions"** tab
3. Click on `/api/contact` function
4. View logs to verify email sending

## Troubleshooting

### Common Issues and Solutions

#### Issue 1: Environment Variables Not Working
**Solution**: 
- Ensure variables are added to **Production** environment
- Redeploy after adding variables
- Check variable names match exactly (case-sensitive)

#### Issue 2: Email Not Sending in Production
**Solution**:
- Verify all SMTP credentials are correct
- Check Vercel function logs for errors
- Ensure Hostinger allows SMTP from Vercel's IP ranges

#### Issue 3: Build Failures
**Solution**:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

#### Issue 4: API Route Not Found
**Solution**:
- Ensure `/src/app/api/contact/route.ts` exists
- Check file structure matches Next.js 13+ App Router
- Verify build completed successfully

### Environment Variable Security
- ✅ **Never commit** `.env.local` to version control
- ✅ **Use Vercel's secure storage** for sensitive data
- ✅ **Rotate passwords** periodically
- ✅ **Limit access** to production environment variables

## Quick Reference: Vercel Environment Variables

```bash
# Quick setup via Vercel CLI
vercel env add SMTP_HOST production
vercel env add SMTP_PORT production  
vercel env add SMTP_USER production
vercel env add SMTP_PASS production
vercel env add SMTP_FROM production
vercel env add CONTACT_EMAIL_RECIPIENTS production
```

## Final Checklist ✅

Before going live:
- [ ] All environment variables added to Vercel
- [ ] Production deployment successful
- [ ] Contact form accessible at `/contact`
- [ ] Test email sent and received at both addresses
- [ ] SSL certificate active (https://)
- [ ] Custom domain configured (if applicable)
- [ ] Error handling working properly
- [ ] Form validation working
- [ ] User confirmation emails working

## Support

If you encounter issues:
1. Check Vercel function logs
2. Verify environment variables in dashboard
3. Test SMTP credentials locally first
4. Contact Vercel support if deployment issues persist

**Your contact form is now ready for production with dual email delivery to both `contracts@izyglobalservices.com` and `contracts@izymovers.com`!**