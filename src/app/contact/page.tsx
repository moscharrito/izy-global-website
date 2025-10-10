'use client';

/**
 * Contact Page
 * Contact information, form, and office details
 */
import React, { useState } from 'react';
import { Container, Button } from '@/components/ui';
import { COMPANY_INFO, OFFICE_HOURS } from '@/data/company';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    hearAboutUs: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        hearAboutUs: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
              <span className="text-accent-200 font-medium text-sm">Get In Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Let&rsquo;s Discuss Your
              <span className="block bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                Logistics Needs
              </span>
            </h1>
            
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              Ready to experience the difference that military precision and SDVOSB expertise can make? 
              Contact us today for a free consultation.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-large border border-neutral-200">
                <h2 className="text-3xl font-heading font-bold text-primary-900 mb-8">Send Us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-green-800">Thank you! Your message has been sent successfully. We&rsquo;ll get back to you soon.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <p className="text-red-800">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="form-label">Company/Organization</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="hearAboutUs" className="form-label">How did you hear about us?</label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Please select...</option>
                      <option value="google-search">Google Search</option>
                      <option value="referral">Referral</option>
                      <option value="sam-gov">SAM.gov</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="trade-show">Trade Show/Event</option>
                      <option value="government-contact">Government Contact</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="form-textarea"
                      placeholder="Please provide details about your logistics needs, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    loading={isSubmitting}
                    className="w-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Company Info */}
              <div className="bg-gradient-to-br from-primary-700 to-secondary-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center mr-4 mt-1">
                      <svg className="w-6 h-6 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent-200 mb-1">Address</h4>
                      <p className="text-neutral-200">
                        {COMPANY_INFO.address.street}<br />
                        {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zipCode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center mr-4 mt-1">
                      <svg className="w-6 h-6 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent-200 mb-1">Phone</h4>
                      <p className="text-neutral-200">{COMPANY_INFO.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center mr-4 mt-1">
                      <svg className="w-6 h-6 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent-200 mb-1">Email</h4>
                      <p className="text-neutral-200">{COMPANY_INFO.contact.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-large border border-neutral-200">
                <h3 className="text-xl font-heading font-bold text-primary-900 mb-4">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-neutral-700">Weekdays:</span>
                    <span className="font-medium text-primary-900">{OFFICE_HOURS.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-700">Weekend:</span>
                    <span className="font-medium text-primary-900">{OFFICE_HOURS.weekend}</span>
                  </div>
                  <div className="pt-3 border-t border-neutral-200">
                    <p className="text-sm text-neutral-600">{OFFICE_HOURS.timezone}</p>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-6 border border-accent-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-accent-800">Quick Response</h3>
                </div>
                <p className="text-accent-700 text-sm">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-6">Visit Our Office</h2>
            <p className="text-xl text-neutral-700">Located in the heart of Fort Worth, Texas</p>
          </div>
          
          <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl h-96 flex items-center justify-center border border-neutral-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Interactive Map</h3>
              <p className="text-neutral-600">Map integration coming soon</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}