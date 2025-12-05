
export enum AnimalType {
  SHEEP = 'Sheep',
  GOAT = 'Goat'
}

export enum AnimalStatus {
  HEALTHY = 'Healthy',
  SICK = 'Sick',
  PREGNANT = 'Pregnant',
  LACTATING = 'Lactating',
  SOLD = 'Sold',
  DECEASED = 'Deceased'
}

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female'
}

// --- ACCESS CONTROL ---
export type UserRole = 'Admin' | 'Manager' | 'Veterinarian' | 'Worker' | 'Partner';

export type CompensationType = 'Salary' | 'ProfitShare' | 'Both' | 'None';

export interface User {
  id: string;
  username: string;
  password?: string; // Stored securely in real backend
  fullName: string;
  role: UserRole;
  phone?: string;
  lastLogin?: string;
  // New Compensation Fields
  compensationType?: CompensationType;
  monthlySalary?: number;     // Fixed Monthly Salary
  profitSharePercentage?: number; // % of Net Profit
}

export interface AuditLog {
  id: string;
  userId: string;
  userName: string;
  userRole: UserRole;
  action: 'Create' | 'Update' | 'Delete' | 'Login' | 'Process' | 'Export';
  entity: 'Animal' | 'Flock' | 'Financial' | 'User' | 'Inventory' | 'Health' | 'System';
  details: string;
  timestamp: string;
}

export interface Flock {
  id: string;
  name: string;
  location: string; // Physical location (Barn A, North Pasture)
  type: AnimalType;
  description?: string;
  color?: string; // For charts
}

export interface Breed {
  id: string;
  name: string;
  type: AnimalType; // Linked to Sheep or Goat
  characteristics?: string; // Description of the breed traits
}

export interface HealthRecord {
  id: string;
  animalId: string;
  date: string;
  type: 'Vaccination' | 'Treatment' | 'Checkup' | 'Nutrition';
  description: string;
  cost: number;
  nextDueDate?: string;
  inventoryItemId?: string; // Link to inventory
  quantityUsed?: number;    // Amount consumed
  flockId?: string; // For bulk records applied to a whole flock
}

export interface WeightRecord {
  id: string;
  animalId: string;
  date: string;
  weight: number;
  notes?: string;
}

export interface FinancialRecord {
  id: string;
  date: string;
  type: 'Income' | 'Expense';
  category: 'Sales' | 'Feed' | 'Medicine' | 'Equipment' | 'Salaries' | 'ProfitDistribution' | 'AssetPurchase' | 'CapitalInjection' | 'Other';
  amount: number;
  description: string;
  animalId?: string; // Optional link to specific animal
  partnerId?: string; // Optional link to specific partner
  userId?: string; // Optional link to specific employee (for salary)
  flockId?: string; // CRITICAL: Link transaction to a specific flock (Cost Center)
}

export interface Animal {
  id: string;
  tagId: string; // Ear tag
  name?: string;
  type: AnimalType;
  gender: Gender;
  dob: string; // Date of Birth
  breed: string;
  status: AnimalStatus;
  weight: number; // kg
  motherId?: string;
  fatherId?: string;
  flockId: string; // Mandatory: Animal must belong to a flock
  location?: string; // Optional detail inside the flock area
  purchaseDate?: string;
  purchasePrice?: number;
  notes?: string;
  imageUrl?: string; // URL for Cloud or Base64 for Local
}

export interface InventoryItem {
  id: string;
  name: string;
  category: 'Feed' | 'Medicine' | 'Equipment';
  quantity: number;
  unit: string;
  minThreshold: number;
  costPerUnit: number;
}

export interface BreedingRecord {
  id: string;
  motherId: string;
  fatherId: string;
  matingDate: string;
  expectedDate: string;
  status: 'Pregnant' | 'Delivered' | 'Failed';
  notes?: string;
}

export interface Partner {
  id: string;
  name: string;
  role: 'Active' | 'Silent'; // Active = Working Partner, Silent = Investor
  capital: number;
  monthlySalary?: number; // Only for active partners
  managementShare?: number; // % of distributed profit taken as management fee before capital split
  phone?: string;
  joinDate: string;
}

export interface FarmState {
  animals: Animal[];
  healthRecords: HealthRecord[];
  financials: FinancialRecord[];
  inventory: InventoryItem[];
  breedingRecords: BreedingRecord[];
  partners: Partner[];
  weightRecords: WeightRecord[];
  flocks: Flock[];
  breeds: Breed[];
  users: User[];
  auditLogs: AuditLog[]; // Added Audit Logs
}

export interface DashboardMetrics {
  totalAnimals: number;
  sickAnimals: number;
  pregnantAnimals: number;
  totalRevenue: number;
  totalExpenses: number;
  lowStockItems: number;
}
