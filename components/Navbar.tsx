import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { navigate, useRoute } from '../hooks/useRoute';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const path = useRoute();
  const isContact = path === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    if (isContact) {
      navigate('/');
      // Wait for the home sections to render before scrolling.
      requestAnimationFrame(() => requestAnimationFrame(scroll));
    } else {
      scroll();
    }
  };

  const goHome = () => {
    if (isContact) navigate('/');
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div onClick={goHome} className="cursor-pointer">
          <Logo className="h-7" />
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors">Projects</button>
          <button onClick={() => scrollTo('skills')} className="hover:text-white transition-colors">Skills</button>
          <button onClick={() => scrollTo('education')} className="hover:text-white transition-colors">Education</button>
        </div>
        
        <a
          href="/contact"
          onClick={(e) => {
            e.preventDefault();
            navigate('/contact');
          }}
          aria-current={isContact ? 'page' : undefined}
          className={`text-sm font-semibold border px-4 py-2 rounded-full transition-all ${
            isContact
              ? 'bg-white text-black border-white'
              : 'text-white border-zinc-800 hover:bg-white hover:text-black'
          }`}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;