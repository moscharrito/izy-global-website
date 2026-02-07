/**
 * Capabilities Page
 * Clean overview of company capabilities, certifications, and past performance
 */
import React from 'react';
import Link from 'next/link';
import { Container, Button, PerformanceCard } from '@/components/ui';
import { SERVICES, CORE_CAPABILITIES } from '@/data/services';
import { COMPANY_INFO, CERTIFICATIONS } from '@/data/company';
import { PAST_PERFORMANCE, PERFORMANCE_SUMMARY } from '@/data/past-performance';

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-900 py-12 md:py-20">
        <Container className="text-center text-white">
          <span className="inline-block px-4 py-1.5 bg-accent-500 text-primary-900 text-xs font-bold rounded-full mb-6 uppercase tracking-wide">
            Capabilities
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Proven Capabilities for Mission Success
          </h1>
          <p className="text-base md:text-lg text-neutral-200 max-w-2xl mx-auto mb-8">
            Strategic consulting solutions backed by military precision,
            SDVOSB certification, and unwavering commitment to excellence.
          </p>
          <Link href="/contact">
            <Button variant="accent" size="lg">
              Request Capability Statement
            </Button>
          </Link>
        </Container>
      </section>

      {/* Core Capabilities */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3">Core Capabilities</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our comprehensive suite of consulting capabilities for strategic business transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {CORE_CAPABILITIES.map((capability) => (
              <div key={capability.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-primary-700 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                  <p className="text-neutral-200 text-sm">{capability.description}</p>
                </div>

                <div className="p-6">
                  <h4 className="text-sm font-semibold text-primary-900 mb-3">NAICS Codes</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {capability.naicsCodes?.map((code, index) => (
                      <span key={index} className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-sm">
                        {code}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-sm font-semibold text-primary-900 mb-3">Related Services</h4>
                  <div className="space-y-2">
                    {capability.services.map((serviceId, index) => {
                      const service = SERVICES.find(s => s.id === serviceId);
                      return service ? (
                        <div key={index} className="flex items-center text-sm text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></div>
                          {service.title}
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Business Identifiers */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3">Business Identifiers</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              All the information you need for government contracting and procurement processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-neutral-200 text-center">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">CAGE Code</h3>
              <div className="text-3xl font-bold text-primary-700 mb-1">{COMPANY_INFO.identifiers.cageCode}</div>
              <p className="text-sm text-neutral-500">Commercial and Government Entity</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-neutral-200 text-center">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">UEI Number</h3>
              <div className="text-2xl font-bold text-primary-700 mb-1">{COMPANY_INFO.identifiers.uei}</div>
              <p className="text-sm text-neutral-500">Unique Entity Identifier</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3">Certifications & Compliance</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We maintain the highest standards of certification and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900">{cert.name}</h3>
                    <span className="inline-block px-2 py-1 bg-accent-100 text-accent-800 rounded text-xs font-medium mt-1">
                      {cert.code}
                    </span>
                    <p className="text-neutral-600 text-sm mt-2">{cert.description}</p>
                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 text-sm font-medium hover:text-primary-700 mt-2 inline-block"
                      >
                        Verify →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Past Performance */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <Container>
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3">Past Performance</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
              Proven track record delivering high-quality services to federal, state, and private-sector clients.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg p-4 border border-neutral-200">
                <div className="text-2xl font-bold text-primary-700">{PERFORMANCE_SUMMARY.totalContracts}</div>
                <div className="text-sm text-neutral-600">Total Contracts</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-neutral-200">
                <div className="text-2xl font-bold text-primary-700">{PERFORMANCE_SUMMARY.federalContracts}</div>
                <div className="text-sm text-neutral-600">Federal</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-neutral-200">
                <div className="text-2xl font-bold text-primary-700">{PERFORMANCE_SUMMARY.stateContracts}</div>
                <div className="text-sm text-neutral-600">State</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-neutral-200">
                <div className="text-2xl font-bold text-accent-600">$1.3M+</div>
                <div className="text-sm text-neutral-600">Contract Value</div>
              </div>
            </div>
          </div>

          {/* Performance Cards */}
          <div className="grid lg:grid-cols-2 gap-6">
            {PAST_PERFORMANCE.map((performance) => (
              <PerformanceCard key={performance.id} performance={performance} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary-900">
        <Container className="text-center text-white">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-neutral-200 mb-6 max-w-xl mx-auto">
            Download our complete capability statement or contact us to discuss
            how our SDVOSB expertise can benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="lg">
                Download Capability Statement
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
