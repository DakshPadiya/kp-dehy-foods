import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>KP Dehy Foods</h3>
              <p>Premium Dehydrated Products</p>
            </div>
            <p className="footer-description">
              Leading exporters of premium quality dehydrated onion and garlic products 
              with over 15 years of experience serving global markets.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Our Products</h4>
            <ul>
              <li><a href="#">Dehydrated Onion Flakes</a></li>
              <li><a href="#">Dehydrated Onion Powder</a></li>
              <li><a href="#">Dehydrated Garlic Flakes</a></li>
              <li><a href="#">Dehydrated Garlic Powder</a></li>
              <li><a href="#">Custom Blends</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Quality Standards</a></li>
              <li><a href="#">Certifications</a></li>
              <li><a href="#">Export Markets</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <p>123 Industrial Area<br />Gujarat, India - 382421</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <p>+91 98765 43210</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <p>info@kpdehyfoods.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 KP Dehy Foods. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
