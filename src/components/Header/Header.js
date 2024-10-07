import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../../assets/logo.png';
import Profile from '../../assets/profile-pic (3).png';

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 0) {
          headerRef.current.classList.add('translate-x-full');
        } else {
          headerRef.current.classList.remove('translate-x-full');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
  className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-75 backdrop-filter backdrop-blur-md -webkit-backdrop-filter blur-md rounded-full mx-96 mt-3 mb-6 flex justify-center items-center py-3 px-12 transition-transform duration-300 ease-in-out"

      ref={headerRef}
    >
      <div className="container mx-auto flex justify-between items-center w-full">
      <NavLink to="/"><img src={logoImage} alt="Logo" className="h-7" /></NavLink>
        <nav className="flex items-center">
          <NavLink to="/" className="text-white text-sm mx-3 hover:text-purple-300" activeClassName="font-bold">Home</NavLink>
          <NavLink to="/about" className="text-white text-sm mx-3 hover:text-purple-300" activeClassName="font-bold">About Us</NavLink>
          <NavLink to="/services" className="text-white text-sm mx-3 hover:text-purple-300" activeClassName="font-bold">Services</NavLink>
          <NavLink to="/blog" className="text-white text-sm mx-3 hover:text-purple-300" activeClassName="font-bold">Blog</NavLink>
        </nav>
        <NavLink to="/signup "><img src={Profile} alt="Profile Icon" className="h-8" /></NavLink>
      </div>
    </header>
  );
}

export default Header;