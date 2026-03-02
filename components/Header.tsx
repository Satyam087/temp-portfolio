'use client';

import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black">
              TM
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-black transition font-medium">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-black transition font-medium">
              Project
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-black transition font-medium">
              Pricing
            </a>
            <a href="#services" className="text-gray-700 hover:text-black transition font-medium">
              Store
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button className="hidden md:flex items-center justify-center p-2 text-gray-700 hover:text-black transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                />
              </svg>
            </button>
            <button className="hidden sm:block px-4 py-2 text-sm font-semibold text-white bg-black rounded-lg hover:bg-gray-900 transition">
              Hire Me!
            </button>
            {/* Mobile menu button */}
            <button className="sm:hidden p-2 text-gray-700 hover:text-black transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
