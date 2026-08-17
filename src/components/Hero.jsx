import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { asset } from "../utils/asset.js";
import "./Hero.css";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToCollections = () => {
    document.getElementById("couple")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" ref={ref} className="hero">
      <motion.div className="hero__bg" style={{ y: imageY }} />

      <div className="hero__seam" aria-hidden="true" />

      <motion.div
        className="hero__floating hero__floating--one"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero__floating hero__floating--two"
        animate={{ y: [0, 16, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="hero__content container"
        style={{ y: textY, opacity }}
      >
        <motion.p
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          ASSET Wears Collection
        </motion.p>

        <motion.h1
          className="hero__headline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          Wear your
          <br />
          <span className="hero__headline-alt">difference.</span>
        </motion.h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Modern styles made for every connection, every personality, and every
          moment.
        </motion.p>

        <motion.button
          className="btn-primary hero__cta"
          onClick={scrollToCollections}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Explore Collection</span>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path
              d="M1 5H15M15 5L11 1M15 5L11 9"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </motion.div>

      <motion.div
        className="hero__image-wrap"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 1.3, delay: 0.2, ease: [0.65, 0, 0.15, 1] }}
      >
        <motion.img
          src={asset("/images/hero/f1.png")}
          alt="Dual Wears Collection lookbook"
          className="hero__image"
          style={{ y: imageY }}
        />
      </motion.div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
}
