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
      <section id="linkedin-follow" style="text-align: center; margin-top: 40px;">
  <h2>Connect with Me</h2>
  <a href="https://www.linkedin.com/in/rao-m-hassan/" target="_blank" rel="noopener noreferrer" style="
    display: inline-block;
    background-color: #0a66c2;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
    transition: background-color 0.3s ease;">
    Follow me on LinkedIn
  </a>
</section>

      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;