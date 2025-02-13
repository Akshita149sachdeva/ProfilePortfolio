import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Education from "./components/education/Education";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects"; // Import the new Projects component

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Education">
        <Parallax type="services" />
      </section>
      <section>
        <Education />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>
        <Portfolio />
      </section>
      <section id="Projects">
        <Parallax type="projects" /> {/* Add parallax for Projects section */}
      </section>
      <section>
        <Projects /> {/* Add the Projects component */}
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;