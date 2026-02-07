/**
 * Data Models Tests
 * Tests for TypeScript interfaces and data structures
 */

import {
  COMPANY_INFO,
  SERVICES,
  LEADERSHIP_TEAM,
  MAIN_NAVIGATION,
} from '@/data';
import {
  formatPhoneNumber,
  formatAddress,
  getServicesByCategory,
  isValidEmail,
  isValidPhoneNumber,
} from '@/lib/utils';
import type { CompanyInfo, Service, Leader } from '@/types';

describe('Data Models', () => {
  describe('Company Info', () => {
    it('should have valid company information structure', () => {
      expect(COMPANY_INFO).toBeDefined();
      expect(COMPANY_INFO.name).toBe('Izy Global Services LLC');
      expect(COMPANY_INFO.tagline).toBe('Strategic Business Consulting & Transformation');
      expect(COMPANY_INFO.identifiers.ein).toBe('85-4379275');
      expect(COMPANY_INFO.identifiers.uei).toBe('WLDNTVNK9SC7');
      expect(COMPANY_INFO.identifiers.cageCode).toBe('949Y3');
    });

    it('should emphasize business consulting in company description', () => {
      expect(COMPANY_INFO.description).toContain('strategic business consulting');
      expect(COMPANY_INFO.description).toContain('organizational transformation');
      expect(COMPANY_INFO.description).toContain('measurable business outcomes');
    });

    it('should have valid contact information', () => {
      expect(COMPANY_INFO.contact.phone).toBe('346-483-6266');
      expect(COMPANY_INFO.contact.email).toBe('contracts@izyglobalservices.com');
      expect(isValidEmail(COMPANY_INFO.contact.email)).toBe(true);
      expect(isValidPhoneNumber(COMPANY_INFO.contact.phone)).toBe(true);
    });

    it('should have valid address information', () => {
      const { address } = COMPANY_INFO;
      expect(address.street).toBe('12411 King Olaf Dr');
      expect(address.city).toBe('Houston');
      expect(address.state).toBe('TX');
      expect(address.zipCode).toBe('77044');
    });
  });

  describe('Services', () => {
    it('should have four main consulting services', () => {
      expect(SERVICES).toHaveLength(4);
      expect(SERVICES.map(s => s.id)).toEqual([
        'strategic-business-transformation',
        'operational-excellence-consulting',
        'government-contracting-excellence',
        'technology-strategy-consulting',
      ]);
    });

    it('should position services as business consulting specializations', () => {
      const strategicService = SERVICES.find(s => s.id === 'strategic-business-transformation');
      expect(strategicService?.category).toBe('strategic');
      expect(strategicService?.title).toContain('Strategic Business Transformation');
      
      const operationalService = SERVICES.find(s => s.id === 'operational-excellence-consulting');
      expect(operationalService?.category).toBe('operational');
      expect(operationalService?.description).toContain('consulting');
      
      const technologyService = SERVICES.find(s => s.id === 'technology-strategy-consulting');
      expect(technologyService?.category).toBe('technology');
      expect(technologyService?.title).toContain('Strategy');
    });

    it('should have valid service structure', () => {
      SERVICES.forEach((service: Service) => {
        expect(service.id).toBeDefined();
        expect(service.title).toBeDefined();
        expect(service.description).toBeDefined();
        expect(service.category).toBeDefined();
        expect(service.features).toBeInstanceOf(Array);
        expect(service.features.length).toBeGreaterThan(0);
      });
    });

    it('should filter services by consulting category', () => {
      const strategicServices = getServicesByCategory(SERVICES, 'strategic');
      expect(strategicServices).toHaveLength(1);
      expect(strategicServices[0].id).toBe('strategic-business-transformation');

      const operationalServices = getServicesByCategory(SERVICES, 'operational');
      expect(operationalServices).toHaveLength(1);
      expect(operationalServices[0].id).toBe('operational-excellence-consulting');

      const technologyServices = getServicesByCategory(SERVICES, 'technology');
      expect(technologyServices).toHaveLength(1);
      expect(technologyServices[0].id).toBe('technology-strategy-consulting');

      const governmentServices = getServicesByCategory(SERVICES, 'government');
      expect(governmentServices).toHaveLength(1);
      expect(governmentServices[0].id).toBe('government-contracting-excellence');
    });

    it('should emphasize business outcomes in service descriptions', () => {
      SERVICES.forEach((service: Service) => {
        expect(service.description.toLowerCase()).toMatch(
          /consulting|strategic|transformation|business|outcomes|optimization|excellence/
        );
      });
    });
  });

  describe('Leadership', () => {
    it('should have leadership team defined', () => {
      expect(LEADERSHIP_TEAM).toBeDefined();
      expect(LEADERSHIP_TEAM.length).toBeGreaterThan(0);
    });

    it('should have valid leader structure', () => {
      const leader = LEADERSHIP_TEAM[0];
      expect(leader.name).toBe('Ismaila Raji');
      expect(leader.title).toBe('Founder & CEO');
      expect(leader.militaryService).toBeDefined();
      expect(leader.expertise).toBeInstanceOf(Array);
      expect(leader.expertise.length).toBeGreaterThan(0);
    });
  });

  describe('Navigation', () => {
    it('should have main navigation items with consulting focus', () => {
      expect(MAIN_NAVIGATION).toBeDefined();
      expect(MAIN_NAVIGATION.length).toBeGreaterThan(0);
      
      const homeItem = MAIN_NAVIGATION.find(item => item.label === 'Home');
      expect(homeItem).toBeDefined();
      expect(homeItem?.href).toBe('/');
      
      const servicesItem = MAIN_NAVIGATION.find(item => item.label === 'Consulting Services');
      expect(servicesItem).toBeDefined();
      expect(servicesItem?.href).toBe('/services');
    });

    it('should have consulting services submenu', () => {
      const servicesItem = MAIN_NAVIGATION.find(item => item.label === 'Consulting Services');
      expect(servicesItem).toBeDefined();
      expect(servicesItem?.children).toBeDefined();
      expect(servicesItem?.children?.length).toBe(4);
      
      const serviceLabels = servicesItem?.children?.map(child => child.label) || [];
      expect(serviceLabels).toContain('Strategic Business Transformation');
      expect(serviceLabels).toContain('Operational Excellence');
      expect(serviceLabels).toContain('Technology Strategy');
      expect(serviceLabels).toContain('Government Contracting');
    });

    it('should have streamlined navigation structure', () => {
      const navigationLabels = MAIN_NAVIGATION.map(item => item.label);
      expect(navigationLabels).toEqual([
        'Home',
        'About',
        'Consulting Services',
        'Capabilities',
        'Contact'
      ]);
    });
  });
});

describe('Business Consulting Framework', () => {
  describe('Messaging Consistency', () => {
    it('should maintain consistent business consulting messaging', () => {
      // Company tagline should emphasize consulting
      expect(COMPANY_INFO.tagline.toLowerCase()).toContain('consulting');
      
      // Services should be positioned as consulting specializations
      const consultingKeywords = ['consulting', 'strategic', 'transformation', 'excellence'];
      SERVICES.forEach(service => {
        const hasConsultingFocus = consultingKeywords.some(keyword => 
          service.title.toLowerCase().includes(keyword) || 
          service.description.toLowerCase().includes(keyword)
        );
        expect(hasConsultingFocus).toBe(true);
      });
    });

    it('should position IT and logistics as consulting capabilities', () => {
      const technologyService = SERVICES.find(s => s.id === 'technology-strategy-consulting');
      expect(technologyService?.title).toContain('Strategy');
      expect(technologyService?.description).toContain('consulting');
      
      const operationalService = SERVICES.find(s => s.id === 'operational-excellence-consulting');
      expect(operationalService?.title).toContain('Excellence');
      expect(operationalService?.description).toContain('consulting');
    });

    it('should emphasize business outcomes in service benefits', () => {
      SERVICES.forEach(service => {
        expect(service.benefits).toBeDefined();
        expect(service.benefits.length).toBeGreaterThan(0);
        
        const businessOutcomeKeywords = [
          'efficiency', 'cost', 'performance', 'competitive', 'strategic', 
          'business', 'outcomes', 'optimization', 'improvement'
        ];
        
        const hasBenefitsFocus = service.benefits.some(benefit =>
          businessOutcomeKeywords.some(keyword => 
            benefit.toLowerCase().includes(keyword)
          )
        );
        expect(hasBenefitsFocus).toBe(true);
      });
    });
  });

  describe('Service Structure Validation', () => {
    it('should have strategic business transformation as primary service', () => {
      const primaryService = SERVICES[0];
      expect(primaryService.id).toBe('strategic-business-transformation');
      expect(primaryService.category).toBe('strategic');
      expect(primaryService.features).toContain('Strategic Planning & Assessment');
    });

    it('should structure services in consulting hierarchy', () => {
      const categories = SERVICES.map(s => s.category);
      expect(categories).toEqual(['strategic', 'operational', 'government', 'technology']);
    });

    it('should include consulting methodology in service features', () => {
      SERVICES.forEach(service => {
        const methodologyKeywords = [
          'strategy', 'assessment', 'planning', 'optimization', 'management', 
          'consulting', 'implementation', 'transformation'
        ];
        
        const hasMethodology = service.features.some(feature =>
          methodologyKeywords.some(keyword => 
            feature.toLowerCase().includes(keyword)
          )
        );
        expect(hasMethodology).toBe(true);
      });
    });
  });
});

describe('Utility Functions', () => {
  describe('formatPhoneNumber', () => {
    it('should format phone number correctly', () => {
      expect(formatPhoneNumber('3464836266')).toBe('(346) 483-6266');
      expect(formatPhoneNumber('346-483-6266')).toBe('(346) 483-6266');
    });
  });

  describe('formatAddress', () => {
    it('should format address correctly', () => {
      const address = {
        street: '12411 King Olaf Dr',
        city: 'Houston',
        state: 'TX',
        zipCode: '77044',
      };
      expect(formatAddress(address)).toBe('12411 King Olaf Dr, Houston, TX 77044');
    });
  });

  describe('email validation', () => {
    it('should validate email addresses', () => {
      expect(isValidEmail('contracts@izyglobalservices.com')).toBe(true);
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@example')).toBe(false);
    });
  });

  describe('phone validation', () => {
    it('should validate phone numbers', () => {
      expect(isValidPhoneNumber('346-483-6266')).toBe(true);
      expect(isValidPhoneNumber('(346) 483-6266')).toBe(true);
      expect(isValidPhoneNumber('3464836266')).toBe(true);
      expect(isValidPhoneNumber('invalid')).toBe(false);
    });
  });
});