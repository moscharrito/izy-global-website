/**
 * Service Types
 * Defines the structure for service offerings and capabilities
 */

export type ServiceCategory = 'strategic' | 'operational' | 'government' | 'technology';

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  category: ServiceCategory;
  detailedDescription?: string;
  benefits?: string[];
}

export interface ServiceFeature {
  name: string;
  description: string;
  icon?: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  services: string[]; // Service IDs
  naicsCodes?: string[];
  pastPerformance?: string[];
}

export interface ContractVehicle {
  id: string;
  name: string;
  type: 'GSA' | 'SEWP' | 'IDIQ' | 'Other';
  description: string;
  contractNumber?: string;
  expirationDate?: string;
  capabilities: string[];
}