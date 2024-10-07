import React from 'react';

// Sample data for services
const services = [
    {
        id: 1,
        title: "Personalized Tutoring",
        description: "Connect one-on-one with certified tutors tailored to meet your specific educational needs and learning style.",
        icon: "👨‍🏫", // Replace with an appropriate SVG or image icon
        link: "/personalized-tutoring"
    },
    {
        id: 2,
        title: "Flexible Scheduling",
        description: "Book sessions at your convenience, with options for rescheduling and recurring appointments.",
        icon: "⏰", // Replace with an appropriate SVG or image icon
        link: "/scheduling"
    },
    {
        id: 3,
        title: "Affordable Rates",
        description: "Access quality education without breaking the bank. Competitive pricing with transparent fees.",
        icon: "💸", // Replace with an appropriate SVG or image icon
        link: "/pricing"
    },
    {
        id: 4,
        title: "Interactive Learning Tools",
        description: "Utilize cutting-edge learning tools and platforms that make sessions interactive and engaging.",
        icon: "🛠️", // Replace with an appropriate SVG or image icon
        link: "/tools"
    },
    {
        id: 5,
        title: "Community Support",
        description: "Join a thriving community of learners and tutors for additional support, study groups, and educational resources.",
        icon: "👥", // Replace with an appropriate SVG or image icon
        link: "/community"
    }
];

function Services() {
    return (
        <div className="bg-gray-100 mt-6 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-12">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(service => (
                        <div key={service.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                            <div className="text-3xl">{service.icon}</div>
                            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <a href={service.link} className="text-purple-600 hover:text-purple-800 transition duration-300">Learn more</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
