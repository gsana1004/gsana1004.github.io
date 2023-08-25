import React, { useState, useEffect } from 'react';

function CEOPage() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        // Fetch the applications from the backend when the component mounts
        fetch('/api/getApplications')
            .then(response => response.json())
            .then(data => setApplications(data))
            .catch(error => console.error('Error fetching applications:', error));
    }, []);

    return (
        <div>
            <h1></h1>
            <ul>
                {applications.map(application => (
                    <li key={application._id}>
                        <p>Name: {application.name}</p>
                        <p>Email/Number: {application.emailOrNumber}</p>
                        <p>Capability: {application.capability}</p>
                        <p>Resume: <a href={application.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CEOPage;
