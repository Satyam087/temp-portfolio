'use client';

import React from 'react';

interface PricingPlanProps {
  type: 'personal' | 'business';
  title: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
}

function PricingCard({ type, title, price, period, features, featured }: PricingPlanProps) {
  const bgColor = featured ? 'bg-black text-white' : 'bg-white border border-gray-200';
  const buttonColor = featured ? 'bg-white text-black hover:bg-gray-100' : 'bg-white text-black border border-gray-300 hover:border-gray-500';

  return (
    <div className={`rounded-xl p-8 transition transform ${bgColor} ${featured ? 'shadow-xl' : ''}`}>
      <div className="flex items-center gap-2 mb-4">
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${featured ? 'bg-white text-black' : 'bg-yellow-300 text-black'}`}>
          {type === 'personal' ? 'For Personal' : 'For Business'}
        </span>
      </div>

      <h3 className={`text-2xl font-bold mb-2 ${featured ? 'text-white' : 'text-black'}`}>{title}</h3>

      <div className="mb-6">
        <span className={`text-4xl font-bold ${featured ? 'text-white' : 'text-black'}`}>$ {price}</span>
        <span className={featured ? 'text-gray-300' : 'text-gray-600'}> {period}</span>
      </div>

      <p className={`text-sm mb-6 ${featured ? 'text-gray-300' : 'text-gray-600'}`}>
        {type === 'business'
          ? 'Plan includes in-depth strategy Design & development'
          : 'Certification'}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className={`w-5 h-5 rounded flex items-center justify-center ${featured ? 'bg-white text-black' : 'bg-gray-200 text-gray-700'}`}>
              ✓
            </span>
            <span className={`text-sm ${featured ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-3 font-semibold rounded-lg transition ${buttonColor}`}>
        {type === 'personal' ? 'Get Started' : 'Get Started'}
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Pricing plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pricing plans are designed with clarity and flexibility in mind — completely transparent, with no hidden fees.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PricingCard
            type="personal"
            title="Standard"
            price="99"
            period="USD. Onetime Payment"
            features={[
              'Certification',
              'Unlimited revisions & source file',
              'Unlimited brands & stock assets',
              'Slack channel for extra support',
            ]}
          />

          <PricingCard
            type="business"
            title="Business"
            price="2,940"
            period="USD. Monthly Payment"
            features={[
              'Design & full Development Support',
              'Unlimited revisions & source file',
              'Unlimited brands & stock assets',
              'Slack channel for extra support',
            ]}
            featured
          />
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-black mb-2">48%</p>
              <p className="text-gray-600 text-sm">Notification</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-black mb-2">32%</p>
              <p className="text-gray-600 text-sm">Conversion</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-black mb-2">22%</p>
              <p className="text-gray-600 text-sm">Engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
