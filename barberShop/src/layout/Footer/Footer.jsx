import React from 'react';
import './footer.css';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2><i className="fas fa-cut"></i>Barber Shop</h2>
          <p>
            Welcome to Barber Shope, where classic tradition meets contemporary style.
            Our team of skilled barbers is dedicated to providing top-notch grooming.
          </p>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email..." />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Main Pages</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Expert Details</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Utility Pages</h4>
          <ul>
            <li><a href="#">Booking Guide</a></li>
            <li><a href="#">Blog page</a></li>
            <li><a href="#">Back drop</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © <span className="brand">SamzikTech</span> | Designed by <span className="highlight">SamzikTech</span>.
        </p>
      </div>
    </footer>
  );
}
