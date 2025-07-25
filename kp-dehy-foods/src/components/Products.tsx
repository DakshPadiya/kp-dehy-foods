import React from 'react'
import './Products.css'
import dehydratedOnionFlakes from '/images/products/dehydrated-onion-flakes.jpg'
import dehydratedOnionPowder from '/images/products/dehydrated-onion-powder.jpg'
import dehydratedGarlicFlakes from '/images/products/dehydrated-garlic-flakes.jpg'
import dehydratedGarlicPowder from '/images/products/dehydrated-garlic-powder.jpg'

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Dehydrated Onion Flakes',
      description: 'Premium quality onion flakes with natural flavor and aroma',
      image: dehydratedOnionFlakes,
      features: ['100% Natural', 'Long Shelf Life', 'Retains Nutrition', 'Easy to Use'],
      applications: ['Food Processing', 'Restaurants', 'Home Cooking', 'Seasoning Blends']
    },
    {
      id: 2,
      name: 'Dehydrated Onion Powder',
      description: 'Fine onion powder perfect for seasoning and food preparation',
      image: dehydratedOnionPowder,
      features: ['Fine Texture', 'Concentrated Flavor', 'No Additives', 'Consistent Quality'],
      applications: ['Spice Mixes', 'Instant Foods', 'Bakery Products', 'Snack Foods']
    },
    {
      id: 3,
      name: 'Dehydrated Garlic Flakes',
      description: 'High-quality garlic flakes with intense flavor and aroma',
      image: dehydratedGarlicFlakes,
      features: ['Strong Aroma', 'Natural Processing', 'Premium Grade', 'Export Quality'],
      applications: ['Culinary Use', 'Food Industry', 'Seasoning', 'Ready Meals']
    },
    {
      id: 4,
      name: 'Dehydrated Garlic Powder',
      description: 'Fine garlic powder with concentrated flavor for various applications',
      image: dehydratedGarlicPowder,
      features: ['Ultra Fine', 'Rich Flavor', 'Hygienic Processing', 'Global Standards'],
      applications: ['Spice Industry', 'Fast Food', 'Marinades', 'Soup Mixes']
    }
  ]

  return (
    <section className="products">
      <div className="container">
        <div className="products-header">
          <h2>Our Premium Products</h2>
          <p>High-quality dehydrated onion and garlic products for global markets</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-header">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
              
              <div className="product-features">
                <h4>Key Features</h4>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="product-applications">
                <h4>Applications</h4>
                <div className="applications-tags">
                  {product.applications.map((app, index) => (
                    <span key={index} className="app-tag">{app}</span>
                  ))}
                </div>
              </div>
              
              <button className="product-btn">Get Quote</button>
            </div>
          ))}
        </div>

        <div className="quality-assurance">
          <h3>Quality Assurance</h3>
          <div className="quality-grid">
            <div className="quality-item">
              <div className="quality-icon">🔬</div>
              <h4>Laboratory Tested</h4>
              <p>Every batch undergoes rigorous quality testing for purity and safety</p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">📋</div>
              <h4>Certified Processes</h4>
              <p>ISO certified manufacturing processes ensuring consistent quality</p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">🌡️</div>
              <h4>Controlled Environment</h4>
              <p>Temperature and humidity controlled facilities for optimal processing</p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">📦</div>
              <h4>Proper Packaging</h4>
              <p>Moisture-proof packaging to maintain freshness during transport</p>
            </div>
          </div>
        </div>

        <div className="specifications">
          <h3>Product Specifications</h3>
          <div className="specs-table">
            <div className="spec-row header">
              <div>Parameter</div>
              <div>Onion Products</div>
              <div>Garlic Products</div>
            </div>
            <div className="spec-row">
              <div>Moisture Content</div>
              <div>5-7%</div>
              <div>5-6%</div>
            </div>
            <div className="spec-row">
              <div>Shelf Life</div>
              <div>24 Months</div>
              <div>24 Months</div>
            </div>
            <div className="spec-row">
              <div>Packaging</div>
              <div>25kg/50kg Bags</div>
              <div>25kg/50kg Bags</div>
            </div>
            <div className="spec-row">
              <div>Storage</div>
              <div>Cool & Dry Place</div>
              <div>Cool & Dry Place</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
