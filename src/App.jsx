import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import CustomCursor from './components/CustomCursor';
import SpotlightBackground from './components/SpotlightBackground';
import SectionWrapper from './components/SectionWrapper';
import SmoothScroll from './components/SmoothScroll';
import MatrixLoader from './components/MatrixLoader';
import ThreeBackground from './components/ThreeBackground';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Magnetic from './components/Magnetic';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  const handleLoaded = useCallback(() => setLoading(false), []);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <>
      <AnimatePresence>
        {loading && <MatrixLoader onComplete={handleLoaded} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            key={theme}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SmoothScroll>
              <div
                className="min-h-screen text-white font-sans cursor-none overflow-x-hidden mesh-gradient transition-colors duration-700"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {/* Global overlays */}
                <div className="fixed inset-0 noise-overlay z-[1] opacity-[0.03]" />
                <CustomCursor />
                <ThreeBackground />
                <SpotlightBackground />
                <ScrollProgress />

                <Navbar toggleTheme={toggleTheme} theme={theme} />

                <main className="relative z-10">
                  <Hero />

                  <SectionWrapper>
                    <About />
                  </SectionWrapper>

                  <SectionWrapper>
                    <Services />
                  </SectionWrapper>

                  <SectionWrapper>
                    <Projects />
                  </SectionWrapper>

                  <SectionWrapper>
                    <Experience />
                  </SectionWrapper>

                  <SectionWrapper>
                    <Skills />
                  </SectionWrapper>

                  <SectionWrapper>
                    <Achievements />
                  </SectionWrapper>

                  <SectionWrapper>
                    <Testimonials />
                  </SectionWrapper>

                  <SectionWrapper>
                    <Contact />
                  </SectionWrapper>
                </main>

                <Footer />
                <BackToTop />
              </div>
            </SmoothScroll>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
