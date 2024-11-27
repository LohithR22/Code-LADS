import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../services/api';
import './SignInForm.css';

const SignInForm = ({ setIsAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState(''); // State to manage error messages
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser(formData);
            console.log('User logged in:', data);

            // Clear any previous error messages
            setError('');

            // Set authentication state to true
            setIsAuthenticated(true);

            // Redirect to the homepage after successful login
            navigate('/');
        } catch (error) {
            console.error('Error logging in:', error.message);

            // Set the error state to display the error message to the user
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="signin-container">
            <h3>Account already exists?</h3>
            <form className="signin-form" onSubmit={onSubmit}>
                <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required /> <br></br><br></br>
                <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required /><br></br><br></br>
                <button type="submit" className="signin-button">Sign In</button>
            </form>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
            <p className="signup-link">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    );
};

export default SignInForm;
