import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FaShieldAlt, FaHandsHelping, FaBullhorn, FaDonate, FaAddressBook } from 'react-icons/fa';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li id='sp'><Link to="/safety-precautions"><FaShieldAlt className="icon" /> Safety Precautions</Link></li>
                <li id='vol'><Link to="/volunteer"><FaHandsHelping className="icon" /> Go Volunteer</Link></li>
                <li id='sc'><Link to="/start-campaign"><FaBullhorn className="icon" /> Start a Volunteering Campaign</Link></li>
                <li id='don'><Link to="/donations"><FaDonate className="icon" /> Donations</Link></li>
                <li id='ci'><Link to="/contact-information"><FaAddressBook className="icon" /> Contact Information</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
