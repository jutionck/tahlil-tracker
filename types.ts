export enum Gender {
  MALE = 'Laki-laki',
  FEMALE = 'Perempuan'
}

export enum CalculationMethod {
  TRADITIONAL = 'Tradisional (Hari Wafat = Hari 1)',
  MODERN = 'Matematis (Besok = Hari 1)'
}

export interface DeceasedProfile {
  name: string;
  deathDate: string; // ISO date string YYYY-MM-DD
  gender: Gender;
}

export interface Milestone {
  id: string;
  title: string;
  javaneseName?: string;
  description: string;
  date: Date;
  daysFromDeath: number;
}

export interface JavaneseDate {
  dayName: string; // Senin, Selasa...
  pasaran: string; // Pon, Wage...
}