"use client"
import Link from 'next/link';
import "./Footer.scss";
import { motion } from "motion/react"

const Footer = () => {
  return (
    <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={ { duration: 0.75 } }
    viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-top">
          <img src="/images/logo-text.svg" alt="logo" />
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <img src="/images/copyright.svg" />
          <p className="-s16 -left">2025 HILARITY Copyright. All Rights Reserved</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;