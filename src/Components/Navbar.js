import React, { useState, useEffect, useRef } from 'react';
import '../Components/Navbar.css'
import Home from './Home.js'
import About from './About.js'
import Download from './downloadApp.js'
import Contact from './ContactUs.js'
import Ghllah from '../../src/assets/Ghllah.png'




import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';

const StaticMenu = () => {
  const homeSection = useScrollSection('home');
  const aboutSection = useScrollSection('about');
  const experienceSection = useScrollSection('experience');
  const skillsSection = useScrollSection('skills');
  const contactSection = useScrollSection('contact');
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 670 //670
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={navBackground ? "navbar scroll" : "navbar"}
      style={{ transition: '1s ease' }}>
      <div className="navbar-container">
      

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item" onClick={contactSection.onClick} selected={contactSection.selected } >
          تواصل معنا
      </li>
          <li className="nav-item" onClick={experienceSection.onClick} selected={experienceSection.selected}>
            فريق العمل
      </li>
          <li className="nav-item" onClick={aboutSection.onClick} selected={aboutSection.selected}>
خدماتنا      </li>
          <li className="nav-item" onClick={homeSection.onClick} selected={homeSection.selected}>
الرئيسية      </li>
        </ul>

        <p className="navbar-logo">  <img className="ghallahHeaderLogo" src= {Ghllah}/> </p>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => (
  <ScrollingProvider>
    <StaticMenu />
    <Section className="section homeSection" id="home"> <Home/></Section>
    <Section className="section aboutSection" id="about"><About/> </Section>
    <Section className="section experienceSection" id="experience"><Download/></Section>
    <Section className="section contactSection" id="contact"><Contact/></Section>
  </ScrollingProvider>
);
export default Navbar;