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
      expect(COMPANY_INFO.tagline).toBe('Delivering Excellence Through Service');
      expect(COMPANY_INFO.identifiers.ein).toBe('85-4379275');
      expect(COMPANY_INFO.identifiers.uei).toBe('WLDNTVNK9SC7');
      expect(COMPANY_INFO.identifiers.cageCode).toBe('949Y3');
    });

    it('should have valid contact information', () => {
      expect(COMPANY_INFO.contact.phone).toBe('713-992-0481');
      expect(COMPANY_INFO.contact.email).toBe('freights@izymovers.com');
      expect(isValidEmail(COMPANY_INFO.contact.email)).toBe(true);
      expect(isValidPhoneNumber(COMPANY_INFO.contact.phone)).toBe(true);
    });

    it('should have valid address information', () => {
      const { address } = COMPANY_INFO;
      expect(address.street).toBe('4869 Madyson Ridge Dr');
      expect(address.city).toBe('Fort Worth');
      expect(address.state).toBe('TX');
      expect(address.zipCode).toBe('76133');
    });
  });

  describe('Services', () => {
    it('should have four main services', () => {
      expect(SERVICES).toHaveLength(4);
      expect(SERVICES.map(s => s.id)).toEqual([
        'transportation-logistics',
        'freight-services',
        'government-contract-support',
        'supply-chain-solutions',
      ]);
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

    it('should filter services by category', () => {
      const transportationServices = getServicesByCategory(SERVICES, 'transportation');
      expect(transportationServices).toHaveLength(1);
      expect(transportationServices[0].id).toBe('transportation-logistics');

      const freightServices = getServicesByCategory(SERVICES, 'freight');
      expect(freightServices).toHaveLength(1);
      expect(freightServices[0].id).toBe('freight-services');
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
    it('should have main navigation items', () => {
      expect(MAIN_NAVIGATION).toBeDefined();
      expect(MAIN_NAVIGATION.length).toBeGreaterThan(0);
      
      const homeItem = MAIN_NAVIGATION.find(item => item.label === 'Home');
      expect(homeItem).toBeDefined();
      expect(homeItem?.href).toBe('/');
    });

    it('should have services submenu', () => {
      const servicesItem = MAIN_NAVIGATION.find(item => item.label === 'Services');
      expect(servicesItem).toBeDefined();
      expect(servicesItem?.children).toBeDefined();
      expect(servicesItem?.children?.length).toBeGreaterThan(0);
    });
  });
});

describe('Utility Functions', () => {
  describe('formatPhoneNumber', () => {
    it('should format phone number correctly', () => {
      expect(formatPhoneNumber('7139920481')).toBe('(713) 992-0481');
      expect(formatPhoneNumber('713-992-0481')).toBe('(713) 992-0481');
    });
  });

  describe('formatAddress', () => {
    it('should format address correctly', () => {
      const address = {
        street: '4869 Madyson Ridge Dr',
        city: 'Fort Worth',
        state: 'TX',
        zipCode: '76133',
      };
      expect(formatAddress(address)).toBe('4869 Madyson Ridge Dr, Fort Worth, TX 76133');
    });
  });

  describe('email validation', () => {
    it('should validate email addresses', () => {
      expect(isValidEmail('freights@izymovers.com')).toBe(true);
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@example')).toBe(false);
    });
  });

  describe('phone validation', () => {
    it('should validate phone numbers', () => {
      expect(isValidPhoneNumber('713-992-0481')).toBe(true);
      expect(isValidPhoneNumber('(713) 992-0481')).toBe(true);
      expect(isValidPhoneNumber('7139920481')).toBe(true);
      expect(isValidPhoneNumber('invalid')).toBe(false);
    });
  });
});