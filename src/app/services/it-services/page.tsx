/**
 * IT Services Page
 * Detailed information about government IT services and technology solutions
 */
import React from 'react';
import Link from 'next/link';
import { Container, Button } from '@/components/ui';
import { SERVICES } from '@/data/services';
import { GOVERNMENT_IT_TASK_AREAS, IT_CERTIFICATIONS, GOVERNMENT_CLIENTS, IT_CONTRACT_VEHICLES } from '@/data/government-it-services';

export default function ITServicesPage() {
  const itService = SERVICES.find(service => service.id === 'technology-strategy-consulting');

  if (!itService) {
    return <div>Service not found</div>;
  }

  const getTaskAreaIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      shield: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      computer: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      integration: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      network: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      telecommunications: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      process: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      'supply-chain': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    };
    return icons[iconName] || icons.computer;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-900 py-12 md:py-20">
        <Container className="text-center text-white">
          <span className="inline-block px-4 py-1.5 bg-accent-500 text-primary-900 text-xs font-bold rounded-full mb-6 uppercase tracking-wide">
            Technology Solutions
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 leading-tight">
            {itService.title}
          </h1>
          <p className="text-base md:text-lg text-neutral-200 max-w-2xl mx-auto mb-8">
            {itService.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="lg">Request IT Consultation</Button>
            </Link>
            <Link href="/capabilities">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">
                View Our Capabilities
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Government IT Task Areas */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3">
              Federal IT Service Task Areas
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              {itService.detailedDescription}
            </p>
          </div>

          <div className="space-y-6">
            {GOVERNMENT_IT_TASK_AREAS.map((taskArea) => (
              <div key={taskArea.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-primary-700 p-5 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      {getTaskAreaIcon(taskArea.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-neutral-300 uppercase tracking-wide">{taskArea.taskArea}</span>
                      <h3 className="text-lg font-bold">{taskArea.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-neutral-600 text-sm mb-4">{taskArea.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-primary-900 mb-2">Core Capabilities</h4>
                      <ul className="space-y-1">
                        {taskArea.capabilities.slice(0, 4).map((capability, i) => (
                          <li key={i} className="flex items-center text-sm text-neutral-600">
                            <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2 flex-shrink-0"></div>
                            {capability}
                          </li>
                        ))}
                        {taskArea.capabilities.length > 4 && (
                          <li className="text-sm text-primary-600 font-medium">
                            +{taskArea.capabilities.length - 4} more
                          </li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary-900 mb-2">Compliance</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {taskArea.compliance.map((comp, i) => (
                          <span key={i} className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Our IT services provide comprehensive technology solutions that enhance your operations,
                improve security, and ensure reliable performance across all your systems.
              </p>
              <div className="space-y-3">
                {itService.benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm text-neutral-600">
                    <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-900 rounded-xl p-6 md:p-8 text-white">
              <h3 className="text-lg font-heading font-bold mb-4">Ready to Modernize Your IT?</h3>
              <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
                Contact us today to discuss your IT needs and learn how our comprehensive technology solutions
                can help your organization achieve its goals.
              </p>
              <Link href="/contact">
                <Button variant="accent" size="lg">Get Started Today</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3">
              Certifications & Compliance
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our IT services meet the highest government standards for security, compliance, and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {IT_CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-5 border border-neutral-200 text-center">
                <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-primary-900">{cert}</h3>
              </div>
            ))}
          </div>

          {/* Contract Vehicles */}
          <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <h3 className="text-lg font-heading font-bold text-primary-900 mb-4 text-center">Available Contract Vehicles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {IT_CONTRACT_VEHICLES.map((vehicle, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-neutral-200">
                  <h4 className="font-semibold text-primary-900 mb-1">{vehicle.name}</h4>
                  <p className="text-xs text-neutral-600 mb-3">{vehicle.description}</p>
                  <div className="space-y-1">
                    {vehicle.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></div>
                        <span className="text-xs text-neutral-600">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Government Clients */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3">
              Trusted by Government Agencies
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We serve federal agencies with mission-critical IT solutions and support.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GOVERNMENT_CLIENTS.map((client, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-neutral-200 text-center">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xs font-semibold text-primary-900">{client}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary-900">
        <Container className="text-center text-white">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Partner with IT Experts
          </h2>
          <p className="text-neutral-200 mb-6 max-w-xl mx-auto">
            Let our experienced IT professionals help you build secure, scalable technology
            infrastructure that supports your mission success.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="lg">Schedule Consultation</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">
                View All Services
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
