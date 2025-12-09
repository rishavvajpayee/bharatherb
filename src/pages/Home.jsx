import { Link } from 'react-router-dom'
import { categories, products, featuredProducts } from '../data'
import { HeartIcon, StarIcon, ArrowRightIcon } from '../components/Icons'

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
            <Link 
              to={`/category/${category.id}`} 
              className="category-card" 
              key={category.id}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="category-image">
                {category.emoji}
              </div>
              <span className="category-name">{category.name}</span>
            </Link>
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
        <span className="product-category">{categories.find(c => c.id === product.categoryId)?.name}</span>
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
  const displayProducts = products.slice(0, 8)
  
  return (
    <section className="featured">
      <div className="container">
        <div className="featured-header">
          <h2>Popular Products</h2>
          <Link to="/products" className="view-all">
            View All Products
            <ArrowRightIcon />
          </Link>
        </div>
        <div className="products-grid">
          {displayProducts.map((product, index) => (
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
          <Link to="/offers" className="view-all">
            View All Offers
            <ArrowRightIcon />
          </Link>
        </div>
        <div className="carousel-track">
          {featuredProducts.map((product) => (
            <div className="carousel-item" key={product.id}>
              <div className="product-image">
                {product.emoji}
              </div>
              <div className="product-info">
                <span className="product-category">{categories.find(c => c.id === product.categoryId)?.name}</span>
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

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <FeaturedCarousel />
      <Benefits />
    </>
  )
}
