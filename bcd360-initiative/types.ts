
export type Language = 'EN' | 'FR';

export interface NavItem {
  label: string;
  labelFr: string;
  path: string;
}

export interface ProjectData {
  id: string;
  title: string;
  titleFr?: string;
  description: string;
  descriptionFr?: string;
  stats: string;
  statsFr?: string;
  image: string;
}

export interface BlogPost {
  id?: string;
  title: string;
  titleFr?: string;
  description: string; // Short summary
  descriptionFr?: string;
  content: string; // Full HTML/Markdown content
  contentFr?: string;
  category: string;
  categoryFr?: string;
  tags: string[];
  tagsFr?: string[];
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
  titleFr?: string;
  date: string;
  summary: string;
  summaryFr?: string;
  image: string;
  category?: string; // Optional for backward compatibility
  categoryFr?: string;
  content?: string; // Full content for static posts
  contentFr?: string;
  tags?: string[]; // Tags for static posts
  tagsFr?: string[];
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