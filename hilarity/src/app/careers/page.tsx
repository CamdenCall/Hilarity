import { Metadata } from 'next';
import Footer from '@/components/Footer/Footer'
import JobBoard from '@/components/Careers/Jobs/Jobs';
import CareersHeader from '@/components/Careers/Header/Header';
import { motion } from "motion/react"
export const metadata: Metadata = {
  title: 'Hilarity Careers',
  description: 'Hilarity is among some of the world-class digital fashion creators across the metaverse. At Hilarity, we pride ourselves on fostering a collaborative and innovative environment where creativity thrives. We value creativity, passion, and the drive to push boundaries in the world of digital fashion.',
  icons: {
    icon: "/images/logo.svg",
  }
}
export default function Careers() {
  return (
    <>
      <div>
        <CareersHeader />
        <JobBoard />
      </div>
      <Footer />
    </>
  );
}