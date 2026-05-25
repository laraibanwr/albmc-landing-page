import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import WhoWeServe from './components/sections/WhoWeServe';
import HowItWorks from './components/sections/HowItWorks';
import Clients from './components/sections/Clients';
import AMC from './components/sections/AMC';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="font-body bg-white text-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyChooseUs />
        <WhoWeServe />
        <HowItWorks />
        <Clients />
        <AMC />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}