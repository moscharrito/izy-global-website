/**
 * Careers Page
 * Job opportunities, company culture, and benefits
 */
import React from 'react';
import Link from 'next/link';
import { Container, Button } from '@/components/ui';

const benefits = [
  {
    title: 'Competitive Compensation',
    description: 'We offer competitive salaries and performance-based bonuses.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: 'Professional Development',
    description: 'Training opportunities and career advancement programs.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible schedules and remote work opportunities.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: 'Veteran Support',
    description: 'Special programs and support for military veterans.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: 'Growth Opportunities',
    description: 'Room for advancement in a growing company.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
      </svg>
    ),
  },
];

const cultureValues = [
  'Mission-First Mentality',
  'Team Collaboration',
  'Continuous Learning',
  'Integrity & Ethics',
  'Innovation & Excellence',
  'Veteran Camaraderie',
];

export default function CareersPage() {
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
              <span className="text-accent-200 font-medium text-sm">Join Our Team</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Build Your Career with
              <span className="block bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                Military Precision
              </span>
            </h1>
            
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              Join a team where military values meet modern logistics excellence. We&rsquo;re looking for 
              dedicated professionals who share our commitment to service and excellence.
            </p>
            
            <Link href="#openings">
              <Button 
                size="lg" 
                variant="accent" 
                className="text-primary-900 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                View Open Positions
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-6">Our Culture</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Built on military values and driven by excellence, our culture fosters growth, 
              teamwork, and mission success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureValues.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 text-center border border-primary-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-900">{value}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-6">Benefits & Perks</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              We believe in taking care of our team members with comprehensive benefits 
              and opportunities for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-large border border-neutral-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-900 mb-3">{benefit.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Veteran Hiring Preference */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <Container>
          <div className="text-center">
            <div className="w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h2 className="text-4xl font-heading font-bold mb-6">Veteran Hiring Preference</h2>
            <p className="text-xl text-neutral-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              As a Service-Disabled Veteran-Owned Small Business, we understand the value that 
              military experience brings to the workplace. We actively seek to hire veterans 
              and provide them with opportunities to continue their service in the civilian sector.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">Priority</div>
                <div className="text-neutral-200">Veteran Applications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">Mentorship</div>
                <div className="text-neutral-200">Transition Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">Growth</div>
                <div className="text-neutral-200">Leadership Opportunities</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Current Openings */}
      <section id="openings" className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-6">Current Openings</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              We&rsquo;re always looking for talented individuals to join our growing team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-neutral-50 to-white rounded-3xl p-12 text-center border border-neutral-200">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-primary-900 mb-4">
                No Current Openings
              </h3>
              <p className="text-lg text-neutral-700 mb-8">
                While we don&rsquo;t have any specific positions open at the moment, we&rsquo;re always 
                interested in connecting with talented professionals. Send us your resume and 
                we&rsquo;ll keep you in mind for future opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="primary" 
                    className="shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Submit Your Resume
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Get Job Alerts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-6">Application Process</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Our streamlined application process is designed to identify the best candidates 
              while respecting your time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Apply',
                description: 'Submit your resume and cover letter through our contact form.',
              },
              {
                step: '2',
                title: 'Review',
                description: 'Our team reviews your application and qualifications.',
              },
              {
                step: '3',
                title: 'Interview',
                description: 'Phone or video interview with our hiring team.',
              },
              {
                step: '4',
                title: 'Decision',
                description: 'We make our decision and extend an offer to the right candidate.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-900 mb-3">{item.title}</h3>
                <p className="text-neutral-700">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}