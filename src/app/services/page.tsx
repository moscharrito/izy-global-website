/**
 * Services Page
 * Comprehensive overview of all services offered
 */
import React from 'react';
import Link from 'next/link';
import { Container, Button } from '@/components/ui';
import { SERVICES, SERVICE_AREAS } from '@/data/services';

export default function ServicesPage() {
  const getServiceIcon = (iconName: string) => {
    const icons = {
      truck: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM6 9.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1z" clipRule="evenodd" />
        </svg>
      ),
      shipping: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414L15.414 8H16a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h4a1 1 0 000 2H4v12h12v-6H8z" />
        </svg>
      ),
      government: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      ),
      'supply-chain': (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
    };
    return icons[iconName as keyof typeof icons] || icons.truck;
  };

  const getCardGradient = (index: number) => {
    const gradients = [
      'from-primary-500 to-primary-700',
      'from-secondary-500 to-secondary-700', 
      'from-accent-500 to-accent-600',
      'from-primary-600 to-secondary-600',
    ];
    return gradients[index % gradients.length];
  };

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
              <span className="text-accent-200 font-medium text-sm">Our Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Comprehensive Solutions for
              <span className="block bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                Every Mission
              </span>
            </h1>
            
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              From transportation and logistics to government contract support, we deliver 
              mission-critical services with military precision and unwavering reliability.
            </p>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="accent" 
                className="text-primary-900 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Request Quote
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
        <Container>
          <div className="grid gap-16">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Service Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-6">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    <span className="text-primary-700 font-medium text-sm capitalize">{service.category}</span>
                  </div>
                  
                  <h2 className="text-4xl font-heading font-bold text-primary-900 mb-6">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-900 mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                          <span className="text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-900 mb-4">Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits?.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <svg className="w-5 h-5 text-accent-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-neutral-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={`/services/${service.id}`}>
                    <Button variant="primary" className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Learn More About {service.title}
                    </Button>
                  </Link>
                </div>

                {/* Service Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`bg-gradient-to-br ${getCardGradient(index)} rounded-3xl p-12 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        {getServiceIcon(service.icon)}
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                      <p className="text-lg opacity-90">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-6">Service Areas</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              We provide comprehensive logistics and transportation services across multiple regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_AREAS.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 text-center border border-primary-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-900">{area}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <Container>
          <div className="bg-gradient-to-r from-primary-700 via-secondary-700 to-primary-700 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-accent-500 rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent-500 rounded-full translate-x-30 translate-y-30"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your logistics needs and discover how our SDVOSB expertise 
                can benefit your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="accent" 
                    className="text-primary-900 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/about">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary-900 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Learn About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}