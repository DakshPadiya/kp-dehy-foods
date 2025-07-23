import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DehydratedOnion from './components/DehydratedOnion'
import DehydratedGarlic from './components/DehydratedGarlic'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'products' && <Products />}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'dehydrated-onion' && <DehydratedOnion />}
        {activeSection === 'dehydrated-garlic' && <DehydratedGarlic />}
      </main>
      <Footer />
    </div>
  )
}

export default App
