
import { Animal, AnimalStatus, AnimalType, FinancialRecord, Gender, HealthRecord, InventoryItem, BreedingRecord, WeightRecord, Flock, Breed, User } from './types';

export const MOCK_USERS: User[] = [
  { 
    id: 'u1', 
    username: 'admin', 
    password: '123', 
    fullName: 'مدير النظام', 
    role: 'Admin', 
    phone: '0500000000',
    compensationType: 'None'
  },
  { 
    id: 'u2', 
    username: 'doc', 
    password: '123', 
    fullName: 'د. بيطري', 
    role: 'Veterinarian', 
    phone: '0500000001',
    compensationType: 'Salary',
    monthlySalary: 5000
  },
  { 
    id: 'u3', 
    username: 'worker', 
    password: '123', 
    fullName: 'عامل المزرعة (راتب)', 
    role: 'Worker', 
    phone: '0500000002',
    compensationType: 'Salary',
    monthlySalary: 2500
  },
  { 
    id: 'u4', 
    username: 'investor', 
    password: '123', 
    fullName: 'الشريك الممول', 
    role: 'Partner', 
    phone: '0500000003',
    compensationType: 'None'
  },
  { 
    id: 'u5', 
    username: 'supervisor', 
    password: '123', 
    fullName: 'المشرف (نسبة)', 
    role: 'Manager', 
    phone: '0500000004',
    compensationType: 'ProfitShare',
    profitSharePercentage: 5
  },
  { 
    id: 'u6', 
    username: 'worker2', 
    password: '123', 
    fullName: 'عامل (راتب + نسبة)', 
    role: 'Worker', 
    phone: '0500000005',
    compensationType: 'Both',
    monthlySalary: 1500,
    profitSharePercentage: 2
  }
];

export const MOCK_FLOCKS: Flock[] = [
  { id: 'flock1', name: 'قطيع النعيمي الأصيل', location: 'Hangar A', type: AnimalType.SHEEP, color: '#10b981', description: 'القطيع الرئيسي للإنتاج' },
  { id: 'flock2', name: 'قطيع التسمين (نجدي)', location: 'Open Pasture', type: AnimalType.SHEEP, color: '#3b82f6', description: 'مخصص للبيع في العيد' },
  { id: 'flock3', name: 'الماعز العارضية', location: 'Barn B', type: AnimalType.GOAT, color: '#f59e0b', description: 'إنتاج وحليب' }
];

export const MOCK_BREEDS: Breed[] = [
  { id: 'b1', name: 'Najdi', type: AnimalType.SHEEP, characteristics: 'Saudi origin, tall, black & white, good meat quality' },
  { id: 'b2', name: 'Nuaimi', type: AnimalType.SHEEP, characteristics: 'White with brown/red head, hardy, popular for sacrifice' },
  { id: 'b3', name: 'Hari', type: AnimalType.SHEEP, characteristics: 'Small size, white, excellent meat' },
  { id: 'b4', name: 'Aardhi', type: AnimalType.GOAT, characteristics: 'Black native goat, adapted to desert, good milk' },
  { id: 'b5', name: 'Damascene', type: AnimalType.GOAT, characteristics: 'Shami goat, distinct nose, high milk production' }
];

