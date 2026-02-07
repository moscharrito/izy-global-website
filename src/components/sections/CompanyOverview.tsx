/**
 * Company Overview Section
 * Clean display of company information and value proposition
 */
import React from 'react';
import Link from 'next/link';
import { Button, Container } from '@/components/ui';
import { COMPANY_INFO, WHY_CHOOSE_US } from '@/data/company';

const CompanyOverview: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Company Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3">
              Your Trusted SDVOSB Partner
            </h2>

            <p className="text-neutral-600 mb-6 leading-relaxed">
              {COMPANY_INFO.description}
            </p>

            {/* Business Identifiers */}
            <div className="flex gap-6 mb-6 p-4 bg-neutral-50 rounded-lg">
              <div>
                <div className="text-xl font-bold text-primary-700">
                  {COMPANY_INFO.identifiers.cageCode}
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wide">CAGE Code</div>
              </div>
              <div className="border-l border-neutral-200 pl-6">
                <div className="text-lg font-bold text-primary-700">
                  {COMPANY_INFO.identifiers.uei}
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wide">UEI Number</div>
              </div>
            </div>

            {/* CTA */}
            <Link href="/contact">
              <Button variant="primary">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Why Choose Us */}
          <div className="bg-primary-900 rounded-xl p-6 md:p-8 text-white">
            <h3 className="text-lg font-heading font-bold mb-5">
              Why Choose Izy Global Services?
            </h3>

            <div className="space-y-3">
              {WHY_CHOOSE_US.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyOverview;
