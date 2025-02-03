import { Metadata } from 'next';
import Footer from '@/components/Footer/Footer'
import JobBoard from '@/components/Careers/Jobs/Jobs';
import CareersHeader from '@/components/Careers/Header/Header';
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
      <div>
        <CareersHeader />
        <JobBoard />
      </div>
      <Footer />
    </>
  );
}