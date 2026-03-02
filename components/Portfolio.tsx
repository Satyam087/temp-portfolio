'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

type Category = 'All' | 'YouTube Thumbnails' | 'Posters' | 'Social Media' | 'Graphic Design' | 'Instagram Posts';

interface Project {
  title: string;
  category: Category[];
  year: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    title: 'YouTube Thumbnail — Episode 1',
    category: ['YouTube Thumbnails'],
    year: '2025',
    image: '/designs/youtube-thumbnail-1.png',
    description: 'High-impact thumbnail design for YouTube content',
  },
  {
    title: 'YouTube Thumbnail — Episode 2',
    category: ['YouTube Thumbnails'],
    year: '2025',
    image: '/designs/youtube-thumbnail-2.png',
    description: 'Engaging thumbnail with bold typography',
  },
  {
    title: 'YouTube Thumbnail — Episode 3',
    category: ['YouTube Thumbnails'],
    year: '2025',
    image: '/designs/youtube-thumbnail-3.png',
    description: 'Dynamic visual storytelling for video content',
  },
  {
    title: 'YouTube Thumbnail — Episode 4',
    category: ['YouTube Thumbnails'],
    year: '2025',
    image: '/designs/youtube-thumbnail-4.png',
    description: 'Eye-catching composition & color grading',
  },
  {
    title: 'Creative Poster — Concept A',
    category: ['Posters', 'Graphic Design'],
    year: '2026',
    image: '/designs/poster-concept-a.png',
    description: 'Conceptual poster with cinematic aesthetics',
  },
  {
    title: 'Creative Poster — Concept B',
    category: ['Posters', 'Graphic Design'],
    year: '2026',
    image: '/designs/poster-concept-b.png',
    description: 'Bold poster design with striking visuals',
  },
  {
    title: 'Social Media Design — Vol. 1',
    category: ['Social Media', 'Graphic Design'],
    year: '2025',
    image: '/designs/design-1.png',
    description: 'Premium social media graphic design',
  },
  {
    title: 'Social Media Design — Vol. 2',
    category: ['Social Media', 'Graphic Design'],
    year: '2025',
    image: '/designs/design-2.png',
    description: 'Brand-focused social media creative',
  },
  {
    title: 'Social Media Design — Vol. 3',
    category: ['Social Media', 'Graphic Design'],
    year: '2025',
    image: '/designs/design-3.png',
    description: 'Vibrant social media visual design',
  },
  {
    title: 'Social Media Design — Vol. 4',
    category: ['Social Media', 'Graphic Design'],
    year: '2025',
    image: '/designs/design-4.png',
    description: 'Clean and modern social media layout',
  },
  {
    title: 'Social Media Design — Vol. 5',
    category: ['Social Media', 'Graphic Design'],
    year: '2025',
    image: '/designs/design-5.png',
    description: 'Minimalist social media creative asset',
  },
  {
    title: 'Brand Identity Design',
    category: ['Graphic Design'],
    year: '2025',
    image: '/designs/brand-identity.png',
    description: 'Complete brand identity and visual system',
  },
  {
    title: 'Instagram Post — Food Branding',
    category: ['Instagram Posts', 'Social Media', 'Graphic Design'],
    year: '2026',
    image: '/instagram/post-1.png',
    description: 'Elegant social media layout for food industry branding',
  },
  {
    title: 'Instagram Post — Lifestyle Layout',
    category: ['Instagram Posts', 'Social Media', 'Graphic Design'],
    year: '2026',
    image: '/instagram/post-2.png',
    description: 'Modern lifestyle-focused social media design',
  },
  {
    title: 'Instagram Post — Creative Showcase',
    category: ['Instagram Posts', 'Social Media', 'Graphic Design'],
    year: '2025',
    image: '/instagram/post-3.png',
    description: 'Dynamic grid layout for creative portfolio showcase',
  },
  {
    title: 'Digital Marketing Graphic',
    category: ['Instagram Posts', 'Social Media', 'Graphic Design'],
    year: '2026',
    image: '/instagram/post-4.jpg',
    description: 'High-conversion marketing visual for Instagram',
  },
  {
    title: 'Campaign Social Visual',
    category: ['Instagram Posts', 'Social Media', 'Graphic Design'],
    year: '2026',
    image: '/instagram/post-5.jpg',
    description: 'Brand-aligned social media campaign design',
  },
  {
    title: 'Product Design — Chocolate Shake',
    category: ['Instagram Posts', 'Graphic Design', 'Social Media'],
    year: '2026',
    image: '/instagram/chocolate-shake.png',
    description: 'Vibrant product visualization for digital ads',
  },
  {
    title: 'Promotion Graphic — Chole Bhature',
    category: ['Instagram Posts', 'Graphic Design', 'Social Media'],
    year: '2026',
    image: '/instagram/chole-bhature.png',
    description: 'Appetizing food promotion design for social platforms',
  },
];

