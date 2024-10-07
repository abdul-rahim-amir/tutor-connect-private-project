import React from 'react';
import './TutorDialogue.css'; // Make sure to style it as needed
import Dialogue from '../../assets/dialogue.png'
function TutorDialogue({ onContinue }) {
    return (
        <div className="tutor-dialogue-container">
            <div className="dialogue-content">
                <img src={Dialogue} alt="Inspirational Tutor" className="tutor-image" />
                <div className="dialogue-text">
                    <p>"Ready To Share Your Expertise And Inspire Others? Join Our Team Of Tutors And Start Making A Difference Today! Click Below To Begin Your Tutoring Journey."</p>
                    <button onClick={onContinue} className="continue-button">Continue</button>
                </div>
            </div>
        </div>
    );
}

export default TutorDialogue;
