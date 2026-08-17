import { motion } from 'framer-motion'
import Hero from '../components/Hero.jsx'
import CollectionSection from '../components/CollectionSection.jsx'
import About from '../components/About.jsx'
import products from '../data/products.js'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />

      <CollectionSection
        id="couple"
        eyebrow="Made For Two"
        title="Couple Collection"
        description="Matching pieces designed to feel like your own, not a costume. Coordinated, not identical."
        products={products.couple}
        tone="light"
      />

      <CollectionSection
        id="unisex"
        eyebrow="For Everyone"
        title="Unisex Collection"
        description="Clean silhouettes and easy fits built to move with you, whoever you are."
        products={products.unisex}
        tone="alt"
      />

      <CollectionSection
        id="boys"
        eyebrow="Bold By Design"
        title="Boys Collection"
        description="Sharp fits and standout details for a generation that wears its confidence loud."
        products={products.boys}
        tone="dark"
      />

      <About />
    </motion.main>
  )
}
