/**
 * Core Capabilities Section
 * Clean, compact service capability cards
 */
import React from 'react';
import Link from 'next/link';
import { Button, Container } from '@/components/ui';
import { SERVICES } from '@/data/services';

const CoreCapabilities: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      strategy: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      'supply-chain': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      government: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      computer: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    };
    return icons[iconName] || icons.strategy;
  };

  return (
    <section className="py-12 md:py-16 bg-neutral-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3">
            Our Capabilities
          </h2>
          <p className="text-neutral-600 max-w-xl mx-auto">
            Comprehensive consulting solutions for business transformation and government contracting.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-lg border border-neutral-200 p-5 hover:border-primary-300 hover:shadow-sm transition-all"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-3 text-primary-700 group-hover:bg-primary-700 group-hover:text-white transition-colors">
                {getServiceIcon(service.icon)}
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-primary-900 mb-2 leading-tight">
                {service.title}
              </h3>

              {/* Description - truncated */}
              <p className="text-neutral-600 text-sm leading-relaxed mb-3 line-clamp-2">
                {service.description}
              </p>

              {/* Link */}
              <Link
                href="/services"
                className="text-primary-600 text-sm font-medium hover:text-primary-700 inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button variant="primary">
              View All Services
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CoreCapabilities;
