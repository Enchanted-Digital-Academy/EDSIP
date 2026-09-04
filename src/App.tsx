import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";

// Pages from your feature branch
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Partners from "./pages/Partners";

// Landing page sections from main branch
import About from "./components/sections/About";
import Benefits from "./components/sections/Benefits";
import HowItWorks from "./components/sections/HowItWorks";
import FAQ from "./components/sections/FAQ";

// Combine the Hero with the new sections into the Home page
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <HowItWorks />
      <FAQ />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen flex flex-col">
        <Navbar />
        
        {/* Main content area that changes based on the URL */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;