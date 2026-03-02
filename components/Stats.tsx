'use client';

import React from 'react';

interface StatItemProps {
  number: string;
  label: string;
}

function StatItem({ number, label }: StatItemProps) {
  return (
    <div className="text-center p-6 border border-gray-100 rounded-xl">
      <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">{number}</h3>
      <p className="text-gray-600 text-sm md:text-base">{label}</p>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { number: '90%', label: 'Trust us for their next project' },
    { number: '200+', label: 'Building quality products' },
    { number: '2018', label: '6 years impactful experience' },
    { number: '80+', label: 'Outstanding product' },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