const categories: Category[] = [
  'All',
  'YouTube Thumbnails',
  'Posters',
  'Instagram Posts',
  'Social Media',
  'Graphic Design',
];

function ProjectCard({ title, category, year, image, description }: Project) {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle cached images that may have already loaded before onLoad fires
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setImageLoaded(true);
    }
  }, []);

  const handleImageLoad = useCallback(() => setImageLoaded(true), []);

  return (
    <div
      ref={cardRef}
      className={`portfolio-card ${isVisible ? 'portfolio-card--visible' : ''}`}
    >
      <div className="portfolio-card-image-wrapper">
        {!imageLoaded && <div className="portfolio-card-skeleton" />}
        <img
          ref={imgRef}
          src={image}
          alt={title}
          className={`portfolio-card-image ${imageLoaded ? 'portfolio-card-image--loaded' : ''}`}
          loading="lazy"
          onLoad={handleImageLoad}
        />
        <div className="portfolio-card-overlay">
          <span className="portfolio-card-view-btn">View Project</span>
        </div>
      </div>
      <div className="portfolio-card-info">
        <div className="portfolio-card-info-left">
          <h3 className="portfolio-card-title">{title}</h3>
          <p className="portfolio-card-desc">{description}</p>
        </div>
        <div className="portfolio-card-meta">
          <span className="portfolio-card-year">{year}</span>
          <span className="portfolio-card-category">{category[0]}</span>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFilterChange = useCallback(
    (cat: Category) => {
      if (cat === activeFilter) return;
      setIsAnimating(true);
      setActiveFilter(cat);

      setTimeout(() => {
        const filtered =
          cat === 'All'
            ? projects
            : projects.filter((p) => p.category.includes(cat));
        setFilteredProjects(filtered);
        setIsAnimating(false);
      }, 300);
    },
    [activeFilter]
  );

  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-dotted-line" />

      <div className="portfolio-container">
        {/* Section Header */}
        <div className="portfolio-header">
          <div className="portfolio-header-text">
            <h2 className="portfolio-title">
              Selected <span className="portfolio-title-highlight">Works</span>
            </h2>
            <p className="portfolio-subtitle">
              A curated collection of my most impactful design projects
            </p>
          </div>
          <div className="portfolio-count-badge">
            <span className="portfolio-count-number">{filteredProjects.length}</span>
            <span className="portfolio-count-label">Projects</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`portfolio-filter-btn ${activeFilter === cat ? 'portfolio-filter-btn--active' : ''}`}
              onClick={() => handleFilterChange(cat)}
            >
              {cat}
              {activeFilter === cat && (
                <span className="portfolio-filter-count">
                  {cat === 'All'
                    ? projects.length
                    : projects.filter((p) => p.category.includes(cat)).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`portfolio-grid ${isAnimating ? 'portfolio-grid--animating' : ''}`}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.image}-${index}`} {...project} />
          ))}
        </div>
      </div>

      <div className="portfolio-solid-line" />
    </section>
  );
}
