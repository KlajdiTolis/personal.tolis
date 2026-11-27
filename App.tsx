import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import { useRoute } from './hooks/useRoute';

function App() {
  const path = useRoute();
  const isContact = path === '/contact';

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        {isContact ? (
          <Contact />
        ) : (
          <>
            <Hero />
            <Experience />
            <Skills />
            <Education />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
