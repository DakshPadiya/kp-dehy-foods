import React from 'react'
import './DehydratedOnion.css'

const DehydratedOnion: React.FC = () => {
  const onionProducts = [
    {
      id: 1,
      name: 'Dehydrated Onion Flakes',
      description: 'Premium quality onion flakes with natural flavor and aroma',
      image: '/images/products/onion-flakes.svg',
      specifications: {
        moisture: '5-7%',
        shelfLife: '24 Months',
        packaging: '25kg/50kg Bags',
        storage: 'Cool & Dry Place'
      },
      features: ['100% Natural', 'Long Shelf Life', 'Retains Nutrition', 'Easy to Use'],
      applications: ['Food Processing', 'Restaurants', 'Home Cooking', 'Seasoning Blends']
    },
    {
      id: 2,
      name: 'Dehydrated Onion Powder',
      description: 'Fine onion powder perfect for seasoning and food preparation',
      image: '/images/products/onion-powder.svg',
      specifications: {
        moisture: '5-7%',
        shelfLife: '24 Months',
        packaging: '25kg/50kg Bags',
        storage: 'Cool & Dry Place'
      },
      features: ['Fine Texture', 'Concentrated Flavor', 'No Additives', 'Consistent Quality'],
      applications: ['Spice Mixes', 'Instant Foods', 'Bakery Products', 'Snack Foods']
    }
  ]

  return (
    <section className="dehydrated-onion">
      <div className="container">
        {/* Hero Section */}
        <div className="product-hero">
          <div className="hero-content">
            <h1>Dehydrated Onion Products</h1>
            <p>Premium quality dehydrated onion flakes and powder with exceptional taste and nutrition</p>
          </div>
          <div className="hero-image">
            <img src="/images/products/onion-flakes.svg" alt="Dehydrated Onion Products" />
          </div>
        </div>

        {/* Product Details */}
        <div className="products-section">
          <h2>Our Onion Product Range</h2>
          <div className="products-grid">
            {onionProducts.map((product) => (
              <div key={product.id} className="product-detail-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  
                  <div className="specifications">
                    <h4>Specifications</h4>
                    <div className="spec-grid">
                      <div className="spec-item">
                        <span className="spec-label">Moisture Content:</span>
                        <span className="spec-value">{product.specifications.moisture}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Shelf Life:</span>
                        <span className="spec-value">{product.specifications.shelfLife}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Packaging:</span>
                        <span className="spec-value">{product.specifications.packaging}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Storage:</span>
                        <span className="spec-value">{product.specifications.storage}</span>
                      </div>
                    </div>
                  </div>

                  <div className="features">
                    <h4>Key Features</h4>
                    <ul>
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="applications">
                    <h4>Applications</h4>
                    <div className="app-tags">
                      {product.applications.map((app, index) => (
                        <span key={index} className="app-tag">{app}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2>Why Choose Our Dehydrated Onion?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🌱</div>
              <h3>100% Natural</h3>
              <p>No artificial additives or preservatives, just pure dehydrated onions</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⏰</div>
              <h3>Long Shelf Life</h3>
              <p>Extended shelf life of 24 months when stored properly</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💪</div>
              <h3>Retains Nutrition</h3>
              <p>Advanced dehydration process preserves essential nutrients</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🍽️</div>
              <h3>Easy to Use</h3>
              <p>Ready-to-use format saves time in food preparation</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Interested in Our Dehydrated Onion Products?</h2>
          <p>Contact us for detailed specifications, pricing, and bulk orders</p>
          <button className="cta-button">Get Quote</button>
        </div>
      </div>
    </section>
  )
}

export default DehydratedOnion
