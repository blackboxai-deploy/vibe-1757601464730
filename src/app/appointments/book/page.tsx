"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockPets, mockVeterinarians } from "@/lib/mockData";

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    petId: "",
    veterinarianId: "",
    preferredDate: "",
    preferredTime: "",
    appointmentType: "checkup",
    reason: "",
    emergencyContact: "",
    notes: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking appointment:", formData);
    // Redirect to confirmation or appointments page
    window.location.href = "/appointments";
  };

  const selectedPet = mockPets.find(pet => pet.id === formData.petId);
  const selectedVet = mockVeterinarians.find(vet => vet.id === formData.veterinarianId);

  return (
    <div className="min-h-screen bg-paw-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-paw-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <span className="text-paw-gray-600">←</span>
              <span className="text-lg font-semibold text-paw-gray-900">Book Appointment</span>
            </Link>
            <div className="flex items-center space-x-2 text-paw-gray-600">
              <span>Step {step} of 4</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  stepNumber <= step 
                    ? 'bg-paw-orange-500 text-white' 
                    : 'bg-paw-gray-300 text-paw-gray-500'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    stepNumber < step ? 'bg-paw-orange-500' : 'bg-paw-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-paw-gray-600">
            <span>Select Pet</span>
            <span>Choose Vet</span>
            <span>Date & Time</span>
            <span>Review</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Select Pet */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-paw-gray-900 mb-6">Select Your Pet</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockPets.map((pet) => (
                    <button
                      key={pet.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, petId: pet.id }))}
                      className={`p-4 border-2 rounded-xl text-left hover:border-paw-orange-300 transition-colors ${
                        formData.petId === pet.id 
                          ? 'border-paw-orange-500 bg-paw-orange-50' 
                          : 'border-paw-gray-200'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={pet.imageUrl}
                          alt={pet.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-paw-gray-900">{pet.name}</h3>
                          <p className="text-paw-gray-600">{pet.breed}</p>
                          <p className="text-sm text-paw-gray-500">{pet.age} years old • {pet.gender}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Choose Veterinarian */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-paw-gray-900 mb-6">Choose a Veterinarian</h2>
                <div className="space-y-4">
                  {mockVeterinarians.map((vet) => (
                    <button
                      key={vet.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, veterinarianId: vet.id }))}
                      className={`w-full p-6 border-2 rounded-xl text-left hover:border-paw-teal-300 transition-colors ${
                        formData.veterinarianId === vet.id 
                          ? 'border-paw-teal-500 bg-paw-teal-50' 
                          : 'border-paw-gray-200'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <img
                          src={vet.profileImageUrl || "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cf69cc9c-b773-4467-b6df-5e177d512cfc.png"}
                          alt={`${vet.firstName} ${vet.lastName}`}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-paw-gray-900">
                            {vet.firstName} {vet.lastName}
                          </h3>
                          <p className="text-paw-gray-600">{vet.clinicName}</p>
                          <p className="text-sm text-paw-gray-500 mb-2">
                            {vet.specializations.join(", ")}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-paw-teal-600 font-medium">★ {vet.rating}</span>
                              <span className="text-paw-gray-500 text-sm">({vet.reviewCount} reviews)</span>
                            </div>
                            <span className="text-paw-gray-900 font-semibold">${vet.consultationFee}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Select Date & Time */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-paw-gray-900 mb-6">Select Date & Time</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="preferredDate" className="text-paw-gray-700">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime" className="text-paw-gray-700">Preferred Time</Label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="mt-1 w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="appointmentType" className="text-paw-gray-700">Appointment Type</Label>
                      <select
                        id="appointmentType"
                        name="appointmentType"
                        value={formData.appointmentType}
                        onChange={handleInputChange}
                        className="mt-1 w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent"
                      >
                        <option value="checkup">Regular Checkup</option>
                        <option value="vaccination">Vaccination</option>
                        <option value="consultation">Consultation</option>
                        <option value="emergency">Emergency</option>
                        <option value="grooming">Grooming</option>
                        <option value="surgery">Surgery</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="reason" className="text-paw-gray-700">Reason for Visit</Label>
                      <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        placeholder="Describe the reason for this appointment..."
                        className="mt-1 w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent h-32 resize-none"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="notes" className="text-paw-gray-700">Additional Notes (Optional)</Label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Any additional information..."
                        className="mt-1 w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent h-24 resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Confirm */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-paw-gray-900 mb-6">Review Your Appointment</h2>
                <div className="space-y-6">
                  {/* Pet Information */}
                  {selectedPet && (
                    <div className="p-4 bg-paw-cream-300/20 rounded-lg">
                      <h3 className="font-semibold text-paw-gray-900 mb-2">Pet Information</h3>
                      <div className="flex items-center space-x-3">
                        <img
                          src={selectedPet.imageUrl}
                          alt={selectedPet.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-paw-gray-900">{selectedPet.name}</p>
                          <p className="text-paw-gray-600 text-sm">{selectedPet.breed} • {selectedPet.age} years old</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Veterinarian Information */}
                  {selectedVet && (
                    <div className="p-4 bg-paw-teal-50 rounded-lg">
                      <h3 className="font-semibold text-paw-gray-900 mb-2">Veterinarian</h3>
                      <div className="flex items-center space-x-3">
                        <img
                          src={selectedVet.profileImageUrl || "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/917b31cb-5db0-4a01-a0cc-220ef60f8181.png"}
                          alt={`${selectedVet.firstName} ${selectedVet.lastName}`}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-paw-gray-900">
                            {selectedVet.firstName} {selectedVet.lastName}
                          </p>
                          <p className="text-paw-gray-600 text-sm">{selectedVet.clinicName}</p>
                          <p className="text-paw-teal-600 text-sm font-medium">${selectedVet.consultationFee}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Appointment Details */}
                  <div className="p-4 bg-paw-gray-50 rounded-lg">
                    <h3 className="font-semibold text-paw-gray-900 mb-2">Appointment Details</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-paw-gray-600">Date:</span>
                        <p className="font-medium">{formData.preferredDate}</p>
                      </div>
                      <div>
                        <span className="text-paw-gray-600">Time:</span>
                        <p className="font-medium">{formData.preferredTime}</p>
                      </div>
                      <div>
                        <span className="text-paw-gray-600">Type:</span>
                        <p className="font-medium">{formData.appointmentType}</p>
                      </div>
                    </div>
                    {formData.reason && (
                      <div className="mt-3">
                        <span className="text-paw-gray-600 text-sm">Reason:</span>
                        <p className="text-paw-gray-900">{formData.reason}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={step === 1}
                className={step === 1 ? "invisible" : ""}
              >
                Previous
              </Button>
              <div className="flex space-x-4">
                {step < 4 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={
                      (step === 1 && !formData.petId) ||
                      (step === 2 && !formData.veterinarianId) ||
                      (step === 3 && (!formData.preferredDate || !formData.preferredTime || !formData.reason))
                    }
                    className="bg-paw-orange-500 hover:bg-paw-orange-600"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-paw-teal-500 hover:bg-paw-teal-600"
                  >
                    Confirm Appointment
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}