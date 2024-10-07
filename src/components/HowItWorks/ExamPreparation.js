import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/face-1.png';
import img2 from '../../assets/face-2.png';
import img3 from '../../assets/face-3.jpg';
import img4 from '../../assets/face-4.jpeg';
import img5 from '../../assets/face-5.jpeg';
import img6 from '../../assets/face-6.jpeg';

function ExamPreparation() {
    const [tutors, setTutors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchExamPreparationTutors();
    }, []);

    // Fetch tutors available for exam preparation
    const fetchExamPreparationTutors = () => {
        const examTutors = [
            {
                id: 1,
                name: 'John Doe',
                subject: 'Mathematics',
                experience: '10 years',
                availability: 'Available Now',
                img: img1,
                fee: 'Rs. 1500'
            },
            {
                id: 2,
                name: 'Jane Smith',
                subject: 'Physics',
                experience: '7 years',
                availability: 'Available Now',
                img: img2,
                fee: 'Rs. 2000'
            },
            {
                id: 3,
                name: 'Emily Johnson',
                subject: 'Chemistry',
                experience: '5 years',
                availability: 'Available Now',
                img: img3,
                fee: 'Rs. 1200'
            },
            {
                id: 4,
                name: 'Robert Brown',
                subject: 'Biology',
                experience: '8 years',
                availability: 'Available Now',
                img: img4,
                fee: 'Rs. 1800'
            },
            {
                id: 5,
                name: 'William Clark',
                subject: 'English Literature',
                experience: '6 years',
                availability: 'Available Now',
                img: img5,
                fee: 'Rs. 1600'
            },
            {
                id: 6,
                name: 'Sophia Miller',
                subject: 'Economics',
                experience: '9 years',
                availability: 'Available Now',
                img: img6,
                fee: 'Rs. 1900'
            }
        ];
        setTutors(examTutors);
    };

    // Navigate to the tutor detail page
    const handleTutorSelect = (tutorId) => {
        navigate(`/tutor/${tutorId}`);
    };

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-purple-800 mt-10">Exam Preparation Tutors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutors.map(tutor => (
                    <div
                        key={tutor.id}
                        className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl cursor-pointer transition-shadow duration-300"
                        onClick={() => handleTutorSelect(tutor.id)}
                    >
                        <div className="flex items-center">
                            <img
                                src={tutor.img}
                                alt={tutor.name}
                                className="w-16 h-16 rounded-full mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">{tutor.name}</h3>
                                <p className="text-gray-500">{tutor.subject}</p>
                                <p className="text-gray-500">{tutor.experience}</p>
                            </div>
                        </div>
                        <div className="mt-4 text-sm">
                            <p><strong>Availability:</strong> {tutor.availability}</p>
                            <p><strong>Fee:</strong> {tutor.fee}</p>
                        </div>
                        <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300">
                            Book Appointment
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExamPreparation;
