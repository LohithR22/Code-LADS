import React from 'react';
import SignInForm from '../components/SignInForm';
import '../components/SignInForm.css'; // Make sure to create or update the CSS file
import logo from '../Pictures/logo1.png'

const SignInPage = ({ setIsAuthenticated }) => {
    return (
        <div className="auth-container">
            <div className="logo-container">
                <img src={logo} alt="V-Help Logo" className="auth-logo" />
                <h1 className="auth-title">V-Help</h1>
            </div>
            <SignInForm setIsAuthenticated={setIsAuthenticated} />
        </div>
    );
};

export default SignInPage;
