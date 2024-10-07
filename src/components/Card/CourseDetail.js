import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CourseDetail.css'; // Assuming you have a separate CSS file for custom styles
import shopify from '../../assets/shopify.png';
import amazon from '../../assets/amazon.png';
import seo from '../../assets/seo.jpg';
import web from '../../assets/web.jpg';
import figma from '../../assets/figma.png';
import ads from '../../assets/ads.jpg';

const CourseDetail = () => {
    const { courseId } = useParams();

    // Example of how you might fetch course details based on courseId
    const courseDetails = {
        shopify: {
            title: 'Shopify Special Course',
            description: 'Detailed description of the Shopify course...',
            image: shopify,
            lectures: 20,
            instructor: 'John Doe',
            modules: 5
        },
        amazon: {
            title: 'Amazon Special Course',
            description: 'Detailed description of the Amazon course...',
            image: amazon,
            lectures: 25,
            instructor: 'Jane Smith',
            modules: 6
        },
        web: {
            title: 'Web Development Special Course',
            description: 'Detailed description of the Web Development course...',
            image: web,
            lectures: 30,
            instructor: 'Emily Johnson',
            modules: 7
        },
        seo: {
            title: 'SEO Special Course',
            description: 'Detailed description of the SEO course...',
            image: seo,
            lectures: 15,
            instructor: 'Michael Brown',
            modules: 4
        },
        figma: {
            title: 'Figma Special Course',
            description: 'Detailed description of the Figma course...',
            image: figma,
            lectures: 10,
            instructor: 'Sarah Wilson',
            modules: 3
        },
        ads: {
            title: 'Google Ads Special Course',
            description: 'Detailed description of the Google Ads course...',
            image: ads,
            lectures: 18,
            instructor: 'David Lee',
            modules: 5
        }
    };

    const course = courseDetails[courseId];

    if (!course) {
        return <div className="text-center py-12">Course not found</div>;
    }

    return (
        <div className="container mx-auto py-10 px-4 ">
            <div className="course-detail flex flex-col md:flex-row items-start">
                <div className="course-image-container flex-shrink-0 w-full md:w-1/3 mb-6 md:mb-0 mt-10">
                    <img src={course.image} alt={course.title} className="course-image" />
                </div>
                <div className="course-info flex-grow md:ml-6">
                    <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                    <p className="text-lg text-gray-700 mb-8">{course.description}</p>

                    <div className="course-details mb-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="course-detail-item bg-theme-light p-4 rounded-lg">
                                <h3 className="text-xl font-semibold">Lectures</h3>
                                <p>{course.lectures} Lectures</p>
                            </div>
                            <div className="course-detail-item bg-theme-light p-4 rounded-lg">
                                <h3 className="text-xl font-semibold">Instructor</h3>
                                <p>{course.instructor}</p>
                            </div>
                            <div className="course-detail-item bg-theme-light p-4 rounded-lg">
                                <h3 className="text-xl font-semibold">Modules</h3>
                                <p>{course.modules} Modules</p>
                            </div>
                        </div>
                    </div>
                    {/* Buttons in grid form */}
                    <div className="course-buttons grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link to={`/course/${courseId}/overview`} className="course-button bg-primary text-white rounded-lg p-4 text-center">
                            Course Overview
                        </Link>
                        <Link to={`/course/${courseId}/enroll`} className="course-button bg-secondary text-white rounded-lg p-4 text-center">
                            Enroll Now
                        </Link>
                        <Link to={`/course/${courseId}/reviews`} className="course-button bg-accent text-white rounded-lg p-4 text-center">
                            Read Reviews
                        </Link>
                        <Link to={`/course/${courseId}/schedule`} className="course-button bg-primary text-white rounded-lg p-4 text-center">
                            Course Schedule
                        </Link>
                    </div>
                </div>
            </div>
            <div className="other-courses mt-12">
                <h2 className="text-3xl font-semibold mb-6">Other Courses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.keys(courseDetails).map((key) => {
                        if (key !== courseId) {
                            const { title, image } = courseDetails[key];
                            return (
                                <div key={key} className="course-card bg-white shadow-lg rounded-lg overflow-hidden">
                                    <Link to={`/course/${key}`}>
                                        <img src={image} alt={title} className="course-card-image w-full h-32 object-cover" />
                                        <div className="course-card-info p-4">
                                            <h3 className="text-xl font-bold">{title}</h3>
                                            <p className="text-gray-600">Brief description or details...</p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;

