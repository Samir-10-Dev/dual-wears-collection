import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import './Navbar.css'

const LINKS = [
  { label: 'Home', hash: 'home' },
  { label: 'Couple', hash: 'couple' },
  { label: 'Unisex', hash: 'unisex' },
  { label: 'Boys', hash: 'boys' },
  { label: 'About', hash: 'about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const goTo = (hash) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <button className="navbar__logo" onClick={() => goTo('home')} aria-label="Dual Wears Collection — Home">
          <span className="navbar__logo-word">DUAL</span>
          <span className="navbar__logo-seam" />
          <span className="navbar__logo-word navbar__logo-word--light">WEARS</span>
        </button>

        <nav className="navbar__links">
          {LINKS.map((link) => (
            <button key={link.hash} className="navbar__link" onClick={() => goTo(link.hash)}>
              {link.label}
            </button>
          ))}
        </nav>

        <button className="navbar__burger" onClick={() => setOpen(true)} aria-label="Open menu">
          <HiOutlineMenu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="navbar__mobile-close" onClick={() => setOpen(false)} aria-label="Close menu">
              <HiX size={30} />
            </button>
            <motion.nav
              className="navbar__mobile-links"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
            >
              {LINKS.map((link) => (
                <motion.button
                  key={link.hash}
                  className="navbar__mobile-link"
                  onClick={() => goTo(link.hash)}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
