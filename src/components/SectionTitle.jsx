import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="seam">{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}
