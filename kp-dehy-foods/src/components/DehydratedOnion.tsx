import './DehydratedOnion.css'
import dehydratedOnionFlakes from '/images/products/dehydrated-onion-flakes.jpg'
import dehydratedOnionPowder from '/images/products/dehydrated-onion-powder.jpg'
import dehydratedOnionProducts from '/images/products/dehydrated-onion-products.jpg'

const DehydratedOnion: React.FC = () => {
  const onionCategories = [
    {
      id: 1,
      name: 'Dehydrated White Onion',
      description: 'Premium quality white onion products with natural flavor and aroma',
      image: dehydratedOnionFlakes,
      specifications: {
        moisture: '5-7%',
        shelfLife: '24 Months',
        packaging: '25kg/50kg Bags',
        storage: 'Cool & Dry Place'
      },
      items: [
        'White onion flakes',
        'White onion chopped (3-5 MM)',
        'White onion minced (1-3 MM)',
        'White onion granules (0.5-1 MM)',
        'White onion powder'
      ],
      applications: ['Food Processing', 'Restaurants', 'Home Cooking', 'Seasoning Blends']
    },
    {
      id: 2,
      name: 'Dehydrated Pink Onion',
      description: 'High-quality pink onion products with rich flavor and color',
      image: dehydratedOnionFlakes,
      specifications: {
        moisture: '5-7%',
        shelfLife: '24 Months',
        packaging: '25kg/50kg Bags',
        storage: 'Cool & Dry Place'
      },
      items: [
        'Pink onion flakes',
        'Pink onion chopped (3-5 MM)',
        'Pink onion minced (1-3 MM)',
        'Pink onion granules (0.5-1 MM)',
        'Pink onion powder'
      ],
      applications: ['Culinary Use', 'Food Industry', 'Spice Mixes', 'Ready Meals']
    },
    {
      id: 3,
      name: 'Dehydrated Red Onion',
      description: 'Premium red onion products with intense flavor and deep color',
      image: dehydratedOnionPowder,
      specifications: {
        moisture: '5-7%',
        shelfLife: '24 Months',
        packaging: '25kg/50kg Bags',
        storage: 'Cool & Dry Place'
      },
      items: [
        'Red onion flakes',
        'Red onion chopped (3-5 MM)',
        'Red onion minced (1-3 MM)',
        'Red onion granules (0.5-1 MM)',
        'Red onion powder'
      ],
      applications: ['Gourmet Cooking', 'Premium Products', 'Export Quality', 'Specialty Foods']
    },
    {
      id: 4,
      name: 'Fried Onion',
      description: 'Crispy fried onion products for enhanced taste and texture',
      image: dehydratedOnionFlakes,
      specifications: {
        moisture: '2-4%',
        shelfLife: '18 Months',
        packaging: '25kg/50kg Bags',
        storage: 'Cool & Dry Place'
      },
      items: [
        'Fresh fried onion',
        'Fried coated onion',
        'Fried coated white onion',
        'Fried pink onion flakes',
        'Fried white onion flakes'
      ],
      applications: ['Snack Industry', 'Ready-to-eat Foods', 'Garnishing', 'Fast Food']
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
            <img src={dehydratedOnionProducts} alt="Dehydrated Onion Products" />
          </div>
        </div>

        {/* Product Details */}
        <div className="products-section">
          <h2>Our Onion Product Range</h2>
          <div className="products-grid">
            {onionCategories.map((category) => (
              <div key={category.id} className="product-detail-card">
                <div className="product-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="product-info">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  
                  <div className="specifications">
                    <h4>Specifications</h4>
                    <div className="spec-grid">
                      <div className="spec-item">
                        <span className="spec-label">Moisture Content:</span>
                        <span className="spec-value">{category.specifications.moisture}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Shelf Life:</span>
                        <span className="spec-value">{category.specifications.shelfLife}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Packaging:</span>
                        <span className="spec-value">{category.specifications.packaging}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Storage:</span>
                        <span className="spec-value">{category.specifications.storage}</span>
                      </div>
                    </div>
                  </div>

                  <div className="product-items">
                    <h4>Available Products</h4>
                    <ul className="items-list">
                      {category.items.map((item, index) => (
                        <li key={index} className="item">{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="applications">
                    <h4>Applications</h4>
                    <div className="app-tags">
                      {category.applications.map((app, index) => (
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
