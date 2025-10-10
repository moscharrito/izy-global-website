/**
 * Leadership Data
 * Leadership team information
 */

import type { Leader } from '@/types';

export const LEADERSHIP_TEAM: Leader[] = [
  {
    id: 'ismaila-raji',
    name: 'Ismaila Raji',
    title: 'Founder & CEO',
    biography: 'Ismaila Raji is the founder and CEO of Izy Global Services LLC, bringing extensive experience in logistics and transportation management. As a service-disabled veteran, he founded the company on the principles of service, integrity, and excellence that were instilled during his military service.',
    photo: '/images/leadership/ismaila-raji.jpg', // Placeholder path
    militaryService: 'United States Military - Service Disabled Veteran',
    expertise: [
      'Logistics Management',
      'Transportation Operations',
      'Government Contracting',
      'Business Development',
      'Strategic Planning',
    ],
    yearsOfExperience: 10,
  },
];

export const VETERAN_COMMITMENT = {
  title: 'Veteran Leadership',
  description: 'Our leadership brings military precision, discipline, and commitment to excellence to every project. We understand the importance of mission success and apply military-trained problem-solving skills to complex logistics challenges.',
  values: [
    'Mission-First Mentality',
    'Attention to Detail',
    'Disciplined Execution',
    'Team Cohesion',
    'Continuous Improvement',
  ],
};