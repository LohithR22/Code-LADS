import React from 'react';
import './VolunteerList.css'; // Add this for styling

const VolunteerList = () => {
    const organizations = [
        { name: 'Org XYZ', location: 'Kochi', description: 'Looking for so-and-so volunteers' },
        { name: 'Org PQR', location: 'Kochi', description: 'Looking for so-and-so volunteers' },
        { name: 'Org ABC', location: 'Wayanad', description: 'Looking for so-and-so volunteers' },
    ];

    return (
        <div className="volunteer-list">
            <p>Showing the closest options to you</p>
            {organizations.map((org, index) => (
                <div key={index} className="volunteer-card">
                    <h3>{org.name}</h3>
                    <p>Location: {org.location}</p>
                    <p>{org.description}</p>
                </div>
            ))}
        </div>
    );
};

export default VolunteerList;
