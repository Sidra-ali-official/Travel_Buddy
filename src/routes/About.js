import Hero from "/src/components/Hero";
import Navbar from "/src/components/Navbar";
import AboutImg from "/src/assets/night.jpg";
import Footer from "/src/components/Footer";
import AboutUs from "/src/components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
