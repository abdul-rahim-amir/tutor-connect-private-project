import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Testimonials.css'; // Ensure your CSS file is set up
import face4 from '../../assets/face-4.jpeg';
import face5 from '../../assets/face-5.jpeg';
import face6 from '../../assets/face-6.jpeg';

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Alice Johnson",
            role: "Student",
            message: "Thanks to Tutor Connect, I improved my math grades significantly. The tutors are knowledgeable and very supportive!",
            img: face4
        },
        {
            id: 2,
            name: "Mark Smith",
            role: "Tutor",
            message: "Working with Tutor Connect has been a rewarding experience. It has given me the opportunity to meet amazing students and help them achieve their academic goals.",
            img: face5
        },
        {
            id: 3,
            name: "Linda Brown",
            role: "Student",
            message: "Tutor Connect is fantastic! The flexible scheduling and wide range of tutors available helped me excel in my studies.",
            img: face6
        }
    ];

    const cardsRef = useRef([]);
    cardsRef.current = [];

    useEffect(() => {
        gsap.from(cardsRef.current, {
            duration: 1,
            rotateY: 90,
            transformOrigin: "left center", // You can adjust this to "right center" if you prefer a different origin for the rotation
            autoAlpha: 0,
            ease: "power2.out",
            stagger: 0.1
        });
    }, []);
    

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div ref={el => cardsRef.current[index] = el} key={testimonial.id} className="bg-white rounded-lg p-4 shadow-md">
                            <img src={testimonial.img} alt={testimonial.name} className="rounded-full w-24 h-24 mx-auto mb-3" />
                            <p className="text-center text-lg font-semibold">{testimonial.name} - {testimonial.role}</p>
                            <p className="text-center text-gray-600 italic">"{testimonial.message}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
