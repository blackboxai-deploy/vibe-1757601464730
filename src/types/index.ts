export interface Pet {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'bird' | 'rabbit' | 'other';
  breed: string;
  age: number;
  weight: number;
  gender: 'male' | 'female';
  color: string;
  imageUrl: string;
  ownerId: string;
  medicalHistory: MedicalRecord[];
  emergencyContact?: string;
  specialNeeds?: string;
}

export interface MedicalRecord {
  id: string;
  petId: string;
  date: string;
  veterinarianId: string;
  visitType: 'checkup' | 'vaccination' | 'surgery' | 'emergency' | 'grooming';
  diagnosis: string;
  treatment: string;
  medications?: string[];
  notes?: string;
  nextAppointment?: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  userType: 'pet-owner' | 'veterinarian';
  profileImageUrl?: string;
  pets?: Pet[];
  createdAt: string;
}

export interface Veterinarian extends User {
  licenseNumber: string;
  specializations: string[];
  clinicName: string;
  clinicAddress: string;
  yearsOfExperience: number;
  rating: number;
  reviewCount: number;
  availability: TimeSlot[];
  consultationFee: number;
  emergencyContact: boolean;
}

export interface TimeSlot {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface Appointment {
  id: string;
  petId: string;
  petOwnerId: string;
  veterinarianId: string;
  date: string;
  time: string;
  duration: number; // minutes
  type: 'checkup' | 'vaccination' | 'surgery' | 'emergency' | 'grooming' | 'consultation';
  status: 'scheduled' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled' | 'no-show';
  reason: string;
  notes?: string;
  fee: number;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  reminderSent: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'appointment' | 'reminder' | 'system' | 'promotion';
  isRead: boolean;
  createdAt: string;
  actionUrl?: string;
}

export interface BookingFormData {
  petId: string;
  veterinarianId: string;
  preferredDate: string;
  preferredTime: string;
  appointmentType: string;
  reason: string;
  emergencyContact?: string;
  notes?: string;
}