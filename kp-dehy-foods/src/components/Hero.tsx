import React from 'react'
import './Hero.css'

interface HeroProps {
  setActiveSection: (section: string) => void
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>WELCOME TO</h1>
          <h2>KP Dehy Foods</h2>
          <p>
            We are leading manufacturer, supplier and exporter of dehydrated onion, garlic, 
            fried onion, fried garlic, onion powder, garlic powder, vegetable powder, 
            spices and many other products. We are located in mahuva, Gujarat, India. 
            Which is a hub for dehydrated onion & garlic.
          </p>
          <p>
            We bring you the finest dried vegetables with exceptional taste, nutrition, 
            and extended shelf life for global markets.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => setActiveSection('products')}
            >
              Our Products
            </button>
            <button 
              className="btn-secondary"
              onClick={() => setActiveSection('contact')}
            >
              Get Quote
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="product-showcase">
            <div 
              className="product-card onion clickable" 
              onClick={() => setActiveSection('dehydrated-onion')}
            >
              <h3>Dehydrated Onion</h3>
              <p>Premium quality dried onions</p>
              <div className="card-overlay">
                <span>View Details →</span>
              </div>
            </div>
            <div 
              className="product-card garlic clickable" 
              onClick={() => setActiveSection('dehydrated-garlic')}
            >
              <h3>Dehydrated Garlic</h3>
              <p>Fresh dried garlic products</p>
              <div className="card-overlay">
                <span>View Details →</span>
              </div>
            </div>
            <div 
              className="product-card vegetables clickable" 
              onClick={() => setActiveSection('vegetable-powder')}
            >
              <h3>Vegetable Powder</h3>
              <p>Premium spices & vegetable powders</p>
              <div className="card-overlay">
                <span>View Details →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat">
          <h3>15+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat">
          <h3>50+</h3>
          <p>Countries Served</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Quality Assured</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
