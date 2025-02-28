import React from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
// import { Clients } from './components/Clients';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      {/* <Clients /> */}
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;