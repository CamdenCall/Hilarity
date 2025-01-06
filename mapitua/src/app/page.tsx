
import type { Metadata } from "next";
import HomeHeader from "@/components/Home/Header/Header";
import Stats from "@/components/Home/Stats/Stats";
import Contact from "@/components/Home/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import "@/styles/global.scss";

export default function HomePage() {

  return (
    <>
      <HomeHeader />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}
