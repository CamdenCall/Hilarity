import { Metadata } from 'next'

import Header from "@/components/Careers/Header/Header"
import JobBoard from "@/components/Careers/Jobs/Jobs";
import Footer from "@/components/Footer/Footer";
export const metadata: Metadata = {
  title: 'Hilarity Careers',
  icons: {
    icon: "/images/logo.svg",
  }
 }
export default function Careers() {

  return (
    <>
      <Header />
      <JobBoard />
      <Footer />
    </>
  );
}
