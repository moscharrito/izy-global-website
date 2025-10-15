/**
 * Past Performance Data
 * Company work experience and contract history
 */

export interface PastPerformance {
  id: string;
  title: string;
  contractNumber?: string;
  client: string;
  clientType: 'federal' | 'state' | 'private';
  executionDate: string;
  contractValue?: string;
  periodOfPerformance?: string;
  description: string;
  scope: string[];
  keyOutcomes?: string[];
  buyerRepresentative?: {
    name: string;
    email: string;
    phone: string;
  };
  contractingOfficer?: {
    name: string;
    organization: string;
    phone: string;
  };
  category: 'equipment' | 'services' | 'logistics' | 'transportation';
}

export const PAST_PERFORMANCE: PastPerformance[] = [
  {
    id: 'tvhs-courier-services',
    title: 'TVHS RMD Courier Services',
    client: 'Tennessee Valley Healthcare System (TVHS), Department of Veterans Affairs',
    clientType: 'federal',
    executionDate: 'July 2025',
    contractValue: '$1,294,591.53',
    periodOfPerformance: 'July 2025 – Present',
    description: 'Comprehensive courier services for medical facilities across multi-state region supporting critical healthcare operations.',
    scope: [
      'Daily and on-call courier services across medical facilities',
      'Same-day delivery of lab specimens and medical equipment',
      'Clinical documentation transport',
      '365-day coverage including holidays',
      'Two full-time drivers with specialized medical transport training'
    ],
    keyOutcomes: [
      'Maintained 99% on-time delivery rate',
      'Received zero compliance violations',
      'Successfully supported COVID-era transport needs',
      'Established reliable multi-state logistics network'
    ],

    category: 'services'
  },
  {
    id: 'civilian-water-trailers-1',
    title: 'Civilian Water Trailers',
    contractNumber: 'W911S2-22-P-0537 (W37HEH)',
    client: 'MICC End User',
    clientType: 'federal',
    executionDate: 'May 19, 2022',
    description: 'Supply and delivery of specialized civilian water trailers for military operations and emergency response capabilities.',
    scope: [
      'Procurement of high-capacity water trailers',
      'Quality assurance and compliance verification',
      'Timely delivery to specified military installation',
      'Technical documentation and training materials'
    ],

    contractingOfficer: {
      name: 'MICC Ft Drum, S2P2',
      organization: '925th CBN & MICC Fort Drum, NY',
      phone: '315-772-7272'
    },
    category: 'equipment'
  },
  {
    id: 'skid-loader-attachment',
    title: 'Skid Loader Tree Spade Attachment',
    contractNumber: 'W911S2-22-P-1515 (W90F2S)',
    client: 'MICC End User',
    clientType: 'federal',
    executionDate: 'September 2, 2022',
    description: 'Specialized tree spade attachment for skid loader equipment supporting landscaping and environmental operations.',
    scope: [
      'Custom tree spade attachment procurement',
      'Compatibility verification with existing equipment',
      'Installation guidance and technical support',
      'Warranty and maintenance documentation'
    ],

    category: 'equipment'
  },
  {
    id: 'civilian-water-trailers-2',
    title: 'Civilian Water Trailer',
    contractNumber: '36C24925P0596',
    client: 'Fort Jackson GPC',
    clientType: 'federal',
    executionDate: 'December 5, 2022',
    description: 'Additional water trailer procurement for Fort Jackson supporting training operations and emergency preparedness.',
    scope: [
      'Military-grade water trailer supply',
      'Compliance with federal specifications',
      'Delivery coordination with base operations',
      'Quality control and inspection services'
    ],

    category: 'equipment'
  },
  {
    id: 'tube-deburr-machine',
    title: 'Tube De-Burr Machine',
    contractNumber: 'W911S2-23-P-0164(W53W9L)',
    client: 'MICC End User',
    clientType: 'federal',
    executionDate: 'April 17, 2023',
    description: 'Precision tube de-burring equipment for manufacturing and maintenance operations requiring high-quality metal finishing.',
    scope: [
      'Industrial-grade de-burring machine procurement',
      'Technical specifications compliance',
      'Installation and setup coordination',
      'Operator training materials and documentation'
    ],

    category: 'equipment'
  },
  {
    id: 'lift-a-load-trailer',
    title: 'Lift-A-Load EPT4-716 Trailer',
    client: 'MICC End User',
    clientType: 'federal',
    executionDate: 'April 17, 2023',
    description: 'Heavy-duty equipment trailer for transporting specialized military equipment and vehicles.',
    scope: [
      'Heavy-duty trailer procurement and delivery',
      'Load capacity verification and testing',
      'Safety compliance and certification',
      'Maintenance schedule and parts availability'
    ],

    category: 'equipment'
  },
  {
    id: '500kw-generator',
    title: '500KW Generator',
    client: 'MICC End User',
    clientType: 'federal',
    executionDate: 'August 9, 2023',
    description: 'High-capacity power generation equipment for critical infrastructure and emergency backup power requirements.',
    scope: [
      'Industrial 500KW generator procurement',
      'Power output verification and testing',
      'Installation coordination and technical support',
      'Fuel system integration and safety protocols'
    ],

    category: 'equipment'
  },
  {
    id: 'txdot-frac-tank',
    title: 'TxDOT 500 BBL Frac Tank',
    client: 'Texas Department of Transportation',
    clientType: 'state',
    executionDate: 'October 16, 2023',
    description: 'Large-capacity frac tank for state transportation department operations and infrastructure projects.',
    scope: [
      '500-barrel frac tank supply and delivery',
      'State compliance and safety certifications',
      'Transportation and positioning services',
      'Environmental compliance documentation'
    ],

    category: 'equipment'
  }
];

export const PERFORMANCE_SUMMARY = {
  totalContracts: PAST_PERFORMANCE.length,
  federalContracts: PAST_PERFORMANCE.filter(p => p.clientType === 'federal').length,
  stateContracts: PAST_PERFORMANCE.filter(p => p.clientType === 'state').length,
  privateContracts: PAST_PERFORMANCE.filter(p => p.clientType === 'private').length,
  totalValue: '$1,294,591.53+', // Only one contract has disclosed value
  categories: {
    equipment: PAST_PERFORMANCE.filter(p => p.category === 'equipment').length,
    services: PAST_PERFORMANCE.filter(p => p.category === 'services').length,
    logistics: PAST_PERFORMANCE.filter(p => p.category === 'logistics').length,
    transportation: PAST_PERFORMANCE.filter(p => p.category === 'transportation').length,
  }
};

export const CLIENT_TESTIMONIALS = [
  {
    client: 'Department of Veterans Affairs',
    quote: 'IZY Global Services has consistently delivered exceptional courier services with a 99% on-time delivery rate and zero compliance violations.',
    project: 'TVHS RMD Courier Services'
  }
];