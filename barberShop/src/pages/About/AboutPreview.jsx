import React from 'react';
import './aboutPreview.css';

function AboutPreview() {
  return (
    <section className="about-preview">
      {/* Orange border figure "7" style image */}
      <div className="img-frame">
        <img
          className="about-img"
          src="https://media.istockphoto.com/id/640274128/photo/barber-using-scissors-and-comb.jpg?s=612x612&w=0&k=20&c=mjdP6NhDA40WBorr8kyyI69waMs1EyzLkSmT6lQRvGU="
          alt="Barber shaping eyebrows"
        />
        <div className="corner top-left"></div>
        <div className="corner bottom-right"></div>
      </div>

      {/* Text content */}
      <div className="about-content">
        <span className="tag">ABOUT US</span>
        <h1>Mastering The <br /> Art Of Grooming</h1>
        <p>
          We stay ahead of the latest trends while honoring timeless techniques,
          ensuring that you leave our salon not just looking great, but feeling
          confident and empowered.
        </p>
        <button><a href="#">More About Us</a></button>
      </div>
    </section>
  );
}

export default AboutPreview;
