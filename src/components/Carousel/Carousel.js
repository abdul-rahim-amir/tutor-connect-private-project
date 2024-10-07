import React, { useRef } from 'react';
import Slider from 'react-slick';
import shopify from '../../assets/shopify.png';
import amazon from '../../assets/amazon.png';
import web from '../../assets/web.jpg';
import seo from '../../assets/seo.jpg';
import ads from '../../assets/ads.jpg';
import './Carousel.css'; // Import the custom CSS file

// Custom arrow components
function NextArrow({ onClick }) {
    return <div className="arrow next-arrow backdrop-filter backdrop-blur-md" onClick={onClick} />;
}

function PrevArrow({ onClick }) {
    return <div className="arrow prev-arrow backdrop-filter backdrop-blur-md" onClick={onClick} />;
}

function Carousel() {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '15%',
        adaptiveHeight: true,
        nextArrow: <NextArrow />, // Custom next arrow
        prevArrow: <PrevArrow />, // Custom previous arrow
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '5%',
                },
            },
        ],
    };

    return (
        <Slider ref={sliderRef} {...settings} className="carousel-container">
            {[...Array(5)].map((_, index) => (
                <div key={index} className="p-4 card-container" onClick={() => sliderRef.current.slickGoTo(index)}>
                    <div className="flex h-full">
                        <div className="w-1/2">
                            <img
                                src={
                                    index === 0 ? shopify :
                                    index === 1 ? amazon :
                                    index === 2 ? web :
                                    index === 3 ? seo : ads
                                }
                                alt={
                                    index === 0 ? "Shopify" :
                                    index === 1 ? "Amazon" :
                                    index === 2 ? "Web Development" :
                                    index === 3 ? "SEO Techniques" : "Google AdSense"
                                }
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col justify-center p-6 bg-card-bg text-black rounded-xl shadow-lg">
                            <h2 className="text-lg font-bold">
                                {index === 0 ? "Shopify Special Course" :
                                index === 1 ? "Amazon Selling Mastery" :
                                index === 2 ? "Complete Web Development Course" :
                                index === 3 ? "Advanced SEO Techniques" : "Google AdSense Mastery"}
                            </h2>
                            <p className="mt-2">
                                {index === 0 ? "Offered by expert tutors, this course covers all you need to excel in Shopify." :
                                index === 1 ? "Learn the secrets of successful selling on Amazon, from listing to scaling your business." :
                                index === 2 ? "Become a proficient web developer with in-depth knowledge of HTML, CSS, JavaScript, and modern frameworks." :
                                index === 3 ? "Master the latest SEO strategies to enhance your website's visibility and ranking on search engines." :
                                "Discover how to optimize your website and earn passive income through Google AdSense effectively."}
                            </p>
                            <button className="mt-4 bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
                                {index === 0 ? "Enroll Now" :
                                index === 1 ? "Start Selling" :
                                index === 2 ? "Learn More" :
                                index === 3 ? "Boost Your Rank" : "Start Earning"}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default Carousel;
