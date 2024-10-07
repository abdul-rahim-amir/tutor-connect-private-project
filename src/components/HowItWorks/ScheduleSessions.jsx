// ScheduleSessions.js
import React, { useState, useEffect } from 'react';

function ScheduleSessions() {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        // Mock fetching sessions from an API
        const fetchedSessions = [
            { id: 1, tutor: 'Tutor A', subject: 'Math', time: '10:00 AM - 11:00 AM' },
            { id: 2, tutor: 'Tutor B', subject: 'Physics', time: '11:30 AM - 12:30 PM' },
            { id: 3, tutor: 'Tutor C', subject: 'Chemistry', time: '1:00 PM - 2:00 PM' },
            { id: 4, tutor: 'Tutor D', subject: 'Biology', time: '3:00 PM - 4:00 PM' },
        ];
        setSessions(fetchedSessions);
    }, []);

    return (
        <div className="max-w-4xl mx-auto py-12">
            <h2 className="text-2xl font-bold text-center mb-6 mt-10">Scheduled Sessions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sessions.map(session => (
                    <div key={session.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">{session.subject}</h3>
                        <p className="text-gray-600">Tutor: {session.tutor}</p>
                        <p className="text-gray-600">Time: {session.time}</p>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Join Session</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ScheduleSessions;
