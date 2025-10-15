/**
 * Company Information Types
 * Defines the structure for Izy Global Services LLC company data
 */

export interface Address {
  city: string;
  state: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  businessDevelopment: string;
}

export interface BusinessIdentifiers {
  uei: string;
  cageCode: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: Address;
  contact: ContactInfo;
  identifiers: BusinessIdentifiers;
  certifications: string[];
  foundedYear?: number;
  employeeCount?: string;
}

export interface CompanyValues {
  title: string;
  description: string;
  icon?: string;
}

export interface Certification {
  name: string;
  code?: string;
  description: string;
  verificationUrl?: string;
  logo?: string;
}