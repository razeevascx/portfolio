import About from "./components/About";
import Home from "./components/Home";
import Star from "./components/Star";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative">
      {/* Star background or effect component */}
      <div className="fixed inset-0 -z-10">
        <Star />
      </div>

      {/* Main content wrapper with a higher z-index */}
      <div className="relative z-10">
    
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
