import React, { useState } from 'react';
import './CampaignForm.css';

const CampaignForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        createdBy: '',
    });

    const { title, description, createdBy } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/campaigns', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error('Error submitting campaign:', error);
        }
    };

    return (
        <div>
            <h2>Create a New Campaign</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={title} onChange={onChange} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={description} onChange={onChange} required />
                </div>
                <div>
                    <label>Created By:</label>
                    <input type="text" name="createdBy" value={createdBy} onChange={onChange} required />
                </div>
                <button type="submit">Submit Campaign</button>
            </form>
        </div>
    );
};

export default CampaignForm;
