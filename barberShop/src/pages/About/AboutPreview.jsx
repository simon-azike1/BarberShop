import React, { useState } from 'react';
import './AboutPreview.css'; // Plain CSS file

function AboutPreview() {
  const [activeValue, setActiveValue] = useState(null);

  const coreValues = [
    {
      title: "Excellence",
      description: "We go above and beyond to deliver premium service.",
      icon: "⭐"
    },
    {
      title: "Respect", 
      description: "Every client is treated with warmth, dignity, and care.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "We embrace the latest grooming trends and tools.",
      icon: "💡"
    },
    {
      title: "Passion",
      description: "We love our craft and it reflects in your results.",
      icon: "❤️"
    }
  ];

  return (
    <div className="about-preview">
      {/* Animated background elements */}
      <div className="background-glow glow1"></div>
      <div className="background-glow glow2"></div>

      <div className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-flex">
            {/* Image with modern frame */}
            <div className="hero-image-container">
              <div className="hero-image-frame">
                <img
                  className="hero-image"
                  src="https://media.istockphoto.com/id/640274128/photo/barber-using-scissors-and-comb.jpg?s=612x612&w=0&k=20&c=mjdP6NhDA40WBorr8kyyI69waMs1EyzLkSmT6lQRvGU="
                  alt="Barber shaping eyebrows"
                />
                <div className="hero-image-overlay"></div>
              </div>
              <div className="floating-circle circle1"></div>
              <div className="floating-circle circle2"></div>
            </div>

            {/* Content */}
            <div className="hero-content">
              <div className="tagline">ABOUT US</div>
              <h1 className="hero-title">
                Mastering The <br />
                <span className="highlighted-text">Art Of Grooming</span>
              </h1>
              <p className="hero-description">
                We stay ahead of the latest trends while honoring timeless techniques,
                ensuring that you leave our salon not just looking great, but feeling
                confident and empowered.
              </p>
              <button className="btn-primary">
                More About Us
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-flex">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At FlowBarb, our mission is to redefine grooming by combining creativity,
                craftsmanship, and care. We provide a comfortable space where every
                client feels valued and leaves renewed in confidence.
              </p>
            </div>
            <div className="mission-image-container">
              <img
                src="https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Barber chair"
                className="mission-image"
              />
              <div className="mission-image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="core-values-section">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>

          <div className="core-values-grid">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`core-value-card ${activeValue === index ? 'active' : ''}`}
                onClick={() => setActiveValue(activeValue === index ? null : index)}
              >
                <div className="core-value-icon">{value.icon}</div>
                <h3 className="core-value-title">{value.title}</h3>
                <p
                  className={`core-value-description ${
                    activeValue === index ? 'expanded' : ''
                  }`}
                >
                  {value.description}
                </p>
                <div className="core-value-bg"></div>
              </div>
            ))}
          </div>

          {/* Tools Image */}
          <div className="tools-image-container">
            <img
              src="https://images.pexels.com/photos/897271/pexels-photo-897271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Grooming tools"
              className="tools-image"
            />
            <div className="tools-overlay">
              <h3>Professional Tools</h3>
              <p>Precision instruments for perfect results</p>
            </div>
          </div>
        </section>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="floating-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default AboutPreview;
