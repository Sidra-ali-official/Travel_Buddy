import Destination from "/src/components/Destination";
import Hero from "/src/components/Hero";
import Navbar from "/src/components/Navbar";
import Trip from "/src/components/Trip";
import Footer from "/src/components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wWYdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Discover The World, Your Way"
        text="Choose Your Favorite Destination"
        buttonText="Plan Your Trip"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
