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
    label: 'About',
    href: '/about',
  },
  {
    label: 'Consulting Services',
    href: '/services',
    children: [
      {
        label: 'Strategic Business Transformation',
        href: '/services/strategic-transformation',
      },
      {
        label: 'Operational Excellence',
        href: '/services/operational-excellence',
      },
      {
        label: 'Technology Strategy',
        href: '/services/technology-strategy',
      },
      {
        label: 'Government Contracting',
        href: '/services/government-contracting',
      },
    ],
  },
  {
    label: 'Capabilities',
    href: '/capabilities',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const FOOTER_NAVIGATION = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Strategic Transformation', href: '/services/strategic-transformation' },
    { label: 'Operational Excellence', href: '/services/operational-excellence' },
    { label: 'Technology Strategy', href: '/services/technology-strategy' },
    { label: 'Government Contracting', href: '/services/government-contracting' },
  ],
  resources: [
    { label: 'Capability Statement', href: '/resources/capability-statement.pdf' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
  certifications: [
    { label: 'SDVOSB Certified', href: 'https://search.certifications.sba.gov/profile/WLDNTVNK9SC7/949Y3?page=1' },
    { label: 'SAM.gov Registered', href: 'https://sam.gov', external: true },
  ],
};

export const BREADCRUMB_LABELS: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Consulting Services',
  '/services/strategic-transformation': 'Strategic Transformation',
  '/services/operational-excellence': 'Operational Excellence',
  '/services/technology-strategy': 'Technology Strategy',
  '/services/government-contracting': 'Government Contracting',
  '/capabilities': 'Capabilities',
  '/contact': 'Contact',
};