import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import {
    FaStar, FaGraduationCap, FaBriefcase, FaCalendar, FaVideo,
    FaMapMarkerAlt, FaBook, FaLanguage, FaAward, FaChalkboardTeacher,
    FaBrain
} from 'react-icons/fa';

function TutorDetail() {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate
    const tutor = location.state?.tutor;

    if (!tutor) {
        return <div className="text-center py-12">No tutor data available</div>;
    }

    const {
        name, title, satisfactionRate, images, onlineFee, inPersonFee, subjects,
        teachingStyle, approach, philosophy, resources, languages, education,
        experience, certifications, reviews
    } = tutor;

    const educationList = Array.isArray(education) ? education : [];
    const experienceList = Array.isArray(experience) ? experience : [];
    const subjectsList = Array.isArray(subjects) ? subjects : [];
    const languagesList = Array.isArray(languages) ? languages : [];
    const reviewsList = Array.isArray(reviews) ? reviews : [];
    const certificationsList = Array.isArray(certifications) ? certifications : [];
    const resourcesList = Array.isArray(resources) ? resources : [];

    // Handle navigation to BookSession
    const handleBookSession = () => {
        navigate('/book-session', { state: { tutor } });
    };
    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="max-w-6xl mx-auto relative">
                {/* Container for Left Content and Fixed Right Section */}
                <div className="relative">
                    {/* Left Content */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden my-8 pr-80 relative">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0 px-4 pt-4">
                                <img className="h-32 w-full object-cover rounded-full md:w-32" src={images[0]} alt={name} />
                            </div>
                            <div className="p-8 text-left">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                                <h1 className="block mt-1 text-3xl leading-tight font-bold text-black">{name}</h1>
                                <div className="mt-2 flex items-center">
                                    <FaStar className="text-yellow-400 mr-1" />
                                    <span className="text-gray-600">{satisfactionRate}</span>
                                </div>
                                <p className="mt-2 text-gray-500">{experience?.[0]?.position || 'Experience not available'}</p>
                            </div>
                        </div>

                        {/* Main Content */}
                        {/* <div className="p-8 border-t border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                                        <FaCalendar className="mr-2 text-indigo-500" /> Availability
                                    </h3>
                                    <p className="text-gray-600">Available for online and in-person sessions</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                                        <FaVideo className="mr-2 text-indigo-500" /> Online Rate
                                    </h3>
                                    <p className="text-gray-600">${onlineFee || 'Not available'}/hour</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                                        <FaMapMarkerAlt className="mr-2 text-indigo-500" /> In-person Rate
                                    </h3>
                                    <p className="text-gray-600">${inPersonFee || 'Not available'}/hour</p>
                                </div>
                            </div>
                            <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
                                Book a Session
                            </button>
                        </div> */}

                        {/* Subjects Taught */}
                        <div className="p-8">
                            <h3 className="text-xl font-semibold mb-4 flex items-left">
                                <FaBook className="mr-2 text-indigo-500" /> Subjects Taught
                            </h3>
                            <ul className="space-y-2">
                                {subjectsList.length > 0 ? (
                                    subjectsList.map((subject, index) => (
                                        <li key={index} className="text-gray-600">{subject}</li>
                                    ))
                                ) : (
                                    <li className="text-gray-600 text-left px-8">No subjects listed.</li>
                                )}
                            </ul>
                        </div>

                        {/* Teaching Style and Approach */}
                        <div className="p-8">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <FaChalkboardTeacher className="mr-2 text-indigo-500" /> Teaching Style & Approach
                            </h3>
                            <p className="text-gray-600 text-left px-8"><strong>Style:</strong> {teachingStyle || 'Teaching style not specified.'}</p>
                            <p className="text-gray-600 mt-2 text-left px-8"><strong>Approach:</strong> {approach || 'Approach not specified.'}</p>
                            <p className="text-gray-600 mt-2 text-left px-8"><strong>Philosophy:</strong> {philosophy || 'Philosophy not specified.'}</p>
                        </div>

                        {/* Resources */}
                        <div className="p-8 bg-gray-50">
                            <h3 className="text-xl font-semibold mb-4 flex items-left">
                                <FaBrain className="mr-2 text-indigo-500" /> Resources
                            </h3>
                            <ul className="space-y-2">
                                {resourcesList.length > 0 ? (
                                    resourcesList.map((resource, index) => (
                                        <li key={index} className="text-gray-600">{resource}</li>
                                    ))
                                ) : (
                                    <li className="text-gray-600">No resources listed.</li>
                                )}
                            </ul>
                        </div>

                        {/* Languages */}
                        <div className="p-8">
                            <h3 className="text-xl font-semibold mb-4 flex items-left">
                                <FaLanguage className="mr-2 text-indigo-500" /> Languages
                            </h3>
                            <ul className="space-y-2">
                                {languagesList.length > 0 ? (
                                    languagesList.map((language, index) => (
                                        <li key={index} className="text-gray-600">{language}</li>
                                    ))
                                ) : (
                                    <li className="text-gray-600">No languages listed.</li>
                                )}
                            </ul>
                        </div>

                        {/* Education and Experience */}
                        <div className="p-8 bg-gray-50">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <section>
                                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                                        <FaGraduationCap className="mr-2 text-indigo-500" /> Education
                                    </h3>
                                    <ul className="space-y-2">
                                        {educationList.length > 0 ? (
                                            educationList.map((edu, index) => (
                                                <li key={index} className="text-gray-600">{edu.degree} - {edu.institution}</li>
                                            ))
                                        ) : (
                                            <li className="text-gray-600">No education details available.</li>
                                        )}
                                    </ul>
                                </section>
                                <section>
                                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                                        <FaBriefcase className="mr-2 text-indigo-500" /> Experience
                                    </h3>
                                    <ul className="space-y-2">
                                        {experienceList.length > 0 ? (
                                            experienceList.map((exp, index) => (
                                                <li key={index} className="text-gray-600">{exp.position} at {exp.company}, {exp.duration}</li>
                                            ))
                                        ) : (
                                            <li className="text-gray-600">No experience details available.</li>
                                        )}
                                    </ul>
                                </section>
                            </div>
                        </div>

                        {/* Certifications/Awards */}
                        <div className="p-8">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <FaAward className="mr-2 text-indigo-500" /> Certifications & Awards
                            </h3>
                            <ul className="space-y-2">
                                {certificationsList.length > 0 ? (
                                    certificationsList.map((cert, index) => (
                                        <li key={index} className="text-gray-600">{cert}</li>
                                    ))
                                ) : (
                                    <li className="text-gray-600">No certifications or awards listed.</li>
                                )}
                            </ul>
                        </div>

                        {/* Reviews */}
                        <div className="p-8 bg-gray-50">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <FaStar className="mr-2 text-indigo-500" /> Reviews
                            </h3>
                            {reviewsList.length > 0 ? (
                                reviewsList.map((review, index) => (
                                    <div key={index} className="mb-4 p-4 bg-white shadow rounded">
                                        <p className="text-gray-600">“{review.text}”</p>
                                        <div className="mt-2 flex items-center">
                                            <FaStar className="text-yellow-400 mr-1" />
                                            <span className="text-gray-600">{review.rating}</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-600">No reviews available.</p>
                            )}
                        </div>
                    </div>

                    {/* Fixed Right Section */}
                    <div className="absolute top-4 right-4 w-80 bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="p-8 border-t border-gray-200">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                                        <FaCalendar className="mr-2 text-indigo-500" /> Availability
                                    </h3>
                                    <p className="text-gray-600">Available for online and in-person sessions</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                                        <FaVideo className="mr-2 text-indigo-500" /> Online Rate
                                    </h3>
                                    <p className="text-gray-600">${onlineFee || 'Not available'}/hour</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                                        <FaMapMarkerAlt className="mr-2 text-indigo-500" /> In-person Rate
                                    </h3>
                                    <p className="text-gray-600">${inPersonFee || 'Not available'}/hour</p>
                                </div>
                                <button
                                onClick={handleBookSession}
                                className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
                                Online Session
                            </button>
                                <button
                                onClick={handleBookSession}
                                className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
                                Book a Session
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TutorDetail;
