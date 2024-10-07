import React, { useRef, useEffect, useState } from 'react'; // Import useState
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import InstantTutoringDialog from './InstantTutoringDialog'; // Import the InstantTutoringDialog component
import allinone from '../../assets/all-in-one.jpg';
import malefemale from '../../assets/male-female-tutor.jpeg';
import schedule from '../../assets/schedule-1.jpg';
import examPrep from '../../assets/exam-prepration.jpg'; // Assume proper path

function HowItWorks() {
    const navigate = useNavigate();
    const [openInstantTutoringDialog, setOpenInstantTutoringDialog] = useState(false); // State to control the dialog box visibility

    const steps = [
        {
            id: 1,
            title: "Instant Tutoring",
            description: "Connect instantly with tutors for immediate help.",
            img: malefemale,
            link: "/instant-tutoring" // Update the link to "/instant-tutoring"
        },
        {
            id: 2,
            title: "Scheduled Sessions",
            description: "Book sessions at your convenience with preferred tutors.",
            img: schedule,
            link: "/scheduled-sessions" // Navigates to Schedule Sessions component
        },
        {
            id: 3,
            title: "Specialized Courses",
            description: "Enroll in courses designed for intensive learning.",
            img: allinone,
            link: "/courses"
        },
        {
            id: 4,
            title: "Exam Preparation",
            description: "Prepare for exams with targeted tutoring sessions.",
            img: examPrep,
            link: "/exam-preparation"
        }
        // ... (other steps)
    ];

    const boxesRef = useRef([]);
    boxesRef.current = [];

    useEffect(() => {
        gsap.fromTo(
            boxesRef.current,
            { autoAlpha: 0, translateY: 50 },
            { duration: 0.9, autoAlpha: 1, translateY: 0, stagger: 0.2 }
        );
    }, []);

    const navigateTo = (link) => {
        if (link === "/instant-tutoring") {
            setOpenInstantTutoringDialog(true); // Open the dialog box instead of navigating
        } else {
            navigate(link);
        }
    };

    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">"Engaged with each other"</h2>
                <div className="flex justify-between items-center flex-wrap">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            ref={(el) => boxesRef.current[index] = el} // Assign the element to the boxesRef array
                            className="flex-1 min-w-[240px] max-w-[22%] m-2 bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                            onClick={() => navigateTo(step.link)}
                        >
                            <img src={step.img} alt={step.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-center">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <InstantTutoringDialog open={openInstantTutoringDialog} onClose={() => setOpenInstantTutoringDialog(false)} />
        </div>
    );
}

export default HowItWorks;
