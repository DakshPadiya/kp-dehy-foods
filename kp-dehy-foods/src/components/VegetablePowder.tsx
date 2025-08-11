import './VegetablePowder.css'
import vegetablePowderProducts from '/images/products/dehydrated-garlic-powder.jpg'

const VegetablePowder: React.FC = () => {
  const vegetablePowderCategory = {
    id: 1,
    name: 'Vegetable Powder & Spices',
    description: 'Premium vegetable powders and spices for culinary excellence',
    image: vegetablePowderProducts,
    specifications: {
      moisture: '3-8%',
      shelfLife: '18-24 Months',
      packaging: '25kg/50kg Bags',
      storage: 'Cool & Dry Place'
    },
    items: [
      'Beet root powder',
      'Coriander leaves powder',
      'Dry mango powder',
      'Fenugreek leaves',
      'Lemon powder',
      'Mint leaves powder',
      'Spinach powder',
      'Potato powder',
      'Tamarind powder',
      'Tomato powder',
      'Ginger flakes',
      'Ginger powder',
      'Green chilli powder',
      'Red chilli powder',
      'Turmeric powder'
    ],
    applications: ['Culinary Use', 'Food Industry', 'Spice Blends', 'Ready Meals', 'Seasoning', 'Health Products', 'Ayurvedic Medicine', 'Export Quality']
  }

  return (
    <section className="vegetable-powder">
      <div className="container">
        {/* Hero Section */}
        <div className="product-hero">
          <div className="hero-content">
            <h1>Vegetable Powder & Spices</h1>
            <p>Premium quality vegetable powders and spices with exceptional taste, nutrition, and natural goodness</p>
          </div>
          <div className="hero-image">
            <img src={vegetablePowderProducts} alt="Vegetable Powder Products" />
          </div>
        </div>

        {/* Product Details */}
        <div className="products-section">
          <h2>Our Vegetable Powder Range</h2>
          <div className="products-grid">
            <div className="product-detail-card">
              <div className="product-image">
                <img src={vegetablePowderCategory.image} alt={vegetablePowderCategory.name} />
              </div>
              <div className="product-info">
                <h3>{vegetablePowderCategory.name}</h3>
                <p>{vegetablePowderCategory.description}</p>
                
                <div className="specifications">
                  <h4>Specifications</h4>
                  <div className="spec-grid">
                    <div className="spec-item">
                      <span className="spec-label">Moisture Content:</span>
                      <span className="spec-value">{vegetablePowderCategory.specifications.moisture}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Shelf Life:</span>
                      <span className="spec-value">{vegetablePowderCategory.specifications.shelfLife}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Packaging:</span>
                      <span className="spec-value">{vegetablePowderCategory.specifications.packaging}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Storage:</span>
                      <span className="spec-value">{vegetablePowderCategory.specifications.storage}</span>
                    </div>
                  </div>
                </div>

                <div className="product-items">
                  <h4>Available Products</h4>
                  <ul className="items-list">
                    {vegetablePowderCategory.items.map((item, index) => (
                      <li key={index} className="item">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="applications">
                  <h4>Applications</h4>
                  <div className="app-tags">
                    {vegetablePowderCategory.applications.map((app, index) => (
                      <span key={index} className="app-tag">{app}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Features */}
        <div className="quality-section">
          <h2>Why Choose Our Vegetable Powders?</h2>
          <div className="quality-grid">
            <div className="quality-card">
              <div className="quality-icon">🌿</div>
              <h3>100% Natural</h3>
              <p>Made from fresh vegetables without any artificial additives or preservatives</p>
            </div>
            <div className="quality-card">
              <div className="quality-icon">🔬</div>
              <h3>Lab Tested</h3>
              <p>Every batch is tested for purity, quality, and nutritional content</p>
            </div>
            <div className="quality-card">
              <div className="quality-icon">📦</div>
              <h3>Export Quality</h3>
              <p>Premium packaging and processing standards for international markets</p>
            </div>
            <div className="quality-card">
              <div className="quality-icon">⏰</div>
              <h3>Extended Shelf Life</h3>
              <p>Proper dehydration ensures long-lasting freshness and flavor</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2>Health Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Rich in Nutrients</h4>
              <p>Retains essential vitamins, minerals, and antioxidants from fresh vegetables</p>
            </div>
            <div className="benefit-item">
              <h4>Natural Flavor Enhancement</h4>
              <p>Concentrated flavors that enhance the taste of any dish naturally</p>
            </div>
            <div className="benefit-item">
              <h4>Convenient Storage</h4>
              <p>Easy to store and use, perfect for commercial and home kitchens</p>
            </div>
            <div className="benefit-item">
              <h4>Versatile Usage</h4>
              <p>Suitable for various culinary applications and food processing needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VegetablePowder
