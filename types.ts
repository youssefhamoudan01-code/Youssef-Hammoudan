
export type Page = 'home' | 'features' | 'templates' | 'pricing' | 'portfolio' | 'learn' | 'about' | 'contact' | 'login' | 'dashboard' | 'editor';

export interface NavLink {
  name: string;
  page: Page;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: {
    monthly: string;
    yearly: string;
  };
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Template {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  videoUrl: string; // Will be used as image src for thumbnail
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Project {
  id: number;
  name: string;
  lastUpdated: string;
  thumbnailUrl: string;
}
