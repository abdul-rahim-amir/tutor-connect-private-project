import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './SelectTutor.css';
import img1 from '../../assets/face-1.png';
import img2 from '../../assets/face-2.png';
import img3 from '../../assets/face-3.jpg';
import img4 from '../../assets/face-4.jpeg';
import img5 from '../../assets/face-5.jpeg';
import img6 from '../../assets/face-6.jpeg';

gsap.registerPlugin(ScrollTrigger);

function SelectTutor() {
    const [tutors, setTutors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchTutors();
    }, []);

    const fetchTutors = async () => {
        const imagesArray = [img1, img2, img3, img4, img5, img6];

        // Custom names for tutors
        const namesArray = ['John Doe', 'Abdul Rahim', 'Neha', 'Sarah', 'Hassan', 'Zain'];

        const fetchedTutors = Array.from({ length: 6 }).map((_, i) => ({
            id: i + 1,
            name: namesArray[i], // Assign specific name from the namesArray
            title: `Specialized in ${["Mathematics", "Physics", "Chemistry", "Biology", "Literature"][i % 5]}`,
            experience: `${7 + i} Years Experience`,
            satisfactionRate: `99% (${700 + i * 50} Satisfied Students)`,
            waitTime: `Under 15 Min Wait Time`,
            consultationFee: `Rs. ${1000 + i * 500}`,
            images: [imagesArray[i % imagesArray.length]] // Unique image per tutor
        }));

        console.log('Fetched Tutors:', fetchedTutors); // Debugging line to check fetched data
        setTutors(fetchedTutors);
    };

    const handleTutorClick = (tutor) => {
        navigate(`/tutor/${tutor.id}`, { state: { tutor } });
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col">
                {tutors.map(tutor => (
                    <div
                        key={tutor.id}
                        className="profile-card bg-white rounded-lg shadow overflow-hidden p-6"
                        onClick={() => handleTutorClick(tutor)}
                    >
                        <div className="flex items-left">
                            <img src={tutor.images[0]} alt={tutor.name} className="profile-image" />
                            <div className="text-section">
                                <h3 className="text-xl font-semibold">{tutor.name}</h3>
                                <p className="text-gray-500">{tutor.title}</p>
                                <p className="text-gray-500">{tutor.experience}</p>
                                <p className="text-gray-500">{tutor.satisfactionRate}</p>
                                <p className="text-gray-500">{tutor.waitTime}</p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-col items-end">
                            <button className="btn-online-demo mb-2">
                                Online Demo
                            </button>
                            <button className="book-btn">
                                One to One
                            </button>
                        </div>
                        <div className="mt-4 bg-blue-100 text-blue-800 rounded-lg text-center">
                            {tutor.consultationFee}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SelectTutor;
