import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import teamPhoto from '../../assets/team-support.jpg';
import video1 from '../../assets/video.mp4';  //  promo video that talks about your values and mission

import './AboutUs.css'; // Link to your CSS for styling

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
    const sectionRefs = useRef([]);
    sectionRefs.current = [];

    useEffect(() => {
        sectionRefs.current.forEach((section) => {
            gsap.fromTo(section, {
                autoAlpha: 0,
                y: 100
            }, {
                duration: 1,
                autoAlpha: 1,
                y: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse',
                    markers: false // Set this to false to remove the debug markers
                }
            });
        });
    }, []);
    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    return (
        <div className="about-us-container mt-16">
            {/* Introduction Section with Image and Text in Grid */}
            <section ref={addToRefs} className="intro-section grid grid-cols-2 items-center gap-4 opacity-0 translate-y-10">
                <div className="text-section">
                    <h2 className="text-6xl font-semibold  mb-4">"About TutorConnect"</h2>
                    <p>At TutorConnect, we believe in empowering every student with personalized education, tailored to their needs and goals.</p>
                </div>
                <div className="image-section">
                    <img src={teamPhoto} alt="Our Team" className="rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105" />
                </div>
            </section>

            <section ref={addToRefs} className="video-section grid grid-cols-2 items-center gap-4 opacity-0 translate-y-10">
                <div className="video-container">
                    <video src={video1} controls className="w-full rounded shadow"></video>
                </div>
                <div className="video-text">
                    <h2 className="text-5xl font-semibold mb-4">Discover Our Journey</h2>
                    <p>Discover our journey and the impact we've made in the educational landscape.</p>
                </div>
            </section>
            {/* Careers Section */}
            <section ref={addToRefs} className="careers-section bg-white text-gray-800 opacity-0 translate-y-10">
                <div className="container mx-auto px-4 py-12">
                    <h2 className="text-5xl font-bold text-center mb-8">Careers at TutorConnect</h2>
                    <p className="text-xl mb-6">Join our team and help shape the future of education. We are looking for passionate, innovative minds ready to make a significant impact.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="career opportunity">
                            <h3 className="text-2xl font-semibold">Educational Technologist</h3>
                            <p>Help develop cutting-edge educational tools and platforms.</p>
                            <button className="mt-4 px-6 py-2 bg-fuchsia-900 text-white rounded hover:bg-fuchsia-700 transition-all duration-300">Apply Now</button>
                        </div>
                        <div className="career opportunity">
                            <h3 className="text-2xl font-semibold">Content Creator</h3>
                            <p>Create engaging educational content that reaches millions of learners.</p>
                            <button className="mt-4 px-6 py-2 bg-fuchsia-900 text-white rounded hover:bg-fuchsia-700 transition-all duration-300">Apply Now</button>
                        </div>
                        <div className="career opportunity">
                            <h3 className="text-2xl font-semibold">Customer Support Specialist</h3>
                            <p>Provide outstanding support and service to our global community of learners and educators.</p>
                            <button className="mt-4 px-6 py-2 bg-fuchsia-900 text-white rounded hover:bg-fuchsia-700 transition-all duration-300">Apply Now</button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="values-section" ref={addToRefs}>
                <h2>Our Core Values</h2>
                <ul>
                    <li>Innovation in Education</li>
                    <li>Community and Support</li>
                    <li>Accessibility for All</li>
                </ul>
            </div>
            <div className="testimonials-section" ref={addToRefs}>
                <h2>What People Say</h2>
                {/* Place testimonials here */}
            </div>
            <div className="call-to-action-section" ref={addToRefs}>
                <h2>Join Us</h2>
                <p>Be part of a community that changes lives. Join TutorConnect today!</p>
                <button>Learn More</button>
            </div>
        </div>
    );
}

export default AboutUs;
