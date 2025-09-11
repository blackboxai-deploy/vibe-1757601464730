"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { mockPets, mockAppointments, mockNotifications } from "@/lib/mockData";

export default function DashboardPage() {

  // Mock current user data
  const currentUser = {
    firstName: "Sarah",
    lastName: "Johnson",
    profileImageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bcee915e-bb20-41f4-b907-fb9093430aaa.png"
  };

  const upcomingAppointments = mockAppointments.filter(apt => apt.status === 'confirmed' || apt.status === 'scheduled');
  const recentNotifications = mockNotifications.filter(notif => !notif.isRead).slice(0, 3);

  return (
    <div className="min-h-screen bg-paw-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-paw-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-paw-orange-500 to-paw-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-paw-gray-900">PawPointments</span>
            </Link>

            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-paw-teal-500 text-paw-teal-600">
                <span className="mr-2">🔔</span>
                Notifications
              </Button>
              <div className="flex items-center space-x-2">
                <img
                  src={currentUser.profileImageUrl}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-paw-gray-700 font-medium">{currentUser.firstName}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-paw-gray-900">
            Welcome back, {currentUser.firstName}! 👋
          </h1>
          <p className="text-paw-gray-600 mt-2">
            Here&apos;s what&apos;s happening with your pets today.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Button 
            size="lg"
            className="bg-paw-orange-500 hover:bg-paw-orange-600 text-white p-6 h-auto flex flex-col items-center space-y-2"
            asChild
          >
            <Link href="/appointments/book">
              <span className="text-2xl">📅</span>
              <span className="font-semibold">Book Appointment</span>
              <span className="text-sm opacity-90">Schedule a vet visit</span>
            </Link>
          </Button>

          <Button 
            variant="outline"
            size="lg"
            className="border-paw-teal-500 text-paw-teal-600 hover:bg-paw-teal-50 p-6 h-auto flex flex-col items-center space-y-2"
            asChild
          >
            <Link href="/pets">
              <span className="text-2xl">🐕</span>
              <span className="font-semibold">My Pets</span>
              <span className="text-sm">Manage pet profiles</span>
            </Link>
          </Button>

          <Button 
            variant="outline"
            size="lg"
            className="border-paw-gray-400 text-paw-gray-600 hover:bg-paw-gray-50 p-6 h-auto flex flex-col items-center space-y-2"
            asChild
          >
            <Link href="/vets">
              <span className="text-2xl">🏥</span>
              <span className="font-semibold">Find Vets</span>
              <span className="text-sm">Browse veterinarians</span>
            </Link>
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Upcoming Appointments */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Appointments */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-paw-gray-900">Upcoming Appointments</h2>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/appointments">View All</Link>
                </Button>
              </div>

              {upcomingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => {
                    const pet = mockPets.find(p => p.id === appointment.petId);
                    return (
                      <div key={appointment.id} className="flex items-center space-x-4 p-4 bg-paw-cream-300/20 rounded-lg">
                        <img
                          src={pet?.imageUrl || "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/52078444-b92a-4f5d-9ef5-c03a8626173d.png"}
                          alt={pet?.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-paw-gray-900">{pet?.name}</h3>
                          <p className="text-paw-gray-600 text-sm">{appointment.reason}</p>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-paw-teal-600 text-sm font-medium">
                              {appointment.date} at {appointment.time}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              appointment.status === 'confirmed' 
                                ? 'bg-paw-teal-100 text-paw-teal-700'
                                : 'bg-paw-orange-100 text-paw-orange-700'
                            }`}>
                              {appointment.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8 text-paw-gray-500">
                  <span className="text-4xl mb-4 block">📅</span>
                  <p>No upcoming appointments</p>
                  <Button className="mt-4 bg-paw-orange-500 hover:bg-paw-orange-600" asChild>
                    <Link href="/appointments/book">Book Your First Appointment</Link>
                  </Button>
                </div>
              )}
            </div>

            {/* My Pets */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-paw-gray-900">My Pets</h2>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/pets">Manage Pets</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockPets.slice(0, 4).map((pet) => (
                  <div key={pet.id} className="flex items-center space-x-3 p-4 bg-paw-gray-50 rounded-lg hover:bg-paw-gray-100 transition-colors">
                    <img
                      src={pet.imageUrl}
                      alt={pet.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-paw-gray-900">{pet.name}</h3>
                      <p className="text-paw-gray-600 text-sm">{pet.breed} • {pet.age} years old</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Notifications & Quick Stats */}
          <div className="space-y-6">
            {/* Recent Notifications */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-paw-gray-900">Recent Notifications</h3>
                <span className="text-xs text-paw-gray-500">Mark all as read</span>
              </div>

              {recentNotifications.length > 0 ? (
                <div className="space-y-3">
                  {recentNotifications.map((notification) => (
                    <div key={notification.id} className="p-3 bg-paw-teal-50 rounded-lg border-l-4 border-paw-teal-500">
                      <h4 className="font-medium text-paw-gray-900 text-sm">{notification.title}</h4>
                      <p className="text-paw-gray-600 text-xs mt-1">{notification.message}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 text-paw-gray-500">
                  <span className="text-2xl mb-2 block">🔔</span>
                  <p className="text-sm">No new notifications</p>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-paw-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-paw-gray-600">Total Pets</span>
                  <span className="font-semibold text-paw-gray-900">{mockPets.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-paw-gray-600">This Month&apos;s Visits</span>
                  <span className="font-semibold text-paw-gray-900">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-paw-gray-600">Next Checkup</span>
                  <span className="font-semibold text-paw-teal-600">Mar 15</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-paw-orange-500 to-paw-teal-500 rounded-xl shadow-sm p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Emergency Contact</h3>
              <p className="text-sm opacity-90 mb-4">24/7 veterinary emergency hotline</p>
              <Button 
                variant="secondary" 
                className="w-full bg-white text-paw-orange-600 hover:bg-paw-gray-50"
                asChild
              >
                <a href="tel:+1-555-EMERGENCY">Call Now: +1 (555) EMERGENCY</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-paw-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <Link href="/dashboard" className="flex flex-col items-center py-2 text-paw-orange-500">
            <span className="text-xl mb-1">🏠</span>
            <span className="text-xs">Home</span>
          </Link>
          <Link href="/appointments" className="flex flex-col items-center py-2 text-paw-gray-500">
            <span className="text-xl mb-1">📅</span>
            <span className="text-xs">Appointments</span>
          </Link>
          <Link href="/pets" className="flex flex-col items-center py-2 text-paw-gray-500">
            <span className="text-xl mb-1">🐕</span>
            <span className="text-xs">Pets</span>
          </Link>
          <Link href="/vets" className="flex flex-col items-center py-2 text-paw-gray-500">
            <span className="text-xl mb-1">🏥</span>
            <span className="text-xs">Vets</span>
          </Link>
        </div>
      </div>
    </div>
  );
}