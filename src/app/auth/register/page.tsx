"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "pet-owner",
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!formData.agreeTerms) {
      alert("Please agree to the terms and conditions!");
      return;
    }
    // Handle registration logic here
    console.log("Registration attempt:", formData);
    // Redirect to dashboard after successful registration
    window.location.href = "/dashboard";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
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

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-paw-gray-900">Create Account</h1>
            <p className="text-paw-gray-600 mt-2">Join the PawPointments family</p>
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

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-paw-gray-700">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className="w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-paw-gray-700">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  className="w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent"
                  required
                />
              </div>
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

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-paw-gray-700">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                className="w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent"
                required
              />
            </div>

            {/* Password Fields */}
            <div className="space-y-4">
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
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-paw-gray-700">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-2">
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-paw-orange-500 border-paw-gray-300 rounded focus:ring-paw-orange-500"
                required
              />
              <label htmlFor="agreeTerms" className="text-sm text-paw-gray-700">
                I agree to the{" "}
                <Link href="/terms" className="text-paw-teal-600 hover:text-paw-teal-700">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-paw-teal-600 hover:text-paw-teal-700">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-paw-orange-500 hover:bg-paw-orange-600 text-white py-3 rounded-lg text-lg font-semibold"
            >
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-paw-gray-300"></div>
            <div className="px-4 text-paw-gray-500 text-sm">or</div>
            <div className="flex-1 border-t border-paw-gray-300"></div>
          </div>

          {/* Social Register */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full border-paw-gray-300 hover:bg-paw-gray-50 py-3"
            >
              <span className="mr-2">🔍</span>
              Sign up with Google
            </Button>
            <Button
              variant="outline"
              className="w-full border-paw-gray-300 hover:bg-paw-gray-50 py-3"
            >
              <span className="mr-2">📘</span>
              Sign up with Facebook
            </Button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-paw-gray-600">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-paw-teal-600 hover:text-paw-teal-700 font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}