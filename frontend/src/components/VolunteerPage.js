import React, { useEffect, useState } from 'react';

const VolunteerPage = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/campaigns');
                const data = await response.json();
                setCampaigns(data);
            } catch (error) {
                console.error('Error fetching campaigns:', error);
            }
        };

        fetchCampaigns();
    }, []);

    return (
        <div>
            <h2>Volunteer Campaigns</h2>
            {campaigns.length > 0 ? (
                <ul>
                    {campaigns.map((campaign) => (
                        <li key={campaign._id}>
                            <h3>{campaign.title}</h3>
                            <p>{campaign.description}</p>
                            <p><strong>Created By:</strong> {campaign.createdBy}</p>
                            <p><strong>Date:</strong> {new Date(campaign.date).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No campaigns found.</p>
            )}
        </div>
    );
};

export default VolunteerPage;
