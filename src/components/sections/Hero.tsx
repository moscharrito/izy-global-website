/**
 * Hero Section Component
 * Main homepage hero with background, tagline, and CTAs
 */
import React from 'react';
import Link from 'next/link';
import { Button, Container } from '@/components/ui';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-secondary-700">
        {/* Animated Background Elements - Reduced size and opacity */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-primary-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center text-white py-8">
        <div className="max-w-5xl mx-auto">
          {/* SDVOSB Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-accent-500/25 backdrop-blur-sm rounded-full border border-accent-500/40 mb-6">
            <div className="w-3 h-3 bg-accent-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-accent-100 font-bold text-sm tracking-wide">
              SERVICE-DISABLED VETERAN-OWNED SMALL BUSINESS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-4 leading-none">
            <span className="block text-white drop-shadow-lg">DELIVERING EXCELLENCE</span>
            <span className="block bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent drop-shadow-lg">
              THROUGH SERVICE
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-neutral-100 mb-6 leading-relaxed max-w-4xl mx-auto font-semibold">
            Professional transportation, logistics, IT Services and government contract support services 
            backed by military precision and unwavering commitment to excellence.
          </p>

          {/* Mission Statement */}
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 mb-8 border border-white/25 max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-white font-medium italic">
              &ldquo;Empowering success through reliable consultancy, innovative solutions and dedicated service, 
              one mission at a time.&rdquo;
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/capabilities">
              <Button 
                size="lg" 
                variant="accent" 
                className="text-primary-900 font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 px-8 py-4"
              >
                VIEW OUR CAPABILITIES
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-900 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 px-8 py-4 font-bold"
              >
                CONTACT US TODAY
              </Button>
            </Link>
          </div>

          {/* Trust Indicators - Improved spacing and visibility */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="w-12 h-12 bg-accent-500/30 rounded-full flex items-center justify-center mx-auto mb-2 border border-accent-400/50">
                <svg className="w-6 h-6 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-sm font-bold text-accent-200">SDVOSB</div>
              <div className="text-xs text-neutral-300 font-medium">Certified</div>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="w-12 h-12 bg-accent-500/30 rounded-full flex items-center justify-center mx-auto mb-2 border border-accent-400/50">
                <svg className="w-6 h-6 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm font-bold text-accent-200">SAM.gov</div>
              <div className="text-xs text-neutral-300 font-medium">Registered</div>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="w-12 h-12 bg-accent-500/30 rounded-full flex items-center justify-center mx-auto mb-2 border border-accent-400/50">
                <svg className="w-6 h-6 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-sm font-bold text-accent-200">GSA</div>
              <div className="text-xs text-neutral-300 font-medium">Schedules</div>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="w-12 h-12 bg-accent-500/30 rounded-full flex items-center justify-center mx-auto mb-2 border border-accent-400/50">
                <svg className="w-6 h-6 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-sm font-bold text-accent-200">BONDED</div>
              <div className="text-xs text-neutral-300 font-medium">& Insured</div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;