import React from 'react'
import './DehydratedGarlic.css'
import dehydratedGarlicFlakes from '/images/products/dehydrated-garlic-flakes.jpg'
import dehydratedGarlicPowder from '/images/products/dehydrated-garlic-powder.jpg'
import dehydratedGarlicProducts from '/images/products/dehydrated-garlic-products.jpg'

const DehydratedGarlic: React.FC = () => {
  const garlicProducts = [
    {
      id: 1,
      name: 'Dehydrated Garlic Flakes',
      description: 'High-quality garlic flakes with intense flavor and aroma',
      image: dehydratedGarlicFlakes,
      specifications: {
        moisture: '5-6%',
        shelfLife: '24 Months',
        packaging: '25kg/50kg Bags',
        storage: 'Cool & Dry Place'
      },
      features: ['Strong Aroma', 'Natural Processing', 'Premium Grade', 'Export Quality'],
      applications: ['Culinary Use', 'Food Industry', 'Seasoning', 'Ready Meals']
    },
    {
      id: 2,
      name: 'Dehydrated Garlic Powder',
      description: 'Fine garlic powder with concentrated flavor for various applications',
      image: dehydratedGarlicPowder,
      specifications: {
        moisture: '5-6%',
        shelfLife: '24 Months',
        packaging: '25kg/50kg Bags',
        storage: 'Cool & Dry Place'
      },
      features: ['Ultra Fine', 'Rich Flavor', 'Hygienic Processing', 'Global Standards'],
      applications: ['Spice Industry', 'Fast Food', 'Marinades', 'Soup Mixes']
    }
  ]

  return (
    <section className="dehydrated-garlic">
      <div className="container">
        {/* Hero Section */}
        <div className="product-hero">
          <div className="hero-content">
            <h1>Dehydrated Garlic Products</h1>
            <p>Premium quality dehydrated garlic flakes and powder with intense flavor and aroma</p>
          </div>
          <div className="hero-image">
            <img src={dehydratedGarlicProducts} alt="Dehydrated Garlic Products" />
          </div>
        </div>

        {/* Product Details */}
        <div className="products-section">
          <h2>Our Garlic Product Range</h2>
          <div className="products-grid">
            {garlicProducts.map((product) => (
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
          <h2>Why Choose Our Dehydrated Garlic?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🧄</div>
              <h3>Intense Flavor</h3>
              <p>Concentrated garlic flavor that enhances any dish</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏭</div>
              <h3>Premium Processing</h3>
              <p>State-of-the-art dehydration technology preserves quality</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Export Quality</h3>
              <p>Meets international food safety and quality standards</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Quick Rehydration</h3>
              <p>Easily rehydrates in cooking for instant flavor</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Interested in Our Dehydrated Garlic Products?</h2>
          <p>Contact us for detailed specifications, pricing, and bulk orders</p>
          <button className="cta-button">Get Quote</button>
        </div>
      </div>
    </section>
  )
}

export default DehydratedGarlic
