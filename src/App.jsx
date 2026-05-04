import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';
import SpotlightBackground from './components/SpotlightBackground';
import SectionWrapper from './components/SectionWrapper';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-teal-500 selection:text-white cursor-none">
      <CustomCursor />
      <SpotlightBackground />
      <Navbar />
      <main>
        <SectionWrapper id="hero">
          <Hero />
        </SectionWrapper>
        
        <SectionWrapper id="about">
          <About />
        </SectionWrapper>
        
        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>
        
        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>
        
        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>
        
        <SectionWrapper id="achievements">
          <Achievements />
        </SectionWrapper>
        
        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}

export default App;
