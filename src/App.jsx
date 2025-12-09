import { useState } from 'react'
import './App.css'

// Category data with emojis as placeholders for images
const categories = [
  { id: 1, name: 'Herbal Tea - Chai', emoji: '🍵' },
  { id: 2, name: 'Millets & Cereals', emoji: '🌾' },
  { id: 3, name: 'Oils & Extracts', emoji: '🫒' },
  { id: 4, name: 'Rasayan', emoji: '⚗️' },
  { id: 5, name: 'Himalayan Salt', emoji: '🧂' },
  { id: 6, name: 'Sabut Herbs', emoji: '🌿' },
  { id: 7, name: 'Gums & Resins', emoji: '🪨' },
  { id: 8, name: 'Bhasm', emoji: '🔥' },
  { id: 9, name: 'Herbs Powder', emoji: '🥣' },
  { id: 10, name: 'Dried Flowers', emoji: '🌸' },
  { id: 11, name: 'Medicinal Seeds', emoji: '🫘' },
  { id: 12, name: 'Grocery & Gourmet', emoji: '🛒' },
  { id: 13, name: 'Spices & Powders', emoji: '🫚' },
  { id: 14, name: 'Dry Fruits', emoji: '🥜' },
  { id: 15, name: 'Combo Packs', emoji: '📦' },
  { id: 16, name: 'Pooja Items', emoji: '🪔' },
]

// Sample products data
const products = [
  {
    id: 1,
    name: 'Ashwagandha Root Powder',
    category: 'Herbs Powder',
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 256,
    badge: 'organic',
    emoji: '🌿',
  },
  {
    id: 2,
    name: 'Tulsi Chai Premium Blend',
    category: 'Herbal Tea',
    price: 249,
    originalPrice: 299,
    rating: 4.9,
    reviews: 189,
    badge: 'bestseller',
    emoji: '🍵',
  },
  {
    id: 3,
    name: 'Pure Himalayan Pink Salt',
    category: 'Salt',
    price: 179,
    originalPrice: null,
    rating: 4.7,
    reviews: 423,
    badge: 'organic',
    emoji: '🧂',
  },
  {
    id: 4,
    name: 'Triphala Churna Mix',
    category: 'Rasayan',
    price: 349,
    originalPrice: 449,
    rating: 4.6,
    reviews: 167,
    badge: null,
    emoji: '⚗️',
  },
  {
    id: 5,
    name: 'Organic Ragi Flour',
    category: 'Millets & Cereals',
    price: 189,
    originalPrice: null,
    rating: 4.8,
    reviews: 312,
    badge: 'organic',
    emoji: '🌾',
  },
  {
    id: 6,
    name: 'Guggul Resin Premium',
    category: 'Gums & Resins',
    price: 599,
    originalPrice: 749,
    rating: 4.5,
    reviews: 89,
    badge: null,
    emoji: '🪨',
  },
  {
    id: 7,
    name: 'Dried Rose Petals',
    category: 'Dried Flowers',
    price: 199,
    originalPrice: 249,
    rating: 4.9,
    reviews: 534,
    badge: 'bestseller',
    emoji: '🌹',
  },
  {
    id: 8,
    name: 'Mixed Dry Fruits Pack',
    category: 'Dry Fruits',
    price: 899,
    originalPrice: 1099,
    rating: 4.7,
    reviews: 278,
    badge: null,
    emoji: '🥜',
  },
]

// Featured carousel products
const featuredProducts = [
  {
    id: 101,
    name: 'Immunity Booster Kit',
    category: 'Combo Packs',
    price: 1299,
    originalPrice: 1699,
    emoji: '🛡️',
  },
  {
    id: 102,
    name: 'Pooja Samagri Set',
    category: 'Pooja Items',
    price: 499,
    originalPrice: 649,
    emoji: '🪔',
  },
  {
    id: 103,
    name: 'Cold Pressed Sesame Oil',
    category: 'Oils',
    price: 399,
    originalPrice: 499,
    emoji: '🫒',
  },
  {
    id: 104,
    name: 'Premium Saffron 1g',
    category: 'Spices',
    price: 699,
    originalPrice: 899,
    emoji: '🌸',
  },
]

