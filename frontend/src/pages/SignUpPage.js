import React from 'react';
import SignUpForm from '../components/SignUpForm';
import '../components/SignUpPage.css';
import logo from '../Pictures/logo1.png';

const SignUpPage = () => {
    return (
        <div className="auth-container">
            <div className="logo-container">
                <img src={logo} alt="V-Help Logo" className="auth-logo" />
                <h1 className="auth-title">V-Help</h1>
            </div>
            <SignUpForm />
        </div>
    );
};

export default SignUpPage;
