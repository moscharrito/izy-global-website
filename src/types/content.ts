/**
 * Content Types
 * Defines the structure for website content, navigation, and UI elements
 */

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  external?: boolean;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
  description?: string;
  backgroundImage: string;
  ctaButtons: CTAButton[];
  trustIndicators?: TrustIndicator[];
}

export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  external?: boolean;
}

export interface TrustIndicator {
  name: string;
  logo: string;
  description?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  photo?: string;
  rating?: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  image?: string;
  tags: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: Date;
  author: string;
  category: string;
  featuredImage?: string;
  tags: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}