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
          <p className="-s18 offwhite">Hilarity is among some of the world-class digital fashion creators across the metaverse. At Hilarity, we pride ourselves on fostering a collaborative and innovative environment where creativity thrives. We value creativity, passion, and the drive to push boundaries in the world of digital fashion.
          </p>

        </section>
      </motion.section>
    );
  };
  
export default CareersHeader;