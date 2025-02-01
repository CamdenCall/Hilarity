import { Metadata } from 'next';
import Footer from '@/components/Footer/Footer'
import JobApplication from '@/components/Careers/Application/Application';
import { motion } from "motion/react"
export const metadata: Metadata = {
  title: 'Hilarity Careers',
  description: 'Hilarity Job Careers',
  icons: {
    icon: "/images/logo.svg",
  }
}
export default function Careers() {
  return (
   <>
   <motion.section
       className="home-header"
       initial={{ opacity: 0, y: -15 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={ { duration: 0.75 } }
       viewport={{ once: true }}
       >
   <JobApplication />
   </motion.section>
    <Footer />
   </>
  );
}