export const MOCK_ANIMALS: Animal[] = [
  { id: '1', tagId: 'S-101', name: 'برق', type: AnimalType.SHEEP, gender: Gender.MALE, dob: '2022-03-15', breed: 'Najdi', status: AnimalStatus.HEALTHY, weight: 65, flockId: 'flock1', purchasePrice: 1200, purchaseDate: '2022-06-01', notes: 'Excellent breeding stock' },
  { id: '2', tagId: 'S-102', name: 'نجمة', type: AnimalType.SHEEP, gender: Gender.FEMALE, dob: '2021-05-20', breed: 'Najdi', status: AnimalStatus.PREGNANT, weight: 55, flockId: 'flock1', purchasePrice: 1500, purchaseDate: '2021-08-15', notes: 'Due in 2 months' },
  { id: '3', tagId: 'G-201', name: 'عنتر', type: AnimalType.GOAT, gender: Gender.MALE, dob: '2023-01-10', breed: 'Aardhi', status: AnimalStatus.HEALTHY, weight: 45, flockId: 'flock3', purchasePrice: 900, purchaseDate: '2023-03-20' },
  { id: '4', tagId: 'S-103', name: 'صغيرة', type: AnimalType.SHEEP, gender: Gender.FEMALE, dob: '2023-11-05', breed: 'Najdi', status: AnimalStatus.HEALTHY, weight: 25, flockId: 'flock1', motherId: '2', fatherId: '1', notes: 'Born on farm, fast growth' },
  { id: '5', tagId: 'G-202', name: 'لونا', type: AnimalType.GOAT, gender: Gender.FEMALE, dob: '2022-08-14', breed: 'Aardhi', status: AnimalStatus.SICK, weight: 38, flockId: 'flock3', purchasePrice: 1100, purchaseDate: '2022-11-05', notes: 'Respiratory issues, monitoring daily' },
  { id: '6', tagId: 'S-FAT-01', name: 'تسمين 1', type: AnimalType.SHEEP, gender: Gender.MALE, dob: '2023-09-01', breed: 'Najdi', status: AnimalStatus.HEALTHY, weight: 50, flockId: 'flock2', purchasePrice: 800, purchaseDate: '2023-12-01' },
];

export const MOCK_HEALTH: HealthRecord[] = [
  { id: 'h1', animalId: '5', date: '2024-05-20', type: 'Treatment', description: 'التهاب رئوي - مضاد حيوي', cost: 50, nextDueDate: '2024-05-25', flockId: 'flock3' },
  { id: 'h2', animalId: '2', date: '2024-04-10', type: 'Checkup', description: 'فحص حمل - إيجابي', cost: 30, flockId: 'flock1' },
  { id: 'h3', animalId: '1', date: '2024-01-15', type: 'Vaccination', description: 'تطعيم الجدري', cost: 15, nextDueDate: '2025-01-15', flockId: 'flock1' },
];

export const MOCK_FINANCIALS: FinancialRecord[] = [
  { id: 'f1', date: '2024-05-01', type: 'Expense', category: 'Feed', amount: 2500, description: 'شراء أعلاف برسيم - 100 بلكة', flockId: 'flock1' },
  { id: 'f2', date: '2024-05-10', type: 'Income', category: 'Sales', amount: 1800, description: 'بيع خروف نعيمي (S-99)', flockId: 'flock1' },
  { id: 'f3', date: '2024-05-15', type: 'Expense', category: 'Medicine', amount: 400, description: 'أدوية بيطرية متنوعة', flockId: 'flock3' },
  { id: 'f4', date: '2024-06-01', type: 'Expense', category: 'Feed', amount: 1200, description: 'تسمين مركز', flockId: 'flock2' },
];

export const MOCK_INVENTORY: InventoryItem[] = [
  { id: 'i1', name: 'برسيم', category: 'Feed', quantity: 80, unit: 'بلكة', minThreshold: 50, costPerUnit: 25 },
  { id: 'i2', name: 'شعير', category: 'Feed', quantity: 15, unit: 'كيس', minThreshold: 20, costPerUnit: 65 },
  { id: 'i3', name: 'بانمايسين', category: 'Medicine', quantity: 2, unit: 'عبوة', minThreshold: 3, costPerUnit: 120 },
];

export const MOCK_BREEDING: BreedingRecord[] = [
  { id: 'b1', motherId: '2', fatherId: '1', matingDate: '2024-01-20', expectedDate: '2024-06-20', status: 'Pregnant', notes: 'First successful mating this season' }
];

export const MOCK_WEIGHTS: WeightRecord[] = [
  { id: 'w1', animalId: '4', date: '2024-01-05', weight: 10, notes: 'Weaning' },
  { id: 'w2', animalId: '4', date: '2024-02-05', weight: 15 },
  { id: 'w3', animalId: '4', date: '2024-03-05', weight: 20 },
  { id: 'w4', animalId: '4', date: '2024-04-05', weight: 25 },
  { id: 'w5', animalId: '1', date: '2023-12-01', weight: 60 },
  { id: 'w6', animalId: '1', date: '2024-04-01', weight: 65 },
];
