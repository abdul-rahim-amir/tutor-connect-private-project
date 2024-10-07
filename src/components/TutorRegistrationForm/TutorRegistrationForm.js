import React, { useState } from 'react';
import './TutorRegistrationForm.css';

function TutorRegistrationForm() {
    const [step, setStep] = useState(1); // State to track the current step of the form

    // Function to navigate to the next form section
    const nextStep = () => {
        setStep(step + 1); // Increment the step to move to the next section
    };

    // Function to navigate to the previous form section
    const previousStep = () => {
        if (step > 1) {
            setStep(step - 1); // Decrement the step to go back to the previous section
        }
    };

    return (
        <div className="tutor-registration">
            <div className="gradient-section">
                <div className="header-container">
                    <h1 className="tut">Tutorconnect.</h1>
                    <button className="switch-button">
                        <span className="switch-icon">🔄</span>  Switch to Student Mode
                    </button>
                </div>
            </div>
            <div className="form-container">
                {step === 1 && (
                    <>
                        <h2>Personal Information</h2>
                        <form className="registration-form">
                            <div className="input-row">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                            </div>
                            <div className="input-row">
                                <input type="text" placeholder="Select a country" />
                            </div>
                            <div className="input-row">
                                <input type="text" placeholder="City" />
                                <input type="text" placeholder="Address" />
                            </div>
                            <button type="button" className="next-button" onClick={nextStep}>Next</button>
                        </form>
                    </>
                )}
                {step === 2 && (
                    <>
                        <h2>Education (Tutor):</h2>
                        <form className="registration-form">
                            <div className="input-row">
                                <input type="text" placeholder="Find Your School" />
                                <label htmlFor="OR">OR</label>
                                <input type="text" placeholder="Manual Type" />
                            </div>
                            <div className="input-row">
                                <select>
                                    <option value="">Major</option>
                                    {/* Add major options here */}
                                </select>
                            </div>
                            <div className="form-navigation">
                                <button type="button" className="back-button" onClick={previousStep}>Back</button>
                                <button type="button" className="next-button" onClick={nextStep}>Next</button>
                            </div>
                        </form>
                    </>
                )}
                {step === 3 && (
                    <>
                        <h2>Academic Excellence</h2>
                        <form className="registration-form">
                            <div className="question-container">
                                <div className="info-note">
                                    Note: You do not need to have any prior experience as a teacher to work at Studypool. Please be 100% truthful about your past work experience. Misrepresenting your work experience will result in your application being rejected or your account being banned in the future.
                                </div>
                                <div className="radio-buttons">
                                    <div>
                                        <label>Have you ever been a school teacher?</label>
                                        <input type="radio" name="teacher" value="yes" /> Yes
                                        <input type="radio" name="teacher" value="no" /> No
                                    </div>
                                    <div>
                                        <label>Do you have other professional affiliation with an academic institution?</label>
                                        <input type="radio" name="affiliation" value="yes" /> Yes
                                        <input type="radio" name="affiliation" value="no" /> No
                                    </div>
                                </div>
                            </div>
                            <h2>Work Experience</h2>
                            <div className="info-note">
                                Note: If unemployed, please write "unemployed" as your title, n/a for Employer, and the years you have been unemployed.
                            </div>
                            <div className="input-row">
                                <input type="text" placeholder="Job Title" />
                                <input type="text" placeholder="Employer/Company" />
                                <input type="number" placeholder="Years worked from" />
                                <input type="number" placeholder="to" />
                            </div>
                            <div className="form-navigation">
                                <button type="button" className="back-button" onClick={previousStep}>Back</button>
                                <button type="button" className="next-button" onClick={nextStep}>Next</button>
                            </div>
                        </form>
                    </>
                )}
                {step === 4 && (
                    <>
                        <h2>Subject Preference</h2>
                        <form className="registration-form">
                            <div className="info-note">
                                What subjects do you intend to tutor in? (at least one is required.)
                            </div>
                            <div className="subject-checkboxes">
                                <label>
                                    <input type="checkbox" name="subjects" value="Computer Science" />
                                    Computer Science
                                </label>
                                <label>
                                    <input type="checkbox" name="subjects" value="Economics" />
                                    Economics
                                </label>
                                {/* Add more subjects as needed */} <label>
                                    <input type="checkbox" name="subjects" value="Computer Science" />
                                    Computer Science
                                </label>
                                <label>
                                    <input type="checkbox" name="subjects" value="Economics" />
                                    Economics
                                </label>
                                <label>
                                    <input type="checkbox" name="subjects" value="Engineering" />
                                    Engineering
                                </label>
                                <label>
                                    <input type="checkbox" name="subjects" value="Humanities" />
                                    Humanities
                                </label>
                                <label>
                                    <input type="checkbox" name="subjects" value="Law" />
                                    Law
                                </label>
                                <label>
                                    <input type="checkbox" name="subjects" value="Mathematics" />
                                    Mathematics
                                </label>
                                <label>
                                    <input type="checkbox" name="subjects" value="Science" />
                                    Science
                                </label>
                                <label>
                                    <input type="checkbox" name="subjects" value="Foreign Languages" />
                                    Foreign Languages
                                </label>
                                <label>
                                    <input type="checkbox" name="subjects" value="Programming" />
                                    Programming
                                </label>
                            </div>
                            <h2>Preferred Rates</h2>
                            <div className="rate-selector">
                            <div className="info-note">
                            Let users viewing your profile know your preferred rates. (You can change this later at any time)
                            </div>
                                <label>
                                    $<select>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        {/* Add more rates as needed */}
                                    </select>
                                    per hour
                                </label>
                            </div>
                            <div className="form-navigation">
                                <button type="button" className="back-button" onClick={() => setStep(step - 1)}>Back</button>
                                <button type="button" className="next-button" onClick={() => setStep(step + 1)}>Next</button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default TutorRegistrationForm;
