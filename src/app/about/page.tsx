/**
 * About Us Page
 * Company overview, leadership, mission, values, and certifications
 */
import React from 'react';
import Link from 'next/link';
import { Container, Button } from '@/components/ui';
import { COMPANY_INFO, COMPANY_VALUES, MISSION_STATEMENT, CERTIFICATIONS } from '@/data/company';
import { LEADERSHIP_TEAM, VETERAN_COMMITMENT } from '@/data/leadership';

export default function AboutPage() {
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
              <span className="text-accent-200 font-medium text-sm">About Our Company</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Built on Military Values,
              <span className="block bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                Driven by Excellence
              </span>
            </h1>
            
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="accent" 
                  className="text-primary-900 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Work With Us
                </Button>
              </Link>
              <Link href="/capabilities">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary-900 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  View Capabilities
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-8">Our Mission</h2>
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12 border border-primary-100">
              <p className="text-2xl text-primary-800 leading-relaxed italic font-medium">
                &ldquo;{MISSION_STATEMENT}&rdquo;
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Led by experienced veterans who bring military precision and dedication to every mission.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Leadership Profile */}
            <div className="order-2 lg:order-1">
              {LEADERSHIP_TEAM.map((leader) => (
                <div key={leader.id} className="bg-white rounded-3xl p-8 shadow-large border border-neutral-200">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-primary-900">{leader.name}</h3>
                      <p className="text-lg text-accent-600 font-medium">{leader.title}</p>
                      <p className="text-sm text-neutral-600">{leader.militaryService}</p>
                    </div>
                  </div>
                  
                  <p className="text-neutral-700 mb-6 leading-relaxed">{leader.biography}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-900 mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-neutral-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {leader.yearsOfExperience}+ Years of Experience
                  </div>
                </div>
              ))}
            </div>

            {/* Veteran Commitment */}
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-secondary-700 to-primary-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-heading font-bold mb-6">{VETERAN_COMMITMENT.title}</h3>
                <p className="text-neutral-200 mb-8 leading-relaxed">{VETERAN_COMMITMENT.description}</p>
                
                <div className="space-y-4">
                  {VETERAN_COMMITMENT.values.map((value, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every service we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_VALUES.map((value, index) => {
              const colors = [
                'from-primary-500 to-primary-700',
                'from-secondary-500 to-secondary-700',
                'from-accent-500 to-accent-600',
                'from-primary-600 to-secondary-600',
              ];
              const bgColors = [
                'bg-primary-50 border-primary-200',
                'bg-secondary-50 border-secondary-200',
                'bg-accent-50 border-accent-200',
                'bg-neutral-50 border-neutral-200',
              ];
              
              return (
                <div key={index} className={`group rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${bgColors[index % bgColors.length]}`}>
                  <div className={`bg-gradient-to-r ${colors[index % colors.length]} p-6 text-white`}>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold">{value.title[0]}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold">{value.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-neutral-700 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-6">Certifications & Compliance</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              We maintain the highest standards of certification and compliance to serve our government and commercial clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-large border border-neutral-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-900 mb-3">{cert.name}</h3>
                <p className="text-neutral-700 mb-4">{cert.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">
                  {cert.code}
                </div>
              </div>
            ))}
          </div>

          {/* Business Identifiers */}
          <div className="mt-16 bg-gradient-to-r from-primary-700 to-secondary-700 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-heading font-bold mb-6">Business Identifiers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-2">{COMPANY_INFO.identifiers.cageCode}</div>
                <div className="text-neutral-200">CAGE Code</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-2">{COMPANY_INFO.identifiers.uei}</div>
                <div className="text-neutral-200">UEI Number</div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
              Experience the difference that military precision and veteran leadership can make for your logistics needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary" className="shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}