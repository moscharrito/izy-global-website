/**
 * Footer Component
 * Comprehensive footer with four-column layout including company info,
 * quick links, resources, and certifications
 */

import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/company';
import { Container } from '@/components/ui';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Column 1 - Company Info */}
            <div className="space-y-4">

              {/* Company Description */}
              <p className="text-neutral-300 text-sm leading-relaxed">
                {COMPANY_INFO.tagline}
              </p>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Service-Disabled Veteran-Owned Small Business providing professional 
                transportation, logistics, and government contract support services.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-neutral-300">
                    <div>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-neutral-300 hover:text-accent-400 transition-colors">
                    {COMPANY_INFO.contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-neutral-300 hover:text-accent-400 transition-colors">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-heading font-bold text-lg mb-4">Quick Links</h3>
              <nav className="space-y-2">
                <Link href="/about" className="block text-neutral-300 hover:text-accent-400 transition-colors text-sm font-medium">
                  About Us
                </Link>
                <Link href="/services" className="block text-neutral-300 hover:text-accent-400 transition-colors text-sm font-medium">
                  Services
                </Link>
                <Link href="/capabilities" className="block text-neutral-300 hover:text-accent-400 transition-colors text-sm font-medium">
                  Capabilities
                </Link>
                <Link href="/careers" className="block text-neutral-300 hover:text-accent-400 transition-colors text-sm font-medium">
                  Careers
                </Link>
                <Link href="/contact" className="block text-neutral-300 hover:text-accent-400 transition-colors text-sm font-medium">
                  Contact
                </Link>
              </nav>

              {/* Business Hours */}
              <div className="mt-6">
                <h4 className="text-white font-semibold text-sm mb-2">Business Hours</h4>
                <div className="text-neutral-400 text-xs space-y-1">
                  <div>Monday - Friday</div>
                  <div>8:00 AM - 5:00 PM CST</div>
                </div>
              </div>
            </div>

            {/* Column 3 - Resources */}
            <div className="space-y-4">
              <h3 className="text-white font-heading font-bold text-lg mb-4">Resources</h3>
              <nav className="space-y-2">
                <a 
                  href="/documents/capability-statement.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-neutral-300 hover:text-accent-400 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Capability Statement (PDF)</span>
                </a>
                <Link href="/contract-vehicles" className="block text-neutral-300 hover:text-accent-400 transition-colors text-sm font-medium">
                  Contract Vehicles
                </Link>
                <Link href="/terms" className="block text-neutral-300 hover:text-accent-400 transition-colors text-sm font-medium">
                  Terms & Conditions
                </Link>
                <Link href="/privacy" className="block text-neutral-300 hover:text-accent-400 transition-colors text-sm font-medium">
                  Privacy Policy
                </Link>
                <Link href="/sitemap" className="block text-neutral-300 hover:text-accent-400 transition-colors text-sm font-medium">
                  Site Map
                </Link>
              </nav>

              {/* Additional Resources */}
              <div className="mt-6">
                <h4 className="text-white font-semibold text-sm mb-2">Verification</h4>
                <div className="space-y-1">
                  <a 
                    href="https://sam.gov" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-neutral-400 hover:text-accent-400 transition-colors text-xs"
                  >
                    SAM.gov Registration
                  </a>
                  <a 
                    href="https://www.sba.gov/federal-contracting/contracting-assistance-programs/service-disabled-veteran-owned-small-businesses-program" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-neutral-400 hover:text-accent-400 transition-colors text-xs"
                  >
                    SDVOSB Verification
                  </a>
                </div>
              </div>
            </div>
            {/* Column 4 - Certifications */}
            <div className="space-y-4">
              <h3 className="text-white font-heading font-bold text-lg mb-4">Certifications</h3>
              
              {/* SDVOSB Badge */}
                <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl p-4 text-center shadow-lg border-2 border-accent-400">
                  <Image 
                    src="/SDVOSB-logo.png" 
                    alt="SDVOSB Certified - Service Disabled Veteran Owned Small Business"
                    width={120}
                    height={80}
                    className="w-full h-auto max-w-[120px] mx-auto"
                  />
                </div>

              {/* Business Identifiers */}
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/20">
                  <div className="text-accent-400 font-bold text-xs mb-1">CAGE Code</div>
                  <div className="text-white font-black text-lg">{COMPANY_INFO.identifiers.cageCode}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/20">
                  <div className="text-accent-400 font-bold text-xs mb-1">UEI</div>
                  <div className="text-white font-black text-sm">{COMPANY_INFO.identifiers.uei}</div>
                </div>

              </div>

              {/* SAM Registration Status */}
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-neutral-300 font-medium">SAM.gov Registered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm text-center md:text-left">
              © {currentYear} {COMPANY_INFO.name}. All Rights Reserved. | Service-Disabled Veteran-Owned Small Business
            </div>
            <div className="flex items-center space-x-4">
              {/* Social Media Links - Add when available */}
              <div className="text-neutral-500 text-xs">
                Follow Us:
              </div>
              {/* Placeholder for social media icons */}
              <div className="flex space-x-2">
                {/* LinkedIn */}
                <a 
                  href="#" 
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
