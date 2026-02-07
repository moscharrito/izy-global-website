/**
 * Hero Section Component
 * Clean, minimal homepage hero with clear value proposition
 */
import React from 'react';
import Link from 'next/link';
import { Button, Container } from '@/components/ui';

const Hero: React.FC = () => {
  return (
    <section className="bg-primary-900 py-16 md:py-20 lg:py-24">
      <Container className="text-center text-white">
        <div className="max-w-3xl mx-auto">
          {/* SDVOSB Badge */}
          <span className="inline-block px-4 py-1.5 bg-accent-500 text-primary-900 text-xs font-bold rounded-full mb-6 uppercase tracking-wide">
            SDVOSB Certified
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 leading-tight">
            Strategic Business Consulting & Transformation
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Driving organizational transformation through proven methodologies,
            technology expertise, and veteran-led excellence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="lg">
                Get Started
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
