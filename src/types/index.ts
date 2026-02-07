/**
 * Main Types Export
 * Central export file for all TypeScript types and interfaces
 */

// Company types
export type {
  Address,
  ContactInfo,
  BusinessIdentifiers,
  CompanyInfo,
  CompanyValues,
  Certification,
} from './company';

// Service types
export type {
  ServiceCategory,
  Service,
  ServiceFeature,
  Capability,
  ContractVehicle,
} from './services';

// Leadership types
export type {
  Leader,
  TeamMember,
  MilitaryService,
} from './leadership';

// Form types
export type {
  ContactSubmission,
  ContactFormData,
  FormValidationError,
  FormState,
  NewsletterSubscription,
  CareerApplication,
} from './forms';

// Content types
export type {
  NavigationItem,
  HeroSection,
  CTAButton,
  TrustIndicator,
  TestimonialItem,
  CaseStudy,
  NewsItem,
  FAQ,
} from './content';

// Past Performance types
export type {
  ClientType,
  PerformanceCategory,
  BuyerRepresentative,
  ContractingOfficer,
  PastPerformance,
  PerformanceSummary,
  ClientTestimonial,
} from './past-performance';

// Common utility types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}