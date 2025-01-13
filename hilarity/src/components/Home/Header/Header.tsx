"use client"
import "./Header.scss"
import { motion } from "motion/react"


const HomeHeader = () => {
    return (
      <motion.section
       className="home-header"
       initial={{ opacity: 0, y: -15 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={ { duration: 0.75 } }
       viewport={{ once: true }}
       >
        <h1 className="gradient">Premier Digital Attire Company</h1>
        <p className="-s18">Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img src="/images/arrow.svg" />

      </motion.section>
    );
  };
  
export default HomeHeader;