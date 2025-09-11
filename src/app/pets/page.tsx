"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockPets } from "@/lib/mockData";

export default function PetsPage() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPet, setNewPet] = useState({
    name: "",
    species: "dog",
    breed: "",
    age: "",
    weight: "",
    gender: "male",
    color: "",
    specialNeeds: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setNewPet(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding new pet:", newPet);
    setShowAddForm(false);
    setNewPet({
      name: "",
      species: "dog",
      breed: "",
      age: "",
      weight: "",
      gender: "male",
      color: "",
      specialNeeds: ""
    });
  };

  return (
    <div className="min-h-screen bg-paw-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-paw-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-paw-gray-600">←</Link>
              <h1 className="text-xl font-semibold text-paw-gray-900">My Pets</h1>
            </div>
            <Button 
              onClick={() => setShowAddForm(true)}
              className="bg-paw-orange-500 hover:bg-paw-orange-600"
            >
              Add New Pet
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add Pet Modal/Form */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-paw-gray-900">Add New Pet</h2>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="text-paw-gray-500 hover:text-paw-gray-700"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-paw-gray-700">Pet Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={newPet.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Luna, Max, Bella"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="species" className="text-paw-gray-700">Species</Label>
                      <select
                        id="species"
                        name="species"
                        value={newPet.species}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent"
                      >
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="rabbit">Rabbit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="gender" className="text-paw-gray-700">Gender</Label>
                      <select
                        id="gender"
                        name="gender"
                        value={newPet.gender}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="breed" className="text-paw-gray-700">Breed</Label>
                    <Input
                      id="breed"
                      name="breed"
                      value={newPet.breed}
                      onChange={handleInputChange}
                      placeholder="e.g., Golden Retriever, Persian"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age" className="text-paw-gray-700">Age (years)</Label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        value={newPet.age}
                        onChange={handleInputChange}
                        placeholder="3"
                        min="0"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="weight" className="text-paw-gray-700">Weight (kg)</Label>
                      <Input
                        id="weight"
                        name="weight"
                        type="number"
                        step="0.1"
                        value={newPet.weight}
                        onChange={handleInputChange}
                        placeholder="25.5"
                        min="0"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="color" className="text-paw-gray-700">Color</Label>
                    <Input
                      id="color"
                      name="color"
                      value={newPet.color}
                      onChange={handleInputChange}
                      placeholder="e.g., Golden, Black, White"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialNeeds" className="text-paw-gray-700">Special Needs (Optional)</Label>
                    <textarea
                      id="specialNeeds"
                      name="specialNeeds"
                      value={newPet.specialNeeds}
                      onChange={handleInputChange}
                      placeholder="Any special care requirements, allergies, medications..."
                      className="w-full p-3 border border-paw-gray-300 rounded-lg focus:ring-2 focus:ring-paw-orange-500 focus:border-transparent h-20 resize-none"
                    />
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowAddForm(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-paw-orange-500 hover:bg-paw-orange-600"
                    >
                      Add Pet
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Pets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={pet.imageUrl}
                  alt={pet.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    pet.species === 'dog' ? 'bg-paw-orange-100 text-paw-orange-700' :
                    pet.species === 'cat' ? 'bg-paw-teal-100 text-paw-teal-700' :
                    'bg-paw-gray-100 text-paw-gray-700'
                  }`}>
                    {pet.species}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-paw-gray-900">{pet.name}</h3>
                    <p className="text-paw-gray-600">{pet.breed}</p>
                  </div>
                  <button className="text-paw-gray-400 hover:text-paw-gray-600">
                    ⋮
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-paw-gray-600">Age:</span>
                    <span className="text-paw-gray-900">{pet.age} years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-paw-gray-600">Weight:</span>
                    <span className="text-paw-gray-900">{pet.weight} kg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-paw-gray-600">Gender:</span>
                    <span className="text-paw-gray-900 capitalize">{pet.gender}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-paw-gray-600">Color:</span>
                    <span className="text-paw-gray-900">{pet.color}</span>
                  </div>
                </div>

                {pet.specialNeeds && (
                  <div className="p-3 bg-paw-cream-300/30 rounded-lg mb-4">
                    <p className="text-xs text-paw-gray-600 mb-1">Special Needs:</p>
                    <p className="text-sm text-paw-gray-900">{pet.specialNeeds}</p>
                  </div>
                )}

                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-paw-teal-500 text-paw-teal-600 hover:bg-paw-teal-50"
                    asChild
                  >
                    <Link href={`/pets/${pet.id}/medical`}>Medical Records</Link>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-paw-orange-500 hover:bg-paw-orange-600"
                    asChild
                  >
                    <Link href={`/appointments/book?petId=${pet.id}`}>Book Appointment</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Add New Pet Card */}
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-white border-2 border-dashed border-paw-gray-300 rounded-xl p-8 flex flex-col items-center justify-center hover:border-paw-orange-400 hover:bg-paw-orange-50/30 transition-colors"
          >
            <div className="w-16 h-16 bg-paw-orange-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-paw-orange-500 text-2xl">+</span>
            </div>
            <h3 className="text-lg font-semibold text-paw-gray-900 mb-2">Add New Pet</h3>
            <p className="text-paw-gray-600 text-sm text-center">
              Add your pet&apos;s profile to start booking appointments
            </p>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-paw-gray-600 text-sm">Total Pets</p>
                <p className="text-2xl font-bold text-paw-gray-900">{mockPets.length}</p>
              </div>
              <span className="text-3xl">🐾</span>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-paw-gray-600 text-sm">Upcoming Checkups</p>
                <p className="text-2xl font-bold text-paw-orange-500">2</p>
              </div>
              <span className="text-3xl">📅</span>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-paw-gray-600 text-sm">Health Alerts</p>
                <p className="text-2xl font-bold text-paw-teal-500">0</p>
              </div>
              <span className="text-3xl">🏥</span>
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
          <Link href="/pets" className="flex flex-col items-center py-2 text-paw-orange-500">
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