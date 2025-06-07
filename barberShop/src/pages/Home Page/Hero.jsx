import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Sharp Looks. Smooth Experience.</h1>
          <p className="para-content">Your go-to barber shop for classic and modern styles.  We specialize in delivering premium haircuts, beard trims, and grooming services for the modern gentleman. Walk in for style, walk out with confidence.
           
          
          </p>
          <div className="hero-buttons">
          <a href="#">  <button className="primary-btn">Contact Us Now!</button></a> 
           <a>  <button className="secondary-btn">Explore Styles</button></a>
           <div class="block-star" >
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i>✂️ Precision Haircuts</i>
           </div>
            
          </div>
        </div>
      </div>

      <div className="check-links">
        <button class="btn"><i className="fab fa-kickstarter-k"></i> Kanba</button>
        <button><i className="fab fa-envira"></i> Greenish</button>
        <button><i className="fab fa-facebook-f"></i> Facebook</button>
        <button><i className="fas fa-video"></i> Zoomtv</button>
        <button><i className="fas fa-water"></i> Waveless</button>
      </div>
    </section>
  );
};

export default Hero;
