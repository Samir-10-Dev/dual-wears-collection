import SectionTitle from './SectionTitle.jsx'
import ProductGrid from './ProductGrid.jsx'
import SocialIcons from './SocialIcons.jsx'
import './CollectionSection.css'

export default function CollectionSection({ id, eyebrow, title, description, products, tone = 'light' }) {
  return (
    <section id={id} className={`collection-section collection-section--${tone}`}>
      <div className="container">
        <div className="section-head-row">
          <SectionTitle eyebrow={eyebrow} title={title} description={description} />
          <SocialIcons />
        </div>
        <ProductGrid products={products} collectionSlug={id} variant={id} />
      </div>
    </section>
  )
}
