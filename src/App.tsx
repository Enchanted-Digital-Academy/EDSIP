import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Partners from "./pages/Partners";

// We wrap your Hero (and future sections) in a simple Home component
const Home = () => {
  return (
    <>
      <Hero />
      {/* You can add About, Features, etc. here later */}
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