"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { mockAppointments, mockPets, mockVeterinarians } from "@/lib/mockData";

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'cancelled'>('upcoming');

  // Mock current date for filtering
  const today = new Date();
  const currentDate = today.toISOString().split('T')[0];

  const getFilteredAppointments = () => {
    switch (activeTab) {
      case 'upcoming':
        return mockAppointments.filter(apt => 
          apt.date >= currentDate && 
          ['scheduled', 'confirmed', 'in-progress'].includes(apt.status)
        );
      case 'past':
        return mockAppointments.filter(apt => 
          apt.date < currentDate || 
          apt.status === 'completed'
        );
      case 'cancelled':
        return mockAppointments.filter(apt => 
          ['cancelled', 'no-show'].includes(apt.status)
        );
      default:
        return [];
    }
  };

  const filteredAppointments = getFilteredAppointments();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-paw-teal-100 text-paw-teal-700';
      case 'scheduled':
        return 'bg-paw-orange-100 text-paw-orange-700';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      case 'no-show':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-paw-gray-100 text-paw-gray-700';
    }
  };

  const handleReschedule = (appointmentId: string) => {
    console.log('Reschedule appointment:', appointmentId);
    // Redirect to reschedule page
  };

  const handleCancel = (appointmentId: string) => {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      console.log('Cancel appointment:', appointmentId);
      // Handle cancellation logic
    }
  };

  return (
    <div className="min-h-screen bg-paw-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-paw-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-paw-gray-600">←</Link>
              <h1 className="text-xl font-semibold text-paw-gray-900">My Appointments</h1>
            </div>
            <Button 
              className="bg-paw-orange-500 hover:bg-paw-orange-600"
              asChild
            >
              <Link href="/appointments/book">Book New Appointment</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="flex border-b border-paw-gray-200">
            {[
              { key: 'upcoming', label: 'Upcoming', count: mockAppointments.filter(apt => apt.date >= currentDate && ['scheduled', 'confirmed'].includes(apt.status)).length },
              { key: 'past', label: 'Past', count: mockAppointments.filter(apt => apt.date < currentDate || apt.status === 'completed').length },
              { key: 'cancelled', label: 'Cancelled', count: mockAppointments.filter(apt => ['cancelled', 'no-show'].includes(apt.status)).length }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                  activeTab === tab.key 
                    ? 'text-paw-orange-600 border-b-2 border-paw-orange-500 bg-paw-orange-50/50' 
                    : 'text-paw-gray-600 hover:text-paw-gray-900'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Appointments List */}
        {filteredAppointments.length > 0 ? (
          <div className="space-y-6">
            {filteredAppointments.map((appointment) => {
              const pet = mockPets.find(p => p.id === appointment.petId);
              const vet = mockVeterinarians.find(v => v.id === appointment.veterinarianId);
              
              return (
                <div key={appointment.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-4">
                        {pet && (
                          <img
                            src={pet.imageUrl}
                            alt={pet.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        )}
                        <div>
                          <h3 className="text-lg font-semibold text-paw-gray-900">
                            {pet?.name} - {appointment.reason}
                          </h3>
                          <p className="text-paw-gray-600">
                            with {vet?.firstName} {vet?.lastName}
                          </p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
                        {appointment.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-paw-gray-600">
                        <span>📅</span>
                        <span>{appointment.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-paw-gray-600">
                        <span>🕐</span>
                        <span>{appointment.time} ({appointment.duration} min)</span>
                      </div>
                      <div className="flex items-center space-x-2 text-paw-gray-600">
                        <span>🏥</span>
                        <span>{vet?.clinicName}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-paw-gray-600">Type:</p>
                        <p className="font-medium text-paw-gray-900 capitalize">{appointment.type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-paw-gray-600">Fee:</p>
                        <p className="font-medium text-paw-gray-900">
                          ${appointment.fee} 
                          <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                            appointment.paymentStatus === 'paid' 
                              ? 'bg-green-100 text-green-700'
                              : appointment.paymentStatus === 'pending'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {appointment.paymentStatus}
                          </span>
                        </p>
                      </div>
                    </div>

                    {appointment.notes && (
                      <div className="mb-4 p-3 bg-paw-gray-50 rounded-lg">
                        <p className="text-sm text-paw-gray-600 mb-1">Notes:</p>
                        <p className="text-paw-gray-900">{appointment.notes}</p>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      {activeTab === 'upcoming' && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleReschedule(appointment.id)}
                            className="border-paw-teal-500 text-paw-teal-600 hover:bg-paw-teal-50"
                          >
                            Reschedule
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleCancel(appointment.id)}
                            className="border-red-500 text-red-600 hover:bg-red-50"
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="border-paw-gray-400 text-paw-gray-600 hover:bg-paw-gray-50"
                          >
                            <a href={`tel:${vet?.phone}`}>Call Clinic</a>
                          </Button>
                        </>
                      )}
                      
                      {activeTab === 'past' && (
                        <>
                          <Button
                            size="sm"
                            className="bg-paw-orange-500 hover:bg-paw-orange-600"
                            asChild
                          >
                            <Link href={`/appointments/book?petId=${pet?.id}&vetId=${vet?.id}`}>
                              Book Again
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-paw-teal-500 text-paw-teal-600 hover:bg-paw-teal-50"
                          >
                            View Records
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-paw-gray-400 text-paw-gray-600 hover:bg-paw-gray-50"
                          >
                            Leave Review
                          </Button>
                        </>
                      )}

                      {activeTab === 'cancelled' && (
                        <Button
                          size="sm"
                          className="bg-paw-orange-500 hover:bg-paw-orange-600"
                          asChild
                        >
                          <Link href={`/appointments/book?petId=${pet?.id}&vetId=${vet?.id}`}>
                            Rebook
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Address Bar for Upcoming Appointments */}
                  {activeTab === 'upcoming' && vet && (
                    <div className="border-t border-paw-gray-200 px-6 py-3 bg-paw-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-paw-gray-600">Address:</p>
                          <p className="text-paw-gray-900">{vet.clinicAddress}</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-paw-teal-500 text-paw-teal-600 hover:bg-paw-teal-50"
                          asChild
                        >
                          <a 
                            href={`https://maps.google.com/?q=${encodeURIComponent(vet.clinicAddress)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Get Directions
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-12">
            <div className="text-6xl mb-4">
              {activeTab === 'upcoming' ? '📅' : activeTab === 'past' ? '📋' : '❌'}
            </div>
            <h3 className="text-lg font-semibold text-paw-gray-900 mb-2">
              No {activeTab} appointments
            </h3>
            <p className="text-paw-gray-600 mb-6">
              {activeTab === 'upcoming' 
                ? "You don't have any upcoming appointments. Book one now!"
                : activeTab === 'past'
                ? "No past appointments to display."
                : "No cancelled appointments."
              }
            </p>
            {activeTab === 'upcoming' && (
              <Button 
                className="bg-paw-orange-500 hover:bg-paw-orange-600"
                asChild
              >
                <Link href="/appointments/book">Book Your First Appointment</Link>
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-paw-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <Link href="/dashboard" className="flex flex-col items-center py-2 text-paw-gray-500">
            <span className="text-xl mb-1">🏠</span>
            <span className="text-xs">Home</span>
          </Link>
          <Link href="/appointments" className="flex flex-col items-center py-2 text-paw-orange-500">
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