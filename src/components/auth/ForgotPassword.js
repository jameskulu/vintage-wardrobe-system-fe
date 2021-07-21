import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './auth.css';

const ForgotPassword = () => {
    const [disable, setDisable] = useState(false);
    const [email, setEmail] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        setDisable(true);

        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}/api/users/forgot-password`,
                {
                    email,
                }
            );
            setEmail('');
            toast.success('Link has been sent to your email.');
        } catch (err) {
            setDisable(false);
            toast.error(`${err.response.data.message}`);
        }
    };

    return (
        <div class="auth-container">
            <form action="" onSubmit={submit}>
                <div class="forget-form-container">
                    <h1>FORGET PASSWORD?</h1>

                    <div class="forget-form">
                        <p id="text-sec">
                            Don’t worry! Resetting your password is easy. Enter
                            your email address that you had provided during
                            register.
                        </p>

                        <input
                            type="text"
                            placeholder="Email"
                            id="forgot-password-email"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            disabled={disable}
                            type="submit"
                            class="forgetbtn"
                        >
                            SEND
                        </button>
                    </div>

                    <p>
                        Remember your password?<Link to="/login">Login</Link>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;
