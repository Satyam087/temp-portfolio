'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black mb-4">
              TM
            </div>
            <p className="text-gray-600 text-sm">
              Creative product designer crafting meaningful digital experiences.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-black mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-black mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-black mb-4">Follow</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition text-sm">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">© 2025 Tarun Mittal. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-gray-600 hover:text-black transition text-xs sm:text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition text-xs sm:text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
