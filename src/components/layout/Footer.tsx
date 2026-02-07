/**
 * Footer Component
 * Clean 3-column footer layout
 */
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/company';
import { Container } from '@/components/ui';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white py-12">
      <Container>
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Company */}
          <div>
            <div className="font-heading font-bold text-xl mb-4">Izy Global Services</div>
            <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
            <div className="text-sm text-neutral-400 space-y-1">
              <div>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}</div>
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="block hover:text-accent-400 transition-colors"
              >
                {COMPANY_INFO.contact.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="block hover:text-accent-400 transition-colors"
              >
                {COMPANY_INFO.contact.email}
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/about" className="block text-neutral-300 hover:text-accent-400 transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-neutral-300 hover:text-accent-400 transition-colors">
                Services
              </Link>
              <Link href="/capabilities" className="block text-neutral-300 hover:text-accent-400 transition-colors">
                Capabilities
              </Link>
              <Link href="/contact" className="block text-neutral-300 hover:text-accent-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Credentials */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Credentials</h3>
            <div className="text-sm text-neutral-300 space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                <span>SDVOSB Certified</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                <span>SAM.gov Registered</span>
              </div>
              <div className="pt-3 mt-3 border-t border-neutral-700">
                <div className="text-neutral-400 text-xs mb-1">CAGE Code</div>
                <div className="font-semibold">{COMPANY_INFO.identifiers.cageCode}</div>
              </div>
              <div>
                <div className="text-neutral-400 text-xs mb-1">UEI</div>
                <div className="font-semibold">{COMPANY_INFO.identifiers.uei}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 pt-6 text-center text-sm text-neutral-400">
          © {currentYear} {COMPANY_INFO.name}. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
