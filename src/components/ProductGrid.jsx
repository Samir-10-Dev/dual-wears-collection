import { motion } from 'framer-motion'
import ProductCard from './ProductCard.jsx'
import './ProductGrid.css'

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export default function ProductGrid({ products, collectionSlug, variant = 'default' }) {
  return (
    <motion.div
      className={`product-grid product-grid--${variant}`}
      variants={gridVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} collectionSlug={collectionSlug} />
      ))}
    </motion.div>
  )
}
