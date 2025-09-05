import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Products from '../components/Products';
import Approach from '../components/Approach';
import Contact from '../components/Contact';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Approach />
      <Contact />
    </div>
  );
}