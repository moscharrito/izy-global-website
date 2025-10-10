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
  const itService = SERVICES.find(service => service.id === 'it-services');

  if (!itService) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/30 rounded-full blur-2xl"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-accent-500/90 backdrop-blur-sm rounded-full border-2 border-accent-400 shadow-xl mb-6">
              <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-bold text-sm md:text-base">Technology Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-shadow-lg mb-6">
              <span className="block text-white drop-shadow-2xl">{itService.title}</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white font-bold leading-relaxed max-w-4xl mx-auto drop-shadow-lg mb-8">
              {itService.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="accent" 
                  className="text-primary-900 font-black text-lg px-8 py-4 shadow-2xl hover:shadow-accent-500/50 transform hover:scale-110 transition-all duration-300 border-2 border-accent-600"
                >
                  Request IT Consultation
                </Button>
              </Link>
              <Link href="/capabilities">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white font-black text-lg px-8 py-4 hover:bg-white hover:text-primary-900 shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all duration-300"
                >
                  View Our Capabilities
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Government IT Task Areas */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-primary-600 rounded-full mb-4 shadow-lg">
              <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
              <span className="text-white font-bold text-sm md:text-base">Government Contract Specializations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-primary-900 mb-4">
              Federal IT Service Task Areas
            </h2>
            <p className="text-lg text-neutral-800 font-semibold max-w-4xl mx-auto">
              {itService.detailedDescription}
            </p>
          </div>

          <div className="space-y-8">
            {GOVERNMENT_IT_TASK_AREAS.map((taskArea, index) => {
              const getTaskAreaIcon = (iconName: string) => {
                const icons = {
                  shield: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                  computer: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  ),
                  integration: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  ),
                  network: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  ),
                  telecommunications: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  ),
                  process: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  ),
                  'supply-chain': (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                    </svg>
                  ),
                };
                return icons[iconName as keyof typeof icons] || icons.computer;
              };

              const gradients = [
                'from-blue-600 to-blue-700',
                'from-red-600 to-red-700',
                'from-green-600 to-green-700',
                'from-purple-600 to-purple-700',
                'from-indigo-600 to-indigo-700',
                'from-orange-600 to-orange-700',
                'from-teal-600 to-teal-700',
              ];

              return (
                <div key={taskArea.id} className="bg-gradient-to-br from-white to-neutral-50 rounded-3xl shadow-2xl border-2 border-neutral-200 overflow-hidden hover:shadow-3xl hover:border-primary-300 transition-all duration-300">
                  <div className={`bg-gradient-to-r ${gradients[index]} p-6 text-white`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        {getTaskAreaIcon(taskArea.icon)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white/80 mb-1">{taskArea.taskArea}</div>
                        <h3 className="text-2xl font-black text-white">{taskArea.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/90 font-medium leading-relaxed">{taskArea.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Capabilities */}
                      <div>
                        <h4 className="text-lg font-black text-primary-900 mb-3">Core Capabilities</h4>
                        <ul className="space-y-2">
                          {taskArea.capabilities.slice(0, 4).map((capability, capIndex) => (
                            <li key={capIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-neutral-700 font-medium text-sm">{capability}</span>
                            </li>
                          ))}
                          {taskArea.capabilities.length > 4 && (
                            <li className="text-primary-600 font-bold text-sm">
                              +{taskArea.capabilities.length - 4} more capabilities
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Compliance */}
                      <div>
                        <h4 className="text-lg font-black text-primary-900 mb-3">Compliance & Standards</h4>
                        <div className="space-y-2">
                          {taskArea.compliance.map((comp, compIndex) => (
                            <div key={compIndex} className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-bold mr-2 mb-2">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {comp}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-primary-900 mb-6">
                Why Choose Our IT Services?
              </h2>
              <p className="text-lg text-neutral-800 font-semibold mb-8 leading-relaxed">
                Our IT services are designed to provide comprehensive technology solutions that enhance your business operations, 
                improve security, and ensure reliable performance across all your systems.
              </p>
              
              <div className="space-y-4">
                {itService.benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-neutral-800 font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-600 to-secondary-700 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-black mb-6">Ready to Modernize Your IT?</h3>
              <p className="text-neutral-200 font-medium mb-6 leading-relaxed">
                Contact us today to discuss your IT needs and learn how our comprehensive technology solutions 
                can help your organization achieve its goals.
              </p>
              <Link href="/contact">
                <Button 
                  variant="accent" 
                  size="lg"
                  className="text-primary-900 font-black shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-900 mb-4">
              Government Certifications & Compliance
            </h2>
            <p className="text-lg text-neutral-800 font-semibold max-w-3xl mx-auto">
              Our IT services meet the highest government standards for security, compliance, and quality assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {IT_CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border-2 border-primary-200 text-center hover:shadow-2xl hover:border-primary-300 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-black text-primary-900">{cert}</h3>
              </div>
            ))}
          </div>

          {/* Contract Vehicles */}
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-primary-200 p-8">
            <h3 className="text-2xl font-black text-primary-900 mb-6 text-center">Available Contract Vehicles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {IT_CONTRACT_VEHICLES.map((vehicle, index) => (
                <div key={index} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-200">
                  <h4 className="text-lg font-black text-primary-900 mb-2">{vehicle.name}</h4>
                  <p className="text-sm text-neutral-700 font-medium mb-3">{vehicle.description}</p>
                  <div className="space-y-1">
                    {vehicle.capabilities.map((cap, capIndex) => (
                      <div key={capIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-2"></div>
                        <span className="text-xs font-medium text-neutral-600">{cap}</span>
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
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-900 mb-4">
              Trusted by Government Agencies
            </h2>
            <p className="text-lg text-neutral-800 font-semibold max-w-3xl mx-auto">
              We proudly serve federal agencies and organizations with mission-critical IT solutions and support.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {GOVERNMENT_CLIENTS.map((client, index) => (
              <div key={index} className="bg-gradient-to-br from-neutral-50 to-white rounded-xl p-4 shadow-lg border border-neutral-200 text-center hover:shadow-xl hover:border-primary-300 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-primary-900 leading-tight">{client}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 via-secondary-700 to-primary-700 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Partner with IT Experts
            </h2>
            <p className="text-lg text-neutral-200 mb-8 max-w-2xl mx-auto font-medium">
              Let our experienced IT professionals help you build a robust, secure, and scalable technology infrastructure 
              that supports your business growth and success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="accent" 
                  className="text-primary-900 font-black shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary-900 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-black"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}