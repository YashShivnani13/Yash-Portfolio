export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  link?: string;
  details?: {
    images: string[];
    features?: string[];
  }
}

export enum ChatState {
  IDLE = 'IDLE',
  THINKING = 'THINKING',
  RESPONDING = 'RESPONDING',
  ERROR = 'ERROR'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}