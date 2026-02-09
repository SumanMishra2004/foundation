import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';


// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    // Debug: Check if env variables are loaded
    console.log('=== CLOUDINARY ENV CHECK ===');
    console.log('CLOUD_NAME:', process.env.CLOUDINARY_CLOUD_NAME || 'NOT SET');
    console.log('API_KEY:', process.env.CLOUDINARY_API_KEY ? `${process.env.CLOUDINARY_API_KEY.substring(0, 4)}...` : 'NOT SET');
    console.log('API_SECRET:', process.env.CLOUDINARY_API_SECRET ? `${process.env.CLOUDINARY_API_SECRET.substring(0, 4)}...` : 'NOT SET');
    console.log('===========================');
    
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Validate Cloudinary configuration
    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      console.error('❌ Cloudinary credentials missing in environment variables!');
      return NextResponse.json({ 
        error: 'Cloudinary credentials not configured' 
      }, { status: 500 });
    }

    // Convert file to base64
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64File = `data:${file.type};base64,${buffer.toString('base64')}`;

    // Upload to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(base64File, {
      folder: 'team-members',
      transformation: [
        { width: 800, height: 800, crop: 'fill', gravity: 'face' },
        { quality: 'auto', fetch_format: 'auto' }
      ]
    });

    return NextResponse.json({ 
      imageUrl: uploadResponse.secure_url,
      publicId: uploadResponse.public_id
    });
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return NextResponse.json({ 
      error: 'Failed to upload image to Cloudinary' 
    }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const publicId = searchParams.get('publicId');
    
    if (!publicId) {
      return NextResponse.json({ error: 'Public ID is required' }, { status: 400 });
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(publicId);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    return NextResponse.json({ 
      error: 'Failed to delete image from Cloudinary' 
    }, { status: 500 });
  }
}
