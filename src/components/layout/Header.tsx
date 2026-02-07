'use client';

/**
 * Header Component
 * Clean, minimal navigation header
 */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Container } from '@/components/ui';
import { cn } from '@/lib/utils';

const NAVIGATION = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-shadow duration-200',
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-11 lg:h-11 bg-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IZY</span>
            </div>
            <span className="text-primary-700 font-heading font-bold text-lg lg:text-xl">
              Izy Global Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'text-primary-700'
                    : 'text-neutral-600 hover:text-primary-600'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hidden md:inline-flex">
              <Button variant="primary" size="sm">
                Get Quote
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-700 hover:text-primary-700"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-neutral-200">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block py-2 text-base font-medium',
                  pathname === item.href
                    ? 'text-primary-700'
                    : 'text-neutral-700 hover:text-primary-600'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="block mt-4">
              <Button variant="primary" size="sm" className="w-full">
                Get Quote
              </Button>
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
