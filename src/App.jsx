import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsMarquee from "./components/SkillsMarquee";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
	<SkillsMarquee />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;