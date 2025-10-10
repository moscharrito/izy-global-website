/**
 * Company Data
 * Static company information for Izy Global Services LLC
 */

import type { CompanyInfo, CompanyValues, Certification } from '@/types';

export const COMPANY_INFO: CompanyInfo = {
  name: 'Izy Global Services LLC',
  tagline: 'Delivering Excellence Through Service',
  description: 'A Service Disabled Veteran Owned Small Business (SDVOSB) headquartered in Fort Worth, Texas. Founded on the principles of service, integrity, and excellence, we bring military precision and dedication to every project we undertake.',
  address: {
    street: '4869 Madyson Ridge Dr',
    city: 'Fort Worth',
    state: 'TX',
    zipCode: '76133',
  },
  contact: {
    phone: '713-992-0481',
    email: 'freights@izymovers.com',
    businessDevelopment: 'freights@izymovers.com', // Update with specific BD email if different
  },
  identifiers: {
    ein: '85-4379275',
    uei: 'WLDNTVNK9SC7',
    cageCode: '949Y3',
  },
  certifications: [
    'Service Disabled Veteran Owned Small Business (SDVOSB)',
    'SAM.gov Registered',
  ],
};

export const COMPANY_VALUES: CompanyValues[] = [
  {
    title: 'Service',
    description: 'Commitment to serving our clients and community with dedication and excellence.',
  },
  {
    title: 'Integrity',
    description: 'Transparent and ethical business practices in all our operations.',
  },
  {
    title: 'Excellence',
    description: 'Continuous improvement and quality delivery in every project.',
  },
  {
    title: 'Teamwork',
    description: 'Collaborative approach to problem-solving and mission success.',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Service Disabled Veteran Owned Small Business',
    code: 'SDVOSB',
    description: 'Certified Service Disabled Veteran Owned Small Business',
    verificationUrl: 'https://search.certifications.sba.gov/profile/WLDNTVNK9SC7/949Y3?page=1',
  },
  {
    name: 'SAM.gov Registration',
    code: 'SAM',
    description: 'Active registration in the System for Award Management',
    verificationUrl: 'https://sam.gov',
  },
];

export const MISSION_STATEMENT = 'To deliver exceptional logistics and freight services while upholding the highest standards of integrity, reliability, and customer satisfaction.';

export const WHY_CHOOSE_US = [
  'Proven SDVOSB Partner',
  'Mission-First Approach',
  'Experienced Leadership',
  'Nationwide Coverage',
  'Competitive Pricing',
];

export const OFFICE_HOURS = {
  weekdays: 'Monday - Friday: 8:00 AM - 5:00 PM CST',
  weekend: 'Closed',
  timezone: 'Central Standard Time',
};