import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Benefits from "./components/sections/Benefits";
import HowItWorks from "./components/sections/HowItWorks";
import FAQ from "./components/sections/FAQ";

const App = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />

      <About />

      <Benefits />

      <HowItWorks />

      <FAQ />

      <Footer />
    </div>
  );
};

export default App;