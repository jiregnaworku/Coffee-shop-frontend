import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
