
export type Language = 'EN' | 'FR';

export interface NavItem {
  label: string;
  labelFr: string;
  path: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  stats: string;
  image: string;
}

export interface BlogPost {
  id?: string;
  title: string;
  description: string; // Short summary
  content: string; // Full HTML/Markdown content
  category: string;
  tags: string[];
  imageUrl: string;
  date: string;
  createdAt: number;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  createdAt: any; // Firestore timestamp
}

export interface NewsItem {
  id: number | string;
  title: string;
  date: string;
  summary: string;
  image: string;
  category?: string; // Optional for backward compatibility
  content?: string; // Full content for static posts
  tags?: string[]; // Tags for static posts
}

export interface CoreValue {
  title: string;
  icon: any; 
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: any;
}
