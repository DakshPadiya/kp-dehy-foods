import './Products.css'
import dehydratedOnionFlakes from '/images/products/dehydrated-onion-flakes.jpg'
import dehydratedGarlicFlakes from '/images/products/dehydrated-garlic-flakes.jpg'
import dehydratedGarlicPowder from '/images/products/dehydrated-garlic-powder.jpg'

const Products: React.FC = () => {
  const productCategories = [
    {
      id: 1,
      name: 'Dehydrated White Onion',
      description: 'Premium quality white onion products with natural flavor and aroma',
      image: dehydratedOnionFlakes,
      items: [
        'White onion flakes',
        'White onion chopped (3-5 MM)',
        'White onion minced (1-3 MM)',
        'White onion granules (0.5-1 MM)',
        'White onion powder'
      ]
    },
    {
      id: 2,
      name: 'Dehydrated Pink Onion',
      description: 'High-quality pink onion products with rich flavor and color',
      image: dehydratedOnionFlakes,
      items: [
        'Pink onion flakes',
        'Pink onion chopped (3-5 MM)',
        'Pink onion minced (1-3 MM)',
        'Pink onion granules (0.5-1 MM)',
        'Pink onion powder'
      ]
    },
    {
      id: 3,
      name: 'Dehydrated Red Onion',
      description: 'Premium red onion products with intense flavor and deep color',
      image: dehydratedOnionFlakes,
      items: [
        'Red onion flakes',
        'Red onion chopped (3-5 MM)',
        'Red onion minced (1-3 MM)',
        'Red onion granules (0.5-1 MM)',
        'Red onion powder'
      ]
    },
    {
      id: 4,
      name: 'Fried Onion',
      description: 'Crispy fried onion products for enhanced taste and texture',
      image: dehydratedOnionFlakes,
      items: [
        'Fresh fried onion',
        'Fried coated onion',
        'Fried coated white onion',
        'Fried pink onion flakes',
        'Fried white onion flakes'
      ]
    },
    {
      id: 5,
      name: 'Dehydrated Garlic',
      description: 'High-quality garlic products with intense flavor and aroma',
      image: dehydratedGarlicFlakes,
      items: [
        'Garlic cloves',
        'Garlic chopped (3-5 MM)',
        'Garlic minced (1-3 MM)',
        'Garlic granules (0.5-1 MM)',
        'Garlic powder'
      ]
    },
    {
      id: 6,
      name: 'Vegetables Powder',
      description: 'Premium vegetable powders and spices for culinary excellence',
      image: dehydratedGarlicPowder,
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
      ]
    }
  ]

  return (
    <section className="products">
      <div className="container">
        <div className="products-header">
          <h2>Our Premium Products</h2>
          {/* <p>High-quality dehydrated onion and garlic products for global markets</p> */}
          <p>
            Explore the exceptional quality of KP Dehy Foods, a leading manufacturer, 
            supplier & exporter of dehydrated onion, garlic & spices with best quality and hygiene.
          </p>
        </div>

        <div className="products-grid">
          {productCategories.map((category) => (
            <div key={category.id} className="product-card">
              <div className="product-image">
                <img src={category.image} alt={category.name} />
              </div>
              <div className="product-header">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
              
              <div className="product-items">
                <h4>Products Available</h4>
                <ul className="product-items-list">
                  {category.items.map((item, index) => (
                    <li key={index} className="product-item">{item}</li>
                  ))}
                </ul>
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
