import { Pet, User, Veterinarian, Appointment, Notification } from '@/types';

export const mockPets: Pet[] = [
  {
    id: '1',
    name: 'Luna',
    species: 'dog',
    breed: 'Golden Retriever',
    age: 3,
    weight: 28,
    gender: 'female',
    color: 'Golden',
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6c60c089-7328-4568-a937-f1f4ec0433a6.png',
    ownerId: 'user1',
    medicalHistory: [],
    specialNeeds: 'Sensitive to loud noises'
  },
  {
    id: '2',
    name: 'Whiskers',
    species: 'cat',
    breed: 'Persian',
    age: 5,
    weight: 4.5,
    gender: 'male',
    color: 'White',
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a165e60-aeb2-4572-85b9-2ac54914eb80.png',
    ownerId: 'user1',
    medicalHistory: [],
  },
  {
    id: '3',
    name: 'Charlie',
    species: 'dog',
    breed: 'Labrador Mix',
    age: 2,
    weight: 22,
    gender: 'male',
    color: 'Brown',
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d8492891-5322-42bf-8270-376dcbffc5ae.png',
    ownerId: 'user2',
    medicalHistory: [],
  }
];

export const mockUsers: User[] = [
  {
    id: 'user1',
    email: 'sarah.johnson@email.com',
    firstName: 'Sarah',
    lastName: 'Johnson',
    phone: '+1 (555) 123-4567',
    address: '123 Pet Lover Lane, Animal City, AC 12345',
    userType: 'pet-owner',
    profileImageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2dba4d0e-73e4-4d2b-ac07-753d9be69eef.png',
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: 'user2',
    email: 'mike.chen@email.com',
    firstName: 'Mike',
    lastName: 'Chen',
    phone: '+1 (555) 987-6543',
    address: '456 Dog Park Avenue, Pet Town, PT 54321',
    userType: 'pet-owner',
    profileImageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a4217746-862c-444b-9858-4f224562cd5f.png',
    createdAt: '2024-02-20T14:15:00Z'
  }
];

export const mockVeterinarians: Veterinarian[] = [
  {
    id: 'vet1',
    email: 'dr.smith@pawclinic.com',
    firstName: 'Dr. Emily',
    lastName: 'Smith',
    phone: '+1 (555) 234-5678',
    address: '789 Veterinary Blvd, Pet City, PC 67890',
    userType: 'veterinarian',
    profileImageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8aa769b5-4303-4a70-a150-0fc98e953e9b.png',
    licenseNumber: 'VET-2024-001',
    specializations: ['Small Animal Care', 'Internal Medicine', 'Surgery'],
    clinicName: 'Happy Paws Veterinary Clinic',
    clinicAddress: '789 Veterinary Blvd, Pet City, PC 67890',
    yearsOfExperience: 8,
    rating: 4.9,
    reviewCount: 127,
    consultationFee: 85,
    emergencyContact: true,
    availability: [
      { day: 'monday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'tuesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'wednesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'thursday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'friday', startTime: '09:00', endTime: '15:00', isAvailable: true },
    ],
    createdAt: '2023-05-10T09:00:00Z'
  },
  {
    id: 'vet2',
    email: 'dr.rodriguez@petcare.com',
    firstName: 'Dr. Carlos',
    lastName: 'Rodriguez',
    phone: '+1 (555) 345-6789',
    address: '321 Animal Hospital Dr, Vet City, VC 13579',
    userType: 'veterinarian',
    profileImageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/37433701-1c42-41bf-a4b5-277de8609ac5.png',
    licenseNumber: 'VET-2024-002',
    specializations: ['Emergency Care', 'Exotic Animals', 'Dentistry'],
    clinicName: 'Emergency Pet Hospital',
    clinicAddress: '321 Animal Hospital Dr, Vet City, VC 13579',
    yearsOfExperience: 12,
    rating: 4.8,
    reviewCount: 89,
    consultationFee: 95,
    emergencyContact: true,
    availability: [
      { day: 'monday', startTime: '08:00', endTime: '18:00', isAvailable: true },
      { day: 'tuesday', startTime: '08:00', endTime: '18:00', isAvailable: true },
      { day: 'wednesday', startTime: '08:00', endTime: '18:00', isAvailable: true },
      { day: 'thursday', startTime: '08:00', endTime: '18:00', isAvailable: true },
      { day: 'friday', startTime: '08:00', endTime: '18:00', isAvailable: true },
      { day: 'saturday', startTime: '10:00', endTime: '14:00', isAvailable: true },
    ],
    createdAt: '2023-03-22T11:30:00Z'
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: 'apt1',
    petId: '1',
    petOwnerId: 'user1',
    veterinarianId: 'vet1',
    date: '2024-03-15',
    time: '10:30',
    duration: 30,
    type: 'checkup',
    status: 'confirmed',
    reason: 'Annual wellness exam',
    fee: 85,
    paymentStatus: 'paid',
    reminderSent: true,
    createdAt: '2024-03-01T14:20:00Z',
    updatedAt: '2024-03-01T14:20:00Z'
  },
  {
    id: 'apt2',
    petId: '2',
    petOwnerId: 'user1',
    veterinarianId: 'vet2',
    date: '2024-03-20',
    time: '14:00',
    duration: 45,
    type: 'vaccination',
    status: 'scheduled',
    reason: 'Rabies and FVRCP vaccines',
    fee: 120,
    paymentStatus: 'pending',
    reminderSent: false,
    createdAt: '2024-03-05T16:45:00Z',
    updatedAt: '2024-03-05T16:45:00Z'
  }
];

export const mockNotifications: Notification[] = [
  {
    id: 'notif1',
    userId: 'user1',
    title: 'Appointment Reminder',
    message: 'Luna\'s checkup is tomorrow at 10:30 AM with Dr. Smith',
    type: 'reminder',
    isRead: false,
    createdAt: '2024-03-14T09:00:00Z',
    actionUrl: '/appointments'
  },
  {
    id: 'notif2',
    userId: 'user1',
    title: 'Vaccination Due',
    message: 'Whiskers is due for annual vaccinations. Book an appointment today!',
    type: 'reminder',
    isRead: true,
    createdAt: '2024-03-10T12:00:00Z',
    actionUrl: '/appointments/book'
  }
];