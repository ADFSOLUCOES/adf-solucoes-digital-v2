import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/main.scss";

import { ThemeProvider } from "./contexts/ThemeContext";

// Componentes
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Cases from "./components/Cases";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <ScrollToTop />
          <Header />
          <main>
            <Hero />
            <Services />
            <Technologies />
            <Cases />
            <Blog />
            <Newsletter />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
