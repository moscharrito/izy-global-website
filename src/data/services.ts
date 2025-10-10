/**
 * Services Data
 * Static service information and capabilities
 */

import type { Service, Capability, ContractVehicle } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 'freight-services',
    title: 'Freight Services',
    description: 'Reliable freight solutions including LTL, FTL, and specialized shipping services.',
    category: 'freight',
    icon: 'shipping',
    features: [
      'LTL (Less Than Truckload)',
      'FTL (Full Truckload)',
      'Expedited shipping',
      'Specialized freight handling',
    ],
    detailedDescription: 'Our freight services cover the full spectrum of shipping needs, from small LTL shipments to full truckload deliveries. We specialize in time-sensitive and specialized freight handling.',
    benefits: [
      'Flexible shipping options',
      'Competitive rates',
      'Specialized handling capabilities',
      'Nationwide network',
    ],
  },
  {
    id: 'government-contract-support',
    title: 'Government Contract Support',
    description: 'Specialized support for federal contracts with deep understanding of compliance requirements.',
    category: 'government',
    icon: 'government',
    features: [
      'Federal contract compliance',
      'GSA schedule support',
      'Prime contractor partnerships',
      'Small business subcontracting',
    ],
    detailedDescription: 'Our government contract support services leverage our SDVOSB certification and deep understanding of federal procurement processes to help both government agencies and prime contractors achieve their mission objectives.',
    benefits: [
      'SDVOSB certification advantages',
      'Compliance expertise',
      'Proven track record',
      'Mission-focused approach',
    ],
  },
  {
    id: 'supply-chain-solutions',
    title: 'Supply Chain Solutions',
    description: 'Integrated supply chain management from inventory to last-mile delivery.',
    category: 'supply-chain',
    icon: 'supply-chain',
    features: [
      'Inventory management',
      'Warehousing coordination',
      'Distribution planning',
      'Last-mile delivery',
    ],
    detailedDescription: 'Our supply chain solutions provide end-to-end visibility and control over your inventory and distribution network. We coordinate warehousing, manage inventory levels, and ensure efficient last-mile delivery.',
    benefits: [
      'Reduced inventory costs',
      'Improved order fulfillment',
      'Enhanced customer satisfaction',
      'Streamlined operations',
    ],
  },
  {
    id: 'it-services',
    title: 'IT Services',
    description: 'Comprehensive information technology solutions and government contract support services for federal agencies and organizations.',
    category: 'technology',
    icon: 'computer',
    features: [
      'Cybersecurity Services and Risk Management',
      'Information Technology Infrastructure Services',
      'Enterprise Design, Integration, and Consolidation',
      'Network/Systems Operation and Maintenance',
      'Telecommunications/Systems Operation and Maintenance',
      'Business Process Re-engineering (BPR)',
      'IT Supply Chain Management',
      'Cloud Services and Digital Transformation',
    ],
    detailedDescription: 'Our IT services provide comprehensive technology solutions specifically designed for government agencies and federal contractors. We specialize in secure, compliant, and scalable IT infrastructure that meets stringent government requirements while delivering exceptional performance and reliability.',
    benefits: [
      'FedRAMP and government compliance expertise',
      'Enhanced cybersecurity and risk management',
      'Scalable enterprise-grade solutions',
      '24/7 government-certified technical support',
      'Cost-effective IT lifecycle management',
      'Secure cloud and hybrid infrastructure',
      'Business process optimization',
      'Supply chain security and management',
    ],
  },
];

export const CORE_CAPABILITIES: Capability[] = [
  {
    id: 'logistics-management',
    title: 'Logistics Management',
    description: 'Comprehensive logistics planning and execution services',
    services: ['transportation-logistics', 'supply-chain-solutions'],
    naicsCodes: ['488510', '493110'],
  },
  {
    id: 'freight-transportation',
    title: 'Freight Transportation',
    description: 'Full-service freight and shipping solutions',
    services: ['freight-services', 'transportation-logistics'],
    naicsCodes: ['484110', '484121'],
  },
  {
    id: 'government-contracting',
    title: 'Government Contracting',
    description: 'SDVOSB certified government contract support',
    services: ['government-contract-support'],
    naicsCodes: ['561210', '488510'],
  },
  {
    id: 'information-technology',
    title: 'Information Technology Services',
    description: 'Government-focused IT solutions and cybersecurity services',
    services: ['it-services'],
    naicsCodes: ['541511', '541512', '541513', '541519'],
  },
];

export const CONTRACT_VEHICLES: ContractVehicle[] = [
  {
    id: 'gsa-schedule',
    name: 'GSA Multiple Award Schedule',
    type: 'GSA',
    description: 'General Services Administration contract vehicle for government procurement',
    capabilities: ['Transportation Services', 'Logistics Support'],
  },
  // Add more contract vehicles as they become available
];

export const SERVICE_AREAS = [
  'Fort Worth, Texas',
  'Dallas-Fort Worth Metroplex',
  'Texas Statewide',
  'Nationwide Coverage',
];