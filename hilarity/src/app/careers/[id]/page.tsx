import { Metadata } from 'next';
import Footer from '@/components/Footer/Footer'
import JobApplication from '@/components/Careers/Application/Application'
export const metadata: Metadata = {
  title: 'Hilarity Career',
  description: 'Hilarity Career',
  icons: {
    icon: "/images/logo.svg",
  }
}
export default function JobPage() {

  return (
    <>
      <JobApplication />
      <Footer />
    </>
  );
}