import "./App.css";
import Nav from "./components/Nav/Nav";
import Mainview from "./components/Mainview";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="App">
      <Nav />
      <Mainview />
      <Skills />
      <div
        onClick={scrollToTop}
        className={isVisible ? "active" : "inactive"}
        id="toTop"
      >
        <i
          class="fa fa-2x fa-rocket"
          style={{
            color: "var(--red)",
            position: "fixed",
            bottom: "40px",
            right: "30px",
            transform: "rotate(-45deg)",
          }}
        ></i>
      </div>
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
