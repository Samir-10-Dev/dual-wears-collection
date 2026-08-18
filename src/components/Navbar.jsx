import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import "./Navbar.css";

const LINKS = [
  { label: "Home", hash: "home" },
  { label: "Couple", hash: "couple" },
  { label: "Unisex", hash: "unisex" },
  { label: "Boys", hash: "boys" },
  { label: "About", hash: "about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [open]);

  const goTo = (hash) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <button
          className="navbar__logo"
          onClick={() => goTo("home")}
          aria-label="Dual Wears Collection — Home"
        >
          <span className="navbar__logo-word">ASSET</span>
          <span className="navbar__logo-seam" />
          <span className="navbar__logo-word navbar__logo-word--light">
            WEARS
          </span>
        </button>

        <nav className="navbar__links">
          {LINKS.map((link) => (
            <button
              key={link.hash}
              className="navbar__link"
              onClick={() => goTo(link.hash)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="navbar__burger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <HiOutlineMenu size={26} />
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          <button
            className="navbar__mobile-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <HiX size={30} />
          </button>
          <nav className="navbar__mobile-links">
            {LINKS.map((link) => (
              <button
                key={link.hash}
                className="navbar__mobile-link"
                onClick={() => goTo(link.hash)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
