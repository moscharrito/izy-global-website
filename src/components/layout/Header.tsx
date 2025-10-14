'use client';

/**
 * Header Component
 * Main site header with navigation and mobile menu
 */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Container } from '@/components/ui';
import { MAIN_NAVIGATION } from '@/data/navigation';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-white'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20 px-1 sm:px-0">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg lg:text-xl">IZY</span>
            </div>
            <div className="block">
              <div className="text-primary-700 font-heading font-bold text-sm sm:text-lg lg:text-xl leading-tight">
                Izy Global Services
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {MAIN_NAVIGATION.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200 hover:text-primary-600',
                    pathname === item.href
                      ? 'text-primary-700'
                      : 'text-neutral-700'
                  )}
                >
                  {item.label}
                </Link>

                {/* Dropdown Menu for Services */}
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link href="/contact" className="hidden md:inline-flex">
              <div className="flex items-center space-x-4">
                <span className="hidden md:inline-block" />
                <Button
                  variant="primary"
                  size="sm"
                >
                  Get Quote
                </Button>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-neutral-700 hover:text-primary-700 transition-colors duration-200 flex-shrink-0"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMobileMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0'
          )}
        >
          <nav className="py-4 border-t border-neutral-200">
            {MAIN_NAVIGATION.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block py-2 text-base font-medium transition-colors duration-200',
                    pathname === item.href
                      ? 'text-primary-700'
                      : 'text-neutral-700 hover:text-primary-600'
                  )}
                >
                  {item.label}
                </Link>

                {/* Mobile Submenu */}
                {item.children && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1 text-sm text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-neutral-200 pr-4">
              <Link href="/contact" className="block">
                <Button variant="primary" size="sm" className="w-full mr-4">
                  Get Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;