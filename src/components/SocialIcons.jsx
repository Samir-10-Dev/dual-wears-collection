import { FaInstagram, FaTiktok } from 'react-icons/fa'
import { instagramUrl, tiktokUrl } from '../config/social.js'
import './SocialIcons.css'

export default function SocialIcons({ align = 'left' }) {
  return (
    <div className={`social-icons social-icons--${align}`}>
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icons__link"
        aria-label="Follow us on Instagram"
      >
        <FaInstagram size={18} />
      </a>
      <a
        href={tiktokUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icons__link"
        aria-label="Follow us on TikTok"
      >
        <FaTiktok size={17} />
      </a>
    </div>
  )
}
