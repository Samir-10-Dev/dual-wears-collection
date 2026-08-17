import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { asset } from '../utils/asset.js'
import './ProductCard.css'

const cardVariants = {
  hidden: { opacity: 0, y: 46, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function ProductCard({ product, collectionSlug }) {
  return (
    <motion.article className="product-card" variants={cardVariants}>
      <Link to={`/product/${collectionSlug}/${product.id}`} className="product-card__media">
        <img src={asset(product.images[0])} alt={product.name} className="product-card__img product-card__img--front" />
        <img src={asset(product.images[1])} alt={`${product.name} back`} className="product-card__img product-card__img--back" />
        <span className="product-card__overlay" />
        <span className="product-card__view">
          <span>View Product</span>
        </span>
      </Link>

      <div className="product-card__info">
        <div className="product-card__row">
          <h3 className="product-card__name">{product.name}</h3>
          <span className="product-card__price">₹{product.price.toLocaleString('en-IN')}</span>
        </div>
        <p className="product-card__desc">{product.description}</p>
        <Link to={`/product/${collectionSlug}/${product.id}`} className="product-card__btn">
          <span>View Product</span>
          <svg width="14" height="9" viewBox="0 0 16 10" fill="none">
            <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </motion.article>
  )
}
