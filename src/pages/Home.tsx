import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Products from '../components/Products';
import Approach from '../components/Approach';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Approach />
      <Contact />
    </>
  );
};

export default Home;