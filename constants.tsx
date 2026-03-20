
import React from 'react';
import { NavItem, Project } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'WORK', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 5,
    title: 'Co-Founder',
    category: 'Flosy',
    description: 'Co-founded a digital solutions startup delivering scalable and affordable web solutions for startups and small businesses. Led end-to-end development of client projects, from requirement analysis to deployment and support.'
  },
  {
    id: 4,
    title: 'Technical Team Lead',
    category: 'iCreate Community',
    description: 'Managed end-to-end technical operations for college events, ensuring smooth execution. Designed and maintained backend systems for registrations, forms, and participant data. Handled real-time entry workflows during events.'
  },
  { 
    id: 1, 
    title: 'Attendify', 
    category: 'Smart Attendance', 
    description: 'Engineered a secure QR-based attendance system enabling real-time tracking and automated record generation. Implemented role-based authentication for admins, faculty, and students ensuring data integrity.' 
  },
  { 
    id: 2, 
    title: 'HostelCare', 
    category: 'Incident Reporting', 
    description: 'Developed a centralized platform for reporting and managing hostel incidents with multi-role access. Integrated Firebase backend for real-time updates and scalable data handling.' 
  },
  { 
    id: 3, 
    title: 'EZ Gym', 
    category: 'Gym Website', 
    description: 'EZ Gym is a simple and user-friendly fitness web application designed to help users explore basic gym exercises and calculate their Body Mass Index (BMI).',
    link: 'https://ez-gym.vercel.app/'
  }
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Meta Full Stack Developer',
    issuer: 'Coursera',
    description: 'Completed the Meta Full Stack Developer professional certificate on Coursera, gaining expertise in front-end and back-end web development.'
  },
  {
    id: 2,
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Coursera',
    description: 'Completed the Google course on Coursera, covering the fundamentals of modern computer networking protocols and architecture.'
  },
  {
    id: 3,
    title: 'Introduction to Data Science',
    issuer: 'Infosys Springboard',
    description: 'Completed the Infosys Springboard course, gaining foundational knowledge in data science concepts and applications.'
  }
];

export const SYSTEM_INSTRUCTION = `You are the AI Assistant for a 3rd-year Software Developer student. 
Your tone is witty, retro-futuristic, and professional. 
You love space puns. 
Keep answers concise (under 50 words). 
`;
