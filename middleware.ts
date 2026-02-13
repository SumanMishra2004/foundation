import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Handle /admin route
  if (pathname === '/admin') {
    // Check if user is already authenticated
    const session = request.cookies.get('admin_session');
    
    if (session?.value === 'authenticated') {
      // User is authenticated, let them through
      return NextResponse.next();
    }
    
    // Check if OTP was already sent in this session
    const otpSent = request.cookies.get('otp_sent');
    
    if (!otpSent) {
      // Send OTP only once
      try {
        const apiUrl = new URL('/api/auth/otp/request', request.url);
        await fetch(apiUrl.toString(), { method: 'POST' });
        
        // Set a temporary cookie to prevent duplicate sends
        const response = NextResponse.next();
        response.cookies.set('otp_sent', 'true', {
          httpOnly: true,
          maxAge: 60 * 5, // 5 minutes (same as OTP expiry)
          sameSite: 'strict'
        });
        return response;
      } catch (error) {
        console.error('Failed to send OTP in middleware:', error);
      }
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin',
};
