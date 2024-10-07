import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header'; // Ensure this path is correct according to your file structure

import backgroundImage from '../../assets/backgroundImg.png';

function MainSection() {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
    color: 'white',

    overflow: 'hidden',
    paddingLeft: '5%'
  };

  return (
    <div className="main-section" style={backgroundStyle}>
      <Header/>
      <div className="main-content flex flex-col justify-start items-start w-4/5 text-white">
        <h1 className="text-6xl mb-1 text-white">TutorConnect.</h1>
        <h2 className="text-4xl mb-3 text-white">BEST TUTORS NEAR YOU</h2>
        <div className="search-container flex w-full">
          <div className="search-bar flex items-center gap-2 w-full">
            <input type="text" placeholder="Enter location"
              className="p-2 flex-grow border-none rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black" style={{ color: 'black' }} />
            <button className="detect-button bg-purple-800 p-2 rounded-r-md">
              Detect
            </button>
            <input type="text" placeholder="Subjects, tutor name"
              className="p-2 flex-grow border-none focus:outline-none focus:ring-2 focus:ring-purple-500 text-black" style={{ color: 'black' }} />
            <button className="search-button bg-purple-900 text-white p-2 rounded-r-md hover:bg-purple-800 transition-all duration-300 transform hover:scale-110">
              Search
            </button>
          </div>
        </div>
        <Link to="/signup" className="bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-700 mt-3">
          Become a Tutor
        </Link>
      </div>
    </div>
  );
}

export default MainSection;
