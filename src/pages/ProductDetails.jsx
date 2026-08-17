import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '../data/products.js'
import { asset } from '../utils/asset.js'
import './ProductDetails.css'

export default function ProductDetails() {
  const { collection, id } = useParams()
  const navigate = useNavigate()
  const list = products[collection]
  const product = list?.find((p) => String(p.id) === id)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div className="not-found container">
        <h2>Product not found</h2>
        <button className="btn-ghost" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <motion.main
      className="product-details"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container product-details__inner">
        <button className="product-details__back" onClick={() => navigate(-1)}>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M15 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Back</span>
        </button>

        <div className="product-details__grid">
          <div className="product-details__gallery">
            <motion.div
              className="product-details__main-image"
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img src={asset(product.images[activeImage])} alt={product.name} />
            </motion.div>
            <div className="product-details__thumbs">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  className={`product-details__thumb ${activeImage === i ? 'product-details__thumb--active' : ''}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={asset(img)} alt={`${product.name} view ${i + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="product-details__info">
            <span className="eyebrow">{product.collection} Collection</span>
            <h1 className="product-details__name seam">{product.name}</h1>
            <p className="product-details__price">₹{product.price.toLocaleString('en-IN')}</p>
            <p className="product-details__desc">{product.description}</p>

            <div className="product-details__sizes">
              <span className="product-details__label">Available Sizes</span>
              <div className="product-details__size-list">
                {product.sizes.map((size) => (
                  <span key={size} className="product-details__size">
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <Link to="/" className="btn-primary product-details__cta">
              <span>Back To Collection</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.main>
  )
}
