/**
 * Capabilities Page
 * Detailed overview of company capabilities, certifications, and past performance
 */
import React from 'react';
import Link from 'next/link';
import { Container, Button, PerformanceCard } from '@/components/ui';
import { SERVICES, CORE_CAPABILITIES } from '@/data/services';
import { COMPANY_INFO, CERTIFICATIONS } from '@/data/company';
import { PAST_PERFORMANCE, PERFORMANCE_SUMMARY, CLIENT_TESTIMONIALS } from '@/data/past-performance';

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 backdrop-blur-sm rounded-full border border-accent-500/30 mb-8">
              <div className="w-3 h-3 bg-accent-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-accent-200 font-medium text-sm">Our Capabilities</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Proven Capabilities for
              <span className="block bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                Mission Success
              </span>
            </h1>
            
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              Comprehensive logistics and transportation solutions backed by military precision, 
              SDVOSB certification, and unwavering commitment to excellence.
            </p>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="accent" 
                className="text-primary-900 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Request Capability Statement
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-6">Core Capabilities</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Our comprehensive suite of capabilities spans the entire logistics and transportation spectrum.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {CORE_CAPABILITIES.map((capability, index) => {
              const colors = [
                'from-primary-500 to-primary-700',
                'from-secondary-500 to-secondary-700',
                'from-accent-500 to-accent-600',
              ];
              
              return (
                <div key={capability.id} className="bg-white rounded-3xl shadow-large border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className={`bg-gradient-to-r ${colors[index % colors.length]} p-8 text-white`}>
                    <h3 className="text-2xl font-heading font-bold mb-4">{capability.title}</h3>
                    <p className="text-neutral-200">{capability.description}</p>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-lg font-semibold text-primary-900 mb-4">NAICS Codes</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {capability.naicsCodes?.map((code, codeIndex) => (
                        <span key={codeIndex} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                          {code}
                        </span>
                      ))}
                    </div>
                    
                    <h4 className="text-lg font-semibold text-primary-900 mb-4">Related Services</h4>
                    <div className="space-y-2">
                      {capability.services.map((serviceId, serviceIndex) => {
                        const service = SERVICES.find(s => s.id === serviceId);
                        return service ? (
                          <div key={serviceIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                            <span className="text-neutral-700">{service.title}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Business Identifiers */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-6">Business Identifiers</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              All the information you need for government contracting and procurement processes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-large border border-neutral-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary-900 mb-3">CAGE Code</h3>
              <div className="text-3xl font-bold text-accent-600 mb-2">{COMPANY_INFO.identifiers.cageCode}</div>
              <p className="text-neutral-600">Commercial and Government Entity Code</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-large border border-neutral-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary-900 mb-3">UEI Number</h3>
              <div className="text-3xl font-bold text-accent-600 mb-2">{COMPANY_INFO.identifiers.uei}</div>
              <p className="text-neutral-600">Unique Entity Identifier</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-large border border-neutral-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary-900 mb-3">EIN</h3>
              <div className="text-3xl font-bold text-accent-600 mb-2">{COMPANY_INFO.identifiers.ein}</div>
              <p className="text-neutral-600">Employer Identification Number</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-6">Certifications & Compliance</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              We maintain the highest standards of certification and compliance to serve our clients effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 border border-primary-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-primary-900">{cert.name}</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mt-2">
                      {cert.code}
                    </div>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4">{cert.description}</p>
                {cert.verificationUrl && (
                  <a 
                    href={cert.verificationUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Verify Certification
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Past Performance Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-primary-600 rounded-full mb-4 shadow-lg">
              <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
              <span className="text-white font-bold text-sm md:text-base">Proven Track Record</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-900 mb-4 leading-tight">
              Past Performance Excellence
            </h2>
            <p className="text-lg md:text-xl text-neutral-800 font-semibold max-w-4xl mx-auto leading-relaxed mb-8">
              IZY Global Services LLC has consistently demonstrated the ability to deliver high-quality services 
              to a variety of federal, state, and private-sector clients. Below is a summary of our past performance, 
              highlighting our expertise in managing complex contracts and meeting client expectations.
            </p>

            {/* Performance Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-4 text-white shadow-lg">
                <div className="text-2xl md:text-3xl font-black text-accent-400 mb-1">
                  {PERFORMANCE_SUMMARY.totalContracts}
                </div>
                <div className="text-sm font-bold">Total Contracts</div>
              </div>
              <div className="bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-xl p-4 text-white shadow-lg">
                <div className="text-2xl md:text-3xl font-black text-accent-400 mb-1">
                  {PERFORMANCE_SUMMARY.federalContracts}
                </div>
                <div className="text-sm font-bold">Federal Contracts</div>
              </div>
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl p-4 text-white shadow-lg">
                <div className="text-2xl md:text-3xl font-black text-primary-900 mb-1">
                  {PERFORMANCE_SUMMARY.stateContracts}
                </div>
                <div className="text-sm font-bold text-primary-900">State Contracts</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white shadow-lg">
                <div className="text-lg md:text-xl font-black text-white mb-1">
                  $1.3M+
                </div>
                <div className="text-sm font-bold">Contract Value</div>
              </div>
            </div>
          </div>

          {/* Performance Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {PAST_PERFORMANCE.map((performance) => (
              <PerformanceCard key={performance.id} performance={performance} />
            ))}
          </div>

          {/* Client Testimonials */}
          {CLIENT_TESTIMONIALS.length > 0 && (
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-primary-200 p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-primary-900 mb-4">Client Testimonials</h3>
                <p className="text-neutral-700 font-semibold">What our clients say about our performance</p>
              </div>
              
              <div className="space-y-6">
                {CLIENT_TESTIMONIALS.map((testimonial, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <blockquote className="text-lg font-semibold text-neutral-800 italic mb-3">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <div className="font-bold text-primary-900">{testimonial.representative}</div>
                            <div className="text-sm text-neutral-600">{testimonial.client}</div>
                          </div>
                          <div className="text-sm font-medium text-accent-600 mt-2 sm:mt-0">
                            Project: {testimonial.project}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 via-secondary-700 to-primary-700 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
              Download our complete capability statement or contact us to discuss 
              how our SDVOSB expertise can benefit your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="accent" 
                  className="text-primary-900 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Download Capability Statement
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary-900 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}