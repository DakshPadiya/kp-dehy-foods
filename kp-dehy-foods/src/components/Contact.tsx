import React, { useState } from 'react'
import './Contact.css'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you soon.')
  }

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Ready to partner with us? Contact us for quotes and inquiries</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>123 Industrial Area<br />Dehydration District<br />Gujarat, India - 382421</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210<br />+91 98765 43211</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>info@kpdehyfoods.com<br />sales@kpdehyfoods.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🌐</div>
              <div>
                <h4>Export Markets</h4>
                <p>USA, Europe, Middle East<br />Asia Pacific, Africa</p>
              </div>
            </div>

            <div className="business-hours">
              <h4>Business Hours</h4>
              <div className="hours-grid">
                <div>Monday - Friday</div>
                <div>9:00 AM - 6:00 PM</div>
                <div>Saturday</div>
                <div>9:00 AM - 2:00 PM</div>
                <div>Sunday</div>
                <div>Closed</div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Request a Quote</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="product">Product Interest</label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                  >
                    <option value="">Select a product</option>
                    <option value="onion-flakes">Dehydrated Onion Flakes</option>
                    <option value="onion-powder">Dehydrated Onion Powder</option>
                    <option value="garlic-flakes">Dehydrated Garlic Flakes</option>
                    <option value="garlic-powder">Dehydrated Garlic Powder</option>
                    <option value="mixed">Mixed Products</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Required Quantity</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g., 1000 kg"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Please provide details about your requirements..."
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>

        <div className="certifications">
          <h3>Our Certifications</h3>
          <div className="cert-grid">
            <div className="cert-item">
              <h4>ISO 22000</h4>
              <p>Food Safety Management</p>
            </div>
            <div className="cert-item">
              <h4>HACCP</h4>
              <p>Hazard Analysis Critical Control Points</p>
            </div>
            <div className="cert-item">
              <h4>FDA</h4>
              <p>US Food & Drug Administration</p>
            </div>
            <div className="cert-item">
              <h4>FSSAI</h4>
              <p>Food Safety Standards Authority</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
