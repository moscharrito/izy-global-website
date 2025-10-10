/**
 * Navigation Data
 * Website navigation structure and menu items
 */

import type { NavigationItem } from '@/types';

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Transportation & Logistics',
        href: '/services/transportation-logistics',
      },
      {
        label: 'Freight Services',
        href: '/services/freight',
      },
      {
        label: 'Government Contract Support',
        href: '/services/government-contracts',
      },
      {
        label: 'Supply Chain Solutions',
        href: '/services/supply-chain',
      },
      {
        label: 'IT Services',
        href: '/services/it-services',
      },
    ],
  },
  {
    label: 'Capabilities',
    href: '/capabilities',
  },
  {
    label: 'Contract Vehicles',
    href: '/contract-vehicles',
  },
  {
    label: 'Careers',
    href: '/careers',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const FOOTER_NAVIGATION = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Leadership', href: '/about#leadership' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Transportation & Logistics', href: '/services/transportation-logistics' },
    { label: 'Freight Services', href: '/services/freight' },
    { label: 'Government Contracts', href: '/services/government-contracts' },
    { label: 'Supply Chain Solutions', href: '/services/supply-chain' },
    { label: 'IT Services', href: '/services/it-services' },
  ],
  resources: [
    { label: 'Capability Statement', href: '/resources/capability-statement.pdf' },
    { label: 'Contract Vehicles', href: '/contract-vehicles' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
  certifications: [
    { label: 'SDVOSB Certification', href: 'https://search.certifications.sba.gov/profile/WLDNTVNK9SC7/949Y3?page=1' },
    { label: 'SAM.gov Registration', href: 'https://sam.gov', external: true },
    { label: 'Verify Our Status', href: 'https://search.certifications.sba.gov/profile/WLDNTVNK9SC7/949Y3?page=1' },
  ],
};

export const BREADCRUMB_LABELS: Record<string, string> = {
  '/': 'Home',
  '/about': 'About Us',
  '/services': 'Services',
  '/services/transportation-logistics': 'Transportation & Logistics',
  '/services/freight': 'Freight Services',
  '/services/government-contracts': 'Government Contracts',
  '/services/supply-chain': 'Supply Chain Solutions',
  '/services/it-services': 'IT Services',
  '/capabilities': 'Capabilities',
  '/contract-vehicles': 'Contract Vehicles',
  '/careers': 'Careers',
  '/contact': 'Contact',
};