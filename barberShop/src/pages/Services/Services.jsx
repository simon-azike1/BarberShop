import React from 'react';
import './Services.css';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import Images from '../../assets/Images/hero-bg.jpg'

function Services() {
  const services = [
    {
      title: "Haircut & Styling",
      description: "Classic cuts, fades, and modern styles tailored to your taste.",
      icon: "✂️",
      image: Images,
    },
    {
      title: "Beard Grooming",
      description: "Sharp trims, shaping, and conditioning for a polished look.",
      icon: "🧔",
      image: Images,
    },
    {
      title: "Facials & Skincare",
      description: "Deep-cleansing facials to refresh and rejuvenate your skin.",
      icon: "🧴",
      image: Images,
    },
    {
      title: "Kids' Haircuts",
      description: "Fun, friendly grooming experience for young ones.",
      icon: "👦",
      image: Images,
    }
  ];

  return (
    <>
<Header/>
  <div className="services-page">
      <div className="hero-section">
        <h1 className="hero-heading">Your Style, Our Passion</h1>
        <p className="hero-text">
          At Barber Shop, we offer a range of grooming services tailored for the modern individual.
          Our experienced team ensures every cut and treatment is top-tier.
        </p>
        <button className="hero-btn">Book a Session</button>
      </div>

      <div className="header-section">
        <h2 className="page-title">Our Services</h2>
        <p className="page-subtitle">Precision • Passion • Professionalism</p>
      </div>

      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="service-img">
               <img src={service.image} alt={service.title}/>
            </div>
          </div>
        ))}
      </div>
    </div>
<Footer/>
    </>
  
  );
}

export default Services;
