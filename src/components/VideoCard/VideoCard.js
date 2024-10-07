import React, { useState, useRef } from 'react';
import video1 from '../../assets/video-1.mp4'; // Import the first video file
import video2 from '../../assets/video-2.mp4'; // Import the second video file
import video from '../../assets/video.mp4'; // Import the second video file
import playIcon from '../../assets/play.png'; // Import the play icon image

const MyContainerComponent = ({ videoSrc, description }) => {
    const [isPlaying, setIsPlaying] = useState(false); // State to manage play button visibility
    const videoRef = useRef(null); // Reference to the video element

    const handlePlayButtonClick = () => {
        if (isPlaying) {
            videoRef.current.pause(); // Pause the video
        } else {
            videoRef.current.play(); // Play the video
        }
        setIsPlaying(!isPlaying); // Toggle the play button visibility
    };

    const handleVideoClick = () => {
        if (isPlaying) {
            videoRef.current.pause(); // Pause the video
        } else {
            videoRef.current.play(); // Play the video
        }
        setIsPlaying(!isPlaying); // Toggle the play button visibility
    };

    return (
        <div className="w-1/2 mx-auto my-5 p-4 bg-white border border-gray-300 shadow-lg rounded-lg h-auto flex flex-col">
            <div className="relative flex-1"> {/* Video container with relative positioning */}
                <video
                    ref={videoRef}
                    className="w-full cursor-pointer"
                    onClick={handleVideoClick}
                > {/* Make video responsive and clickable */}
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {!isPlaying && (
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        onClick={handlePlayButtonClick}
                    >
                        <img src={playIcon} alt="Play Video" className="h-16 w-16" /> {/* Play icon image */}
                    </div>
                )}
            </div>
            <div className="flex-1 p-4"> {/* Text container */}
                <h2 className="text-lg font-semibold">Exploring Educational Opportunities</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

const VideoCard = () => {
    const [activeContainer, setActiveContainer] = useState(0); // State to track active container

    const containers = [
        {
            videoSrc: video1,
            description: 'Education is the cornerstone of personal and socieal growth. Our video explores the various dimensions of learning, from traditional classroom settings to innovative online platforms, providing students with the tools they need to succeed in a rapidly changing world.'
        },
        {
            videoSrc: video2,
            description: 'This second video dives into advanced learning techniques, empowering educators and students to harness the power of technology in modern education.'
        },
        {
            videoSrc: video,
            description: 'Hello World '
        },
        // Add more containers as needed
    ];

    return (
        <div>
            {/* Render the active container */}
            <MyContainerComponent
                videoSrc={containers[activeContainer].videoSrc}
                description={containers[activeContainer].description}
            />

            {/* Dot Navigation */}
            <div className="flex justify-center mt-5">
                <div className="flex space-x-2">
                    {containers.map((_, index) => (
                        <span
                            key={index}
                            className={`block w-2.5 h-2.5 rounded-full cursor-pointer ${activeContainer === index ? 'bg-black' : 'bg-gray-400'}`}
                            onClick={() => setActiveContainer(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoCard;