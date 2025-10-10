/**
 * Core Capabilities Section
 * Preview of main service capabilities with colorful cards
 */
import React from 'react';
import Link from 'next/link';
import { Button, Container } from '@/components/ui';
import { SERVICES } from '@/data/services';

const CoreCapabilities: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    const icons = {
      truck: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM6 9.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1z" clipRule="evenodd" />
        </svg>
      ),
      shipping: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414L15.414 8H16a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h4a1 1 0 000 2H4v12h12v-6H8z" />
        </svg>
      ),
      government: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      ),
      'supply-chain': (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
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

  const getCardBg = (index: number) => {
    const backgrounds = [
      'bg-primary-50 border-primary-200',
      'bg-secondary-50 border-secondary-200',
      'bg-accent-50 border-accent-200',
      'bg-neutral-50 border-neutral-200',
    ];
    return backgrounds[index % backgrounds.length];
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white to-neutral-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-accent-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-accent-600 rounded-full mr-2"></div>
            <span className="text-accent-800 font-medium text-sm">Our Core Capabilities</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-black text-primary-900 mb-4">
            COMPREHENSIVE SOLUTIONS FOR
            <span className="block bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">
              EVERY MISSION
            </span>
          </h2>
          
          <p className="text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed font-semibold">
            From transportation and logistics to government contract support, we deliver 
            mission-critical services with military precision and unwavering reliability.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${getCardBg(index)}`}
            >
              {/* Card Header with Icon */}
              <div className={`bg-gradient-to-r ${getCardGradient(index)} p-6 text-white relative`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-lg font-heading font-black mb-2 leading-tight">
                    {service.title.toUpperCase()}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-neutral-800 mb-4 leading-relaxed font-semibold">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-sm text-neutral-500 italic">
                      +{service.features.length - 3} more capabilities
                    </li>
                  )}
                </ul>

                {/* Learn More Link */}
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-700 via-secondary-700 to-primary-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-accent-500 rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent-500 rounded-full translate-x-30 translate-y-30"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
                Let us show you how our SDVOSB expertise and military precision 
                can transform your logistics and transportation challenges.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <Button 
                    size="lg" 
                    variant="accent" 
                    className="text-primary-900 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Explore All Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary-900 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Request Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CoreCapabilities;