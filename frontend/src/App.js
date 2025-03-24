import './App.css';
import Hero from './components/Hero';
import Cursor from './components/Cursor'
import Nav from './components/Nav';
import Education from './components/Education';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
    <Nav/>
    <Cursor/>
    <Hero/>
    <Education/>
    <Work/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
