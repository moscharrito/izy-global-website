/**
 * Company Data
 * Static company information for Izy Global Services LLC
 */

import type { CompanyInfo, CompanyValues, Certification } from '@/types';

export const COMPANY_INFO: CompanyInfo = {
  name: 'Izy Global Services LLC',
  tagline: 'Strategic Business Consulting & Transformation',
  description: 'A Service Disabled Veteran Owned Small Business (SDVOSB) headquartered in Houston, Texas. We are a strategic business consulting firm that leverages technology expertise, operational excellence, and government contracting experience to drive organizational transformation and deliver measurable business outcomes.',
  address: {
    street: '12411 King Olaf Dr',
    city: 'Houston',
    state: 'TX',
    zipCode: '77044',
  },
  contact: {
    phone: '713-992-0481',
    email: 'contracts@izyglobalservices.com',
    businessDevelopment: 'contracts@izyglobalservices.com', // Update with specific BD email if different
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
    title: 'Strategic Partnership',
    description: 'Building long-term relationships focused on sustainable business transformation and growth.',
  },
  {
    title: 'Integrity',
    description: 'Transparent and ethical consulting practices that build trust and deliver honest assessments.',
  },
  {
    title: 'Excellence',
    description: 'Continuous improvement and innovative solutions that drive measurable business outcomes.',
  },
  {
    title: 'Results-Driven',
    description: 'Methodical approach to consulting that delivers tangible value and competitive advantages.',
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

export const MISSION_STATEMENT = 'To transform organizations through strategic business consulting, innovative solutions, and proven methodologies that deliver sustainable competitive advantages and measurable business outcomes.';

export const WHY_CHOOSE_US = [
  'Strategic Business Consulting Expertise',
  'Proven SDVOSB Partner',
  'Technology & Operational Excellence',
  'Measurable Business Outcomes',
  'Military Precision & Methodology',
];

export const OFFICE_HOURS = {
  weekdays: 'Monday - Friday: 8:00 AM - 5:00 PM CST',
  weekend: 'Closed',
  timezone: 'Central Standard Time',
};