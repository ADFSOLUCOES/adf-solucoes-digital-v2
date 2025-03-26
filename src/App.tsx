import { BrowserRouter as Router } from "react-router-dom";
import "./styles/main.scss";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Cases from "./components/Cases";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Services />
          <Technologies />
          <About />
          <Cases />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
