import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-header">
          <h2>About KP Dehy Foods</h2>
          <p>Your trusted partner in premium dehydrated food products</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              We are leading manufacturer, supplier and exporter of dehydrated onion, garlic, fried onion, 
              fried garlic, onion powder, garlic powder, vegetable powder, spices and many other products. 
              We are located in mahuva, Gujarat, India. Which is a hub for dehydrated onion & garlic.
            </p>
            <p>
              We KP Dehy Foods, works on a principle of good quality, trust & healthy relationship with customers.
            </p>
            <p>
              We assure you to deliver the best of the product which you will get at your own kp dehy foods.
            </p>
            <p>
              Aroma, taste with good packaging and quality is are moto, 
              we do this by directly delivering from the lap of mother earth to your kitchen & in your recipes.
            </p>
            <p>
              We welcome you to join our  family, come join us in our journey which is one of the world's best 
              quality of dehydrated Orion Garlic and many more products.
            </p>
            {/* <h3>Our Mission</h3>
            <p>
              To provide the highest quality dehydrated food products while maintaining sustainable 
              practices and building long-term relationships with our customers and suppliers. We strive 
              to preserve the natural taste, nutrition, and quality of fresh vegetables through our 
              advanced dehydration processes.
            </p> */}
          </div>
          
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">🌱</div>
              <h4>Natural Processing</h4>
              <p>We use advanced dehydration techniques that preserve natural flavors and nutrients</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">✅</div>
              <h4>Quality Assured</h4>
              <p>Rigorous quality control at every step ensures premium products every time</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">🌍</div>
              <h4>Global Reach</h4>
              <p>Serving customers in 50+ countries with reliable supply chain management</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">🏭</div>
              <h4>Modern Facilities</h4>
              <p>State-of-the-art processing facilities with latest technology and hygiene standards</p>
            </div>
          </div>
        </div>
        
        <div className="values">
          <h3>Our Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <h4>Quality First</h4>
              <p>We never compromise on quality and maintain the highest standards in all our processes.</p>
            </div>
            <div className="value-card">
              <h4>Customer Focus</h4>
              <p>Our customers' success is our success. We build lasting partnerships through trust and reliability.</p>
            </div>
            <div className="value-card">
              <h4>Innovation</h4>
              <p>Continuously improving our processes and products to meet evolving market demands.</p>
            </div>
            <div className="value-card">
              <h4>Sustainability</h4>
              <p>Committed to environmentally responsible practices and sustainable business operations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
