# Integrated Knowledge and Care (IKC) Website

A modern, responsive website for the Integrated Knowledge and Care charitable trust, built with Next.js 14, TypeScript, Tailwind CSS, Shadcn UI, MongoDB, and Cloudinary.

## Overview

**Integrated Knowledge and Care (IKC)** is a charitable trust dedicated to holistic social development through integrated approaches to education, healthcare, research, and community welfare. This website showcases IKC's mission, vision, programs, and team.

## Features

- **Modern UI/UX**: Clean, professional design with excellent text visibility and contrast
- **Responsive Design**: Fully responsive across all devices
- **Multiple Pages**:
  - **Home**: Overview with hero section, vision & mission, and focus areas
  - **About**: Detailed information about IKC, values, and what we do
  - **Programs**: Comprehensive list of all focus areas and initiatives
  - **Team**: Display team members with photos and bios
  - **Admin Panel**: Secure interface to add team members
- **MongoDB Integration**: Team member data stored in MongoDB database
- **Cloudinary Integration**: Image upload and optimization with automatic transformations
- **Built with Modern Stack**:
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Shadcn UI Components
  - Lucide React Icons
  - MongoDB
  - Cloudinary

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- MongoDB database (MongoDB Atlas recommended)
- Cloudinary account for image storage

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create a `.env.local` file** in the root directory with your credentials:
   ```env
   # MongoDB Configuration
   MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/
   MONGODB_DB=newaviksir

   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret

   # Next.js
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

   **Getting the API Keys:**
   - **MongoDB**: Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free cluster
   - **Cloudinary**: Sign up at [Cloudinary](https://cloudinary.com/) for a free account and get your credentials from the dashboard

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
newaviksir/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── programs/          # Programs page
│   ├── team/              # Team page
│   ├── admin/             # Admin panel
│   └── api/               # API routes
│       ├── team/          # Team CRUD operations
│       └── upload/        # Image upload handler
├── components/
│   ├── ui/                # Shadcn UI components
│   └── layout/            # Layout components (Navbar, Footer)
├── data/
│   └── team.json          # Team members data
├── lib/
│   └── utils.ts           # Utility functions
├── public/
│   ├── logo.png           # IKC logo
│   └── team-images/       # Team member images
└── ...config files
```

## Admin Panel Usage

1. Navigate to `/admin`
2. Fill in the form with:
   - Name (required)
   - Role (required)
   - Bio (required)
   - Profile Image (required)
3. Click "Add Team Member"
4. The image will be stored in `/public/team-images/`
5. Team data will be saved in `/data/team.json`
6. View the team member on the `/team` page

## Logo Setup

**Important**: The logo is referenced at `/logo.png`. Please place your IKC logo file at:
```
public/logo.png
```

The logo will appear:
- In the hero section of the home page
- As a circular badge with white background

## Color Scheme

The website uses a professional blue color scheme optimized for readability:
- **Primary Blue**: `#2563eb` (blue-600)
- **Dark Blue**: `#1e40af` (blue-700)
- **Text on Light**: Dark gray (`#1f2937` / gray-900)
- **Text on Dark**: White with blue tints
- All text has been optimized for visibility on both light and dark backgrounds

## Technology Stack

- **Framework**: Next.js 14.2+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## License

This project is built for Integrated Knowledge and Care (IKC) charitable trust.

## Contact

For questions or support, please contact: contact@ikctrust.org

---

*Empowering Lives through Knowledge & Care*
