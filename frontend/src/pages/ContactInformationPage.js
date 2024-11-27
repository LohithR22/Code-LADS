import React from 'react';
import logo from '../Pictures/logo1.png'; // Adjust the path if necessary
import './ContactInformationPage.css'; // Ensure you have a CSS file for styling

const ContactInformationPage = () => {
    const developers = [
        { name: 'Aniket Aladamar', email: 'aniketa.btech22@rvu.edu.in' },
        { name: 'Deekshith R Prabhu', email: 'deekshithrp.btech22@rvu.edu.in' },
        { name: 'L Sumedha', email: 'sumedhal.btech22@rvu.edu.in' },
        { name: 'Lohith R Gowda', email: 'lohithrg.btech22@rvu.edu.in' },
    ];

    return (
        <div className="contact-container">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="contact-logo" />
            </div>
            <h1>Contact Information</h1>
            <ul className="contact-list">
                {developers.map((developer, index) => (
                    <li key={index} className="contact-item">
                        <h2>{developer.name}</h2>
                        <p>Email: <a href={`mailto:${developer.email}`}>{developer.email}</a></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactInformationPage;
