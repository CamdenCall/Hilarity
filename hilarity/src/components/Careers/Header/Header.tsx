"use client"
import "./Header.scss"
import { motion } from "motion/react"

const CareersHeader = () => {
    return (
      <motion.section
       className=""
       initial={{ opacity: 0, y: -15 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={ { duration: 0.75 } }
       viewport={{ once: true }}
      >
        <section className="careers-header">
          <h1 className="gradient">Careers</h1>
          <p className="-s18">Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </section>
      </motion.section>
    );
  };
  
export default CareersHeader;