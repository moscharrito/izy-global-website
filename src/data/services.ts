/**
 * Services Data
 * Static service information and capabilities
 */

import type { Service, Capability, ContractVehicle } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 'strategic-business-transformation',
    title: 'Strategic Business Transformation',
    description: 'Comprehensive business consulting services that drive organizational change, optimize processes, and deliver measurable results through strategic planning and implementation.',
    category: 'strategic',
    icon: 'strategy',
    features: [
      'Strategic Planning & Assessment',
      'Business Process Re-engineering',
      'Organizational Development',
      'Change Management',
      'Performance Optimization',
      'Digital Transformation Strategy',
    ],
    detailedDescription: 'Our strategic business transformation consulting leverages military precision and proven methodologies to help organizations achieve sustainable competitive advantages. We assess current state, design future state, and implement transformation initiatives that deliver measurable business outcomes.',
    benefits: [
      'Increased operational efficiency',
      'Enhanced competitive positioning',
      'Improved organizational agility',
      'Measurable ROI and business outcomes',
      'Sustainable transformation results',
    ],
  },
  {
    id: 'operational-excellence-consulting',
    title: 'Operational Excellence Consulting',
    description: 'Supply chain optimization and operational consulting services that streamline processes, reduce costs, and improve performance across your organization.',
    category: 'operational',
    icon: 'supply-chain',
    features: [
      'Supply Chain Optimization',
      'Process Improvement & Lean Implementation',
      'Inventory Management Strategy',
      'Distribution Network Design',
      'Performance Management Systems',
      'Cost Reduction Initiatives',
    ],
    detailedDescription: 'Our operational excellence consulting transforms how organizations manage their supply chains and operations. We provide end-to-end visibility, optimize processes, and implement performance management systems that drive continuous improvement and cost savings.',
    benefits: [
      'Reduced operational costs',
      'Improved process efficiency',
      'Enhanced customer satisfaction',
      'Streamlined operations',
      'Better inventory management',
    ],
  },
  {
    id: 'government-contracting-excellence',
    title: 'Government Contracting Excellence',
    description: 'Strategic consulting for government contracting success, leveraging SDVOSB certification and deep federal procurement expertise to optimize contract performance and compliance.',
    category: 'government',
    icon: 'government',
    features: [
      'Contract Strategy & Optimization',
      'Compliance & Risk Management',
      'Performance Management',
      'SDVOSB Partnership Strategies',
      'Federal Procurement Consulting',
      'Prime Contractor Collaboration',
    ],
    detailedDescription: 'Our government contracting excellence consulting combines SDVOSB certification with strategic business expertise to help organizations navigate federal procurement successfully. We optimize contract strategies, ensure compliance, and drive mission success through proven methodologies.',
    benefits: [
      'Enhanced contract performance',
      'Reduced compliance risks',
      'Strategic SDVOSB partnerships',
      'Improved win rates',
      'Mission-focused outcomes',
    ],
  },
  {
    id: 'technology-strategy-consulting',
    title: 'Technology Strategy & Digital Transformation',
    description: 'Strategic technology consulting that aligns IT capabilities with business objectives, driving digital transformation and competitive advantages through innovative solutions.',
    category: 'technology',
    icon: 'computer',
    features: [
      'Digital Transformation Strategy',
      'IT Infrastructure Consulting',
      'Cybersecurity Strategy & Risk Management',
      'Cloud Strategy & Implementation',
      'Enterprise Architecture Design',
      'Technology Integration & Consolidation',
      'IT Performance Optimization',
      'Business Process Automation',
    ],
    detailedDescription: 'Our technology strategy consulting transforms how organizations leverage technology for business success. We align IT capabilities with strategic objectives, implement secure and scalable solutions, and drive digital transformation that delivers measurable business value and competitive advantages.',
    benefits: [
      'Strategic technology alignment',
      'Enhanced cybersecurity posture',
      'Improved operational efficiency',
      'Scalable enterprise solutions',
      'Competitive technology advantages',
      'Reduced IT costs and complexity',
      'Business process optimization',
      'Future-ready digital infrastructure',
    ],
  },
];

export const CORE_CAPABILITIES: Capability[] = [
  {
    id: 'strategic-business-consulting',
    title: 'Strategic Business Consulting',
    description: 'Comprehensive business transformation and strategic planning consulting services',
    services: ['strategic-business-transformation'],
    naicsCodes: ['541611', '541618', '541690'],
  },
  {
    id: 'operational-excellence',
    title: 'Operational Excellence Consulting',
    description: 'Supply chain optimization and operational improvement consulting',
    services: ['operational-excellence-consulting'],
    naicsCodes: ['541614', '488510', '493110'],
  },
  {
    id: 'government-contracting-consulting',
    title: 'Government Contracting Excellence',
    description: 'SDVOSB certified government contracting strategy and performance consulting',
    services: ['government-contracting-excellence'],
    naicsCodes: ['561210', '541611', '488510'],
  },
  {
    id: 'technology-strategy',
    title: 'Technology Strategy & Digital Transformation',
    description: 'Strategic technology consulting and digital transformation services',
    services: ['technology-strategy-consulting'],
    naicsCodes: ['541511', '541512', '541513', '541519'],
  },
];

export const CONTRACT_VEHICLES: ContractVehicle[] = [
  {
    id: 'gsa-schedule',
    name: 'GSA Multiple Award Schedule',
    type: 'GSA',
    description: 'General Services Administration contract vehicle for government procurement',
    capabilities: ['Business Consulting Services', 'Technology Strategy Consulting', 'Operational Excellence'],
  },
  // Add more contract vehicles as they become available
];

export const SERVICE_AREAS = [
  'Houston, Texas',
  'Dallas-Fort Worth Metroplex',
  'Texas Statewide',
  'Nationwide Coverage',
];