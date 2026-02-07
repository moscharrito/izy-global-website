/**
 * Past Performance Types
 * Types for company work experience and contract history
 */

export type ClientType = 'federal' | 'state' | 'private';
export type PerformanceCategory = 'equipment' | 'services' | 'logistics' | 'transportation';

export interface BuyerRepresentative {
  name: string;
  email: string;
  phone: string;
}

export interface ContractingOfficer {
  name: string;
  organization: string;
  phone: string;
}

export interface PastPerformance {
  id: string;
  title: string;
  contractNumber?: string;
  client: string;
  clientType: ClientType;
  executionDate: string;
  contractValue?: string;
  periodOfPerformance?: string;
  description: string;
  scope: string[];
  keyOutcomes?: string[];
  buyerRepresentative?: BuyerRepresentative;
  contractingOfficer?: ContractingOfficer;
  category: PerformanceCategory;
}

export interface PerformanceSummary {
  totalContracts: number;
  federalContracts: number;
  stateContracts: number;
  privateContracts: number;
  totalValue: string;
  categories: {
    equipment: number;
    services: number;
    logistics: number;
    transportation: number;
  };
}

export interface ClientTestimonial {
  client: string;
  representative: string;
  quote: string;
  project: string;
}