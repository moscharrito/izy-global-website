/**
 * About Us Page
 * Clean, minimal company overview
 */
import React from 'react';
import Link from 'next/link';
import { Container, Button } from '@/components/ui';
import { COMPANY_INFO, COMPANY_VALUES, MISSION_STATEMENT } from '@/data/company';
import { LEADERSHIP_TEAM } from '@/data/leadership';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-900 py-12 md:py-20">
        <Container className="text-center text-white">
          <span className="inline-block px-4 py-1.5 bg-accent-500 text-primary-900 text-xs font-bold rounded-full mb-6 uppercase tracking-wide">
            About Us
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Built on Military Values, Driven by Excellence
          </h1>
          <p className="text-base md:text-lg text-neutral-200 max-w-2xl mx-auto">
            {COMPANY_INFO.description}
          </p>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-4">Our Mission</h2>
            <p className="text-lg text-neutral-600 leading-relaxed italic">
              &ldquo;{MISSION_STATEMENT}&rdquo;
            </p>
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3">Leadership</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Led by experienced veterans who bring military precision and dedication to every mission.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {LEADERSHIP_TEAM.map((leader) => (
              <div key={leader.id} className="bg-white rounded-xl p-8 border border-neutral-200">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900">{leader.name}</h3>
                    <p className="text-accent-600 font-medium">{leader.title}</p>
                    <p className="text-sm text-neutral-500">{leader.militaryService}</p>
                  </div>
                </div>

                <p className="text-neutral-600 mb-6 leading-relaxed">{leader.biography}</p>

                <div>
                  <h4 className="text-sm font-semibold text-primary-900 mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {COMPANY_VALUES.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-700">{value.title[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">{value.title}</h3>
                <p className="text-sm text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary-900">
        <Container className="text-center text-white">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-neutral-200 mb-6 max-w-xl mx-auto">
            Experience the difference that military precision and veteran leadership can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="lg">
                Get Started
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">
                View Services
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
