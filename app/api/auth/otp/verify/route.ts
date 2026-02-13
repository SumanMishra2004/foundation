import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { otp } = await request.json();

    if (!otp) {
      return NextResponse.json(
        { error: 'OTP is required' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const otpsCollection = db.collection('otps');

    // Check if OTP matches the stored one and is not expired
    const record = await otpsCollection.findOne({
      type: 'admin_otp',
      otp: otp,
      expiresAt: { $gt: new Date() }
    });

    if (!record) {
      return NextResponse.json(
        { error: 'Invalid or expired OTP' },
        { status: 400 }
      );
    }

    // OTP is valid. Set a session cookie.
    
    // Cleanup OTP after successful use
    await otpsCollection.deleteOne({ _id: record._id });

    const response = NextResponse.json({ success: true });
    
    // Set cookie
    (await cookies()).set('admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 1 day
    });

    return response;
  } catch (error) {
    console.error('OTP Verification Error:', error);
    return NextResponse.json(
      { error: 'Failed to verify OTP' },
      { status: 500 }
    );
  }
}
