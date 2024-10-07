import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import shopify1 from '../../assets/shopify1.png';
import shopify from '../../assets/shopify.png';
import amazon1 from '../../assets/amazon1.png';
import amazon from '../../assets/amazon.png';
import seo1 from '../../assets/seo1.png';
import seo from '../../assets/seo.jpg';
import web1 from '../../assets/web1.jpg';
import web from '../../assets/web.jpg';
import ads1 from '../../assets/ads1.png';
import ads from '../../assets/ads.jpg';
import figma1 from '../../assets/figma1.png';
import figma from '../../assets/figma.png';

const Card = ({ image1, image2, title, courseId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleWatchOptionsClick = () => {
    navigate(`/course/${courseId}`); // Navigate to the specific course page
  };
  return (
    <div className="relative transition-all duration-300 cursor-pointer overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: isHovered ? '400px' : '150px',
        height: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)' // Drop shadow added here
      }}>

      {/* Image that appears initially and then on hover */}
      <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <img src={image1} alt="Initial View" className="w-full h-full object-cover" />
      </div>

      {/* Detailed view that appears on hover */}
      <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-linear ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <img src={image2} alt="Hover View" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
          <div className="text-white text-xl font-bold">{title}</div>
          <div>
            <button className="bg-white text-black rounded-full px-4 py-2 mr-2">Trailer</button>
            <button className="bg-white text-black rounded-full px-4 py-2" onClick={handleWatchOptionsClick}>Watch Options</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardGrid = () => {
  return (
    <div className="flex justify-center items-center py-10 space-x-6">
      <Card image1={shopify1} image2={shopify} title="Shopify Special Course" courseId="shopify" />
      <Card image1={seo1} image2={seo} title="SEO Special Course" courseId="seo" />
      <Card image1={amazon1} image2={amazon} title="Amazon Special Course" courseId="amazon"/>
      <Card image1={ads1} image2={ads} title="Google Adison Special Course" couseId="ads" />
      <Card image1={web1} image2={web} title="Web Development Special Course" couseId="web"/>
      <Card image1={figma1} image2={figma} title="UI/UX Special Course" courseId="figma"/>
    </div>
  );
};

export default CardGrid;
