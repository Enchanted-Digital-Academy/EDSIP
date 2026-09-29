import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Benefits from "./components/sections/Benefits";
import HowItWorks from "./components/sections/HowItWorks";
import FAQ from "./components/sections/FAQ";

import ApplicationPage from "./pages/ApplicationPage";
import TeamPage from "./pages/TeamPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import RefundCancellationPage from "./pages/RefundCancellationPage";
import AntiPiracyPage from "./pages/AntiPiracyPage";

const HomePage = () => {
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplicationPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/terms" element={<TermsOfUsePage />} />
        <Route
          path="/refund-cancellation"
          element={<RefundCancellationPage />}
        />
        <Route path="/anti-piracy" element={<AntiPiracyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;