'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Upload, UserPlus, CheckCircle2, AlertCircle, Lock, Mail, Loader2, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  
  // Auth State
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [authError, setAuthError] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    bio: '',
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/check');
        const data = await res.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
        } else {
          // OTP is sent by middleware, just update state
          setOtpSent(true);
        }
      } catch (error) {
        console.error('Auth check failed', error);
      } finally {
        setIsLoadingAuth(false);
      }
    };
    checkAuth();
  }, []);



  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifyingOtp(true);
    setAuthError('');
    
    try {
      const res = await fetch('/api/auth/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setIsAuthenticated(true);
        window.location.reload(); 
      } else {
        setAuthError(data.error || 'Invalid OTP');
      }
    } catch (error) {
      setAuthError('An error occurred during verification');
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      setMessage({ type: 'error', text: 'Please select an image' });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', selectedFile);

      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      if (!uploadRes.ok) {
        throw new Error('Failed to upload image to Cloudinary');
      }

      const { imageUrl } = await uploadRes.json();

      const teamRes = await fetch('/api/team', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          image: imageUrl,
        }),
      });

      if (!teamRes.ok) {
        throw new Error('Failed to save team member');
      }

      setMessage({ type: 'success', text: 'Team member added successfully!' });
      setFormData({ name: '', role: '', bio: '' });
      setSelectedFile(null);
      setPreviewUrl(null);
      
      const fileInput = document.getElementById('image') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error instanceof Error ? error.message : 'An error occurred' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingAuth) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-slate-50 px-4 py-12">
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader className="space-y-1 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-t-lg py-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
            <CardDescription className="text-blue-100">
              {otpSent ? 'OTP sent to all admin emails' : 'Sending OTP to admin emails...'}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8 pb-8 space-y-4">
            {otpSent && (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit code"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="text-center text-2xl tracking-widest h-14"
                    maxLength={6}
                    required
                  />
                  <p className="text-sm text-gray-500 text-center mt-2">
                    OTP sent to all admin emails
                  </p>
                </div>
                <Button 
                  type="submit" 
                  disabled={isVerifyingOtp}
                  className="w-full h-12 text-lg bg-green-600 hover:bg-green-700"
                >
                  {isVerifyingOtp ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      Verify & Login
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            )}

            {authError && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-5 animate-in fade-in slide-in-from-top duration-500">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900">Admin Panel</h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-5 rounded-full"></div>
          <p className="text-gray-700 text-xl font-medium">Manage team members with ease</p>
        </div>

        <Card className="shadow-2xl bg-white border-2 border-blue-100 animate-in fade-in slide-in-from-bottom duration-700">
          <CardHeader className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white rounded-t-lg py-8">
            <CardTitle className="flex items-center gap-3 text-3xl text-white font-bold">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <UserPlus className="w-7 h-7" />
              </div>
              <span>Add New Team Member</span>
            </CardTitle>
            <CardDescription className="text-blue-50 text-lg font-medium mt-2">
              Fill in the details and upload an image to add a new team member
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-gray-900 font-bold text-lg flex items-center gap-2">
                  <span className="text-blue-600">•</span> Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter full name"
                  className="text-gray-900 text-lg border-2 border-gray-300 focus:border-blue-500 transition-colors py-6 rounded-lg"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="role" className="text-gray-900 font-bold text-lg flex items-center gap-2">
                  <span className="text-blue-600">•</span> Role *
                </Label>
                <Input
                  id="role"
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g., Director, Coordinator"
                  className="text-gray-900 text-lg border-2 border-gray-300 focus:border-blue-500 transition-colors py-6 rounded-lg"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="bio" className="text-gray-900 font-bold text-lg flex items-center gap-2">
                  <span className="text-blue-600">•</span> Bio *
                </Label>
                <Textarea
                  id="bio"
                  required
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  placeholder="Brief description about the team member"
                  rows={5}
                  className="text-gray-900 text-lg border-2 border-gray-300 focus:border-blue-500 transition-colors rounded-lg"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="image" className="text-gray-900 font-bold text-lg flex items-center gap-2">
                  <Upload className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600">•</span> Profile Image *
                </Label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-500 transition-colors bg-gray-50">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    required
                    onChange={handleFileChange}
                    className="text-gray-900 text-base cursor-pointer"
                  />
                </div>
                
                {previewUrl && (
                  <div className="mt-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl">
                    <p className="text-sm text-blue-800 font-bold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Image selected - Preview:
                    </p>
                    <div className="relative w-40 h-40 rounded-xl overflow-hidden border-4 border-blue-300 shadow-lg mx-auto">
                      <Image
                        src={previewUrl}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>

              {message && (
                <div
                  className={`p-4 rounded-lg flex items-start gap-3 ${
                    message.type === 'success'
                      ? 'bg-green-50 text-green-900 border border-green-200'
                      : 'bg-red-50 text-red-900 border border-red-200'
                  }`}
                >
                  {message.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  )}
                  <span className="font-medium">{message.text}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 hover:from-blue-700 hover:via-indigo-800 hover:to-purple-900 text-white font-bold text-xl h-14 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Adding...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <UserPlus className="w-6 h-6" />
                    Add Team Member
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-xl animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          <CardContent className="pt-7 pb-7">
            <h3 className="font-extrabold text-gray-900 mb-5 text-xl flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              Quick Guide:
            </h3>
            <ul className="space-y-3 text-base text-gray-800">
              <li className="flex items-start gap-3 group">
                <span className="text-blue-600 mt-0.5 font-bold text-xl">✓</span>
                <span className="font-medium group-hover:text-blue-600 transition-colors">All fields are required to add a team member</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-blue-600 mt-0.5 font-bold text-xl">✓</span>
                <span className="font-medium group-hover:text-blue-600 transition-colors">Upload a profile image (JPG, PNG, WebP supported)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-blue-600 mt-0.5 font-bold text-xl">✓</span>
                <span className="font-medium group-hover:text-blue-600 transition-colors">Images are automatically optimized and stored in Cloudinary</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-blue-600 mt-0.5 font-bold text-xl">✓</span>
                <span className="font-medium group-hover:text-blue-600 transition-colors">Team member data is securely stored in MongoDB database</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      </div>
    );
}
