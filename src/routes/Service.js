import Hero from "/src/components/Hero";
import Navbar from "/src/components/Navbar";
import AboutImg from "/src/assets/18.avif";
import Footer from "/src/components/Footer";
import Trip from "/src/components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
