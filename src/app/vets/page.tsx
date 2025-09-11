"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockVeterinarians } from "@/lib/mockData";

export default function VetsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const specializations = [
    "Small Animal Care",
    "Internal Medicine", 
    "Surgery",
    "Emergency Care",
    "Exotic Animals",
    "Dentistry"
  ];

  const filteredVets = mockVeterinarians
    .filter(vet => {
      const matchesSearch = vet.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           vet.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           vet.clinicName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialization = !selectedSpecialization || 
                                   vet.specializations.includes(selectedSpecialization);
      return matchesSearch && matchesSpecialization;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "experience":
          return b.yearsOfExperience - a.yearsOfExperience;
        case "price":
          return a.consultationFee - b.consultationFee;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-paw-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-paw-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-paw-gray-600">←</Link>
              <h1 className="text-xl font-semibold text-paw-gray-900">Find Veterinarians</h1>
            </div>
            <div className="text-sm text-paw-gray-600">
              {filteredVets.length} vets found
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <Input
                placeholder="Search by name or clinic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Specialization Filter */}
            <div>
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent"
              >
                <option value="">All Specializations</option>
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent"
              >
                <option value="rating">Sort by Rating</option>
                <option value="experience">Sort by Experience</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>
        </div>

        {/* Veterinarians List */}
        <div className="space-y-6">
          {filteredVets.map((vet) => (
            <div key={vet.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                {/* Vet Photo */}
                <div className="md:w-48 h-48 md:h-auto">
                  <img
                    src={vet.profileImageUrl || "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6992c72f-8841-4720-9c6c-bbafb49628d5.png"}
                    alt={`${vet.firstName} ${vet.lastName}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Vet Info */}
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-paw-gray-900">
                        {vet.firstName} {vet.lastName}
                      </h3>
                      <p className="text-paw-gray-600">{vet.clinicName}</p>
                      <p className="text-sm text-paw-gray-500">{vet.clinicAddress}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-2">
                        <span className="text-paw-teal-600 font-semibold">★ {vet.rating}</span>
                        <span className="text-paw-gray-500 text-sm">({vet.reviewCount})</span>
                      </div>
                      <p className="text-lg font-semibold text-paw-gray-900">${vet.consultationFee}</p>
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="mb-4">
                    <p className="text-sm text-paw-gray-600 mb-2">Specializations:</p>
                    <div className="flex flex-wrap gap-2">
                      {vet.specializations.map((spec) => (
                        <span
                          key={spec}
                          className="px-3 py-1 bg-paw-teal-100 text-paw-teal-700 rounded-full text-xs font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience and Emergency */}
                  <div className="flex items-center space-x-6 mb-4 text-sm text-paw-gray-600">
                    <div className="flex items-center space-x-1">
                      <span>🎓</span>
                      <span>{vet.yearsOfExperience} years experience</span>
                    </div>
                    {vet.emergencyContact && (
                      <div className="flex items-center space-x-1">
                        <span>🚨</span>
                        <span>Emergency available</span>
                      </div>
                    )}
                  </div>

                  {/* Availability Preview */}
                  <div className="mb-4">
                    <p className="text-sm text-paw-gray-600 mb-2">Available:</p>
                    <div className="flex space-x-2">
                      {vet.availability.slice(0, 3).map((slot) => (
                        <span
                          key={slot.day}
                          className="px-2 py-1 bg-paw-gray-100 text-paw-gray-700 rounded text-xs capitalize"
                        >
                          {slot.day} {slot.startTime}-{slot.endTime}
                        </span>
                      ))}
                      {vet.availability.length > 3 && (
                        <span className="px-2 py-1 bg-paw-gray-100 text-paw-gray-700 rounded text-xs">
                          +{vet.availability.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <Button 
                      className="flex-1 bg-paw-orange-500 hover:bg-paw-orange-600"
                      asChild
                    >
                      <Link href={`/appointments/book?vetId=${vet.id}`}>
                        Book Appointment
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-paw-teal-500 text-paw-teal-600 hover:bg-paw-teal-50"
                      asChild
                    >
                      <Link href={`/vets/${vet.id}`}>View Profile</Link>
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-paw-gray-400 text-paw-gray-600 hover:bg-paw-gray-50"
                      asChild
                    >
                      <a href={`tel:${vet.phone}`}>Call</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredVets.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-paw-gray-900 mb-2">No veterinarians found</h3>
            <p className="text-paw-gray-600 mb-6">
              Try adjusting your search criteria or filters to find more results.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedSpecialization("");
              }}
              className="bg-paw-orange-500 hover:bg-paw-orange-600"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Featured Clinics */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-paw-gray-900 mb-6">Featured Veterinary Clinics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-paw-gray-200 rounded-lg hover:border-paw-orange-300 transition-colors">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7fd9fb03-709c-4806-9a82-8f5520593e09.png"
                alt="Happy Paws Veterinary Clinic"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-paw-gray-900">Happy Paws Clinic</h3>
              <p className="text-sm text-paw-gray-600 mb-2">Full-service veterinary care</p>
              <div className="flex justify-center space-x-4 text-xs text-paw-gray-500">
                <span>★ 4.9 (150+ reviews)</span>
              </div>
            </div>

            <div className="text-center p-6 border border-paw-gray-200 rounded-lg hover:border-paw-teal-300 transition-colors">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/724d5e13-1f26-41aa-a2a2-3cc91d2fec32.png"
                alt="Emergency Pet Hospital"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-paw-gray-900">Emergency Pet Hospital</h3>
              <p className="text-sm text-paw-gray-600 mb-2">24/7 emergency care</p>
              <div className="flex justify-center space-x-4 text-xs text-paw-gray-500">
                <span>★ 4.8 (200+ reviews)</span>
              </div>
            </div>

            <div className="text-center p-6 border border-paw-gray-200 rounded-lg hover:border-paw-orange-300 transition-colors">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4acea016-214e-4e35-920e-44dccc0d4ec8.png"
                alt="Exotic Animal Care Center"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-paw-gray-900">Exotic Care Center</h3>
              <p className="text-sm text-paw-gray-600 mb-2">Specialized exotic pet care</p>
              <div className="flex justify-center space-x-4 text-xs text-paw-gray-500">
                <span>★ 4.7 (75+ reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-paw-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <Link href="/dashboard" className="flex flex-col items-center py-2 text-paw-gray-500">
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
          <Link href="/vets" className="flex flex-col items-center py-2 text-paw-orange-500">
            <span className="text-xl mb-1">🏥</span>
            <span className="text-xs">Vets</span>
          </Link>
        </div>
      </div>
    </div>
  );
}