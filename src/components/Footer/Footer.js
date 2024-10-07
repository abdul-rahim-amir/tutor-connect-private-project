import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import './Footer.css';

function Footer() {
    const footerRef = useRef();
    const logoRef = useRef();
    const linksRef = useRef([]);
    const socialIconsRef = useRef([]);

    useEffect(() => {
        gsap.from(logoRef.current, { duration: 1, y: -50, opacity: 0, ease: 'bounce' });
        gsap.from(linksRef.current, { duration: 1, stagger: 0.2, x: -100, opacity: 0, ease: 'power3.out' });
        gsap.from(socialIconsRef.current, { duration: 1, stagger: 0.1, x: 100, opacity: 0, ease: 'power3.out' });
    }, []);

    return (
        <footer ref={footerRef} className="bg-black text-gray-400 p-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="logo-and-about" ref={logoRef}>
                    <img src={logo} alt="TutorConnect Logo" className="mb-3 w-40 h-auto" />
                    <h2 className="font-bold text-lg mb-3 text-white">About Us</h2>
                    <p>TutorConnect is dedicated to helping students achieve their educational goals by connecting them with top-notch tutors from around the world.</p>
                </div>
                <div>
                    <h2 className="font-bold text-lg mb-3 text-white">Quick Links</h2>
                    <ul>
                        {['Home', 'About', 'Services', 'Contact'].map((link, index) => (
                            <li className="mb-2" ref={el => linksRef.current[index] = el} key={link}>
                                <a href="/" className="hover:underline text-gray-300">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-lg mb-3 text-white">Follow Us</h2>
                    <div className="flex space-x-4">
                        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                            <a href="/" className="text-gray-300 hover:text-gray-500" key={index} ref={el => socialIconsRef.current[index] = el}>
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 font-medium text-gray-300">
                © 2024 TutorConnect. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
