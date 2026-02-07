/**
 * Performance Card Component
 * Interactive card for displaying past performance details
 */

'use client';

import { useState } from 'react';
import type { PastPerformance } from '@/types';

interface PerformanceCardProps {
  performance: PastPerformance;
}

export function PerformanceCard({ performance }: PerformanceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getClientTypeColor = (type: string) => {
    switch (type) {
      case 'federal':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'state':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'private':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'equipment':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        );
      case 'services':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
          </svg>
        );
      case 'logistics':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
          </svg>
        );
      case 'transportation':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clipRule="evenodd" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 002 0V5a1 1 0 00-1-1zM6 7a1 1 0 011-1h3.5a1 1 0 01.83.44l1.5 2.17a1 1 0 01.17.56V15a1 1 0 01-1 1h-.5a2.5 2.5 0 01-4.9 0H7a1 1 0 01-1-1V7z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border-2 border-neutral-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-primary-300">
      {/* Card Header */}
      <div className="p-6 border-b border-neutral-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center text-white">
              {getCategoryIcon(performance.category)}
            </div>
            <div>
              <h3 className="text-xl font-black text-primary-900 leading-tight">
                {performance.title}
              </h3>
              {performance.contractNumber && (
                <p className="text-sm font-medium text-neutral-600">
                  Contract: {performance.contractNumber}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getClientTypeColor(performance.clientType)}`}>
              {performance.clientType.toUpperCase()}
            </span>
            <span className="text-sm font-bold text-accent-600">
              {performance.executionDate}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-lg font-bold text-neutral-800">{performance.client}</p>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {performance.description}
          </p>
          {performance.contractValue && (
            <div className="inline-flex items-center px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-bold">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {performance.contractValue}
            </div>
          )}
        </div>
      </div>

      {/* Expandable Content */}
      <div className="p-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between text-left hover:bg-neutral-50 rounded-lg p-3 transition-colors"
        >
          <span className="text-primary-700 font-bold">
            {isExpanded ? 'Hide Details' : 'View Details'}
          </span>
          <svg
            className={`w-5 h-5 text-primary-700 transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-6 animate-in slide-in-from-top-2 duration-300">
            {/* Scope of Work */}
            <div>
              <h4 className="text-lg font-bold text-primary-900 mb-3">Scope of Work</h4>
              <ul className="space-y-2">
                {performance.scope.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Outcomes */}
            {performance.keyOutcomes && performance.keyOutcomes.length > 0 && (
              <div>
                <h4 className="text-lg font-bold text-primary-900 mb-3">Key Outcomes</h4>
                <ul className="space-y-2">
                  {performance.keyOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700 font-medium">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-4">
              {performance.buyerRepresentative && (
                <div className="bg-neutral-50 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-primary-900 mb-2">Buyer Representative</h4>
                  <div className="space-y-1 text-sm">
                    <p className="font-bold text-neutral-800">{performance.buyerRepresentative.name}</p>
                    <p className="text-neutral-600">
                      <a href={`mailto:${performance.buyerRepresentative.email}`} className="hover:text-primary-600">
                        {performance.buyerRepresentative.email}
                      </a>
                    </p>
                    <p className="text-neutral-600">
                      <a href={`tel:${performance.buyerRepresentative.phone}`} className="hover:text-primary-600">
                        {performance.buyerRepresentative.phone}
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {performance.contractingOfficer && (
                <div className="bg-neutral-50 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-primary-900 mb-2">Contracting Officer</h4>
                  <div className="space-y-1 text-sm">
                    <p className="font-bold text-neutral-800">{performance.contractingOfficer.name}</p>
                    <p className="text-neutral-600">{performance.contractingOfficer.organization}</p>
                    <p className="text-neutral-600">
                      <a href={`tel:${performance.contractingOfficer.phone}`} className="hover:text-primary-600">
                        {performance.contractingOfficer.phone}
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Period of Performance */}
            {performance.periodOfPerformance && (
              <div className="bg-accent-50 rounded-xl p-4 border border-accent-200">
                <h4 className="text-sm font-bold text-accent-800 mb-1">Period of Performance</h4>
                <p className="text-accent-700 font-bold">{performance.periodOfPerformance}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}