import React from 'react';
import { FaGoogle, FaFacebookF, FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import books from '../../assets/books.png';
import './SignUpPage.css';
import Profile from '../../assets/profile.png';

function SignUpPage() {
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        navigate('/tutor-registration'); // Navigate to Tutor Registration Form
    };

    return (
        <div className="flex h-screen">
        <div className="w-2/3 bg-cover bg-center rounded-r-xl" style={{ backgroundImage: `url(${books})` }}>
            {/* Background image */}
        </div>
        <div className="flex-1 flex flex-col justify-center items-center p-12 signup-right">
            <div className="flex items-center text-purple-800 text-4xl mb-2">
                <span className="mr-2 logo-image1">TC</span> {/* "TC" text */}
                <span className="logo-image2">TUTORCONNECT.</span> {/* "TUTORCONNECT." text */}
            </div>
            <img src={Profile} alt="User Profile" className="user-profile-pic mb-4" /> {/* User profile image positioned correctly */}
            <h2 className="text-3xl mb-2">LOGIN</h2>
            <h3 className="text-xl mb-10">Welcome</h3>
            <div className="w-full flex flex-col items-center">
            <button onClick={handleGoogleSignIn} className="flex items-center justify-center bg-white border border-gray-300 text-black px-6 py-2 rounded-lg mb-2 w-full shadow-sm">
                        <FaGoogle className="text-red-500 mr-2" />
                        Continue as Abdul Rahim
                    </button>
                    <button className="flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded-lg mb-2 w-full">
                        <FaFacebookF className="mr-2" />
                        Continue With Facebook
                    </button>
                    <button className="flex items-center justify-center bg-gray-300 text-black px-6 py-2 rounded-lg mb-2 w-full">
                        <FaPhone className="mr-2" />
                        Continue With Phone Number
                    </button>
            </div>
            <p className="mt-6">
                Don't you have an account? <span className="text-purple-600 cursor-pointer">Sign up</span>
            </p>
        </div>
    </div>
);
}

export default SignUpPage;