import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { signInWithGooglePopup, createUserDocFromAuth } from '../utilities/firebase.js';

const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic for handling email and password login
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="signup-link">
                    <Link to="/signup">Sign up</Link>
                </div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Your email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Your password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>

                    <button
                        type="button"
                        onClick={logGoogleUser}
                        className="google-button"
                    >
                        Login with Google
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;
