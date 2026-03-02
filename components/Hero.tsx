'use client';

import React, { useState, useEffect } from 'react';

const roles = [
  'Product Designer',
  'UX Specialist',
  'Creative Thinker',
  'Visual Storyteller',
];

function TypingAnimation() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (!isDeleting && charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }, [charIndex, isDeleting, currentRoleIndex]);

  return (
    <span className="hero-typing-text">
      {displayedText}
      <span className="hero-cursor">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Top decorative dotted line */}
      <div className="hero-dotted-line-top" />

      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-left">
            {/* Left vertical dotted line decoration */}
            <div className="hero-dotted-vertical-left" />

            {/* Badge */}
            <div className="hero-badge">
              <span className="hero-badge-wave">👋</span>
              Hi, Tarun Mittal Here
            </div>

            {/* Headline */}
            <h1 className="hero-headline">
              A <span className="hero-highlight"><TypingAnimation /></span>{' '}
              who creates experiences that are meant to be lived.
            </h1>

            {/* Description */}
            <p className="hero-description">
              Currently a Senior Product Designer at New York, USA,
              crafting the design and user experience for native products
              Designer at New York, USA.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">
              <button className="hero-btn-primary">
                Hire Me!
              </button>
              <button className="hero-btn-secondary">
                See My Portfolio
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="hero-right">
            {/* Vertical solid line left of image area */}
            <div className="hero-solid-line-left" />

            {/* Status Badge */}
            <div className="hero-status-badge">
              <div className="hero-status-dot" />
              <span>Available for work</span>
            </div>

            {/* Location Badge */}
            <div className="hero-location-badge">
              🏳️ New York
            </div>

            {/* Main Image Container */}
            <div className="hero-image-wrapper">
              <img
                src="/tarun-photo.png"
                alt="Tarun Mittal - Product Designer"
                className="hero-image"
              />
            </div>

            {/* Testimonial Card - Left */}
            <div className="hero-testimonial-left">
              <div className="hero-testimonial-header">
                <div className="hero-testimonial-avatar hero-avatar-red">D</div>
                <div>
                  <div className="hero-testimonial-name">Dominic Ramosdale</div>
                  <div className="hero-testimonial-role">Co Founder Dangu</div>
                </div>
              </div>
              <p className="hero-testimonial-text">
                &quot;Working with Alex transformed accounting software into a sleek, intuitive experience.&quot;
              </p>
            </div>

            {/* Testimonial Card - Right (Yellow) */}
            <div className="hero-testimonial-right">
              <div className="hero-testimonial-header">
                <div className="hero-testimonial-avatar hero-avatar-blue">
                  <img src="/placeholder-user.jpg" alt="Paul" className="hero-avatar-img" />
                </div>
                <div>
                  <div className="hero-testimonial-name">Paul Cris</div>
                  <div className="hero-testimonial-role">Co Founder Crispacce</div>
                </div>
              </div>
              <p className="hero-testimonial-text">
                &quot;Working with transformed accounting, intuitive experience.&quot;
              </p>
            </div>

            {/* Decorative dotted circle */}
            <div className="hero-dotted-circle" />
          </div>
        </div>
      </div>

      {/* Bottom solid border line */}
      <div className="hero-solid-line-bottom" />
    </section>
  );
}
