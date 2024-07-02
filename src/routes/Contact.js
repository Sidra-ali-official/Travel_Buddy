import Hero from "/src/components/Hero";
import Navbar from "/src/components/Navbar";
import AboutImg from "/src/assets/10.jpg";
import Footer from "/src/components/Footer";
import ContactForm from "/src/components/ContactForm";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