// Icons as SVG components
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
)

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
)

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="21" r="1"/>
    <circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
)

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
)

// Header Component
function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">
          <div className="logo-icon">🌿</div>
          <div className="logo-text">
            <span className="logo-hindi">जड़ी बूटी</span>
            <span className="logo-english">Jadi Booti</span>
          </div>
        </a>

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

// Hero Component
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🌱</span>
            <span>100% Natural & Authentic</span>
          </div>
          <h1>
            Ancient Wisdom, <span className="highlight">Modern Wellness</span>
          </h1>
          <p className="hero-subtitle">
            Discover the purest collection of traditional Indian herbs, ayurvedic products, 
            and natural wellness essentials sourced directly from the Himalayas and sacred lands of India.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary">
              Explore Collection
              <ArrowRightIcon />
            </button>
            <button className="btn btn-secondary">
              Learn About Ayurveda
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Categories Component
function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <p>Explore our wide range of authentic Indian herbs, spices, and wellness products</p>
        </div>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <a 
              href={`/category/${category.id}`} 
              className="category-card" 
              key={category.id}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="category-image">
                {category.emoji}
              </div>
              <span className="category-name">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// Product Card Component
function ProductCard({ product, index }) {
  return (
    <div 
      className="product-card" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="product-image">
        {product.emoji}
        {product.badge && (
          <span className={`product-badge ${product.badge}`}>
            {product.badge === 'organic' ? 'Organic' : 'Bestseller'}
          </span>
        )}
        <button className="product-wishlist">
          <HeartIcon />
        </button>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">
          <span className="price-current">₹{product.price}</span>
          {product.originalPrice && (
            <span className="price-original">₹{product.originalPrice}</span>
          )}
        </div>
        <div className="product-meta">
          <div className="product-rating">
            <span className="rating-stars"><StarIcon /></span>
            <span>{product.rating}</span>
          </div>
          <span>({product.reviews} reviews)</span>
        </div>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  )
}

// Featured Products Component
function FeaturedProducts() {
  return (
    <section className="featured">
      <div className="container">
        <div className="featured-header">
          <h2>Popular Products</h2>
          <a href="/products" className="view-all">
            View All Products
            <ArrowRightIcon />
          </a>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Featured Carousel Component
function FeaturedCarousel() {
  return (
    <section className="featured-carousel">
      <div className="container">
        <div className="carousel-header">
          <h2>Special Offers</h2>
          <a href="/offers" className="view-all">
            View All Offers
            <ArrowRightIcon />
          </a>
        </div>
        <div className="carousel-track">
          {featuredProducts.map((product) => (
            <div className="carousel-item" key={product.id}>
              <div className="product-image">
                {product.emoji}
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">
                  <span className="price-current">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="price-original">₹{product.originalPrice}</span>
                  )}
                </div>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Benefits Component
function Benefits() {
  const benefits = [
    {
      icon: '🌿',
      title: '100% Natural',
      description: 'All products are sourced from organic farms and natural habitats',
    },
    {
      icon: '🏔️',
      title: 'Himalayan Sourced',
      description: 'Premium herbs collected from the pristine Himalayan regions',
    },
    {
      icon: '📜',
      title: 'Ayurveda Certified',
      description: 'Products verified by certified Ayurvedic practitioners',
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Free shipping on orders above ₹499 across India',
    },
  ]

  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              className="benefit-card" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">All Products</a></li>
              <li><a href="/blog">Ayurveda Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Herbal Tea</a></li>
              <li><a href="#">Herbs Powder</a></li>
              <li><a href="#">Pooja Items</a></li>
              <li><a href="#">Combo Packs</a></li>
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
        <Hero />
        <Categories />
        <FeaturedProducts />
        <FeaturedCarousel />
        <Benefits />
      </main>
      <Footer />
    </>
  )
}

export default App
