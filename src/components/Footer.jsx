import SocialIcons from './SocialIcons.jsx'
import './Footer.css'

const LINKS = [
  { label: 'Home', hash: 'home' },
  { label: 'Couple', hash: 'couple' },
  { label: 'Unisex', hash: 'unisex' },
  { label: 'Boys', hash: 'boys' },
  { label: 'About', hash: 'about' },
]

export default function Footer() {
  const goTo = (hash) => {
    if (window.location.hash.replace('#', '') !== '/') {
      window.location.hash = '/'
      setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 100)
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">DUAL WEARS COLLECTION</span>
            <p className="footer__tagline">Wear your difference.</p>
          </div>

          <nav className="footer__links">
            {LINKS.map((link) => (
              <button key={link.hash} onClick={() => goTo(link.hash)} className="footer__link">
                {link.label}
              </button>
            ))}
          </nav>

          <div className="footer__social">
            <span className="eyebrow">Follow Us</span>
            <SocialIcons />
          </div>
        </div>

        <div className="footer__seam" aria-hidden="true" />

        <p className="footer__copyright">© 2026 Dual Wears Collection. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
