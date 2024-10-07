import Wrapper from "@/components/default/wrapper/Wrapper";
import Hero from "@/components/home/hero/Hero";
import AboutUs from "@/components/home/about/AboutUs";
import Services from "@/components/home/services/Services";
import TourDepartureArrival from "@/components/home/tourDepartureArrival/TourDepartureArrival";
import Facilities from "@/components/home/facilities/Facilities";
import Gallery from "@/components/home/gallery/Gallery";
import Contact from "@/components/home/contact/Contact";

export default function Home() {
  return (
  <Wrapper>
    <div>
      <Hero/>
      <AboutUs/>
      <Services/>
      <TourDepartureArrival/>
      <Facilities/>
      <Gallery/>
      <Contact/>
    </div>
  </Wrapper>
  );
}
