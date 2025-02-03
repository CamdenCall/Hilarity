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
        <h1 className="gradient">Premier Digital Fashion, Redefined.</h1>
        <p className="-s18 offwhite">Experience premier digital fashion with our high-quality virtual clothing. Elevate your style in the digital world with unique designs made for self-expression, creativity, and limitless possibilities.
        </p>
        <img src="/images/arrow.svg" />

      </motion.section>
    );
  };
  
export default HomeHeader;