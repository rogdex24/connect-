export interface Contact {
  id: string;
  name: string;
  role: string;
  company: string;
  email: string;
  phone: string;
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  tags: string[];
  notes: string;
  favorite: boolean;
  specialDates: SpecialDate[];
}

export interface SpecialDate {
  id: string;
  type: 'birthday' | 'anniversary' | 'other';
  date: string;
  description?: string;
}