import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/main.scss";

import { ThemeProvider } from "./contexts/ThemeContext";

// Componentes
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cases from "./components/Cases";
import About from "./components/About";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import BudgetForm from "./components/BudgetForm";
import Contact from "./components/Contact";
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
            <Cases />
            <About />
            <Services />
            <Technologies />
            <Blog />
            <Newsletter />

            <Contact />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
