import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-container">
            <h1>About V-Help</h1>
            <p>
                <strong>V-Help</strong> is your companion during times of disaster, providing essential support and coordination to those in need. Our platform focuses on several key areas to ensure that help reaches those who need it most.
            </p>
            <h2>Our Mission</h2>
            <p>
                Our mission is to streamline disaster response efforts by connecting volunteers, organizing relief campaigns, and managing essential resources like groceries and donations. We bridge the gap between those who want to help and those who need assistance.
            </p>
            <h2>Key Features</h2>
            <ul>
                <li><strong>Volunteering Needs:</strong> We connect volunteers with opportunities to assist in disaster-stricken areas. Whether it's providing hands-on help or organizing local support, V-Help makes it easier to find and contribute to meaningful efforts.</li>
                <li><strong>Grocery Needs:</strong> During emergencies, access to basic necessities can be a challenge. V-Help communicates with registered users located near the disaster to coordinate the distribution of essential goods.</li>
                <li><strong>Donations:</strong> Our platform enables users to donate directly to relief funds. Every contribution helps bring aid to those affected by disasters.</li>
                <li><strong>Start a Volunteering Campaign:</strong> Empower your community by starting a volunteering campaign. Our platform supports individuals and organizations in launching their own relief efforts.</li>
                <li><strong>Real-Time Location Information:</strong> We use real-time data to provide accurate information about affected areas, ensuring that aid is directed where it's needed most.</li>
                <li><strong>Weather Updates and Precautions:</strong> Stay informed with real-time weather updates and essential precautions to take on any given day, helping to keep you safe during uncertain times.</li>
            </ul>
            <p>
                At V-Help, we believe in the power of community and the importance of timely assistance. Our platform is designed to bring people together, ensuring that no one faces a disaster alone.
            </p>
        </div>
    );
};

export default AboutUs;
