import React, { useState } from 'react';
import './DonationsPage.css';

const DonationsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        amount: '',
        cause: '',
        message: '',
    });

    const { name, email, amount, cause, message } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, such as sending the data to a backend server
        console.log('Donation Submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            amount: '',
            cause: '',
            message: '',
        });
    };

    return (
        <div className="donation-container">
            <h1>Support a Cause</h1>
            <p>Your contribution can make a significant difference. Please fill out the form below to donate.</p>
            <form onSubmit={onSubmit} className="donation-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Donation Amount (in Rupees)</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={amount}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cause">Select a Cause</label>
                    <select
                        id="cause"
                        name="cause"
                        value={cause}
                        onChange={onChange}
                        required
                    >
                        <option value="">Select a cause</option>
                        <option value="disaster-relief">Disaster Relief</option>
                        <option value="education-support">Education Support</option>
                        <option value="healthcare-aid">Healthcare Aid</option>
                        <option value="community-development">Community Development</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message (optional)</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="donation-button">Donate Now</button>
            </form>
        </div>
    );
};

export default DonationsPage;
