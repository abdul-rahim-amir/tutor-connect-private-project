import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css'; // Make sure this CSS file is correctly linked
import contact from '../../assets/contact.jpg';

gsap.registerPlugin(ScrollTrigger);

function ContactUs() {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(sectionRef.current, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 90%',
                toggleActions: 'play none none none',
            }
        });
    }, []);

    return (
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center" ref={sectionRef}>
            <div className="contact-image">
                <img src={contact} alt="Contact Us" className="w-full h-full object-cover rounded-lg"/>
            </div>
            <div className="contact-form bg-white shadow-lg p-6 rounded-lg">
                <h2 className="text-5xl font-semibold mb-4">Contact Us</h2>
                <form action="#" method="POST">
                    <input type="text" placeholder="Your Name" className="input-field"/>
                    <input type="email" placeholder="Your Email" className="input-field"/>
                    <textarea placeholder="Your Message" className="textarea-field"></textarea>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
