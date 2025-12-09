import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { SearchIcon, HeartIcon, CartIcon, UserIcon } from './components/Icons'
import Home from './pages/Home'
import CategoryProducts from './pages/CategoryProducts'

// Header Component
function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">🌿</div>
          <div className="logo-text">
            <span className="logo-hindi">जड़ी बूटी</span>
            <span className="logo-english">Jadi Booti</span>
          </div>
        </Link>

        <div className="search-container">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search for herbs, spices, wellness products..." 
            />
            <button className="search-btn">
              <SearchIcon />
            </button>
          </div>
        </div>

        <div className="header-actions">
          <button className="header-btn">
            <HeartIcon />
          </button>
          <button className="header-btn">
            <CartIcon />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button className="header-btn">
            <UserIcon />
          </button>
        </div>
      </div>
    </header>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-text">
              <span className="logo-hindi">जड़ी बूटी</span>
              <span className="logo-english">Jadi Booti</span>
            </div>
            <p>
              Your trusted source for authentic Indian herbs, Ayurvedic products, 
              and natural wellness essentials. Bringing ancient wisdom to modern life.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📸</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📺</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/blog">Ayurveda Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Categories</h4>
            <ul>
              <li><Link to="/category/1">Herbal Tea</Link></li>
              <li><Link to="/category/9">Herbs Powder</Link></li>
              <li><Link to="/category/16">Pooja Items</Link></li>
              <li><Link to="/category/15">Combo Packs</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Help & Support</h4>
            <ul>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 Jadi Booti. All rights reserved. Made with 🌿 in India</p>
          <div className="payment-methods">
            <span className="payment-icon">💳</span>
            <span className="payment-icon">📱</span>
            <span className="payment-icon">🏦</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  const [cartCount] = useState(3)

  return (
    <>
      <Header cartCount={cartCount} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<CategoryProducts />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
