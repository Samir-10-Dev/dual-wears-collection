import { motion } from "framer-motion";
import { asset } from "../utils/asset.js";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <motion.div
          className="about__image-wrap"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={asset("/images/about/a1.png")}
            alt="About Dual Wears Collection"
            className="about__image"
          />
          <div className="about__seam" aria-hidden="true" />
        </motion.div>

        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">About Us</span>
          <h2 className="about__title seam">
            Two halves.
            <br />
            One collection.
          </h2>
          <p className="about__text">
            Asset started with a simple idea — clothing should be more than
            something you wear; it should be a way to express who you are and
            the connections you share. From couples who match in their own way,
            to friends who share the same energy, and individuals who
            confidently embrace their own style, we bring different
            personalities and styles together in one collection.
          </p>
          <p className="about__text">
            We’re starting online to create something different — a fresh way to
            discover, explore, and wear styles that feel truly yours. We want
            every piece to feel like a reflection of your personality, whether
            you’re dressing with someone or simply dressing for yourself. Asset
            — Wear Your Difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
