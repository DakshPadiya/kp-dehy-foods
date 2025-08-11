import './DehydratedGarlic.css'
import dehydratedGarlicFlakes from '/images/products/dehydrated-garlic-flakes.jpg'
import dehydratedGarlicProducts from '/images/products/dehydrated-garlic-products.jpg'

const DehydratedGarlic: React.FC = () => {
  const garlicCategory = {
    id: 1,
    name: 'Dehydrated Garlic',
    description: 'High-quality garlic products with intense flavor and aroma',
    image: dehydratedGarlicFlakes,
    specifications: {
      moisture: '5-6%',
      shelfLife: '24 Months',
      packaging: '25kg/50kg Bags',
      storage: 'Cool & Dry Place'
    },
    items: [
      'Garlic cloves',
      'Garlic chopped (3-5 MM)',
      'Garlic minced (1-3 MM)',
      'Garlic granules (0.5-1 MM)',
      'Garlic powder'
    ],
    applications: ['Culinary Use', 'Food Industry', 'Seasoning', 'Ready Meals', 'Spice Industry', 'Fast Food', 'Marinades', 'Soup Mixes']
  }

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
            <div className="product-detail-card">
              <div className="product-image">
                <img src={garlicCategory.image} alt={garlicCategory.name} />
              </div>
              <div className="product-info">
                <h3>{garlicCategory.name}</h3>
                <p>{garlicCategory.description}</p>
                
                <div className="specifications">
                  <h4>Specifications</h4>
                  <div className="spec-grid">
                    <div className="spec-item">
                      <span className="spec-label">Moisture Content:</span>
                      <span className="spec-value">{garlicCategory.specifications.moisture}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Shelf Life:</span>
                      <span className="spec-value">{garlicCategory.specifications.shelfLife}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Packaging:</span>
                      <span className="spec-value">{garlicCategory.specifications.packaging}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Storage:</span>
                      <span className="spec-value">{garlicCategory.specifications.storage}</span>
                    </div>
                  </div>
                </div>

                <div className="product-items">
                  <h4>Available Products</h4>
                  <ul className="items-list">
                    {garlicCategory.items.map((item, index) => (
                      <li key={index} className="item">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="applications">
                  <h4>Applications</h4>
                  <div className="app-tags">
                    {garlicCategory.applications.map((app, index) => (
                      <span key={index} className="app-tag">{app}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
