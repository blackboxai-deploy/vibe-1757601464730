"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-paw-cream-300 via-paw-gray-100 to-paw-teal-50">
      {/* Header Navigation */}
      <header className="relative z-50 bg-white/80 backdrop-blur-md border-b border-paw-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-paw-orange-500 to-paw-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-paw-gray-900">PawPointments</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-paw-gray-700 hover:text-paw-orange-500 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-paw-gray-700 hover:text-paw-orange-500 transition-colors">
                Services
              </Link>
              <Link href="/vets" className="text-paw-gray-700 hover:text-paw-orange-500 transition-colors">
                Find Vets
              </Link>
              <Link href="/auth/login" className="text-paw-gray-700 hover:text-paw-orange-500 transition-colors">
                Login
              </Link>
              <Button className="bg-paw-orange-500 hover:bg-paw-orange-600 text-white px-6">
                Get Started
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-paw-gray-700 hover:text-paw-orange-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-paw-gray-200">
            <div className="px-4 py-3 space-y-3">
              <Link href="/about" className="block text-paw-gray-700 hover:text-paw-orange-500">
                About
              </Link>
              <Link href="/services" className="block text-paw-gray-700 hover:text-paw-orange-500">
                Services
              </Link>
              <Link href="/vets" className="block text-paw-gray-700 hover:text-paw-orange-500">
                Find Vets
              </Link>
              <Link href="/auth/login" className="block text-paw-gray-700 hover:text-paw-orange-500">
                Login
              </Link>
              <Button className="w-full bg-paw-orange-500 hover:bg-paw-orange-600 text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-paw-gray-900 leading-tight">
                Your Pet&apos;s Health,{" "}
                <span className="text-paw-orange-500">Our Priority</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-paw-gray-700 leading-relaxed">
                Book veterinary appointments with ease. Connect with trusted veterinarians, 
                manage your pet&apos;s health records, and ensure your furry friends get the best care possible.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-paw-orange-500 hover:bg-paw-orange-600 text-white px-8 py-3 text-lg"
                  asChild
                >
                  <Link href="/auth/register">Book Appointment</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-paw-teal-500 text-paw-teal-600 hover:bg-paw-teal-50 px-8 py-3 text-lg"
                  asChild
                >
                  <Link href="/vets">Find Veterinarians</Link>
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-6">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c174c29b-1947-42bc-af6f-89033b5272b5.png"
                  alt="Happy veterinarian examining a golden retriever in a modern clinic"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-paw-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">✓</span>
                    </div>
                    <div>
                      <p className="text-sm text-paw-gray-600">Trusted by</p>
                      <p className="text-lg font-semibold text-paw-gray-900">10,000+ Pet Parents</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-paw-gray-900">
              Why Choose <span className="text-paw-orange-500">PawPointments</span>?
            </h2>
            <p className="mt-4 text-lg text-paw-gray-600 max-w-2xl mx-auto">
              We make pet care simple, convenient, and stress-free for both you and your furry companions.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl bg-paw-cream-300/30 hover:bg-paw-cream-300/50 transition-colors">
              <div className="w-16 h-16 bg-paw-orange-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-paw-gray-900">Easy Booking</h3>
              <p className="mt-2 text-paw-gray-600">
                Schedule appointments with your preferred veterinarians in just a few taps.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl bg-paw-teal-100/50 hover:bg-paw-teal-100/70 transition-colors">
              <div className="w-16 h-16 bg-paw-teal-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-paw-gray-900">Trusted Vets</h3>
              <p className="mt-2 text-paw-gray-600">
                Connect with licensed, experienced veterinarians in your area.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl bg-paw-cream-300/30 hover:bg-paw-cream-300/50 transition-colors">
              <div className="w-16 h-16 bg-paw-orange-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-paw-gray-900">Mobile First</h3>
              <p className="mt-2 text-paw-gray-600">
                Manage your pet&apos;s health on-the-go with our mobile-optimized platform.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 rounded-xl bg-paw-teal-100/50 hover:bg-paw-teal-100/70 transition-colors">
              <div className="w-16 h-16 bg-paw-teal-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-paw-gray-900">Health Records</h3>
              <p className="mt-2 text-paw-gray-600">
                Keep track of vaccinations, treatments, and medical history in one place.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="text-center p-6 rounded-xl bg-paw-cream-300/30 hover:bg-paw-cream-300/50 transition-colors">
              <div className="w-16 h-16 bg-paw-orange-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">🔔</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-paw-gray-900">Smart Reminders</h3>
              <p className="mt-2 text-paw-gray-600">
                Never miss important appointments or vaccination schedules.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="text-center p-6 rounded-xl bg-paw-teal-100/50 hover:bg-paw-teal-100/70 transition-colors">
              <div className="w-16 h-16 bg-paw-teal-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-paw-gray-900">24/7 Support</h3>
              <p className="mt-2 text-paw-gray-600">
                Get help when you need it with our dedicated customer support team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-paw-orange-500 to-paw-teal-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Give Your Pet the Best Care?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Join thousands of pet parents who trust PawPointments for their veterinary needs.
          </p>
          <div className="mt-8">
            <Button 
              size="lg"
              className="bg-white text-paw-orange-500 hover:bg-paw-gray-50 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link href="/auth/register">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-paw-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-paw-orange-500 to-paw-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold">PawPointments</span>
              </div>
              <p className="mt-4 text-paw-gray-400">
                Making pet care accessible and convenient for every pet parent.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-paw-gray-400">
                <li><Link href="/services/checkup" className="hover:text-white">Health Checkups</Link></li>
                <li><Link href="/services/vaccination" className="hover:text-white">Vaccinations</Link></li>
                <li><Link href="/services/emergency" className="hover:text-white">Emergency Care</Link></li>
                <li><Link href="/services/grooming" className="hover:text-white">Pet Grooming</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-paw-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <p className="text-paw-gray-400 mb-4">
                Follow us for pet care tips and updates
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-paw-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-paw-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-paw-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-paw-gray-800 text-center text-paw-gray-400">
            <p>&copy; 2024 PawPointments. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}