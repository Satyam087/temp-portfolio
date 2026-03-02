'use client';

import React from 'react';

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Visual */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="bg-yellow-300 rounded-full w-full aspect-square flex items-center justify-center relative">
                {/* Center Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    <div className="text-3xl md:text-4xl font-bold text-black mb-2">Tools</div>
                    <div className="text-gray-600 text-sm font-medium">Performance</div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 text-2xl">{'</>'}</div>
                <div className="absolute bottom-8 right-8 text-2xl">{'<>'}</div>
                <div className="absolute top-1/4 right-8 w-8 h-8 bg-orange-400 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Blending aesthetic vision with
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-6">
              user-centered strategies to <span className="text-gray-300">create</span>
            </h2>

            <p className="text-gray-600 text-base mb-4 leading-relaxed">
              digital experiences that engage and resonate deeply.
            </p>

            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              I'm passionate and creative — with a strong background in user experience design. I have a talent for creating engaging and beautiful digital products that meet the needs of users.
            </p>

            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              My design process is driven by a user-centric approach, through research and testing to ensure that every product is optimised for the end user.
            </p>

            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition text-sm sm:text-base">
                About Me
              </button>
              <button className="px-6 py-3 bg-orange-400 text-black font-semibold rounded-lg hover:bg-orange-500 transition text-sm sm:text-base">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
