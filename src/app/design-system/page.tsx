/**
 * Design System Showcase
 * A page to demonstrate all design system components and styles
 * This is for development purposes and can be removed in production
 */

import { SPACING } from '@/lib/design-system';
import { getButtonClasses, getCardClasses } from '@/lib/theme';

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">
            Izy Global Services Design System
          </h1>
          <p className="text-lg text-neutral-600">
            A comprehensive design system for professional government contracting
          </p>
        </div>

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-navy-900 mb-8">Colors</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-navy-900 mb-4">Brand Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-full h-24 bg-navy-900 rounded-lg mb-3"></div>
                <h4 className="font-medium">Primary Navy</h4>
                <p className="text-sm text-neutral-600">#1e3a5f</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-red-700 rounded-lg mb-3"></div>
                <h4 className="font-medium">Secondary Red</h4>
                <p className="text-sm text-neutral-600">#c41230</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-gold-400 rounded-lg mb-3"></div>
                <h4 className="font-medium">Accent Gold</h4>
                <p className="text-sm text-neutral-600">#ffc107</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium text-navy-900 mb-4">Color Scales</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Primary Navy Scale</h4>
                <div className="flex rounded-lg overflow-hidden">
                  {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                    <div
                      key={shade}
                      className={`flex-1 h-16 bg-navy-${shade} flex items-end justify-center pb-2`}
                    >
                      <span className={`text-xs ${shade > 500 ? 'text-white' : 'text-navy-900'}`}>
                        {shade}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-navy-900 mb-8">Typography</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-navy-900 mb-4">Headings</h3>
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-navy-900">Heading 1</h1>
                <h2 className="text-4xl font-semibold text-navy-900">Heading 2</h2>
                <h3 className="text-3xl font-semibold text-navy-900">Heading 3</h3>
                <h4 className="text-2xl font-medium text-navy-900">Heading 4</h4>
                <h5 className="text-xl font-medium text-navy-900">Heading 5</h5>
                <h6 className="text-lg font-medium text-navy-900">Heading 6</h6>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-navy-900 mb-4">Body Text</h3>
              <div className="space-y-4">
                <p className="text-lg text-neutral-700">
                  Large body text - Perfect for introductions and important content.
                </p>
                <p className="text-base text-neutral-700">
                  Regular body text - The standard text size for most content on the website.
                </p>
                <p className="text-sm text-neutral-600">
                  Small text - Used for captions, labels, and secondary information.
                </p>
                <p className="text-xs text-neutral-500">
                  Extra small text - For fine print and minimal details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-navy-900 mb-8">Buttons</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-navy-900 mb-4">Button Variants</h3>
              <div className="flex flex-wrap gap-4">
                <button className={getButtonClasses('primary')}>
                  Primary Button
                </button>
                <button className={getButtonClasses('secondary')}>
                  Secondary Button
                </button>
                <button className={getButtonClasses('outline')}>
                  Outline Button
                </button>
                <button className={getButtonClasses('accent')}>
                  Accent Button
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-navy-900 mb-4">Button Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <button className={getButtonClasses('primary', 'sm')}>
                  Small Button
                </button>
                <button className={getButtonClasses('primary', 'md')}>
                  Medium Button
                </button>
                <button className={getButtonClasses('primary', 'lg')}>
                  Large Button
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-navy-900 mb-8">Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={getCardClasses('default')}>
              <div className="card-header">
                <h3 className="text-lg font-semibold">Default Card</h3>
              </div>
              <div className="card-body">
                <p className="text-neutral-600">
                  This is a default card with header, body, and footer sections.
                </p>
              </div>
              <div className="card-footer">
                <button className={getButtonClasses('primary', 'sm')}>
                  Action
                </button>
              </div>
            </div>
            
            <div className={getCardClasses('elevated', true)}>
              <div className="card-header">
                <h3 className="text-lg font-semibold">Elevated Card</h3>
              </div>
              <div className="card-body">
                <p className="text-neutral-600">
                  This card has elevated shadow and hover effects.
                </p>
              </div>
              <div className="card-footer">
                <button className={getButtonClasses('secondary', 'sm')}>
                  Action
                </button>
              </div>
            </div>
            
            <div className={getCardClasses('outlined', true)}>
              <div className="card-header">
                <h3 className="text-lg font-semibold">Outlined Card</h3>
              </div>
              <div className="card-body">
                <p className="text-neutral-600">
                  This card has a prominent border and hover effects.
                </p>
              </div>
              <div className="card-footer">
                <button className={getButtonClasses('outline', 'sm')}>
                  Action
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Forms Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-navy-900 mb-8">Form Elements</h2>
          
          <div className="max-w-2xl">
            <form className="space-y-6">
              <div className="form-group">
                <label className="form-label">Text Input</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your text here"
                />
                <p className="form-help">This is helper text for the input field.</p>
              </div>
              
              <div className="form-group">
                <label className="form-label">Select Dropdown</label>
                <select className="form-select">
                  <option>Choose an option</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Textarea</label>
                <textarea
                  className="form-textarea"
                  placeholder="Enter your message here"
                  rows={4}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Input with Error</label>
                <input
                  type="email"
                  className="form-input border-red-300 focus:border-red-500 focus:ring-red-500"
                  placeholder="invalid-email"
                />
                <p className="form-error">Please enter a valid email address.</p>
              </div>
            </form>
          </div>
        </section>

        {/* Spacing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-navy-900 mb-8">Spacing System</h2>
          
          <div className="space-y-4">
            <p className="text-neutral-600 mb-6">
              Our spacing system is based on an 8px grid for consistent layouts.
            </p>
            
            {Object.entries(SPACING).map(([size, value]) => (
              <div key={size} className="flex items-center space-x-4">
                <div className="w-16 text-sm font-mono">{size}</div>
                <div className="w-20 text-sm text-neutral-600">{value}</div>
                <div
                  className="bg-navy-900 h-4"
                  style={{ width: value }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Service Card Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-navy-900 mb-8">Service Card Example</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="service-card">
              <div className="service-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm6 16H8a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h2v1a1 1 0 0 0 2 0V9h2v12a1 1 0 0 1-1 1z"/>
                </svg>
              </div>
              <h3 className="service-title">Transportation & Logistics</h3>
              <p className="service-description">
                Comprehensive end-to-end logistics solutions with military precision.
              </p>
              <ul className="service-features">
                <li className="service-feature">Route optimization</li>
                <li className="service-feature">Fleet management</li>
                <li className="service-feature">Real-time tracking</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}