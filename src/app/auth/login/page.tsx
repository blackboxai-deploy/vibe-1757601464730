"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "pet-owner"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
    // Redirect to dashboard after successful login
    window.location.href = "/dashboard";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-paw-cream-300 via-paw-gray-100 to-paw-teal-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-paw-orange-500 to-paw-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <span className="text-2xl font-bold text-paw-gray-900">PawPointments</span>
          </Link>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-paw-gray-900">Welcome Back</h1>
            <p className="text-paw-gray-600 mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Type Selection */}
            <div className="space-y-2">
              <Label htmlFor="userType" className="text-paw-gray-700">I am a</Label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleInputChange}
                className="w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent"
              >
                <option value="pet-owner">Pet Owner</option>
                <option value="veterinarian">Veterinarian</option>
              </select>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-paw-gray-700">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-paw-gray-700">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent"
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link href="/auth/forgot-password" className="text-paw-teal-600 hover:text-paw-teal-700 text-sm">
                Forgot your password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-paw-orange-500 hover:bg-paw-orange-600 text-white py-3 rounded-lg text-lg font-semibold"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-paw-gray-300"></div>
            <div className="px-4 text-paw-gray-500 text-sm">or</div>
            <div className="flex-1 border-t border-paw-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full border-paw-gray-300 hover:bg-paw-gray-50 py-3"
            >
              <span className="mr-2">🔍</span>
              Continue with Google
            </Button>
            <Button
              variant="outline"
              className="w-full border-paw-gray-300 hover:bg-paw-gray-50 py-3"
            >
              <span className="mr-2">📘</span>
              Continue with Facebook
            </Button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-paw-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/auth/register" className="text-paw-teal-600 hover:text-paw-teal-700 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center mt-6">
          <p className="text-paw-gray-600 text-sm">
            Emergency? Call us directly at{" "}
            <a href="tel:+1-555-EMERGENCY" className="text-paw-orange-500 font-semibold">
              +1 (555) EMERGENCY
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}