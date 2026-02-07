/**
 * Navigation Data
 * Simplified website navigation structure
 */

import type { NavigationItem } from '@/types';

export const MAIN_NAVIGATION: NavigationItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_NAVIGATION = {
  quickLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const BREADCRUMB_LABELS: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/capabilities': 'Capabilities',
  '/contact': 'Contact',
};
