/**
 * Company Overview Section
 * Displays business identifiers and key company information
 */
import React from 'react';
import { Container } from '@/components/ui';
import { COMPANY_INFO, WHY_CHOOSE_US } from '@/data/company';

const CompanyOverview: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-neutral-50 to-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Company Information */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
              <span className="text-primary-700 font-medium text-sm">About Our Company</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-black text-primary-900 mb-4">
              YOUR TRUSTED SDVOSB PARTNER
            </h2>
            
            <p className="text-lg text-neutral-800 mb-6 leading-relaxed font-semibold">
              {COMPANY_INFO.description}
            </p>

            {/* Business Identifiers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-soft border border-neutral-200">
                <div className="text-2xl font-black text-primary-700 mb-1">
                  {COMPANY_INFO.identifiers.cageCode}
                </div>
                <div className="text-sm text-neutral-700 font-bold">CAGE CODE</div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-soft border border-neutral-200">
                <div className="text-2xl font-black text-primary-700 mb-1">
                  {COMPANY_INFO.identifiers.uei}
                </div>
                <div className="text-sm text-neutral-700 font-bold">UEI NUMBER</div>
              </div>
              

            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-primary-700 to-secondary-700 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">{COMPANY_INFO.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-sm">{COMPANY_INFO.contact.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-large border border-neutral-200">
              <h3 className="text-2xl font-heading font-bold text-primary-900 mb-6">
                Why Choose Izy Global Services?
              </h3>
              
              <div className="space-y-4">
                {WHY_CHOOSE_US.map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-8 h-8 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg text-neutral-700 group-hover:text-primary-700 transition-colors duration-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <h4 className="text-lg font-semibold text-primary-900 mb-4">Certifications</h4>
                <div className="flex flex-wrap gap-3">
                  {COMPANY_INFO.certifications.map((cert, index) => (
                    <div key={index} className="inline-flex items-center px-3 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyOverview;