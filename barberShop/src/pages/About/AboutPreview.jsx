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

      {/* Mission Statement */}
      <div className="about-section with-image">
        <div className="text">
          <h2>Our Mission</h2>
          <p>
            At FlowBarb, our mission is to redefine grooming by combining creativity,
            craftsmanship, and care. We provide a comfortable space where every
            client feels valued and leaves renewed in confidence.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Barber chair"
        />
      </div>

      {/* Core Values */}
      <div className="about-section with-image reverse">
        <img
          src="https://images.pexels.com/photos/897271/pexels-photo-897271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"


          alt="Grooming tools"
        />
        <div className="text">
          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Excellence:</strong> We go above and beyond to deliver premium service.</li>
            <li><strong>Respect:</strong> Every client is treated with warmth, dignity, and care.</li>
            <li><strong>Innovation:</strong> We embrace the latest grooming trends and tools.</li>
            <li><strong>Passion:</strong> We love our craft and it reflects in your results.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
