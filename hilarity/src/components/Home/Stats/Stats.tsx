"use client"
import "./Stats.scss"
import Counter from "@/components/Counter/Counter";
import { motion } from "motion/react"


const Stats = () => {
    return (
    <motion.section 
    className="stats"
    initial={{ opacity: 0, y: -15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={ { duration: 0.75 } }
    viewport={{ once: true }}
    >
        <h2 className="gradient">Our Statistics</h2>
        <div className="cards">
            <div className="card">
                <div className="icon">
                    <img src="/images/sales.svg" />
                </div>
                <Counter start={0} end={500000} duration={4000} />
                <div className="-s16">Sales</div>
            </div>
            <div className="card">
                <div className="icon">
                    <img src="/images/favorite.svg" />
                </div>
                <Counter start={0} end={30000} duration={4000} />
                <div className="-s16">Favorites</div>
            </div>
            <div className="card">
                <div className="icon">
                    <img src="/images/staff.svg" />
                </div>
                <Counter start={0} end={10} duration={4000} />
                <div className="-s16">Staff Members</div>
            </div>
            
        </div>
      </motion.section>
    );
  };
  
export default Stats;