import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { Resend } from 'resend';
import { randomInt } from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);

function generateOTP(length: number = 6): string {
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += randomInt(0, 10).toString();
  }
  return otp;
}

export async function POST() {
  try {
    const adminEmailsEnv = process.env.ADMIN_EMAIL;
    
    if (!adminEmailsEnv) {
      return NextResponse.json(
        { error: 'Admin email configuration missing' },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json(
          { error: 'Resend API Key not configured' },
          { status: 500 }
        );
      }

    // Generate ONE OTP for all admins
    const otp = generateOTP(6);
    const db = await getDatabase();
    const otpsCollection = db.collection('otps');

    // Store single OTP (not tied to specific email)
    await otpsCollection.updateOne(
      { type: 'admin_otp' },
      { 
        $set: { 
          otp,
          type: 'admin_otp',
          createdAt: new Date(),
          expiresAt: new Date(Date.now() + 5 * 60 * 1000) // 5 minutes
        }
      },
      { upsert: true }
    );

    // Get all admin emails
    const adminEmails = adminEmailsEnv.split(',').map(e => e.trim());

    // Send the SAME OTP to ALL admin emails
    const emailPromises = adminEmails.map(email => 
      resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Your Admin Access OTP',
        html: `<p>Your OTP for admin access is: <strong>${otp}</strong></p><p>This code expires in 5 minutes.</p>`
      })
    );

    await Promise.all(emailPromises);

    return NextResponse.json({ success: true, message: 'OTP sent to all admin emails' });
  } catch (error) {
    console.error('OTP Request Error:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
}
