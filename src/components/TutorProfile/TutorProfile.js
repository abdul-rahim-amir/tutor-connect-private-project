// Assuming the component is TutorProfile or similar
function TutorProfile({ tutor }) {
    // Ensure `experience` is an array
    const experienceList = Array.isArray(tutor.experience) ? tutor.experience : [];

    return (
      <div>
        <h1>{tutor.name}</h1>
        <h2>Experience:</h2>
        <ul>
          {experienceList.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>
        {/* Other parts of the TutorProfile component */}
      </div>
    );
  }

  export default TutorProfile;
