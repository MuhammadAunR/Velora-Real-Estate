import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NavDrawer from "@/components/NavDrawer";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <NavDrawer />
      <Navbar />
      <HeroSection />
      <Services />
      <Gallery />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}
