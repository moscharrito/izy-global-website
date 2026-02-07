/**
 * Services Page
 * Clean overview of all services offered
 */
import React from 'react';
import Link from 'next/link';
import { Container, Button } from '@/components/ui';
import { SERVICES, SERVICE_AREAS } from '@/data/services';

export default function ServicesPage() {
  const getServiceIcon = (iconName: string) => {
    const icons = {
      strategy: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      'supply-chain': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      government: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      computer: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    };
    return icons[iconName as keyof typeof icons] || icons.strategy;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-900 py-12 md:py-20">
        <Container className="text-center text-white">
          <span className="inline-block px-4 py-1.5 bg-accent-500 text-primary-900 text-xs font-bold rounded-full mb-6 uppercase tracking-wide">
            Our Services
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Strategic Consulting Solutions
          </h1>
          <p className="text-base md:text-lg text-neutral-200 max-w-2xl mx-auto mb-8">
            Business transformation, operational excellence, and government contracting
            expertise delivered with military precision.
          </p>
          <Link href="/contact">
            <Button variant="accent" size="lg">
              Request Quote
            </Button>
          </Link>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="space-y-12 md:space-y-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <span className="text-sm font-medium text-accent-600 uppercase tracking-wide">
                    {service.category}
                  </span>
                  <h2 className="text-3xl font-heading font-bold text-primary-900 mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-primary-900 mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  {service.benefits && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-primary-900 mb-3">Benefits</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center text-sm text-neutral-600">
                            <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link href={`/services/${service.id}`}>
                    <Button variant="primary">
                      Learn More
                    </Button>
                  </Link>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-primary-700 rounded-xl p-12 text-white text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                      {getServiceIcon(service.icon)}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-neutral-200">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3">Service Areas</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We provide strategic consulting services across multiple regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICE_AREAS.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center border border-neutral-200">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-900">{area}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary-900">
        <Container className="text-center text-white">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-neutral-200 mb-6 max-w-xl mx-auto">
            Contact us to discuss your consulting needs and discover how our SDVOSB expertise
            can benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="lg">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">
                Learn About Us
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
