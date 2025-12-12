import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/main.scss";

import { ThemeProvider } from "./contexts/ThemeContext";

// Componentes
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <ScrollToTop />
          <Header />
          <main>
            <Hero />
            {/* <Stats /> */}
            <Services />
            {/* <Technologies /> */}
            {/* <Cases /> */}
            {/* <Testimonials /> */}
            {/* <FAQ /> */}
            {/* <Newsletter /> */}
            <Contact />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
