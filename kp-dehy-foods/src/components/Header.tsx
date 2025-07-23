import React, { useState } from 'react'
import './Header.css'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false) // Close mobile menu when item is clicked
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="/src/assets/kp-dehy-foods-trans-header.png" alt="KP Dehy Foods Logo" className="logo-image" />
          {/* <div className="logo-text">
            <h1>KP Dehy Foods</h1>
            <span>Premium Dehydrated Products</span>
          </div> */}
        </div>
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <nav className={`nav mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
