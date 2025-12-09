import { useParams, Link } from 'react-router-dom'
import { getCategoryById, getProductsByCategory, categories } from '../data'
import { HeartIcon, StarIcon, ArrowLeftIcon } from '../components/Icons'

// Product Card Component
function ProductCard({ product, index }) {
  return (
    <div 
      className="product-card" 
      style={{ animationDelay: `${index * 0.05}s` }}
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
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">
          <span className="price-current">₹{product.price}</span>
          {product.originalPrice && (
            <span className="price-original">₹{product.originalPrice}</span>
          )}
          {product.originalPrice && (
            <span className="price-discount">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
            </span>
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

export default function CategoryProducts() {
  const { categoryId } = useParams()
  const category = getCategoryById(categoryId)
  const products = getProductsByCategory(categoryId)

  if (!category) {
    return (
      <div className="category-not-found">
        <div className="container">
          <h1>Category Not Found</h1>
          <p>The category you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">
            <ArrowLeftIcon />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="category-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">{category.name}</span>
        </div>
      </div>

      {/* Category Header */}
      <section className="category-header">
        <div className="container">
          <div className="category-hero">
            <div className="category-hero-icon">{category.emoji}</div>
            <div className="category-hero-content">
              <h1>{category.name}</h1>
              <p>Discover our collection of authentic {category.name.toLowerCase()} products, sourced from the finest natural ingredients.</p>
              <span className="product-count">{products.length} Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="category-products">
        <div className="container">
          <div className="category-toolbar">
            <div className="toolbar-left">
              <span className="results-count">Showing {products.length} products</span>
            </div>
            <div className="toolbar-right">
              <select className="sort-select">
                <option value="popular">Sort by: Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {products.length > 0 ? (
            <div className="products-grid">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>No products available in this category yet.</p>
              <Link to="/" className="btn btn-secondary">Browse All Categories</Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="related-categories">
        <div className="container">
          <h2>Explore Other Categories</h2>
          <div className="related-categories-grid">
            {categories
              .filter(c => c.id !== category.id)
              .slice(0, 6)
              .map((cat) => (
                <Link to={`/category/${cat.id}`} className="related-category-card" key={cat.id}>
                  <span className="related-category-emoji">{cat.emoji}</span>
                  <span className="related-category-name">{cat.name}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
