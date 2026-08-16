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
    </>
  );
}
