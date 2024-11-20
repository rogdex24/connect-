import { Contact } from './types';

export const initialContacts: Contact[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Senior Product Designer',
    company: 'Designify',
    email: 'sarah.chen@designify.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop',
    social: {
      linkedin: 'sarahchen',
      twitter: 'sarahchen_design',
    },
    tags: ['Design', 'UX', 'Creative'],
    notes: 'Met at UX Conference 2023. Interested in collaboration on upcoming projects.',
    favorite: true,
    specialDates: [
      {
        id: 'sd1',
        type: 'birthday',
        date: '1990-03-15',
      },
      {
        id: 'sd2',
        type: 'anniversary',
        date: '2020-06-01',
        description: 'Company anniversary',
      },
    ],
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'Tech Lead',
    company: 'CodeStack Solutions',
    email: 'marcus@codestack.dev',
    phone: '+1 (555) 987-6543',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&h=250&auto=format&fit=crop',
    social: {
      github: 'marcusdev',
      linkedin: 'marcusrodriguez',
    },
    tags: ['Engineering', 'React', 'Architecture'],
    notes: 'Great resource for system architecture. Regular collaborator on open source projects.',
    favorite: false,
    specialDates: [
      {
        id: 'sd3',
        type: 'birthday',
        date: '1988-11-30',
      },
    ],
  },
  {
    id: '3',
    name: 'Aisha Patel',
    role: 'Marketing Director',
    company: 'Growth Pioneers',
    email: 'aisha.p@growthpioneers.com',
    phone: '+1 (555) 234-5678',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&h=250&auto=format&fit=crop',
    social: {
      twitter: 'aisha_markets',
      linkedin: 'aishapatel',
    },
    tags: ['Marketing', 'Strategy', 'Growth'],
    notes: 'Expert in digital marketing strategies. Potential partnership opportunity for Q3.',
    favorite: true,
    specialDates: [
      {
        id: 'sd4',
        type: 'birthday',
        date: '1992-07-15',
      },
      {
        id: 'sd5',
        type: 'anniversary',
        date: '2019-08-20',
        description: 'Started at Growth Pioneers',
      },
    ],
  },
];