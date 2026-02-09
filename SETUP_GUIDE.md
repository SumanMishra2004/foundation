# MongoDB and Cloudinary Setup Guide

This guide will help you set up MongoDB and Cloudinary for the IKC website.

## MongoDB Setup

### 1. Create a MongoDB Atlas Account (Free)

1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account
3. Create a new project (e.g., "IKC Website")

### 2. Create a Database Cluster

1. Click "Build a Database"
2. Choose the **FREE** shared tier (M0)
3. Select a cloud provider and region closest to you
4. Click "Create Cluster"

### 3. Configure Database Access

1. Go to **Database Access** in the left sidebar
2. Click "Add New Database User"
3. Choose **Password** authentication
4. Create a username and strong password (save these!)
5. Select "Built-in Role" → **Read and write to any database**
6. Click "Add User"

### 4. Configure Network Access

1. Go to **Network Access** in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
   - For production, restrict to your server's IP
4. Click "Confirm"

### 5. Get Your Connection String

1. Go back to **Database** (Clusters)
2. Click **Connect** on your cluster
3. Choose **Connect your application**
4. Copy the connection string (looks like: `mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/`)
5. Replace `<password>` with your actual database user password
6. Add this to your `.env.local` file as `MONGODB_URI`

## Cloudinary Setup

### 1. Create a Cloudinary Account (Free)

1. Visit [Cloudinary](https://cloudinary.com/users/register/free)
2. Sign up for a free account (includes 25 GB storage and 25 GB bandwidth/month)
3. Verify your email address

### 2. Access Your Dashboard

1. After logging in, you'll see your **Dashboard**
2. The dashboard displays your account credentials

### 3. Get Your Credentials

On your dashboard, you'll find:
- **Cloud Name**: Your unique cloud identifier
- **API Key**: Your API access key
- **API Secret**: Your API secret (click the eye icon to reveal)

Copy these three values.

### 4. Add to Environment Variables

Add these to your `.env.local` file:

```env
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### 5. Understanding Free Tier Limits

The free tier includes:
- **Storage**: 25 GB
- **Bandwidth**: 25 GB/month
- **Transformations**: 25 credits/month
- **Images**: Unlimited uploads

This is more than enough for a team website!

## Environment Variables (.env.local)

Create a `.env.local` file in your project root:

```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/
MONGODB_DB=newaviksir

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Next.js
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Testing the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/admin`

3. Try adding a team member:
   - Fill in name, role, and bio
   - Upload an image
   - Submit the form

4. Check the team page to see if it displays correctly

5. Verify in Cloudinary dashboard that the image was uploaded

## Troubleshooting

### MongoDB Connection Issues

- Ensure your database user password is correctly URL-encoded
- Check that your IP address is whitelisted in Network Access
- Verify the connection string format
- Make sure there are no extra spaces in your credentials

### Cloudinary Upload Issues

- Double-check that all three credentials are correctly copied
- Verify there are no quotes around the values in `.env.local`
- Check the Cloudinary dashboard for any error messages
- Ensure you haven't exceeded the free tier limits

### Image Not Displaying

- Check browser console for errors
- Verify the Cloudinary domain is in `next.config.ts`
- Confirm the image URL starts with `https://res.cloudinary.com/`
- Clear browser cache and refresh

### Production Deployment

For production:
1. Add environment variables to your hosting platform (Vercel, Netlify, etc.)
2. Restrict MongoDB Network Access to your server's IP
3. Update `NEXT_PUBLIC_BASE_URL` to your production domain
4. Consider enabling Cloudinary's auto-backup feature
5. Set up image transformation presets in Cloudinary for consistent sizing
