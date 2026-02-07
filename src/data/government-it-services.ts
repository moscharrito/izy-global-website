/**
 * Government IT Services Data
 * Specialized IT services for government contracts and federal agencies
 */

export interface GovernmentITTaskArea {
  id: string;
  taskArea: string;
  title: string;
  description: string;
  capabilities: string[];
  compliance: string[];
  deliverables: string[];
  icon: string;
}

export const GOVERNMENT_IT_TASK_AREAS: GovernmentITTaskArea[] = [
  {
    id: 'cybersecurity-services',
    taskArea: 'Task Area 1',
    title: 'Cybersecurity Services',
    description: 'Comprehensive cybersecurity solutions to protect government systems, data, and infrastructure from evolving threats while ensuring compliance with federal security standards.',
    capabilities: [
      'Security Risk Assessments and Vulnerability Management',
      'Incident Response and Forensic Analysis',
      'Security Operations Center (SOC) Services',
      'Penetration Testing and Ethical Hacking',
      'Security Awareness Training and Education',
      'Compliance Management (FISMA, NIST, FedRAMP)',
      'Identity and Access Management (IAM)',
      'Continuous Monitoring and Threat Intelligence',
    ],
    compliance: [
      'FISMA Compliance',
      'NIST Cybersecurity Framework',
      'FedRAMP Authorization',
      'CISA Guidelines',
      'DoD Cybersecurity Standards',
    ],
    deliverables: [
      'Security Assessment Reports',
      'Incident Response Plans',
      'Vulnerability Remediation Plans',
      'Compliance Documentation',
      'Security Training Materials',
    ],
    icon: 'shield'
  },
  {
    id: 'information-technology-services',
    taskArea: 'Task Area 2',
    title: 'Information Technology Services',
    description: 'End-to-end IT services including system administration, software development, database management, and technical support for government operations.',
    capabilities: [
      'System Administration and Management',
      'Software Development and Application Support',
      'Database Design, Implementation, and Management',
      'Help Desk and Technical Support Services',
      'IT Project Management and Coordination',
      'Legacy System Modernization',
      'Cloud Migration and Hybrid Solutions',
      'DevSecOps Implementation and Support',
    ],
    compliance: [
      'Section 508 Accessibility',
      'Government Security Standards',
      'Data Privacy Regulations',
      'Federal IT Standards',
    ],
    deliverables: [
      'System Documentation',
      'Software Applications',
      'Database Solutions',
      'Technical Support Reports',
      'Migration Plans',
    ],
    icon: 'computer'
  },
  {
    id: 'enterprise-design-integration',
    taskArea: 'Task Area 3',
    title: 'Enterprise Design, Integration, and Consolidation',
    description: 'Strategic enterprise architecture services to design, integrate, and consolidate IT systems for improved efficiency and interoperability.',
    capabilities: [
      'Enterprise Architecture Design and Planning',
      'System Integration and Interoperability',
      'Data Center Consolidation Services',
      'Application Portfolio Management',
      'Technology Roadmap Development',
      'Service-Oriented Architecture (SOA) Implementation',
      'API Development and Management',
      'Digital Transformation Strategy',
    ],
    compliance: [
      'Federal Enterprise Architecture',
      'OMB Guidelines',
      'Government Interoperability Standards',
      'Data Standardization Requirements',
    ],
    deliverables: [
      'Enterprise Architecture Documents',
      'Integration Plans',
      'Consolidation Strategies',
      'Technology Roadmaps',
      'Implementation Guides',
    ],
    icon: 'integration'
  },
  {
    id: 'network-systems-operations',
    taskArea: 'Task Area 4',
    title: 'Network/Systems Operation and Maintenance',
    description: 'Comprehensive network and systems operations including monitoring, maintenance, optimization, and 24/7 support for critical government infrastructure.',
    capabilities: [
      '24/7 Network Operations Center (NOC) Services',
      'System Performance Monitoring and Optimization',
      'Preventive and Corrective Maintenance',
      'Network Security Monitoring',
      'Capacity Planning and Management',
      'Disaster Recovery and Business Continuity',
      'Infrastructure Automation and Orchestration',
      'Service Level Agreement (SLA) Management',
    ],
    compliance: [
      'Government Network Standards',
      'Security Operations Requirements',
      'Availability and Performance Standards',
      'Change Management Protocols',
    ],
    deliverables: [
      'Operations Procedures',
      'Monitoring Reports',
      'Maintenance Schedules',
      'Performance Analytics',
      'Incident Reports',
    ],
    icon: 'network'
  },
  {
    id: 'telecommunications-operations',
    taskArea: 'Task Area 5',
    title: 'Telecommunications/Systems Operation and Maintenance',
    description: 'Specialized telecommunications services including voice, data, and video communications systems operation, maintenance, and optimization.',
    capabilities: [
      'Voice over IP (VoIP) Systems Management',
      'Video Conferencing and Collaboration Solutions',
      'Unified Communications Implementation',
      'Telecommunications Infrastructure Maintenance',
      'Mobile Device Management (MDM)',
      'Satellite and Wireless Communications',
      'Emergency Communications Systems',
      'Telecommunications Security and Compliance',
    ],
    compliance: [
      'FCC Regulations',
      'Government Communications Standards',
      'Emergency Communications Requirements',
      'Telecommunications Security Standards',
    ],
    deliverables: [
      'Communications Systems Documentation',
      'Maintenance Procedures',
      'Performance Reports',
      'Emergency Response Plans',
      'Training Materials',
    ],
    icon: 'telecommunications'
  },
  {
    id: 'business-process-reengineering',
    taskArea: 'Task Area 6',
    title: 'Business Process Re-engineering (BPR)',
    description: 'Strategic business process analysis, redesign, and optimization to improve government operations efficiency and service delivery.',
    capabilities: [
      'Business Process Analysis and Mapping',
      'Workflow Optimization and Automation',
      'Change Management and Implementation',
      'Performance Metrics and KPI Development',
      'Stakeholder Engagement and Training',
      'Process Documentation and Standardization',
      'Digital Process Transformation',
      'Continuous Improvement Programs',
    ],
    compliance: [
      'Government Process Standards',
      'Quality Management Requirements',
      'Performance Measurement Guidelines',
      'Change Control Procedures',
    ],
    deliverables: [
      'Process Maps and Documentation',
      'Improvement Recommendations',
      'Implementation Plans',
      'Training Programs',
      'Performance Dashboards',
    ],
    icon: 'process'
  },
  {
    id: 'it-supply-chain-management',
    taskArea: 'Task Area 7',
    title: 'IT Supply Chain Management',
    description: 'Comprehensive IT supply chain services including procurement, vendor management, asset lifecycle management, and supply chain security.',
    capabilities: [
      'IT Procurement and Vendor Management',
      'Hardware and Software Asset Management',
      'Supply Chain Risk Assessment and Mitigation',
      'Vendor Performance Monitoring',
      'Contract Management and Compliance',
      'Technology Refresh and Lifecycle Management',
      'Inventory Management and Optimization',
      'Supply Chain Security and Compliance',
    ],
    compliance: [
      'Federal Acquisition Regulations (FAR)',
      'Supply Chain Security Requirements',
      'Vendor Compliance Standards',
      'Asset Management Regulations',
    ],
    deliverables: [
      'Procurement Strategies',
      'Vendor Assessments',
      'Asset Inventories',
      'Risk Management Plans',
      'Compliance Reports',
    ],
    icon: 'supply-chain'
  }
];

export const IT_CERTIFICATIONS = [
  'FedRAMP Authorized',
  'FISMA Compliant',
  'NIST Framework Certified',
  'ISO 27001 Certified',
  'CMMI Level 3',
  'Section 508 Compliant',
];

export const GOVERNMENT_CLIENTS = [
  'Department of Defense (DoD)',
  'Department of Homeland Security (DHS)',
  'General Services Administration (GSA)',
  'Department of Veterans Affairs (VA)',
  'Department of Health and Human Services (HHS)',
  'Department of Treasury',
  'Various Federal Agencies',
];

export const IT_CONTRACT_VEHICLES = [
  {
    name: 'GSA IT Schedule 70',
    description: 'Information Technology solutions and services',
    capabilities: ['Hardware', 'Software', 'IT Services', 'Telecommunications']
  },
  {
    name: 'CIO-SP3',
    description: 'Chief Information Officer-Solutions and Partners 3',
    capabilities: ['IT Services', 'Health IT', 'Cybersecurity']
  },
  {
    name: 'SEWP VI',
    description: 'Solutions for Enterprise-Wide Procurement',
    capabilities: ['IT Hardware', 'Software', 'IT Services']
  }
];